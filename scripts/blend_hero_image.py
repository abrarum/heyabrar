#!/usr/bin/env python3
"""Blend hero-image.webp toward the HeyAbrar brand (wine/cream/gold)
while keeping a Shopify-green accent."""
import numpy as np
from PIL import Image

SRC = "/Users/abraracs/Documents/projects/heyabrar/public/hero-image.webp"
OUT = "/tmp/hero-blend.webp"

WINE = np.array([102, 0, 51], dtype=np.float32)   # #660033
GOLD = np.array([239, 191, 4], dtype=np.float32)  # #EFBF04
CREAM = np.array([250, 247, 242], dtype=np.float32)  # #FAF7F2

SAT_KEEP = 0.72      # how much green saturation to keep (Shopify nod)
SAGE_HUE = 100.0     # target hue for greens -> soft sage
WINE_ALPHA = 0.20    # wine gradient strength (bottom-left)
GOLD_ALPHA = 0.12    # gold gradient strength (top-right)
CREAM_BLEND = 0.04   # cream unifying veil

im = Image.open(SRC).convert("RGB")
arr = np.asarray(im, dtype=np.float32) / 255.0
H, W, _ = arr.shape

r, g, b = arr[..., 0], arr[..., 1], arr[..., 2]
mx = arr.max(axis=2)
mn = arr.min(axis=2)
d = mx - mn

# --- RGB -> HSV ---
hue = np.zeros_like(mx)
mask = d > 1e-6
hue[mask] = np.where(
    mx[mask] == r[mask],
    (60 * ((g[mask] - b[mask]) / d[mask])) % 360,
    np.where(
        mx[mask] == g[mask],
        60 * ((b[mask] - r[mask]) / d[mask]) + 120,
        60 * ((r[mask] - g[mask]) / d[mask]) + 240,
    ),
)
sat = np.where(mx > 1e-6, d / np.maximum(mx, 1e-6), 0.0)
val = mx

# --- Grade greens toward a warm sage, keep them softly green ---
green = (hue >= 50) & (hue <= 185) & (sat > 0.05)
new_hue = np.where(hue < SAGE_HUE, hue + (SAGE_HUE - hue) * 0.25, hue - (hue - SAGE_HUE) * 0.45)
hue = np.where(green, new_hue, hue)
sat = np.where(green, sat * SAT_KEEP, sat)
val = np.where(green, val + (1 - val) * 0.08, val)

# --- HSV -> RGB ---
def hsv2rgb(h, s, v):
    c = v * s
    hp = h / 60.0
    x = c * (1 - np.abs(hp % 2 - 1))
    m = v - c
    n = np.zeros_like(h)
    r_ = np.select([hp < 1, hp < 2, hp < 3, hp < 4, hp < 5, hp < 6], [c, x, n, n, x, c])
    g_ = np.select([hp < 1, hp < 2, hp < 3, hp < 4, hp < 5, hp < 6], [x, c, c, x, n, n])
    b_ = np.select([hp < 1, hp < 2, hp < 3, hp < 4, hp < 5, hp < 6], [n, n, n, c, c, x])
    return np.stack([r_, g_, b_], axis=-1) + m[..., None]

arr = hsv2rgb(hue, sat, val)

# --- Warm grade (toward cream) ---
arr = np.stack(
    [arr[..., 0] * 1.04, arr[..., 1] * 0.985, arr[..., 2] * 0.96], axis=-1
)

# --- Brand gradient overlays ---
yy, xx = np.meshgrid(np.linspace(0, 1, H), np.linspace(0, 1, W), indexing="ij")
wine_alpha = (yy * (1 - xx)) * WINE_ALPHA   # wine: bottom-left
gold_alpha = ((1 - yy) * xx) * GOLD_ALPHA   # gold: top-right
arr = arr * (1 - wine_alpha[..., None]) + (WINE / 255.0) * wine_alpha[..., None]
arr = arr * (1 - gold_alpha[..., None]) + (GOLD / 255.0) * gold_alpha[..., None]

# --- Cream unifying veil ---
arr = arr * (1 - CREAM_BLEND) + (CREAM / 255.0) * CREAM_BLEND

out = np.clip(arr, 0, 1) * 255
result = Image.fromarray(out.astype(np.uint8), "RGB")
result.save(OUT, "WEBP", quality=90, method=6)
print("saved", OUT, result.size)
