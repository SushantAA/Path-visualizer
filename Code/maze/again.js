// alert('again');

let css_class_reset = () =>{
    for(let j=0;j<vertical_height;j++){
        for(let i=0;i<horizontal_width;i++){
            let id = make_id(j,i);
                // document.css_class_reset();
                document.getElementById(id).classList.remove('wall_square');
                document.getElementById(id).classList.remove('visited_square');
                document.getElementById(id).classList.remove('min_node_square');
                document.getElementById(id).classList.remove('weight_add_square');
                document.getElementById(id).classList.remove('weight_add_square_visited');
                document.getElementById(id).classList.remove('weight_add_square_t');
                document.getElementById(id).classList.add('normal_square');
                document.getElementById(id).classList.remove('a');
                document.getElementById(id).removeAttribute('aria-label');
        }
    }
    document.getElementById('end_distance').innerHTML = '';
    weight_add_button_t_click = false;
    weight_add_button_click = false
    wall_creation_button_click = false
}

document.querySelector('#again').addEventListener('click',function(){
    console.log('again begin');
    maze_array_first_fill(); 
    css_class_reset();

    min_distance_node_array = [];
    visited_animate = [];

    maze_array[start_square_vertical][start_square_horizonatal][4] = 3;
    maze_array[end_square_vertical][end_square_horizonatal][4] = 2;
    console.log('start_square_vertical = ', start_square_vertical , 'start_square_vertical = ',start_square_vertical);
    console.log('end_square_vertical = ',end_square_vertical,'end_square_horizonatal = ',end_square_horizonatal);
  
    console.log('again end');
});