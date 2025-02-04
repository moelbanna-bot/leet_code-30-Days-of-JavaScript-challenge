var cancellable = function(fn, args, t) {
    let fnTimer = setTimeout(()=>{
        fn(...args)
    },t);
    return function(){
        clearTimeout(fnTimer);
    }
};