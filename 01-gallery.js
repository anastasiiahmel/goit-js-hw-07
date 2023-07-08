import { galleryItems } from "./gallery-items.js";
const newGallery = document.querySelector(".gallery");
newGallery.addEventListener("click", clickElement);

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

function clickElement(evn) {
  evn.preventDefault();
  if (!evn.target.classList.contains("gallery__image")) {
    return;
  }
  openSizeImages(evn, galleryItems);
}
let instance = null;
function openSizeImages(evn, galleryItems) {
  console.dir(evn.target.dataset.source);
  console.log(galleryItems);
  instance = basicLightbox.create(
    `
 <img src = "${evn.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: () => {
        document.addEventListener("keydown", keyEsc);
      },
      onClose: () => {
        document.removeEventListener("keydown", keyEsc);
      },
    }
  );
  instance.show();
}

function keyEsc(evn) {
  if (evn.key !== "Escape") {
    return;
  }
  instance.close();

  console.log(evn.key);
}
