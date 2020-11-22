// alert('min node animation');
let min_distance_node_array = [];

let min_animatin_complete = false;

let display_min_distance_node_animation = () =>{  
    console.log(min_distance_node_array);
    let i=0;
    let f = false;
    let rep = setInterval(function(){
        let id = min_distance_node_array[i];
        console.log(id);
        
        if(i==min_distance_node_array.length) {
            f = true;
            clearInterval(rep);    
            min_distance_node_array = [];
            min_animatin_complete = true;
            return;
        start_square_element.classList.remove('visited_square');
        start_square_element.classList.add('start_square');
    }
        
        document.getElementById(id).classList.remove('weight_add_square_visited');
        document.getElementById(id).classList.remove('visited_square');
        document.getElementById(id).classList.add('min_node_square');
        i = i+1;
        
    },50);


}
