function falarD(segundos,frase){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(frase) /// reject(frase)
        }), segundos *1000
    })
}


falarD(3, 'que legal')
    .then(frase=>frase.concat('.1.2.45.'))
    .then(outrafrase=> console.log(outrafrase))
    .catch(e=>console.log(e))

