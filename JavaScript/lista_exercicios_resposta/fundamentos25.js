function contador () {
    for (let i = 1; i<=50; i++) {
        console.log(i);
    }
}
contador()


function par(){
    
    let grupo = []
    let i = 1
    while (i<100){
        grupo.push(i)
        i ++    
        
    }
    
    return grupo

    function pares1(){
        let a = 1
        let pares = []
        if (grupo(a)%2==0){
            a++
            pares.push(a)


        }return console.log(pares)
    }
    
  

}

console.log(par.pares1())