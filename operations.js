// 1st async function
const fetchData = callback =>{
    setTimeout(()=>{
        callback('Done!')
    },1500)
}
//2nd async function calls 1st function
setTimeout(()=>{
    console.log("2nd function!")
    fetchData(text=>{
        console.log(text)
    })
},2000)

// below is synchronous function JS never block any functions so this will execute first.
console.log('Hi')


// Promise implementation
const fetchPromiseData = () =>{
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Done!')
        },1500)
    }) 
}
//2nd async function calls 1st function
setTimeout(()=>{
    console.log("2nd function!")
    fetchPromiseData().then(text=>{
        console.log(text)
        return fetchPromiseData
    })
    .then(text2=>{
        console.log(text2)
    })
},2000)