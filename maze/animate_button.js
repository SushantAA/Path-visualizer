// alert('animation button');


document.querySelector('#animate').addEventListener('click',function(){

    animation_function();
});

let animation_function = () =>{
    min_distance_node_array.reverse();

    console.log('animation call');
    visited_node_animation_function();
    console.log('=====================',visited_node_animation_conplete);

}