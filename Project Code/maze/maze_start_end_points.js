// alert('start end point');
let start_square_vertical = 7;
let start_square_horizonatal = 7;
let end_square_vertical = 9;
let end_square_horizonatal = 20;

let start_square_id = '7,7';
let end_square_id = '9,20';
let start_square_element = document.getElementById(start_square_id);
let end_square_element = document.getElementById(end_square_id);
start_square_element.classList.remove('normal_square');
start_square_element.classList.add('start_square');
// start
maze_array[0][0][4]=3;
end_square_element.classList.remove('normal_square');
end_square_element.classList.add('end_square');
// end
maze_array[9][20][4]=2;


let start_change_click = false;

$('#startsquare').click(function(){
    console.log('start square click');
    start_change_click = !start_change_click;
    change_start();
    console.log('start square click end');

});

let change_start = () =>{
    let mouse = false;
    $(".normal_square").mousedown(function() {
        // console.log('thsi is = ',this);
        if(start_change_click===true){
        console.log("mouse down   --->  "+ this.id);
        start_square_element.classList.remove('start_square');
        start_square_element.classList.add('normal_square');
        // this.classList.add('start_square');
        // this.classList.remove('normal_square');
        mouse= true;}
    }).mouseup(function() {
        let id = this.id;
        if(start_change_click==true){
            this.classList.add('start_square');
            this.classList.remove('normal_square');
            start_square_id = this.id;
            start_square_element = document.getElementById(start_square_id);
            let x = coordinate_from_id(start_square_id);
            let  j = x[0] ,i = x[1] ;
            // j ->vertical , i->horizontal
            start_square_vertical = j;
            start_square_horizonatal = i;
            console.log('start_square_vertical = '+start_square_vertical +" , "+ 'start_square_horizonatal = '+ start_square_horizonatal)
        console.log("mouse up   --->    "+ this.id);
        start_change_click=false;
        mouse = false;}
    });

}


let end_change_click = false;

$('#endsquare').click(function(){
    console.log('end square click');
    end_change_click = !end_change_click;
    change_end();
    console.log('end square click end');

});

let change_end = () =>{
    let mouse = false;
    $(".normal_square").mousedown(function() {
        // console.log('thsi is = ',this);
        if(end_change_click===true){
        console.log("mouse down   --->  "+ this.id);
        end_square_element.classList.remove('end_square');
        end_square_element.classList.add('normal_square');
        // this.classList.add('start_square');
        // this.classList.remove('normal_square');
        mouse= true;}
    }).mouseup(function() {
        let id = this.id;
        if(end_change_click==true){
            this.classList.add('end_square');
            this.classList.remove('normal_square');
            end_square_id = this.id;
            end_square_element = document.getElementById(end_square_id);
            let x = coordinate_from_id(end_square_id);
            let  j = x[0] ,i = x[1] ;
            // j ->vertical , i->horizontal
            end_square_vertical = j;
            end_square_horizonatal = i;
            console.log('end_square_vertical = '+end_square_vertical +" , "+ 'end_square_horizonatal = '+ end_square_horizonatal)
        console.log("mouse up   --->    "+ this.id);
        end_change_click=false;
        mouse = false;}
    });

}
