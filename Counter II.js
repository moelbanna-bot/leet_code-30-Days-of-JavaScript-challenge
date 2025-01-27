var createCounter = function(init) {
    let counter = init;
    function increment(){
        return counter += 1;
    }
    function decrement(){
        return counter -= 1;
    }
    function reset() {
        counter = init;
        return init;
    }
    return {increment,decrement,reset};
};