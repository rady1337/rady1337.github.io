const text = [
  'GitHub Page'
];

 let line = 0;
  let count = 0;
  let result = '';
  function typeLine1() {
    let interval = setTimeout(
      () => {
        result += text[line][count]
        document.querySelector('.github').innerHTML =result +'|';


      count++;
      if (count >= text[line].length) {
        count = 0;
        line++;
        if (line == text.length) {
          clearTimeout(interval);
           document.querySelector('.github').innerHTML =result;
          return true;
        }
      }
      typeLine1();
    }, getRandomInt1(getRandomInt(250*2.5)))
  }
  typeLine1();

function getRandomInt1(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

