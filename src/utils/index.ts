export const createElementImage = (url: string): HTMLImageElement | null => {
  if (typeof window !== 'undefined') {
    const image = new Image();
    image.src = url;
    return image;
  }
  return null;
};