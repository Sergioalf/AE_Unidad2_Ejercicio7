function without() {
    console.log("hola");
}
  
function help(fn) {
    var name = "Sergio";
    fn(name);
}

function within() {
    help(function(name) {
        console.log("hola " + name);
    });  // "hola Pepe"
}

module.exports.within = within;
module.exports.without = without;