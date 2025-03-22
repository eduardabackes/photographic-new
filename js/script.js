// Função para carregar as imagens do arquivo JSON
function loadImages() {
    const images = [
        {
          "src": "./assets/photo/italia1.jpg",
          "alt": "Photo 1",
          "caption": "Sunset by the sea, in southern Italy"
        },
        {
          "src": "./assets/photo/italia3.jpg",
          "alt": "Photo 2",
          "caption": "Sunset through my window, in southern Italy"
        },
        {
          "src": "./assets/photo/italia4.jpg",
          "alt": "Photo 3",
          "caption": "Flowers blooming contrasting with the colors of the sunset, in southern Italy"
        },
        {
          "src": "./assets/photo/portugal2.jpg",
          "alt": "Photo 4",
          "caption": "A summer shiny day, in Portugal"
        },
        {
          "src": "./assets/photo/r.jpg",
          "alt": "Photo 5",
          "caption": "Reflection of the sun on the sea, somewhere in southern Brazil"
        },
        {
          "src": "./assets/photo/rs.jpg",
          "alt": "Photo 6",
          "caption": "Inside the forest, in southern Brazil"
        },
        {
          "src": "./assets/photo/spain.jpg",
          "alt": "Photo 7",
          "caption": "The beauty of giant water lily in the middle of nature, in Spain"
        },
        {
          "src": "./assets/photo/spain2.jpg",
          "alt": "Photo 8",
          "caption": "The magical hidden paradise, in Spain"
        },
        {
          "src": "./assets/photo/spain3.jpg",
          "alt": "Photo 9",
          "caption": "The view to the paradisiacal Mediterranean Sea, in Spain"
        }
    ];
    const carouselContainer = document.getElementById('imageCarousel');
    let html = '';
    
    // Iterar sobre as imagens no JSON e gerar o HTML
    images.forEach(image => {
        html += `
            <div class="carousel-slide">
                <img src="${image.src}" alt="${image.alt}" class="carousel-image">
                <p>${image.caption}</p>
            </div>
        `;
    });

    // Inserir as imagens no carrossel
    carouselContainer.innerHTML = html;

    // Inicializar o carrossel
    startCarousel();
}

// Função para controlar o carrossel
let currentSlide = 0;

function startCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    // Mostrar a imagem atual
    function showSlide() {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentSlide ? 'block' : 'none';
        });
    }

    // Função para ir para a próxima imagem
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide();
    }

    // Função para ir para a imagem anterior
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide();
    }

    // Configura os botões de navegação
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Mostrar a primeira imagem
    showSlide();

    // Definir o intervalo de troca automática das imagens (3 segundos)
    setInterval(nextSlide, 3000);
}

// Carregar as imagens ao carregar a página
document.addEventListener('DOMContentLoaded', loadImages);