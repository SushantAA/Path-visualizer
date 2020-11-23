let weight_add_button_t = document.querySelector('#weight_add_3');
let weight_add_button_t_click = false;
weight_add_button_t.addEventListener('click',function(){
    console.log(weight_add_button_t_click);
    weight_add_button_t_click = !weight_add_button_t_click;
    wall_creation_button_click = false;
    weight_add_button_click = false;
    weight_add_function_t();
});
// weight add marking
let weight_add_function_t = () =>{
    let mouse = false;
    $(".normal_square").mousedown(function() {
        // console.log('thsi is = ',this);
        if(weight_add_button_t_click===true){
        console.log("mouse down   --->  "+ this.id);
        mouse= true;}
    }).mouseover(function(){
        if(mouse===true ){
        console.log("mouseover   " , this);
            let id = this.id;
            console.log('move id ======== ',id);
            let k=0;
            let j = "";
            for(;k<id.length && id[k]!=',';k++){
                j =j + id[k];
            }
            let i="";
            k++;
            for(;k<id.length ;k++){
                i =i + id[k];
            }
            i = parseInt(i);
            j = parseInt(j);
            console.log(j," -- ",i);
            console.log(typeof(j)," -- ",typeof(i));
            if( maze_array[j][i][4] == 0){
            maze_array[j][i][5] = 3;
            maze_array[j][i][4] = 4;
            this.classList.remove("normal_square");
            this.classList.add("weight_add_square_t");}
        }
    }).mouseup(function() {
        let id = this.id;
        if(weight_add_button_t_click==true){
        console.log("mouse up   --->    "+ this.id);
        mouse = false;}
    });
}
