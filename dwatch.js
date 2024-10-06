const currentDate = new Date();
  
  const dateElement = document.querySelector('.date p');
  const dayElement = document.querySelector('.day p');
  const timeElement = document.querySelector('.time p');

  dateElement.textContent = currentDate.toLocaleDateString();
  dayElement.textContent = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  timeElement.textContent = currentDate.toLocaleTimeString();

  
  setInterval(() => {
    timeElement.textContent = new Date().toLocaleTimeString();
  }, 1000);

  // wish greeting

  const greetTime = document.getElementById('greeting-time');
  var Time = new Date().getHours();
  if(Time<12){
    greetTime.textContent = 'Good Morning';
  }else if(Time<18){
    greetTime.textContent = 'Good afternoon';
  }else{
    greetTime.textContent = 'Good Evening';
  }
    // wish greeting