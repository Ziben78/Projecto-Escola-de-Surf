// script.js

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
    const imageUrl = images[currentIndex];
    carouselContainer.style.backgroundImage = `url(${imageUrl})`;
  }

  updateCarousel();

  // Adicione esta parte para transição automática das imagens a cada 5 segundos
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }, 5000);

  const form = document.querySelector("form");
  const mensagemEnviada = document.querySelector("#mensagem-enviada");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o envio padrão do formulário
    // Aqui você pode adicionar lógica de envio de formulário, se necessário

    // Exibe a mensagem de sucesso
    mensagemEnviada.textContent =
      "Mensagem enviada!! Entraremos em contato o mais breve possível. Obrigado!";
    mensagemEnviada.style.display = "block";

    // Limpa o formulário (opcional)
    form.reset();
  });
