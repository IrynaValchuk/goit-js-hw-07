import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const createImagesGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li><a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}" 
          />
        </a>
      </li>`
  )
  .join('');

galleryList.insertAdjacentHTML('afterbegin', createImagesGallery);

const lightbox = new SimpleLightbox('.gallery .gallery__item', {});
