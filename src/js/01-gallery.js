import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';


console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const addGalleryHtml = createGalleryHtml(galleryItems);

function createGalleryHtml(items) {
  return items
    .map(
      item =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
          />
        </a>
      </li>`
    )
    .join('');
}

galleryRef.innerHTML = addGalleryHtml;

const galleryOn = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
  overlayOpacity: 0.3,
});

galleryOn.on('show.simplelightbox', function (e) {
  `<img src = "${e.target.dataset.source}" width = "800" height = "600">`;
});
