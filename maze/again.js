alert('again');

let css_class_reset = () =>{
    for(let j=0;j<vertical_height;j++){
        for(let i=0;i<horizontal_width;i++){
            let id = make_id(j,i);
                document.getElementById(id).classList.remove('wall_square');
                document.getElementById(id).classList.remove('visited_square');
                document.getElementById(id).classList.add('normal_square');  
        }
    }
}

document.querySelector('#again').addEventListener('click',function(){
    console.log('again begin');
    maze_array_first_fill();
    css_class_reset();
    console.log('again end');
});