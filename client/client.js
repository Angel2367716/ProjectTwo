const ctx = document.getElementById('ctx').getContext('2d');
ctx.font = '30px Ariel';

const socket = io();

socket.on('newPosition', (data) => {
    ctx.clearRect(0,0,500,500);
    for(let i = 0; i < data.length; i++) {
        ctx.fillText (data[i].number, data[i].x, data[i].y);
    }
});

document.onkeydown = function(event){
    if(event.keyCode === 68){
        socket.emit('keypress', {inputId: 'right', state:true})
    } //key D
    else if(event.keyCode === 65){
        socket.emit('keypress', {inputId: 'left', state:true})
    } //key a
    else if(event.keyCode === 87){
        socket.emit('keypress', {inputId: 'up', state:true})
    } //key w
    else if(event.keyCode === 83){
        socket.emit('keypress', {inputId: 'down', state:true})
    } //key s
}

document.onkeyup = function(event){
    if(event.keyCode === 68){
        socket.emit('keypress', {inputId: 'right', state:false})
    } //key D
    else if(event.keyCode === 65){
        socket.emit('keypress', {inputId: 'left', state:false})
    } //key a
    else if(event.keyCode === 87){
        socket.emit('keypress', {inputId: 'up', state:false})
    } //key w
    else if(event.keyCode === 83){
        socket.emit('keypress', {inputId: 'down', state:false})
    } //key s
}