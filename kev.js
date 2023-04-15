let azn =+prompt('Megleginizi manatla qeyd edin zehmet olmasa; ');

let usd = 1.7;
let ev = 1.8;
let funt = 2.14;
let turk = 0.08;
let rubl = 0.02
let gur = 0.68;
let br = '=';


const kamaz = (a , b) => a * b;
const kama = ( a , b) => a / b ;
const kam = ( a , b) => a ** b ;

document.getElementById('EXE').innerHTML = azn + ' manata neler eliyir. ';

document.getElementById('EX1').innerHTML = azn + ' manatimiz ' + br + kama(azn , usd).toFixed(2) + ' dollar eliyir ';

document.getElementById('EX2').innerHTML = azn + ' manatimiz ' + br + kama(azn , ev).toFixed(2) + ' evro eliyir ';

document.getElementById('EX3').innerHTML = azn + ' manatimiz ' + br + kama(azn , funt).toFixed(2) + ' Funtsteling eliyir ';

document.getElementById('EX4').innerHTML = azn + ' manatimiz ' + br + kama(azn , turk).toFixed(2) + ' Turk parasi eliyir ';

document.getElementById('EX5').innerHTML = azn + ' manatimiz ' + br + kama(azn , rubl).toFixed(2) + ' rubl eliyir ';

document.getElementById('EX6').innerHTML = azn + ' manatimiz ' + br + kama(azn , gur).toFixed(2) + ' gurcu larisi eliyir ';