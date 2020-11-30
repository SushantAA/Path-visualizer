// alert('bfs_path');

let bfs_path = () =>{
    let distance = new Map();
    let parent = new Map();
    // let arr = [];

    let id = make_id(start_square_vertical,start_square_horizonatal);
    // h.set(id,true);
    console.log('start id = ',id);
    let arr = [id];
    distance.set(id,0);
    parent.set(id,"e");
    
    while(arr.length!=0){
        let f = find_min_distance(arr,distance);
        id = f;
        let x = coordinate_from_id(f);
        let  j = x[0] ,i = x[1] ;
        // j ->vertical , i->horizontal
        let d = distance.get(id);
        console.log('j = ',j ,' , i = ',i);
        visited_animate.push(f);
        

        if(j>0){
            let tid =make_id(j-1,i);
            if((!distance.has(tid)) && maze_array[j-1][i][4]!=1){
                    distance.set(tid,d+1);
                    parent.set(tid,id);
                    arr.push(tid);
            }
            else{ 
                if(((d+1) <distance.get(tid)) && maze_array[j-1][i][4]!=1){
                    distance.delete(tid);
                    distance.set(tid,d+1);
                    parent.delete(tid);
                    parent.set(tid,id);
                    arr.push(tid);
                }
            }
        }
        if(i>0){
            let tid =make_id(j,i-1);
            if((!distance.has(tid)) && maze_array[j][i-1][4]!=1){
                    distance.set(tid,d+1);
                    parent.set(tid,id);
                    arr.push(tid);
            }
            else{ 
                if(((d+1) <distance.get(tid)) && maze_array[j][i-1][4]!=1){
                    distance.delete(tid);
                    distance.set(tid,d+1);
                    parent.delete(tid);
                    parent.set(tid,id);
                    arr.push(tid);
                }
            }
        }
        if(j<vertical_height-1){
            let tid =make_id(j+1,i);
            if((!distance.has(tid)) && maze_array[j+1][i][4]!=1){
                    distance.set(tid,d+1);
                    parent.set(tid,id);
                    arr.push(tid);
            }
            else{ 
                if(((d+1) <distance.get(tid)) && maze_array[j+1][i][4]!=1){
                    distance.delete(tid);
                    distance.set(tid,d+1);
                    parent.delete(tid);
                    parent.set(tid,id);
                    arr.push(tid);
                }
            }
        }
        if(i<horizontal_width-1){
            let tid =make_id(j,i+1);
            if((!distance.has(tid)) && maze_array[j][i+1][4]!=1){
                    distance.set(tid,d+1);
                    parent.set(tid,id);
                    arr.push(tid);
            }
            else{ 
                if(((d+1) <distance.get(tid)) && maze_array[j][i+1][4]!=1){
                    distance.delete(tid);
                    distance.set(tid,d+1);
                    parent.delete(tid);
                    parent.set(tid,id);
                    arr.push(tid);
                }
            }
        }

        if(j==end_square_vertical && i==end_square_horizonatal){
            console.log('bfs_path finished');
            break;
        }

        console.log('visited id= ',id);
        console.log('arr = ',arr);
    }

    let tid = make_id(end_square_vertical,end_square_horizonatal);
    console.log('final  tid = ',tid);
    min_distance_node_array.push(end_square_id);
    while(parent.get(tid)!='e'){
        let f = parent.get(tid);
       console.log("node id = ",f);
        tid = f;
       
        min_distance_node_array.push(f);
    }
    
}

document.querySelector('#bfs_path').addEventListener('click',function(){
    console.log('bfs_path start');
    bfs_path();
    console.log('bfs_path end');
    console.log("min node animation start");
});