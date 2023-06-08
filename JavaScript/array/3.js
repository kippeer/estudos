const quaseArray = {o:'Rafael',1:'Ana',2:'bia'}

console.log(quaseArray)

Object.defineProperty(quaseArray,'toString',{value:function(){return Object.values(this)},enumarable:false})


console.log(quaseArray[0])

