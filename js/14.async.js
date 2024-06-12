const add = (n1, n2) => n1 + n2;

add(4, 5);

console.log("hi");


// whats the output

console.log("1");

setTimeout(() => {
    console.log("2");
}, 2000);

console.log("3");

for (let i = 0; i < 100000; i++) {
    console.log(i);
}

console.log("after loop");

setTimeout(() => {
    console.log("4")
}, 0);

// Promise
// class

// 3 states
// pending promise
// fulfilled promise
// rejected promise
const promiseObj = new Promise((resolve, reject) => {
    // async code
    // resolve => fn => accepts n number of params
    // it sets the status to fulfilled
    // it calls the callback passed to then
    resolve("this is the resolve string");

    // reject => fn => accepts n number of params
    // it sets status to rejected
    // it calls the callback passed to catch
    reject("this is the reject string");
    console.log("after reject")
});
// calls the constructor of the Promise class

// properties
// 1. prototype => Promise
// 2. promisestate => pending | fulfilled | rejected
// 3. promiseresult => ANYTHING

// methods
// 1. then    => accepts a callback -> returns the same promise obj -> this
// 2. catch   => accepts a callback -> returns the same promise obj -> this
// 3. finally => accepts a callback -> returns the same promise obj -> this

// method chaining
promiseObj
    .then(data => {
        console.log(data.toUpperCase());
    })
    .catch(err => {
        console.log("in catch")
        console.log(err.toUpperCase());
    })
    .finally();


const getUsers = (success, error) => {
    const users = [
        { name: "A" },
        { name: "B" },
        { name: "C" }
    ];

    setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
            success(users);
        } else {
            error("something went wrong")
        }
    }, 3000);
}

const getProducts = (success, error) => {
    const products = [
        { name: "A", cat: "1" },
        { name: "B", cat: "2" },
        { name: "C", cat: "3" }
    ];

    setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
            success(products);
        } else {
            error("something went wrong")
        }
    }, 3000);
}

const getPrices = (success, error) => {
    const prices = [{ amount: 100 }, { amount: 200 }, { amount: 300 }]
    setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
            success(prices);
        } else {
            error("something went wrong")
        }
    }, 3000);
}

// CALLBACK HELL
getUsers(users => {
    console.log(users);
    getProducts(products => {
        console.log(products);
        getPrices(prices => {
            console.log(prices, products, users)
        }, priceErr => {
            console.log(priceErr);
        })
    }, productErr => {
        console.log(productErr)
    })
}, userErr => {
    console.log(userErr)
});

const getUsersWithPromise = () => {
    return new Promise((resolve, reject) => {
        const users = [
            { name: "A" },
            { name: "B" },
            { name: "C" }
        ];

        setTimeout(() => {
            const random = Math.random();
            if (random > 0.5) {
                resolve(users);
            } else {
                reject("something went wrong")
            }
        }, 3000);
    })
}

const getProductsWithPromise = () => {
    return new Promise((resolve, reject) => {
        const products = [
            { name: "A", cat: "1" },
            { name: "B", cat: "2" },
            { name: "C", cat: "3" }
        ];

        setTimeout(() => {
            const random = Math.random();
            if (random > 0.5) {
                resolve(products);
            } else {
                reject("something went wrong")
            }
        }, 3000);
    })
}

const getPricesWithPromise = () => {
    return new Promise((resolve, reject) => {
        const prices = [{ amount: 100 }, { amount: 200 }, { amount: 300 }]
        setTimeout(() => {
            const random = Math.random();
            if (random > 0.5) {
                resolve(prices);
            } else {
                reject("something went wrong")
            }
        }, 3000);
    })
}

const userPromise = getUsersWithPromise();

userPromise.then(users => {
    console.log(users);
    return getProductsWithPromise();
}).then(products => {
    console.log(products);
    return getPricesWithPromise();
}).then(prices => {
    console.log(prices);
    // how to get access to users here!
}).catch(err => {
    console.log(err);
});

// async await