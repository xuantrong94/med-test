export const removeFirstUrlSlash = (url: string) => {
  if (!url) return "";
  return url.replace(/^\//, "");
};
