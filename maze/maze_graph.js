alert('2345345');
let hash_map = new Map();
class coodinate_point {
    constructor(vertical,horizontal){
        this.vertical = vertical;
        this.horizontal = horizontal;
    }
}
for(let j=1;j<vertical_height/vetrical_devide;j++){
    for(let i=0;i<horizontal_width/horizontal_devide;i++){
        let a = new coodinate_point(j-1,i);
        let b = new coodinate_point(j,i);
        // key = a
        if(j>0){
            if(hash_map.has(a)){
                console.log(hash_map.has(a));
                console.log('has ',i,",",j);
                hash_map.set(a,[0,]);
                let l =  hash_map.get(a) ;
                console.log(l);
                // l.push(b);
                hash_map.set(a,l);
            }else{
                let l =  hash_map.get(a) ;
                console.log('l = ',l);
                // l.push(b);
                hash_map.delete(a);
                hash_map.set(a,l);
            }
        }
        // key = b
        if(!hash_map.has(b)){
            hash_map.set(b,[0]);
            let l =  hash_map.get(b) ;
            l.push(a);
            hash_map.set(b,l);
        }else{
            let l =  hash_map.get(b) ;
            l.push(a);
            hash_map.delete(b);
            hash_map.set(b,l);
        }
    }
}
console.log(hash_map);