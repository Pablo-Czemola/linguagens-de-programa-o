// Menu Burger
const burgerMenu = document.getElementById('burgerMenu');
const menu = document.getElementById('menu');

burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Mostrar/Ocultar conteúdo com 'Ver Mais' (Frontend)
const toggleFrontend = document.getElementById('toggleFrontend');
const frontendContent = document.getElementById('frontendContent');

toggleFrontend.addEventListener('click', () => {
  if (frontendContent.style.display === 'none') {
      frontendContent.style.display = 'block';
      toggleFrontend.textContent = 'Ver Menos';
  } else {
      frontendContent.style.display = 'none';
      toggleFrontend.textContent = 'Ver Mais';
  }
});

// Mostrar/Ocultar conteúdo com 'Ver Mais' (Backend)
const toggleBackend = document.getElementById('toggleBackend');
const backendContent = document.getElementById('backendContent');

toggleBackend.addEventListener('click', () => {
  if (backendContent.style.display === 'none') {
      backendContent.style.display = 'block';
      toggleBackend.textContent = 'Ver Menos';
  } else {
      backendContent.style.display = 'none';
      toggleBackend.textContent = 'Ver Mais';
  }
});

// Vincular evento ao botão de iniciar quiz
const startQuizBtn = document.getElementById('startQuizBtn');
startQuizBtn.addEventListener('click', startQuiz);

// Função de quiz usando popups
function startQuiz() {
  let score = 0;

  const question1 = confirm("Frontend lida com a interface visual de um site? OK para Verdadeiro, Cancelar para Falso");
  if (question1 === true) {
      score++;
  }

  const question2 = confirm("Node.js é usado apenas no frontend? OK para Verdadeiro, Cancelar para Falso");
  if (question2 === false) {
      score++;
  }

  const question3 = confirm("Django é um framework utilizado em Java? OK para Verdadeiro, Cancelar para Falso");
  if (question3 === false) {
      score++;
  }

  alert("Você acertou " + score + " de 3 perguntas.");
}
