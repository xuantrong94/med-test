const base = "/partner-domain";

export const partnerDomainEndpoints = {
  getByDomain: (domain: string) => `${base}/get-by-domain?domain=${domain}`,
} as const;
