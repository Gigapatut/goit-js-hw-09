const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
} 

const body = document.querySelector("body");

const startBtn = document.querySelector('button[data-start]');

const stopBtn = document.querySelector('button[data-stop]');
stopBtn.disabled = true;
const onClick = () => {
    timerId = setInterval(() => {
        const backgroundColor = getRandomHexColor();    
        body.style.backgroundColor = backgroundColor;
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
  };
  
  startBtn.addEventListener("click", onClick);
  
  stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
  });

  