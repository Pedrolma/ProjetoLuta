const defaultCharacter = {
    name : '',
    life : 1,
    maxLife: 1,
    attack:  0 ,
    defense: 0
}

const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 9,
        defense: 5 
    }
}

const createWizard = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 85,
        maxLife: 85,
        attack: 15,
        defense: 3
    }
}


const littleMonster = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 79,
        maxLife: 79,
        attack: 10,
        defense: 3
    }
}   

const bigMonster = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 125,
        maxLife: 125,
        attack: 7,
        defense: 5
    }
}

//Stage -> É o espaço onde será a luta, nele pegamos e fizesmos a organização/CRIAÇÃO  de Ataque entre os Montros e herois 
const stage = {
    fighter1 : null,    
    fighter2 : null,
    fighter1El: null,
    fighter2El: null,


    // Criação dos Botões  
        start(fighter1,fighter2,fighter1El, fighter2El) {
    
            this.fighter1 = fighter1;
            this.fighter2 = fighter2;
            this.fighter1El = fighter1El;
            this.fighter2El = fighter2El;

            this.fighter1El.querySelector('.attackbutton').addEventListener('click', () => this.doAttack(this.fighter1 , this.fighter2) );

            this.fighter2El.querySelector('.attackbutton').addEventListener('click', () => this.doAttack(this.fighter2 , this.fighter1) );

            this.uptade()
        },



        //Irá atualizar as informações de ambos os lutadores
        uptade() {
            this.updateFighter(this.fighter1, this.fighter1El);
            this.updateFighter(this.fighter2, this.fighter2El);
        },

        updateFighter(fighter, fighterEl) {
            fighterEl.querySelector('.name').innerHTML = `${fighter.name} ${fighter.life.toFixed(1)} HP`;
            const pct = (fighter.life / fighter.maxLife) * 100;
            fighterEl.querySelector('.bar').style.width = `${pct}%`;
        },



        // Criação do Ataque
        doAttack (attacking,attacked){
           if (attacking.life <= 0 || attacked.life <= 0){
                console.log('Você está atacando cachorro morto')
                return;
           }
            const attackFactor = (Math.random () * 2 ).toFixed(2); // Gerar um número aleatório entre 0 e 2, com duas casas decimais, para simular a variação do ataque.  O ataque nunca será fixo e o mesmo. 
            const defenseFactor = (Math.random () * 2 ).toFixed (2); // Gerar um número aleatório entre 0 e 2, com duas casas decimais, para simular a variação da defesa. A defesa nunca será fixa e a mesma.


           const actualAttack = (attacking.attack * attackFactor)
           const actualDefense = (attacked.defense * defenseFactor)



           if (actualAttack > actualDefense) {
                attacked.life -= actualAttack;
                if (attacked.life < 0) {
                    attacked.life = 0;
                }
                this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
           }
           else {
                this.log.addMessage(`${attacked.name} defendeu o ataque de ${attacking.name}`)
           }
           this.uptade()
        },

        log: {
            list: [],
            addMessage(msg) {
                this.list.push(msg);
                const logEl = document.querySelector('.log');
                if (!logEl) return;
                logEl.innerHTML = '';
                this.list.slice().reverse().forEach((message) => {
                    const li = document.createElement('li');
                    li.innerText = message;
                    logEl.appendChild(li);
                });
            }
        }
}