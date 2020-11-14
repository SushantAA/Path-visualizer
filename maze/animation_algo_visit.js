alert('algo visit animation');

let visited_animate = [];

let visited_node_animation_conplete = false;

let visited_node_animation_function =()=>{
    console.log(visited_animate);
    let i=0;
    let f = false;
    let rep = setInterval(function(){
        let id = visited_animate[i];
        console.log(id);
        
        if(i==visited_animate.length) {
            console.log('hit');
            f = true;
            clearInterval(rep);    
            visited_animate = [];
            visited_node_animation_conplete = true;
            console.log('visited node animation complete = ',visited_node_animation_conplete);
            display_min_distance_node_animation();
              return;
          start_square_element.classList.remove('visited_square');
          start_square_element.classList.add('start_square');
       }
        
        // document.getElementById(id).classList.remove('normal_square');
        // document.getElementById(id).classList.remove('weight_add_square');==
        if(document.getElementById(id).classList.contains('weight_add_square')){
        //   document.getElementById(id).classList.remove('weight_add_square');
          document.getElementById(id).classList.add('weight_add_square_visited');
        }else{
        document.getElementById(id).classList.add('visited_square');}
        if(id == start_square_id){
            start_square_element.classList.remove('visited_square');
            start_square_element.classList.add('start_square');
        }
        i = i+1;
        
    },50);

}
