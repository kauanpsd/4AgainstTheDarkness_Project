import {tables,specialEvent,roolTrapsTable,roolTreasureTable,specialResources,vermsTable} from './eventos.js'


let btn = document.querySelector('#randomText')
let text = document.querySelector('#result')

btn.addEventListener('click', function(){
    
     renderGame()
})


function renderGame(){
    cleanEvents()
    
    let randomNumber = Math.floor( Math.random()*tables.length )

    let result = tables[randomNumber]
    let resultScene = result.scene
    document.querySelector('#result').innerHTML = `<p> ${resultScene} </p>`
    document.querySelector('#randomText').innerHTML = `<button> Next </button>`


    /* Função que passa pelos eventos da objeto principal */
    /* Concatenar com tag <span> pra poder estilizar depois */
        
        
    const {scene, evento} = result
        
    console.log(evento)

    if (evento === "treasureOnly"){
        document.querySelector("#rollResult").innerHTML += roolTreasureTable()
    }

    else if (evento === 'trapAndTreasure'){
        document.querySelector("#rollResult").innerHTML += roolTrapsTable() +`<br/>`
        + roolTreasureTable() 
    }

    else if (evento === 'specialEvent'){
        document.querySelector("#rollResult").innerHTML += specialEvent() 
    }

    else if (evento === 'specialResources'){
        document.querySelector("#rollResult").innerHTML += specialResources()
    }

    else if (evento === 'vermsTable'){
        document.querySelector("#rollResult").innerHTML += vermsTable()
    }

}

function cleanEvents() {
    document.querySelector("#rollResult").innerHTML = `<p><p>`
}





