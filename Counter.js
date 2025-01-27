var createCounter = function(n) {
    let counter = n - 1;
    return function() {
        return ++counter;
    };
};
