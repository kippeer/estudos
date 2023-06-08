Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.aply([].this.map(callback))
}