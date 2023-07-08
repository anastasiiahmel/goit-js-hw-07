import { galleryItems } from "./gallery-items.js";
const newGallery = document.querySelector(".gallery");
function newArrayImages(galleryItems) {
  return galleryItems
    .map((item) => {
      return `<li class="gallery__item">
        <a class "gallery__link" href = "${item.original}">
     <img
            class="gallery__image"
            src= "${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
    </a>
    </li>`;
    })
    .join("");
}
const elem = newArrayImages(galleryItems);
newGallery.insertAdjacentHTML("beforeend", elem);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: `alt`,
  captionDelay: 250,
});
