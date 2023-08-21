interface SumAttrs {
    a:number;
    b:number
}

const sum = ({a,b}:SumAttrs)=>{
    
    return a+ +b;
}

console.log(sum({a:12,b:18}))