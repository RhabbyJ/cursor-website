type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

export function track(event: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  const detail = { event, ...payload, ts: Date.now() };

  window.dispatchEvent(new CustomEvent("operator:analytics", { detail }));

  const dataLayer = (
    window as Window & { dataLayer?: Array<Record<string, unknown>> }
  ).dataLayer;
  if (Array.isArray(dataLayer)) {
    dataLayer.push(detail);
  }
}
