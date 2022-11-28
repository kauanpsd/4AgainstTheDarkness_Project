let tables = [
    {
         scene : `Tesouro encontrado. Role na Tabela de Tesouros.`,
         evento : "treasureOnly"
    },
    {
         scene : `Tesouro protegido por armadilhas. Role na Tabela de Armadilhas e na de Tesouros.`,
         evento : "trapAndTreasure"
    },
    {
        scene:`Se for um corredor, vazio. Caso contrário, role na tabela de Eventos Especiais.`,
        evento : "specialEvent"
    },

    {
        scene:`Vazio. Role na tabela de Recursos Especiais.`,
        evento : "specialResources"
    },
    {
        scene:`Role na tabela de Vermes.`,
        evento : "vermsTable"
    },
    {
        scene:`Role na tabela de Capangas`,
        evento : "thugsTable"
    },
    {
        scene:`Se for um corredor, vazio. Caso contrário, role na tabela de Capangas.`,
        evento : "thugsTable"
    },
    {
        scene:`Vazio.`,
        evento : " "
    },
    {
        scene:`Se for um corredor, vazio. Caso contrário, role na tabela de Monstros Bizarros.`,
        evento : "bizarreMonsters"
    },
    {
        scene: `Role na tabela de Chefões. Então role um d6. Adicione +1 para cada chefão ou monstro 
                bizarro que você encontrou até agora no jogo. Se o seu total for 6+, ou se a masmorra 
                foi completada, esse é o chefão final.`,
        evento : "bossTable"
    },
    {
        scene: `Vazio se for corredor. Caso contrário, a sala é o lar de um dragão pequeno (veja a 
                tabela de Chefões para regras de dragões). O pequeno dragão conta como um chefão 
                e pode ser o chefão final.`,
        evento : "littleDragon"
    },

    ]
    



function roolTrapsTable(){

    let traps = [
        `Um dardo (nível 2) ataca uma 
        personagem aleatória.`,

        `O gás venenoso (nível 3) ataca 
        todas as personagens.`,

        `Um alçapão (nível 4) se abre sob 
        os pés da personagem que lidera 
        a ordem de marcha.`,

        `Armadilha para ursos (nível 4) 
        atingindo a personagem que 
        lidera a ordem de marcha.`,

        `Lanças saem de uma parede 
        (nível 5) acertando duas 
        personagens aleatórias.`,

        `Um bloco de pedra gigante (nível 
        5) cai sobre a última personagem 
        na ordem da marcha.`,
    ]

      return traps[Math.floor( Math.random()*traps.length )]
      
}
console.log(roolTrapsTable())

    function roolTreasureTable(){
        let treasure = [
            `Nenhum tesouro encontrado`,
            `d6 moedas de ouro`,
            `2d6 moedas de ouro`,
            `Um pergaminho com uma magia aleatória`,
            `Uma gema que vale 2d6 x 5 peças de ouro`,
            `Uma joia que vale 3d6 x 10 peças de ouro`,
            `Um item mágico aleatório da tabela de Tesouros Mágicos abaixo`,
            ]

            return treasure[Math.floor( Math.random()*treasure.length )]
    }

    
    
        
    

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
        document.querySelector("#rollResult").innerHTML += roolTrapsTable() +`<br/>` + roolTreasureTable() 
    }

}

function cleanEvents() {
    document.querySelector("#rollResult").innerHTML = `<p><p>`
}





/*   let randomEventIndex = tables[randomNumber]
        
    if(randomEventIndex.event != 0){

        for(let i=0; i < result.event.length; i++){

            let index = result.event[i]
            let randomNumber = Math.floor( Math.random()*index.length )
            document.querySelector('#result').innerHTML += `<p> </p>`
           
            if (result.event = 'treasureOnly'){
                document.querySelector('#eventResult').innerHTML = roolTreasureTable()
            }

            else if(result.event = 'trapAndTreasure') {
                document.querySelector('#eventResult').innerHTML = roolTrapsTable()
                document.querySelector('#eventResult').innerHTML = roolTreasureTable() 
                
            }

            else{}
        } 
        
  
    }   */
        


/* let localTable = tables[randomNumber]
if(localTable.sceneEvent === true){
    console.log("ITS TRUEEE")
} else {
    document.querySelector('#result').innerHTML = `<p> Próxima masmorra </p>`
} */

/* function renderGame(){
    let randomNumber = Math.floor( Math.random()*11 )
    let result = tables[randomNumber]
    text.innerHTML = `<p>${result}</p>`
} */
