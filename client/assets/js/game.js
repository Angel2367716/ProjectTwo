// atk list
let banzai = { atkMin: 180, atkMax: 220, acc: 65 };
let kill = { atkMin: 320, atkMax: 420, acc: 42 };
let rawr = { atkMin: 140, atkMax: 190, acc: 90 };
// special atk
let die = { atkMin: 480, atkMax: 650, acc: 25, dmgSelfMin: 160, dmgSelfMax: 650 };

// people in play

let myPlayer = {
    lvl: 1,
    exp: 0,
    health: 2000,
    strength: 10,
    def: 10,
    spd: 10,
    // tbd: add different moveset values, maybe player selected?
    moveset: {}
};
let onlineOpponent = false;
let aiOpponent = {};
let opponent;

function AiDifficulty(lvl) {
    let ai = aiOpponent.lvl;
    if (lvl === 1) {
        ai = 1
    } else if (lvl < 3) {
        ai = Math.floor(Math.random() * 2) + 1;
    } else {
        ai = Math.floor(Math.random() * 4) + lvl - 2;
    }
    return ai;
};

function createAi() {
    let ai = aiOpponent;
    let aiDiff = AiDifficulty(myPlayer.lvl);
    console.log(aiDiff);

    ai.health = Math.floor(Math.random() * 35) + 2000 + (aiDiff * 35);
    console.log(ai);
    // to do: create other attributes when use is defined
};

function createOpponent() {
    if (onlineOpponent === false) {
        createAi();
        opponent = aiOpponent;
    } else {
        //to do: code for online socket setup
        




    }
};

// combat system

function attackDmg(atk) {
    let accGenerator = Math.floor(Math.random() * 100);
    console.log("number: " + accGenerator + " accuracy: " + atk.acc);
    if (accGenerator < atk.acc || accGenerator == atk.acc) {
        let atkDifference = atk.atkMax - atk.atkMin;
        let atkDmg = Math.floor(Math.random() * atkDifference) + atk.atkMin;
        console.log("You did " + atkDmg + " dmg");

        atkSuccess(atkDmg, opponent);
    } else {
        console.log("attack missed")
    }

};

function atkSuccess(dmg, reciever) {
    reciever.health -= dmg;
    atkAnimation();
    nextPlayerTurn();
}

function atkMissed() {

}

// ai gameplay

function aiTurn() {
    enemyTurnAnimation();
};



// turn-basis for gameplay

function coinFlip() {
    let coin = Math.floor(Math.random() * 2) + 1;
    return coin;
}

function whoTurn(turn) {
    if (turn === 1) {
        PlayerTurn();
    }else if (turn === 2) {
        aiTurn();
    }
}

function nextPlayerTurn() {
    if (onlineOpponent === true) {

    } else {
        aiTurn();
    }
}

// effects player physical view

function atkAnimation() {
    
}

// enemyTurnAnimation(){
    
// }

// starts game

function initGame() {
    let whoTurnItBe = coinFlip();
    console.log(whoTurnItBe);
    whoTurn(whoTurnItBe);
    
}

initGame();

// player controll

