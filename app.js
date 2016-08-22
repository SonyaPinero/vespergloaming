import KUTE from 'kute.js'

window.onload = () => {
  console.log('hitting app')
  let everyday = document.getElementById('everyday')
  let everydayEl = document.getElementById('everyday').contentDocument.getElementById('everydayCursive');
  let everydayElLine = document.getElementById('everyday').contentDocument.getElementById('everydayCursiveLine');
  let tween = KUTE.to(everydayEl, {path : everydayElLine }, {showMorphInfo: true})

  everyday.addEventListener("mouseover", () => {
    tween.start();

  });

  

}

