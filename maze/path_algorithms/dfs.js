// alert('dfs');

let shortest_distance = 100000;

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

    //  min distance
    if(i>0 && maze_array[j][i-1][4]!=1){
        maze_array[j][i-1][5] = Math.min(maze_array[j][i-1][5],distance + 1);
    }
    if(j>0 && maze_array[j-1][i][4]!=1){
        maze_array[j-1][i][5] = Math.min(maze_array[j-1][i][5],distance + 1);
    }
    if(i<horizontal_width-1 && maze_array[j][i+1][4]!=1){    
        maze_array[j][i+1][5] = Math.min(maze_array[j][i+1][5],distance + 1);
    }
    if(j<vertical_height-1 && maze_array[j+1][i][4]!=1 ){
        maze_array[j+1][i][5] = Math.min(maze_array[j+1][i][5],distance + 1);
    }

    if(i>0 && maze_array[j][i-1][4]!=1){
        dfs(j,i-1,maze_array[j][i-1][5],visited);
    }
    if(dfs_complete)        return ;
    if(j>0 && maze_array[j-1][i][4]!=1){
        dfs(j-1,i,maze_array[j-1][i][5],visited);
    }
    if(dfs_complete)        return ;
    if(i<horizontal_width-1 && maze_array[j][i+1][4]!=1){    
        dfs(j,i+1,maze_array[j][i+1][5],visited);
    }
    if(dfs_complete)        return ;
    if(j<vertical_height-1 && maze_array[j+1][i][4]!=1 ){
        dfs(j+1,i,maze_array[j+1][i][5],visited);
    }
    if(dfs_complete)        return ;
}

document.querySelector('#dfs').addEventListener('click',function(){
    let rere = new Map();
    console.log('dfs start');
    shortest_distance = 100000;
    dfs_complete = false;
    dfs(start_square_vertical,start_square_horizonatal,0,rere);
    
});

