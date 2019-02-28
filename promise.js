function without() {
    setTimeout(function() {
        console.log("tarda 1 segundos")
    },1000);
    setTimeout(function() {
        console.log("tarda 4 segundos")
    },5000);
}    

function within () {
    var promise1 = function() {
        return new Promise(function(resolver, cancelar) {
            setTimeout(function() {
                console.log("pasan 4 segundos");
                resolver();

            }, 4000);
        });
    }
    var promise2 = function() {
        return new Promise(function(resolver, cancelar) {
            setTimeout(function() {
                console.log("pasan 1 segundos");
                resolver();
            }, 1000);
        });
    }

    promise1().then(promise2).then(function() {
        console.log("termino");
    });
}
module.exports.without = without;
module.exports.within = within;