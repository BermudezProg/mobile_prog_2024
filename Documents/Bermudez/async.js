// ? asynch func are a way to work with asycnhronous code in a more aschronous way. They are built on top of promises and are syntactic sugar for promises.

console.log("Ordering your pizaa...");

//creating a promise
const pizzaPromise = () => {
    return new Promise((resolve,reject) => {

        //resolve and reject are callback func
        //what is callback func?
        //A callback function is a function that is passed as an argument to another function, to be "called back" at a later time. 

        let order = true;

        if (order) {

            setTimeout(() => { // set timeout is used to simulatea a delay
                resolve("after 5 seconds, pizza delivered!");
            },5000);

        } else {

            setTimeout(() => {
                reject("after 5 seconds, pizza not delivered");
            }, 5000);
        }
    });
}


//use .then() to handle resolved promise
//use .catch() to handle the rejected promise

pizzaPromise()
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

console.log("waiting for your pizza...");
        
        

