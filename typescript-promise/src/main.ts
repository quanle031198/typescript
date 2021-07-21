let money = 10000;
const buyACar = (car:any) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 1000){
                resolve("Can buy: "+ money);
            }else{
                reject("Do not enough money");
            }
        },100);
    }))
}

money = 1000001;
const promise = buyACar("Vinfast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
})