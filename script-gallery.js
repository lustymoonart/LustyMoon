document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.getElementById('gallery');

  // Lista de arquivos (imagens e vídeos)
  const mediaFiles = [
    { type: 'image', src: 'Arquivos/Images/gallery/image1.jpg', alt: 'Artwork 1' },
    { type: 'image', src: 'Arquivos/Images/gallery/image2.jpg', alt: 'Artwork 2' },
    { type: 'image', src: 'Arquivos/Images/gallery/image3.jpg', alt: 'Artwork 3' },
    { type: 'video', src: 'Arquivos/Images/gallery/video1.mp4' },
    { type: 'video', src: 'Arquivos/Images/gallery/video2.mp4' }
  ];

  mediaFiles.forEach(file => {
    if (file.type === 'image') {
      const img = document.createElement('img');
      img.src = file.src;
      img.alt = file.alt || 'Gallery Image';
      img.className = 'gallery-img';
      gallery.appendChild(img);
    } else if (file.type === 'video') {
      const video = document.createElement('video');
      video.src = file.src;
      video.controls = true;
      video.className = 'gallery-video';
      video.style.width = "100%"; // Deixa os vídeos responsivos
      gallery.appendChild(video);
    }
  });
});

