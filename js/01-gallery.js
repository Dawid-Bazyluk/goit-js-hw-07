import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const makingImage = galleryItems
  .map(
    (image) => `<div class="gallery__item">
  <a class="gallery__link" href=${image.original}>
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source=${image.original}
      alt=${image.description}
    />
  </a>
</div>`
  )
  .join("");
let instance;

gallery.insertAdjacentHTML("afterbegin", makingImage);

function click(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return console.log(`CLICK IMG!!!`);
  }
  instance = basicLightbox.create(`
    <img class="gallery__image" src=${e.target.dataset.source}>`);

  instance.show();
}
const closingLightBox = (e) => {
  if (e.code === "Escape" && instance.visible()) {
    instance.close();
  }
};
gallery.addEventListener("click", click);
gallery.addEventListener("keydown", closingLightBox);
