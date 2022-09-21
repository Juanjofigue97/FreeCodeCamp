function quickCheck(arr, elem) {
    if(arr.indexOf(elem) < 0){ // indexof -> -1 si el elemento no esta, o si esta da su ubicación.
        return false
    }else{
        return true;
    }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));