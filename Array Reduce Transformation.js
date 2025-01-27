var reduce = function(nums, fn, init) {
    let accumulator = init;
    for (const num of nums) {
        accumulator = fn(accumulator, num);
    }
    return accumulator;
};