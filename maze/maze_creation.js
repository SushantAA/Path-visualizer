alert("lskdjf");
// id of squares is (1,2) like 1-> vetrical , 2->horizontal 
let  maze_all_squates = document.querySelector('#maze');
let  horizontal_width = screen.width;
let  vertical_height = screen.height;
let  horizontal_devide = 38;
let  vetrical_devide = 45;
horizontal_width = Math.floor(horizontal_width/horizontal_devide); 
vertical_height = Math.floor(vertical_height/vetrical_devide);
console.log('width = ',horizontal_width);
console.log('height = ',vertical_height);
let maze_creation = () =>{
    console.log('maze');
    let y = '';
    for(let j=0;j<vertical_height;j++){
    let x = '<div class="normal_square" ></div>';
    let tx='';
    for(let i=0;i<horizontal_width;i++){ 
        let id = j.toString() + ',' + i.toString();
        let x = '<div id =\"'+ id +'\" class="normal_square" ></div>';
        tx = tx+ x; 
    }
    let tx_all = '<div>'+tx+'</div>';
    y = y + tx_all;
}
maze_all_squates.innerHTML = y;}
maze_creation();