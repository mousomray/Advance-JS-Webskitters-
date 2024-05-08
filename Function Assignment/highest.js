
function highest(a,b,c){
    if(a>b){
        if(a>c){
            return a;
        }
        else {
            return c;
        }
    }
    else {
        if(a>c){
            return b;
        }
        else {
            return c
        }
    }
}

console.log(highest(50,20,30));