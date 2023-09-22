document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const mensagemEnviada = document.querySelector("#mensagem-enviada");
  const carouselContainer = document.querySelector('.carousel-container');
  const images = [
      "images/SCA - Surf Clube Atlântico (@sc.atlantico) • fotos e vídeos do Instagram_files/image1.jpg",
      "images/SCA - Surf Clube Atlântico (@sc.atlantico) • fotos e vídeos do Instagram_files/image2.jpg",
      "images/SCA - Surf Clube Atlântico (@sc.atlantico) • fotos e vídeos do Instagram_files/image3.jpg",
      // Adicione mais imagens conforme necessário
  ];

  let currentIndex = 0;

  function updateCarousel() {
      const imageUrl = images[currentIndex];
      carouselContainer.style.backgroundImage = `url(${imageUrl})`;
      currentIndex = (currentIndex + 1) % images.length;
  }

  updateCarousel();

  // Alterna as imagens automaticamente a cada 5 segundos
  setInterval(updateCarousel, 5000);

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
