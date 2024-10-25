export const createElementImage = (url: string) => {
  const image = document.createElement("img");
  image.src = url;

  return image;
};
