window.onload = function() {
  var isPrint = false;
  var tween;
  var cArray = ['#CC', '#CO', '#CN', '#CT', '#CA', '#CC1', '#CT1'];
  var pArray = ['#PC', '#PO', '#PN', '#PT', '#PA', '#PC1', '#PT1'];

  $( "#contact-cursive" ).hover(
  function() {
    toPrint();

    if (!isPrint){
      toPrint();
    } else {
      toCursive();
    }

  }, function() {
    //nothing
  }
);

function toPrint(){
  isPrint = true;
    for(var i = 0; i < cArray.length; i++){
      tween = KUTE.to(cArray[i], { path: pArray[i]}).start();
    }
};

function toCursive(){
  isPrint = false;
    for(var i = 0; i < cArray.length; i++){
      tween = KUTE.to(pArray[i], { path: cArray[i]}).start();
    }
  };
  
   
};


