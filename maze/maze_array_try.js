// alert('array');
let maze_array = new Array(vertical_height);
for(let i=0;i<vertical_height;i++){
    let maze_horizontal_array = new Array(horizontal_width);
    maze_array[i] = maze_horizontal_array;
}

let maze_array_first_fill = () =>{
    for(let j=0;j<vertical_height;j++){
        for(let i=0;i<horizontal_width;i++){
            let neighbour_list_array = new Array(6);
            for(let k=0;k<5;k++){
                neighbour_list_array[k] = 0;
            }
            neighbour_list_array[5] = 1;
            maze_array[j][i] = neighbour_list_array;
            // 0 ->up
            // 1 ->right
            // 2 ->down
            // 3 ->left
            // 4 -> 1 ->  wall , 2->end , 3->start , 4 -> weighted
            // 5 -> distance , initial =1
        }
    }
    console.log(maze_array);
    for(let j=1;j<vertical_height;j++){
        for(let i=0;i<horizontal_width;i++){
            maze_array[j][i][0]=1;
            maze_array[j-1][i][2]=1;
        }
    }
    for(let j=0;j<vertical_height;j++){
        for(let i=1;i<horizontal_width;i++){
            maze_array[j][i][3]=1;
            maze_array[j][i-1][1]=1;
        }
    }
}
maze_array_first_fill();

