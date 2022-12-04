export{tables,specialEvent,roolTrapsTable,roolTreasureTable,specialResources,vermsTable}



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
        evento : "empty"
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
    
    
    function specialEvent(){
       let specialEvent = [
        ` Um Fantasma passa pelo grupo. Todas as personagems devem passar numa 
        rolagem contra medo nível 4 ou perder 1 de vida. Um clérigo adiciona seu nível 
        a essa rolagem.`,

        `Monstros Errantes atacam o grupo. Role um d6: 1-3 uma rolagem na tabela de 
        vermes, 4 rolagem na tabela de capangas, 5 rolagem na tabela de monstros bizarros,
        6 rolagem na tabela de chefões. Role novamente todos os dragões pequenos. 
        Um monstro chefão que é encontrado como um monstro errante não tem chance 
        de ser o chefão final`,

        `Uma mulher de branco aparece e pede para o grupo completar uma missão. Se 
        você aceitar, faça uma rolagem na Tabela de Missão. Se você recusar, ela
        desaparece. Ignore qualquer outra aparição da Mulher de Branco no jogo`,
        
        `Armadilha! Faça uma rolagem na tabela de armadilhas.`,

        `Você encontra um curandeiro nômade. Ele vai curar o seu grupo por 10 peças 
        de ouro por ponto de vida curado. Você pode curar quantos pontos de vida você 
        puder pagar. Você só pode encontrar o curandeiro uma vez por jogo. Se você 
        encontrá-lo de novo, role novamente o resultado.`,

        `Você encontra um alquimista nômade. Ele lhe venderá até uma poção de cura 
        por membro do grupo (50 peças de ouro cada) ou uma única dose de veneno 
        para lâmina (30 peças de ouro). A poção de cura irá curar todos os pontos vitais 
        perdidos de um único personagem e pode ser engolida a qualquer momento 
        durante o jogo como uma ação livre. O veneno da lâmina permite envenenar 
        uma única flecha ou arma cortante (não uma arma esmagadora). Essa arma terá 
        +1 no Ataque contra o primeiro inimigo que você lutar. O veneno não funciona 
        em monstros mortos-vivos, demônios, gosmas, autômatos ou estátuas vivas. 
        Você pode encontrar um alquimista nômade apenas uma vez por jogo. Se você 
        encontrá-lo novamente, trate este resultado como uma armadilha e role na
        Tabela de Armadilhas`
       ]

       return specialEvent[Math.floor( Math.random()*specialEvent.length )]
    }


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

    function specialResources(){
        let specialResources = [
            `Fonte: Todos os personagens feridos recuperam 1 de Vida na primeira vez que 
            encontrarem a fonte em uma aventura. Outras fontes não têm efeito.`,

            `Templo Sagrado: Uma personagem de sua escolha ganha +1 de Ataque contra 
            monstros mortos-vivos ou demônios. Assim que mata um morto-vivo ou um demônio, o bônus desaparece.`,

            `Arsenal: Personagens podem mudar suas armas se quiserem, no limite das armas 
            permitidas para o seu tipo de personagem. Por exemplo, um guerreiro que estava 
            usando uma arma e um escudo pode descartar seu escudo e pegar a espada de 
            duas mãos, ou trocar sua espada por uma maça.`,

            ` Altar Amaldiçoado: Quando você entrar na sala, um brilho misterioso emana do 
            altar sinistro. Uma personagem aleatória é amaldiçoada e agora tem -1 nas suas rolagens de Defesa. Para quebrar a maldição, a personagem deve derrotar o monstro 
            chefão sozinho, ou entrar no Templo Sagrado (ver 2, acima), ou ter uma magia de 
            Benção usada nela por um clérigo.`,

            `Estátua: você pode deixar a estátua sozinha ou tocá-la. Se você tocá-la, role um d6. 
            De 1-3, a estátua acorda e ataca o grupo (chefão de nível 4 com 6 pontos de vida, 
            imune a todas às magias; se você derrotá-la, você encontra 3d6 x 10 peças de ouro 
            dentro). De 4-6, a estátua quebra e você encontra 3d6 x 10 peças de ouro dentro.`,

            `Sala de Enigma: a sala contém uma caixa de quebra-cabeça. O nível é um d6. 
            Você pode não mexer nela ou tentar resolvê-la. Para cada tentativa falha, a personagem tentando resolver perde 1 de vida. Magos e ladinas adicionam seu nível 
            na rolagem para resolver enigmas. Se o enigma for resolvido, a caixa abre: Faça 
            uma rolagem de Tesouro para determinar o conteúdo.`,
            ]

            return specialResources[Math.floor( Math.random()*specialResources.length )]
    }


    

    function vermsTable(){
        let vermsTable = [
            `3d6 Ratos. Nível 1, sem tesouro. Qualquer personagem ferida tem 1 chance em 
            6 de perder 1 ponto de vida adicional devido a um ferimento infectado. 
            Reações (d6): 1-3 fugir, 4-6 lutar`,

            `3d6 Morcegos Vampiros. Nível 1, sem tesouro. Magias são lançadas com -1 
            por conta da distração causada por seus gritos. Apesar do nome Vampiro, essas NÃO são criaturas
            mortas-vivas. 
            Reações (d6): 1-3 fugir, 4-6 lutar`,

            ` 2d6 Grupo de Goblins. Nível 3, tesouro -1, vontade -1. Anões os atacam com +1 
            Reações (d6): 1 fugir, 2-3 fugir se estiverem em menor número, 4 suborno (5 po 
            x goblin), 5-6 lutar.`,

            `d6 Centopeias Gigantes. Nível 3, sem tesouro. Qualquer personagem ferida por uma 
            centopeia gigante deve passar num teste contra veneno de nível 2 ou perde 1 de vida 
            adicional. 
            Reações (d6): 1 fugir, 2-3 fugir se estiver em menor número, 4-6 lutar.`,


            `d6 Sapos Vampiros. Nível 4, tesouro -1. Apesar do nome Vampiro, essas NÃO 
            são criaturas mortas-vivas. 
            Reações (d6): 1 fugir, 2-4 lutar, 5-6 lutar até a morte`,

            `2d6 Ratos Esqueléticos. Nível 3, morto-vivo, sem tesouro. Ataques com armas 
            de esmagamento são +1 contra ratos esqueléticos, mas eles não podem ser atacados por arcos
            e fundas. Clérigos adicionam +N quando os atacam porque eles são mortos-vivos. 
            Reações (d6): 1-2 fugir, 3-6 lutar`,
            ]

            return vermsTable[Math.floor( Math.random()*vermsTable.length )]
    }

