//***************************************** Assignment ***************************************************

// ****************************************Topic : Asynchronous*******************************************

// ****************************************Question # 1*******************************************

async function fetchGreeting() {
    return setTimeout(() => {
        console.log("Hellow,How are you?");
        
    }, 2000);
    
}
 fetchGreeting()

//  ****************************************Question # 2*****************************************
 function simulateTask() {
    console.log("Task Started");
    setTimeout(() => {
        
        console.log("Task Completed");
        
    }, 1000);
    
    
}
simulateTask()

// ***********************************************Question # 3**************************************
function fetchdata() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Data fetch successfully!")
            
        }, 1000);
    })
}
fetchdata()
.then((res)=>{console.log(res);
})
// ******************************************Question # 4*************************************************

function fetchWithError(){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            if (Math.random() < 0.4)
            resolve("Data fetched successfully!")
            reject("Data fetch failed!")
        }, 1000);
    })
}
fetchWithError()
.then((res)=>{
    console.log(res);
})
.catch((Error)=>{
    console.log(Error);
})
// *********************************************Question # 5***********************************************
function fetchdata1(){
    return new Promise ((res)=>{
            res("data fetch successfully")
    })
}

function processData(){
   return new Promise((resolve)=>{
   setTimeout(() => {
    resolve("data processing.....")
   }, 3000);
   }) 
}

function executeSequentially(){
    fetchdata1()
    .then((result)=>console.log(result));

    processData()
    .then((res)=>console.log(res))   
}
executeSequentially()