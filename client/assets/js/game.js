
// atk list
let banzai = { atkMin: 180, atkMax: 220, acc: 65 };
let kill = { atkMin: 320, atkMax: 420, acc: 42 };
let rawr = { atkMin: 140, atkMax: 190, acc: 90 };
// special atk
let die = { atkMin: 480, atkMax: 650, acc: 25, dmgSelfMin: 160, dmgSelfMax: 650 };

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
    } else {
        //to do: code for online socket setup





    }
};


function attackDmg(atk) {
    let accGenerator = Math.floor(Math.random() * 100);
    console.log("number: " + accGenerator + " accuracy: " + atk.acc);
    if (accGenerator < atk.acc || accGenerator == atk.acc) {
        let atkDifference = atk.atkMax - atk.atkMin;
        let atkDmg = Math.floor(Math.random() * atkDifference) + atk.atkMin;
        console.log("You did " + atkDmg + " dmg");

        // atkSuccess();
    } else {
        console.log("attack missed")
    }

};

function atkSuccess() {

}

function atkMissed() {

}

function initGame() {

}

initGame();

// player controll

