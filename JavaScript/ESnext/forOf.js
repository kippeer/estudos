for (let letras of "Fabio"){
    console.log(letras)
}

const assuntosEc = ['map','set', 'promise']

for (let i in assuntosEc){
    console.log(i)
}

for (let assunto of assuntosEc){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map',{abordado: true}],
    ['Promise',{abordado: false}],

])

for ( let  assunto1 of assuntosMap){
    console.log(assunto1)
}

for( let chave of assuntosMap.keys()){
    console.log(chave)
}

for (let valor of assuntosMap.values()){
    console.log(valor)
}


for ( let[ch,vl] of assuntosMap.entries()){
    console.log(ch,vl)
}

const s = new Set(['a' , 'b' , 'c'])
for ( let i of s){
    console.log(i)
}

