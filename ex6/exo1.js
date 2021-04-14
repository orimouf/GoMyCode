p0+=p0*percent/100+aug;
function nbYear(p0, percent, aug, p) {
    let n=0;
    while(p0<p){
     
       p0+=p0*percent/100+aug;
       n++;
      
    }
  return n;
}

console.log(nbYear(100,2/100 ,50,1200));


function maskify(str) {
    if(str.lenght > 4) {
        for (let i = 0; i < str.length-4; i++) {
            srt = srt.replace(str[i], "#");
            
        }
    }
    return srt;
}

console.log(maskify("4556364607935616"));