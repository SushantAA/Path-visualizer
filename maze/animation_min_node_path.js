let min_distance_node_array = [];

let display_min_distance_node_animation = () =>{
    console.log(min_distance_node_array);
    let i=0;
    let f = false;
    let rep = setInterval(function(){
        let id =  console.log(min_distance_node_array);
    let i=0;
    let f = false;
    let rep = setInterval(function(){
        let id = min_distance_node_array[i];
        console.log(id);
        
        if(i==min_distance_node_array.length) {
            f = true;
            clearInterval(rep);    
            min_distance_node_array = [];
              return;
          start_square_element.classList.remove('visited_square');
          start_square_element.classList.add('start_square');
       }

       console.log('i = ',i,' , arr len = ',min_distance_node_array.length);

       if(i==min_distance_node_array.length)    return ;
        
        document.getElementById(id).classList.remove('visited_square');
        document.getElementById(id).classList.add('min_node_square');
        if(id == start_square_id){
            start_square_element.classList.remove('min_node_square');
            start_square_element.classList.add('start_square');
        }
        i = i+1;
        
    },50);

        console.log(id);
        
        if(i==min_distance_node_array.length) {
            f = true;
            clearInterval(rep);    
            min_distance_node_array = [];
              return;
          start_square_element.classList.remove('visited_square');
          start_square_element.classList.add('start_square');
       }
        
        document.getElementById(id).classList.remove('normal_square');
        document.getElementById(id).classList.add('visited_square');
        if(id == start_square_id){
            start_square_element.classList.remove('visited_square');
            start_square_element.classList.add('start_square');
        }
        i = i+1;
        
    },50);

}
