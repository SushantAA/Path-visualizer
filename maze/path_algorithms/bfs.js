alert('dfs');

let shortest_distance = 100000;

// let visited_animate = [];

// document.querySelector('#animate').addEventListener('click',function(){
//     console.log(visited_animate);
//     let i=0;
//     let f = false;
//     let rep = setInterval(function(){
//         let id = visited_animate[i];
//         console.log(id);
        
//         if(i==visited_animate.length) {
//             f = true;
//             clearInterval(rep);    
//             visited_animate = [];
//               return;
//           start_square_element.classList.remove('visited_square');
//           start_square_element.classList.add('start_square');
//        }
        
//         document.getElementById(id).classList.remove('normal_square');
//         document.getElementById(id).classList.add('visited_square');
//         if(id == start_square_id){
//             start_square_element.classList.remove('visited_square');
//             start_square_element.classList.add('start_square');
//         }
//         i = i+1;
        
//     },50);

// });



// document.querySelector('#animate').addEventListener('click',function(){
//     visited_node_animation_function();
//     display_min_distance_node_animation();
// });


let dfs_complete = false;

let dfs = (start_vertical,start_horizontal,distance,visited) =>{
    if(dfs_complete)        return ;
    if(start_vertical==end_square_vertical && start_horizontal ==end_square_horizonatal){
        visited_animate.push(end_square_id);
        console.log('dfs complete'); 
        dfs_complete = true;     
        return;}
    if( shortest_distance!=100000 && distance>shortest_distance)  return;
    let j = start_vertical;
    let i = start_horizontal;

    if(maze_array[j][i][4]==3){
        shortest_distance = Math.min(shortest_distance,distance);
        return ;
    }

    console.log(j,'-',i);

    let id = j.toString() + ',' + i.toString();
    console.log(visited);
    console.log(visited.size);
    if(visited.size!=0 && visited.has(id))     return;

    visited.set(id,true);

    visited_animate.push(id);
    // document.getElementById(id).classList.remove('normal_square');
    // document.getElementById(id).classList.add('visited_square');

    if(i>0 && maze_array[j][i-1][4]!=1){
        maze_array[j][i-1][5] = Math.min(maze_array[j][i-1][5],distance + 1);
        // bfs(j,i-1,maze_array[j][i-1][5]);
    }
    if(j>0 && maze_array[j-1][i][4]!=1){
        maze_array[j-1][i][5] = Math.min(maze_array[j-1][i][5],distance + 1);
        // bfs(j-1,i,maze_array[j-1][i][5]);
    }
    if(i<horizontal_width-1 && maze_array[j][i+1][4]!=1){    
        maze_array[j][i+1][5] = Math.min(maze_array[j][i+1][5],distance + 1);
        // bfs(j,i+1,maze_array[j][i+1][5]);
    }
    if(j<vertical_height-1 && maze_array[j+1][i][4]!=1 ){
        maze_array[j+1][i][5] = Math.min(maze_array[j+1][i][5],distance + 1);
        // bfs(j+1,i,maze_array[j+1][i][5]);
    }
/////////////////////////////////////////////////////////////////////////////////////////////

    if(i>0 && maze_array[j][i-1][4]!=1){
        // maze_array[j][i-1][5] = Math.min(maze_array[j][i-1][5],maze_array[j][i][5] + 1);
        dfs(j,i-1,maze_array[j][i-1][5],visited);
    }
    if(dfs_complete)        return ;
    if(j>0 && maze_array[j-1][i][4]!=1){
        // maze_array[j-1][i][5] = Math.min(maze_array[j-1][i][5],maze_array[j][i][5] + 1);
        dfs(j-1,i,maze_array[j-1][i][5],visited);
    }
    if(dfs_complete)        return ;
    if(i<horizontal_width-1 && maze_array[j][i+1][4]!=1){    
        // maze_array[j][i+1][5] = Math.min(maze_array[j][i+1][5],maze_array[j][i][5] + 1);
        dfs(j,i+1,maze_array[j][i+1][5],visited);
    }
    if(dfs_complete)        return ;
    if(j<vertical_height-1 && maze_array[j+1][i][4]!=1 ){
        // maze_array[j+1][i][5] = Math.min(maze_array[j+1][i][5],maze_array[j][i][5] + 1);
        dfs(j+1,i,maze_array[j+1][i][5],visited);
    }
    if(dfs_complete)        return ;
}

document.querySelector('#bfs').addEventListener('click',function(){
    let rere = new Map();
    rere.set('-1,-1',true);
    dfs(start_square_vertical,start_square_horizonatal,0,rere);
    console.log('shortes distance = ', shortest_distance);
    dfs_complete = false;
});

