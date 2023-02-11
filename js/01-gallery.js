import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const createImagesGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}" 
            data-source="${original}" 
            alt="${description}" 
          />
        </a>
      </div>`
  )
  .join('');

galleryList.insertAdjacentHTML('afterbegin', createImagesGallery);

const onImageChangeSizeClick = e => {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  } else {
    console.log(e.target.dataset.source);
  }
};

galleryList.addEventListener('click', onImageChangeSizeClick);
