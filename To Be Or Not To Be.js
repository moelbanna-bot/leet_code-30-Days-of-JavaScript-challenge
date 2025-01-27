var expect = function(val) {
    function toBe(val2) {
        if (val !== val2) { throw new Error("Not Equal") 
         } else return true;
    }
    function notToBe(val2){
       if (val === val2) { throw new Error("Equal")
    } else return true;
    }
    return {toBe,notToBe};
};