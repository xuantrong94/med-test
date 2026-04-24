export const scrollToSection = (sectionId: string) => {
  if (globalThis.window === undefined) return;

  if (!sectionId) {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
