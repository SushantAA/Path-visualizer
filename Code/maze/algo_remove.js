// alert('path_remove');

let algo_remove_fxn = () =>{
    for(let j=0;j<vertical_height;j++){
        for(let i=0;i<horizontal_width;i++){
            let id = make_id(j,i);
                // document.css_class_reset();
                document.getElementById(id).classList.remove('visited_square');
                document.getElementById(id).classList.remove('min_node_square');
                document.getElementById(id).classList.remove('weight_add_square_visited');
                document.getElementById(id).classList.remove('a');
                document.getElementById(id).removeAttribute('aria-label');

        }
    }
    document.getElementById('end_distance').innerHTML = '';
    weight_add_button_t_click = false;
    weight_add_button_click = false
    wall_creation_button_click = false
}

document.querySelector('#path_remove').addEventListener('click',function(){
    console.log('path_remove begin');
    // maze_array_first_fill();
    algo_remove_fxn();
    min_distance_node_array = [];
    visited_animate = [];
    console.log('path_remove end');
});