// script.js

const photoContainer = document.getElementById('photo-container');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

const photos = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  // Add more image URLs
];

function switchView(view) {
  if (view === 'grid') {
    photoContainer.classList.remove('slide-view');
    photoContainer.classList.add('grid-view');
  } else if (view === 'slide') {
    photoContainer.classList.remove('grid-view');
    photoContainer.classList.add('slide-view');
  }
}

function openLightbox(index) {
  lightboxImg.src = photos[index];
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

// Dynamically populate the photo container
photos.forEach((photo, index) => {
  const img = document.createElement('img');
  img.src = photo;
  img.alt = `Photo ${index + 1}`;
  img.onclick = () => openLightbox(index);
  photoContainer.appendChild(img);
});
