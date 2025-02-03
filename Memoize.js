function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (!(key in cache)) {
            return cache[key] = fn(...args);
        } else {
            return cache[key];
        }
    }
}