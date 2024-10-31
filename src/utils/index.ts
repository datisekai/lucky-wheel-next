export const createElementImage = (url: string) => {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    const image = document.createElement("img");
    image.src = url;
    return image;
  }
  return null; // Return null or handle the server-side case appropriately
};
