alert('speed');

let algo_speed = 50;

document.getElementById('fast').addEventListener('click',function(){
    algo_speed = 25;
});

document.getElementById('medium').addEventListener('click',function(){
    algo_speed = 50;
});

document.getElementById('slow').addEventListener('click',function(){
    algo_speed = 75;
});