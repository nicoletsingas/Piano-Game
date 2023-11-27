const pianoKeys = document.querySelectorAll('.key');
const mapedKeys = [];
let audio = new Audio('src/audio/a.wav');

const playTune = (key) => {
  audio.src = `src/audio/${key}.wav`;
  audio.play();
  const clickedKey = document.querySelector(`[data-key='${key}']`);
  clickedKey.classList.add('active');
  setTimeout(() => {
    clickedKey.classList.remove('active');
  }, 150);
};

pianoKeys.forEach((key) => {
  key.addEventListener('click', () => playTune(key.dataset.key));
  mapedKeys.push(key.dataset.key);
});

document.addEventListener('keydown', (e) => {
  if(mapedKeys.includes(e.key)){
    playTune(e.key);
  }
});