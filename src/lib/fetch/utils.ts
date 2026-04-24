export const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const isServer = typeof globalThis === "undefined";

export function createAbortSignal(timeout: number): AbortSignal {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), timeout);
  return controller.signal;
}

export async function parseResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("content-type");

  if (contentType?.includes("application/json")) {
    return response.json();
  }

  if (contentType?.includes("text/")) {
    return response.text() as Promise<T>;
  }

  return response.blob() as Promise<T>;
}
