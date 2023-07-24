import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputDateTime = document.querySelector('#datetime-picker');

const startBtn = document.querySelector('button[data-start]');

const remSeconds = document.querySelector('span[data-seconds]');

const remMinutes = document.querySelector('span[data-minutes]');

const remHours = document.querySelector('span[data-hours]');

const remDays = document.querySelector('span[data-days]');

let timerId = null;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    
    if(selectedDates[0].getTime() < new Date().getTime()) {
      // alert("Please choose a date in the future");
      Notiflix.Notify.failure('Please choose a date in the future');
    }else{
      startBtn.disabled = false;

      startBtn.addEventListener("click", () => {
        timerId = setInterval(() => {
          const timer = selectedDates[0].getTime() - new Date().getTime();
                              
          const convertMs = (ms) => {
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;
          
            // Remaining days
            const days = Math.floor(ms / day);
            // Remaining hours
            const hours = Math.floor((ms % day) / hour);
            // Remaining minutes
            const minutes = Math.floor(((ms % day) % hour) / minute);
            // Remaining seconds
            const seconds = Math.floor((((ms % day) % hour) % minute) / second);
            
            return { days, hours, minutes, seconds };                       
          };

          convertMs(timer);                  
          remSeconds.textContent = addLeadingZero(convertMs(timer).seconds);
          remMinutes.textContent = addLeadingZero(convertMs(timer).minutes);
          remHours.textContent = addLeadingZero(convertMs(timer).hours);
          remDays.textContent = addLeadingZero(convertMs(timer).days);  
          
          if(timer < 1000) {
            clearInterval(timerId);
            startBtn.disabled = true;
          }; 
        }, 1000);     
                                   
      });
    };         
  },      
}; 
flatpickr(inputDateTime, options);

 function addLeadingZero(value) {
  return String(value).padStart(2, "0")
 };





  