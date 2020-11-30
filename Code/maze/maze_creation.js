// id of squares is (1,2) like 1-> vetrical , 2->horizontal 
let  maze_all_square = document.querySelector('#maze');
let  horizontal_width = screen.width;
let  vertical_height = screen.height;
horizontal_width = 40; 
vertical_height = 19;
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
    maze_all_square.innerHTML = y;
}
maze_creation();