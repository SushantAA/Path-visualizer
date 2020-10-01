alert('wall');
let wall_creation_button = document.querySelector('#wall_creation');
let wall_creation_button_click = false;
wall_creation_button.addEventListener('click',function(){
    console.log(wall_creation_button_click);
    wall_creation_button_click = !wall_creation_button_click;
    wall_creation_function();
});
// wall marking
let wall_creation_function = () =>{
    let mouse = false;
    $(".normal_square").mousedown(function() {
        // console.log('thsi is = ',this);
        if(wall_creation_button_click===true){
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
            if( maze_array[j][i][4] != 2 &&  maze_array[j][i][4] != 3)
            maze_array[j][i][4] = 1;
            this.classList.remove("normal_square");
            this.classList.add("wall_square");
        }
    }).mouseup(function() {
        let id = this.id;
        if(wall_creation_button_click==true){
        console.log("mouse up   --->    "+ this.id);
        mouse = false;}
    });
}
