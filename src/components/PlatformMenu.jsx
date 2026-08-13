"use client"

import Link from "next/link"
import { useEffect, useId, useRef, useState } from "react"
import styles from "./PlatformMenu.module.css"

export const PLATFORMS = [
  {
    href: "/shopify-custom-app-development",
    title: "Shopify",
    description: "Custom apps and integrations",
  },
]

const CLOSE_GRACE_MS = 150

export default function PlatformMenu({
  platforms = PLATFORMS,
  label = "Platforms",
  currentPath,
  triggerClassName = "",
  triggerStyle,
  panelClassName = "",
}) {
  const [open, setOpen] = useState(false)
  const [panelPos, setPanelPos] = useState(null)
  const panelId = useId()
  const rootRef = useRef(null)
  const triggerRef = useRef(null)
  const panelRef = useRef(null)
  const closeTimer = useRef(null)

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_GRACE_MS)
  }

  useEffect(() => cancelClose, [])

  // Keep the panel inside the viewport: prefer right-aligned to the trigger,
  // fall back to left-aligned, then to a clamped centered position.
  useEffect(() => {
    if (!open) return undefined

    const updatePosition = () => {
      const triggerEl = triggerRef.current
      const panelEl = panelRef.current
      const rootEl = rootRef.current
      if (!triggerEl || !panelEl || !rootEl) return

      const rect = triggerEl.getBoundingClientRect()
      const rootRect = rootEl.getBoundingClientRect()
      const panelWidth = panelEl.offsetWidth
      const margin = 8
      const viewportWidth = window.innerWidth

      let position
      if (rect.right - margin >= panelWidth) {
        position = { left: "auto", right: 0 }
      } else if (viewportWidth - rect.left - margin >= panelWidth) {
        position = { left: 0, right: "auto" }
      } else {
        // Center within the viewport, clamped by the margins. The panel is
        // positioned against the root, so convert the viewport target to
        // root-relative coordinates.
        const targetLeft = Math.max(
          margin,
          Math.min(rect.left, viewportWidth - panelWidth - margin)
        )
        position = { left: targetLeft - rootRect.left, right: "auto" }
      }

      setPanelPos(position)
    }

    updatePosition()
    window.addEventListener("resize", updatePosition)
    return () => window.removeEventListener("resize", updatePosition)
  }, [open])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  // Close when the user taps/clicks anywhere outside the widget. This keeps
  // touch devices working even where button taps do not move focus.
  useEffect(() => {
    if (!open) return undefined

    const handlePointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    return () => document.removeEventListener("pointerdown", handlePointerDown)
  }, [open])

  function handleBlur(event) {
    if (!rootRef.current?.contains(event.relatedTarget)) {
      setOpen(false)
    }
  }

  return (
    <div
      ref={rootRef}
      className={`${styles.root} ${triggerClassName}`}
      onMouseEnter={() => {
        cancelClose()
        setOpen(true)
      }}
      onMouseLeave={scheduleClose}
      onBlur={handleBlur}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
        className={styles.trigger}
        style={triggerStyle}
        onClick={() => setOpen(true)}
      >
        {label}
        <svg
          className={styles.chevron}
          width="9"
          height="9"
          viewBox="0 0 10 10"
          aria-hidden="true"
        >
          <path
            d="M1.5 3.5 5 7l3.5-3.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </button>

      <div
        ref={panelRef}
        id={panelId}
        className={`${styles.panel} ${panelClassName}`}
        data-open={open}
        style={panelPos}
      >
        {platforms.map((platform) => (
          <Link
            key={platform.href}
            href={platform.href}
            className={styles.item}
            aria-current={currentPath === platform.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            <span className={styles.itemTitle}>{platform.title}</span>
            {platform.description ? (
              <span className={styles.itemDesc}>{platform.description}</span>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  )
}
