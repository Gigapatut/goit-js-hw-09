const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} 

const body = document.querySelector("body");

const startBtn = document.querySelector('button[data-start]');

const stopBtn = document.querySelector('button[data-stop]');

let timerId = null;

stopBtn.disabled = true;

const onClick = () => {

  stopBtn.disabled = false;
  startBtn.disabled = true;

  timerId = setInterval(() => {
    const backgroundColor = getRandomHexColor();    
    body.style.backgroundColor = backgroundColor;
  }, 1000);        
};
  
startBtn.addEventListener("click", onClick);
  
stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

  