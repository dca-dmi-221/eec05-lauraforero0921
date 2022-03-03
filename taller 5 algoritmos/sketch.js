function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

//1

function  Cortapalabras (palabra) {
    const palabraLength = palabra.length;
    const indexx = [];
    for (let i = 0; i < palabraLength; i++)
        let esIndex = true;
        
    while (esIndex){
            let random = Math.random()*(wordLength - 1);
            let randomIndex = Math.round(random);

            if(indexx.includes(randomIndex)){
                random = Math.random() * (palabraLength-1);
                randomIndex = Math.round(random);
            } else {
                indexx.push(randomIndex)
                esIndex = false;
            }
        }
        //console.log(indexx)
        console.log(palabra[indexx [i] ])
        }
        Cortapalabras("semidoctorado");
