export const CAL_EMBED_BOOTSTRAP = String.raw`
(() => {
  const bookingUrl = "https://cal.com/aifantry/20min";
  const calLink = "aifantry/20min";
  let initialized = false;

  function track(action, placement) {
    const detail = { event: "shopify_cal_" + action, placement };
    window.dataLayer?.push(detail);
    window.dispatchEvent(new CustomEvent("shopify-booking-event", { detail }));
  }

  function loadCal() {
    if (initialized) return window.Cal.ns.shopify;
    initialized = true;

    (function(C, A, L) {
      const push = (queue, args) => queue.q.push(args);
      const document = C.document;
      C.Cal = C.Cal || function() {
        const cal = C.Cal;
        const args = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const script = document.createElement("script");
          script.src = A;
          document.head.appendChild(script);
          cal.loaded = true;
        }
        if (args[0] === L) {
          const api = function() { push(api, arguments); };
          const namespace = args[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            push(cal.ns[namespace], args);
            push(cal, ["initNamespace", namespace]);
          } else {
            push(cal, args);
          }
          return;
        }
        push(cal, args);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "shopify", { origin: "https://cal.com" });
    const cal = window.Cal.ns.shopify;
    cal("ui", {
      theme: "light",
      hideEventTypeDetails: false,
      layout: "month_view",
      cssVarsPerTheme: {
        light: { "cal-brand": "#660033" },
        dark: { "cal-brand": "#efbf04" }
      }
    });

    ["bookerViewed", "bookerReady", "linkFailed", "bookingSuccessfulV2"].forEach((action) => {
      cal("on", {
        action,
        callback: () => {
          track(action, "embed");
          if (action === "bookerViewed") {
            window.clearTimeout(window.__shopifyCalFallbackTimer);
          }
          if (action === "linkFailed") {
            window.location.assign(window.__shopifyCalFallbackUrl || bookingUrl);
          }
        }
      });
    });

    const embedScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
    embedScript?.addEventListener("load", () => {
      window.__shopifyCalScriptReady = true;
    }, { once: true });
    embedScript?.addEventListener("error", () => {
      if (window.__shopifyCalFallbackUrl) {
        window.location.assign(window.__shopifyCalFallbackUrl);
      }
    }, { once: true });

    cal("preload", { calLink });
    return cal;
  }

  function findBookingLink(target) {
    return target instanceof Element ? target.closest("[data-cal-link]") : null;
  }

  document.addEventListener("pointerover", (event) => {
    if (findBookingLink(event.target)) loadCal();
  }, { passive: true });

  document.addEventListener("focusin", (event) => {
    if (findBookingLink(event.target)) loadCal();
  });

  document.addEventListener("click", (event) => {
    const link = findBookingLink(event.target);
    if (!link) return;

    let config = {};
    try {
      config = JSON.parse(link.dataset.calConfig || "{}");
    } catch {}

    track("ctaClicked", config.utm_content || "unknown");
    if (window.__shopifyCalScriptReady) return;

    event.preventDefault();
    window.__shopifyCalFallbackUrl = link.href;
    const cal = loadCal();
    cal("modal", { calLink, config });
    window.clearTimeout(window.__shopifyCalFallbackTimer);
    window.__shopifyCalFallbackTimer = window.setTimeout(() => {
      window.location.assign(link.href);
    }, 8000);
  }, true);

  window.addEventListener("load", () => {
    window.setTimeout(loadCal, 12000);
  }, { once: true });
})();
`
