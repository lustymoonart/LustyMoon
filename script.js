// Conteúdo inicial da galeria (simulação)
// Depois você pode puxar de um servidor/API/Firebase
const uploads = [
  { type: 'image', src: 'uploads/img1.jpg' },
  { type: 'video', src: 'uploads/video1.mp4' },
  { type: 'image', src: 'uploads/img2.jpg' },
  { type: 'video', src: 'uploads/video2.mp4' },
  { type: 'image', src: 'uploads/img3.jpg' },
];

const gallery = document.getElementById('gallery');

// Função para criar elementos dinamicamente
function renderUploads() {
  uploads.forEach(item => {
    if (item.type === 'image') {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = 'Upload';
      gallery.appendChild(img);
    } else if (item.type === 'video') {
      const video = document.createElement('video');
      video.src = item.src;
      video.controls = true;
      video.loop = true;
      gallery.appendChild(video);
    }
  });
}

// Chamar a função ao carregar a página
document.addEventListener('DOMContentLoaded', renderUploads);

// Animação de clique nos links sociais
const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    link.classList.add('clicked');
    setTimeout(() => {
      link.classList.remove('clicked');
    }, 300);
  });
});
