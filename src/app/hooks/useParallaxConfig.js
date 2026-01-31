export function useParallaxConfig() {
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  const footerHeight = 800;
  const contentHeight = 2000;
  const heightDocument = windowHeight + contentHeight + footerHeight - 20;

  return {
    windowHeight,
    footerHeight,
    contentHeight,
    heightDocument,
  };
}
