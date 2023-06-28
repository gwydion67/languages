// // program to try out promises

// function placeOrder(drink){
//     return new Promise(function(resolve,reject){
//         if(drink == 'coffee')
//         {
//             resolve('order received');
//         }
//         else {
//             reject('order rejected')
//         }
//     })
// }

// function processOrder(order){
//     return new Promise(function(resolve){
//         console.log('order is being processed')
//         resolve(`${order} is served`)
//     })
// }

// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced)
//     let orderIsProcessed = processOrder(orderPlaced);
//     return orderIsProcessed;

// }).then(function(processedOrder){
//     console.log(processedOrder)
// }).catch(function(err){
//     console.log(err)
// }) // this is know as chaining of promises

/////////////////////////////////////////////
/// what the faq is happening above ::
// simplified code for the same


function placeOrder(drink){
    let pr =  new Promise(function(resolve,reject){
        if(drink == 'coffee')
        {
            resolve('order received');
        }
        else {
            reject('order rejected')
        }
    })
    return pr;
}

function processOrder(order){
    let pr =  new Promise(function(resolve){
        console.log('order is being processed')
        resolve(`${order} is served`)
    })
    return pr;
}


let ordercoffee = placeOrder('coffee')
let processcoffee = ordercoffee.then(function(orderPlaced){
    console.log(orderPlaced)
    let orderIsProcessed = processOrder(orderPlaced);
    return orderIsProcessed;

})

processcoffee.then(function(processedOrder){
    console.log(processedOrder)
}).catch(function(err){
    console.log(err)
})

//async await

async function serveOrder(){

    try {
        let orderPlaced = await placeOrder('coffee');
        console.log(orderPlaced);
        let processedOrder = await processOrder(orderPlaced)
        console.log(processedOrder)
        
    } catch (error) {
        console.log(error);
    }

}

serveOrder();