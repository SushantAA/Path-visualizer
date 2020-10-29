alert('basic random wall trap');

let create_random_wall_trap = () => {
    let count_idx_wall =0;
    let count_idx_weight =0;

    while(count_idx_wall<150){
        let y = Math.floor((Math.random())*(vertical_height)); 
        let x = Math.floor((Math.random())*(horizontal_width)); 

        if((y == start_square_vertical && x==start_square_horizonatal) || (y==end_square_vertical  && x== end_square_horizonatal)){}
        else{
            if(maze_array[y][x][4]!=1 && maze_array[y][x][4]!=4){
            maze_array[y][x][4]=1;
            let tid = make_id(y,x);
            console.log(tid , count_idx_wall);
            
            document.getElementById(tid).classList.remove('normal_square');
            document.getElementById(tid).classList.add('wall_square');
            // tid.classList.remove('normal_square');
            // tid.classList.add('wall_square');
            count_idx_wall = count_idx_wall +1;
        }}
    }

    // while(count_idx_weight<50){
    //     let y = Math.floor((Math.random())*(vertical_height)); 
    //     let x = Math.floor((Math.random())*(horizontal_width)); 

    //     if(maze_array[y][x][4]!=1 && maze_array[y][x][4]!=4){
    //         maze_array[y][x][5] = 5;
    //         maze_array[y][x][4] = 4;
    //         let tid = make_id(y,x);
    //         console.log(tid , count_idx_wall);
            
    //         document.getElementById(tid).classList.remove('normal_square');
    //         document.getElementById(tid).classList.add('weight_add_square');
    //         // tid.classList.remove('normal_square');
    //         // tid.classList.add('wall_square');
    //         count_idx_weight = count_idx_weight +1;
    //     }
    // }

}

document.querySelector('#trap_wall').addEventListener('click',function(){
    create_random_wall_trap();
});
