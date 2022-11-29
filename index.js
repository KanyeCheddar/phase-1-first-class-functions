function receivesAFunction(cb){
    return cb();
} 

function returnsANamedFunction(){
    return function akeem() {
        return "dookie+3";
    }
} 

function returnsAnAnonymousFunction() {
    return function () {
        return "akeem";
    }
}