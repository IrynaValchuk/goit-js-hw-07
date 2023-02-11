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

  if (e.target.nodeName !== 'IMG') return;

  const instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`, {
    onShow: () => window.addEventListener('keydown', onEscKeyDown),
    onClose: () => window.removeEventListener('keydown', onEscKeyDown),
  });

  const onEscKeyDown = e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  };

  instance.show();
};

galleryList.addEventListener('click', onImageChangeSizeClick);
