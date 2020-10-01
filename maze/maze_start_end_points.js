// LEFT IN BETWEEN MOVEMENT NOT IMPLIMENTED



alert('start end point');
let start_square_vertical = 0;
let start_square_horizonatal = 0;
let end_square_vertical = 10;
let end_square_horizonatal = 20;

let start_square_id = '0,0';
let end_square_id = '10,20';
let start_square_element = document.getElementById(start_square_id);
let end_square_element = document.getElementById(end_square_id);
start_square_element.classList.remove('normal_square');
start_square_element.classList.add('start_square');
// start
maze_array[0][0][4]=2;
end_square_element.classList.remove('normal_square');
end_square_element.classList.add('end_square');
// end
maze_array[10][20][4]=3;

// start_square_element.addEventListener('click',function(){
//     start_square_element.classList.remove('start_square');
//     start_square_element.classList.add('normal_square');

// });


// let start_creation_button_click = true;
// // start_square_element.addEventListener('click',function(){
// //     console.log(start_creation_button_click);
// //     // wall_creation_button_click = !wall_creation_button_click;
// //     start_creation_function();
// // });
// // start marking
// let start_creation_function = () =>{
//     console.log('start function call');
//     let mouse = false;
//     $(".start_square").mousedown(function() {
//         // console.log('thsi is = ',this);
//         console.log('mouse down click');
//         if(start_creation_button_click===true){
//         console.log("mouse down   --->  "+ this.id);
//         mouse= true;}
//     }).mouseover(function(){
//         if(mouse===true ){
//             console.log("mouseover   " , this);
//             let id = this.id;
//             console.log('move id ======== ',id);
//             let k=0;
//             let j = "";
//             for(;k<id.length && id[k]!=',';k++){
//                 j =j + id[k];
//             }
//             let i="";
//             k++;
//             for(;k<id.length ;k++){
//                 i =i + id[k];
//             }
//             i = parseInt(i);
//             j = parseInt(j);
//             console.log(j," -- ",i);
//             console.log(typeof(j)," -- ",typeof(i));
//             // maze_array[j][i][4] = 1;
//             this.classList.remove("normal_square");
//             this.classList.add("move_square");
//         }
//     }).mouseup(function() {
//         let id = this.id;
//         if(wall_creation_button_click==true){
//         console.log("mouse up   --->    "+ this.id);
//         mouse = false;}
//     });
// }

// start_creation_function();
