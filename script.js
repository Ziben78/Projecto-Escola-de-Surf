const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const images = document.querySelectorAll('.carousel img');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselContainer.style.transform = `translateX(${offset}%)`;
}

updateCarousel();

// Adicione esta parte apenas se desejar que o carrossel avance automaticamente
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }, 5000);
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const mensagemEnviada = document.querySelector("#mensagem-enviada");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita o envio padrão do formulário
        // Aqui você pode adicionar lógica de envio de formulário, se necessário

        // Exibe a mensagem de sucesso
        mensagemEnviada.textContent = "Mensagem enviada!! Entraremos em contato o mais breve possível. Obrigado!";
        mensagemEnviada.style.display = "block";

        // Limpa o formulário (opcional)
        form.reset();
    });
});

