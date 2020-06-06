
// Complete the rotLeft function below.
function rotLeft(a, d) {
    var temp = 0;
    a = a%d.length;
    for(var i = 0; i < a; i++){
        temp = d[0];
        for(var j = 0; j < d.length-1; j++){
            d[j] = d[j+1];   
        }
        d[d.length-1] = temp
    }
    return d
    
}
