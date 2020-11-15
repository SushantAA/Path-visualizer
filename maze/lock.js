// alert("lock js");

let lock_present = false;

let lock_id = "";
let lock_sqare_vertical = null;
let lock_sqare_horizontal = null;

$('#lock').click(function(){
    console.log('start square click');
    lock_present = !lock_present;
    if(lock_id!=""){
        document.getElementById( lock_id).classList.remove('lock_square');
        document.getElementById( lock_id).classList.add('normal_square');
    }
    lock_input_start();
    console.log('start square click end');

});

let lock_input_start = () =>{
    let mouse = false;
    $(".normal_square").mousedown(function() {
        // console.log('thsi is = ',this);
        if(lock_present===true){
        console.log("mouse down   --->  "+ this.id);
        // start_square_element.classList.remove('start_square');
        // start_square_element.classList.add('normal_square');
        // this.classList.add('start_square');
        // this.classList.remove('normal_square');
        mouse= true;}
    }).mouseup(function() {
        let id = this.id;
        if(lock_present==true){
            this.classList.add('lock_square');
            this.classList.remove('normal_square');
            lock_id = id;
            // start_square_id = this.id;
            // start_square_element = document.getElementById(lock_id);
            let x = coordinate_from_id(lock_id);
            let  j = x[0] ,i = x[1] ;
            // j ->vertical , i->horizontal
            lock_sqare_vertical = j;
            lock_sqare_horizontal = i;
            console.log('start_square_vertical = '+start_square_vertical +" , "+ 'start_square_horizonatal = '+ start_square_horizonatal)
        console.log("mouse up   --->    "+ this.id);
        lock_present=false;
        mouse = false;}
    });

}
