
let mojosEaten = 0;

let initMojos = 10;
let mukti = 0;
const MuktiToMojoConversion = 3



function yieldMukti() {
    while (initMojos > 0) {
        mukti++;
        initMojos--;
        mojosEaten++
    }
}


function MineCount() {

    do {
        yieldMukti()
        if (mukti / MuktiToMojoConversion > 0) // multiple of 3
        {
            initMojos = parseInt(mukti / MuktiToMojoConversion) // 3
            mukti = mukti % MuktiToMojoConversion  //1
            yieldMukti()
        }

    }
    while (parseInt(mukti / MuktiToMojoConversion) > 0)

}

MineCount()
console.log("mojosEaten", mojosEaten)





