alert('astar connected');
//  weights are not effective in astar
let find_min_distance_astar = (arr,distance,hvalue) =>{
    let n = arr.length;
    let d =100000;
    let a ;
    for(let i=0;i<n;i++){
        console.log('i = ',i,' , arr[i] = ',arr[i],' , total distance = ',hvalue.get(arr[i]));
        if(d>hvalue.get(arr[i])){
            d = hvalue.get(arr[i]);
            a = i;
        }
    }
    console.log("a = ",a);
    let l = arr[a];
    arr.splice(a,1);
    return l;
}

let h_value_function = (y,x) =>{
    return Math.sqrt((y-end_square_vertical)*(y-end_square_vertical) + (x -end_square_horizonatal)*(x-end_square_horizonatal));
}

let astar = () =>{
    let distance = new Map();
    let hvalue = new Map();
    let parent = new Map();
    // let arr = [];

    let id = make_id(start_square_vertical,start_square_horizonatal);
    // h.set(id,true);
    console.log('start id = ',id);
    let arr = [id];
    hvalue.set(id,h_value_function(start_square_vertical,start_square_horizonatal));
    distance.set(id,0);
    parent.set(id,"e");
    
    while(arr.length!=0){
        let f = find_min_distance_astar(arr,distance,hvalue);
        id = f;
        let x = coordinate_from_id(f);
        let  j = x[0] ,i = x[1] ;
        // j ->vertical , i->horizontal
        let d = distance.get(id);
        console.log('j = ',j ,' , i = ',i);
        
        visited_animate.push(f);

        if(j==end_square_vertical && i==end_square_horizonatal){
            console.log('dijkstra finished');
            break;
        }
    
        

        if(j>0){
            let tid =make_id(j-1,i);
            if((!distance.has(tid)) && maze_array[j-1][i][4]!=1){
                    let hd = h_value_function(j-1,i);
                    hvalue.set(tid,d+maze_array[j-1][i][5]+hd);
                    distance.set(tid,d+maze_array[j-1][i][5]);
                    parent.set(tid,id);
                    arr.push(tid);
            }
            else{ 
                if(((d+maze_array[j-1][i][5]) <distance.get(tid)) && maze_array[j-1][i][4]!=1){
                    distance.delete(tid);
                    hvalue.delete(tid);
                    let hd = h_value_function(j-1,i);
                    hvalue.set(tid,d+maze_array[j-1][i][5]+hd);
                    distance.set(tid,d+maze_array[j-1][i][5]);
                    parent.delete(tid);
                    parent.set(tid,id);
                    arr.push(tid);
                }
            }
        }
        if(i>0){
            let tid =make_id(j,i-1);
            if((!distance.has(tid)) && maze_array[j][i-1][4]!=1){
                
                    let hd = h_value_function(j,i-1);
                    hvalue.set(tid,d+maze_array[j][i-1][5]+hd);
                    distance.set(tid,d+maze_array[j][i-1][5]);
                    parent.set(tid,id);
                    arr.push(tid);
            }
            else{ 
                if(((d+maze_array[j][i-1][5]) <distance.get(tid)) && maze_array[j][i-1][4]!=1){
                    distance.delete(tid);
                    hvalue.delete(tid);

                    let hd = h_value_function(j,i-1);
                    hvalue.set(tid,d+maze_array[j][i-1][5]+hd);
                    distance.set(tid,d+maze_array[j][i-1][5]);
                    parent.delete(tid);
                    parent.set(tid,id);
                    arr.push(tid);
                }
            }
        }
        if(j<vertical_height-1){
            let tid =make_id(j+1,i);
            if((!distance.has(tid)) && maze_array[j+1][i][4]!=1){
                
                    let hd = h_value_function(j+1,i);
                    hvalue.set(tid,d+maze_array[j+1][i][5]+hd);
                    distance.set(tid,d+maze_array[j+1][i][5]);
                    parent.set(tid,id);
                    arr.push(tid);
            }
            else{ 
                if(((d+maze_array[j+1][i][5]) <distance.get(tid)) && maze_array[j+1][i][4]!=1){
                    distance.delete(tid);
                    hvalue.delete(tid);
                    let hd = h_value_function(j+1,i);
                    hvalue.set(tid,d+maze_array[j+1][i][5]+hd);
                    distance.set(tid,d+maze_array[j+1][i][5]);
                    parent.delete(tid);
                    parent.set(tid,id);
                    arr.push(tid);
                }
            }
        }
        if(i<horizontal_width-1){
            let tid =make_id(j,i+1);
            if((!distance.has(tid)) && maze_array[j][i+1][4]!=1){
                    let hd = h_value_function(j,i+1);
                    hvalue.set(tid,d+maze_array[j][i+1][5]+hd);
                    distance.set(tid,d+maze_array[j][i+1][5]);
                    parent.set(tid,id);
                    arr.push(tid);
            }
            else{ 
                if(((d+maze_array[j][i+1][5]) <distance.get(tid)) && maze_array[j][i+1][4]!=1){
                    distance.delete(tid);
                    hvalue.delete(tid);
                    let hd = h_value_function(j,i+1);
                    hvalue.set(tid,d+maze_array[j][i+1][5]+hd);
                    distance.set(tid,d+maze_array[j][i+1][5]);
                    parent.delete(tid);
                    parent.set(tid,id);
                    arr.push(tid);
                }
            }
        }
        console.log('visited id= ',id);
        console.log('arr = ',arr);
    }

    let tid = make_id(end_square_vertical,end_square_horizonatal);
    console.log('final  tid = ',tid);
    min_distance_node_array.push(end_square_id)
    while(parent.get(tid)!='e'){
        let f = parent.get(tid);
       console.log("node id = ",f);
        tid = f;
       
        min_distance_node_array.push(f);
    }

}

document.querySelector('#astar').addEventListener('click',function(){
    console.log('astar start');
    astar();
    console.log('astar end');
    console.log("min node animation start");
    // visited_node_animation_function();
    // display_min_distance_node_animation();
    console.log("min node animation end");
});