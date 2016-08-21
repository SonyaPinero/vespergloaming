import KUTE from 'kute.js'

window.onload = () => {
  console.log('hitting app')
  let everyday = document.getElementById('everyday')
  let everydayEl = document.getElementById('everyday').contentDocument.getElementById('everydayCursive');
  let everydayElLine = document.getElementById('everyday').contentDocument.getElementById('everydayCursiveLine');

  everyday.addEventListener("mouseover", 
    console.log('hit')
    let tween = KUTE.to(everdayEl, {path : everydayCursiveLine}).start();

    );

  

}

