const avo = { att:'A'}
const pai = {__proto__: avo, att2: 'b'}
const filho = {__proto__:pai, att3:'c'}

console.log(filho.att)
console.log(filho.att0)