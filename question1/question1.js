function lowerCaseWords(arr) {
    var resolveArray = [];

    let promise = new Promise((resolve, reject) => {
        arr.forEach(element => {
            if (typeof element === 'string') {
                element = element.toLowerCase();
                resolveArray.push(element);
            }
        });

        if (resolveArray.length > 0) {
            resolve(resolveArray);
        } else {
            reject('no strings in the array');
        }
    });

    return promise;
}

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"]; 

lowerCaseWords(mixedArray).then((result) => {
    console.log("Input Array: [" + mixedArray + "]")
    console.log(result);
}).catch(err => {
    console.log("Input Array: [" + mixedArray + "]")
    console.log(err)
})