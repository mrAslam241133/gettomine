const revealButton = document.getElementById('revealQuestion');
const proposalSection = document.querySelector('.proposal');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const responseMessage = document.getElementById('responseMessage');

revealButton.addEventListener('click', () => {
  proposalSection.classList.remove('hidden');
  revealButton.style.display = 'none';
});

yesButton.addEventListener('click', () => {
  responseMessage.textContent = "Yay! You've made me the happiest person alive! 💕";
  responseMessage.classList.remove('hidden');
});

noButton.addEventListener('mouseover', () => {
  // Move the "No" button to a random position
  const container = proposalSection.getBoundingClientRect();
  const maxX = container.width - noButton.offsetWidth;
  const maxY = container.height - noButton.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

noButton.addEventListener('click', () => {
  responseMessage.textContent = "Nope, you can't say no! 😂";
  responseMessage.classList.remove('hidden');
});
