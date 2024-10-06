const scriptURL = 'https://script.google.com/macros/s/AKfycbw4wd7OccjQcu3_6elyqcxp9VJk4324NSJVzfWXvqwoyOlH1Pirk4Ec4Eb7VCR-yl31Ow/exec'
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById('msg');
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML = "Thank You For Subscribing!";
          setTimeout(function(){
            msg.innerHTML = "";
          },5000);
          form.reset();
        })
        .catch(error => console.error('Error!', error.message))
    })