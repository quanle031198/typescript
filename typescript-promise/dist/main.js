let money = 10000;
const buyACar = (car) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 1000) {
                resolve("Can buy: " + money);
            }
            else {
                reject("Do not enough money");
            }
        }, 10);
    }));
};
money = 100001;
const promise = buyACar("Vinfast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
});
//# sourceMappingURL=main.js.map