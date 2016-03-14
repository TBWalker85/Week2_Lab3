var Die = function() {
    this.value = null;
    this.div = null;
}

Die.prototype.insert = function() {
    this.div = document.createElement('div');
    this.div.className = 'newDice';
    this.roll();
    document.getElementById('diceDiv').appendChild(this.div);
}

Die.prototype.roll = function() {
    var num = Math.floor(Math.random() * 6) + 1;
    this.value = num;
    this.div.innerHTML = num;
}

var dice = [];
function makeDice() {
    var die = new Die();
    die.insert();
    dice.push(die);
}

function rollDice() {
    for (var i = 0; i < dice.length; i++) {
        dice[i].roll();
    }
}

function sumDice(){
    var sum = 0;
    for (var i =0; i < dice.length; i++){
        sum = sum + dice[i].value;
        alert("The sum of the dice is " + sum + ".");
    }
}