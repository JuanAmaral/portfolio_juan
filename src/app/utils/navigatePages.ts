export function goPage(page: number) {
    const documentContainer = document.getElementById("container");
    if (documentContainer) {
      const scrollOffset = (page - 2) * 100;
      documentContainer.scrollBy({ left: scrollOffset });
    }
  }