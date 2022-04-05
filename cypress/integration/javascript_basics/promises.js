function getNumber(currency){
    return new Promise((resolve,reject)=>{
        if(typeof currency != "number"){
            reject(new Error("Currency is not a number"))
        }else{
            resolve(currency)
        }

    })
}

getNumber(1000).then((val)=>{
    console.log('value : ' ,val);
})