// var

var altura1 = 5;
var comprimento1 = 7;

area1 = altura1 * comprimento1;

console.log(area1) // 35
var area1;

let forma = 'triangulo';
let altura2 = 5;
let comprimento2 = 7;
let area2

if(forma == 'retangulo'){
    area2 = altura2 * comprimento2
} else if(forma == 'triangulo') {
    area2 = (altura2 * comprimento2) / 2
}

console.log(area2) // 17.5

const forma2 = 'quadrado';
const altura3 = 5;
const comprimento3 = 7;
//const area3
let area3;

if(forma2 === 'quadrado'){
    area3 = altura3 * comprimento3
} else {
    area3 = (altura3 * comprimento3) / 2
}

console.log(area3) // 35

// A princípio, a declaração var não é utilizada por ser muito propensa a bugs(já que tem escopo global). O mais correto a se utilizar é const para valores constantes (cujo valor não será alterado durante a execução do código) e let para as demais variáveis(lembrando que há diferenciação de escopo para variáveis let).
