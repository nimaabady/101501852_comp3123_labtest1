function resolvedPromise(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = {"message": "delayed success!"}
            resolve(success)
        }, 500)
    })
    return promise;
}

function rejectedPromise(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                throw new Error("error: delayed exception!")
            } catch (error) {
                reject(error)
            }
        }, 500)
    })
    return promise;
}

resolvedPromise().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})

rejectedPromise().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})