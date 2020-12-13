    var text = ['"I love Home Brew and their coffee!"', '"The absolute best coffee."', '"My life has changed after Home Brew."'];
  var counter = 0;
  var elem = document.getElementById("reviewText");
  var inst = setInterval(change, 3000);
  
  function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
      counter = 0;
    }
  }