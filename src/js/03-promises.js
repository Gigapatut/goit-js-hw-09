import Notiflix from 'notiflix';

const form = document.querySelector(".form")

form.addEventListener("submit", handleSubmit); 

const createPromise = (position, delay) => new Promise ((resolve, reject) => {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    
    if (shouldResolve) {
        // Fulfill
        resolve({ position, delay }); 
        
    } else {
        // Reject
        reject({ position, delay });
    }     

  }, delay);        

});       

function handleSubmit(event) {
  event.preventDefault();
  
  let delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);
  
  
  for (let position = 1; position <= amount; position += 1) {
           
    createPromise(position, delay)
      .then(({position, delay}) => {            
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      }) 

      .catch(({position, delay}) => {          
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      })
    delay += step;           
  }   
}


