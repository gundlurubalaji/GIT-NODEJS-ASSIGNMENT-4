const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.get("/home",(req,res)=>{
    console.log("home is rendering")
    res.send("welcome to home")
})


app.post("/add",(req,resp)=>{
    const{num1,num2}=req.body
    console.log(typeof num1)
    if(  typeof num1 !== "number"|| typeof  num2 !== "number"){
        resp.status(400).json({
            status:"error",
            messgage:"invalid datatype"
        });
    }
    sum =num1+num2
    if(sum < -10000000 ||num1<-10000000 || num2<-1000000) {
        resp.status(400).json({
            messgage:"underfolw",
            status:"failure"
        })
    }
    if(sum >10000000|| num1>10000000 || num2<1000000){
        resp.status(400).json({
            message:"overflow",
            status:"failure"

        })
    }
    else{
        resp.status(200).json({
            status:"success",
            message:"the sum of the given numbers",
            result:sum
        })

    }
    
    
})
// app.post("/sub",(req,resp)=>{
//     const {num1,num2}=req.body
//     if(typeof num1 !=="number" || typeof num2 !=="number"){
//         resp.status(400).json({
//             status:"error",
//             message:"invalid datatypes"
            
//         })
//     }
//     sub =num1-num2
//     if(sub < -10000000 ||num1<-10000000 || num2<-1000000){
//         resp.status(400).json({
//             status:"failure",
//             message:"underflow"
//         })
//     }
//     if(sub>10000000 ||num1>10000000 || num2>1000000){
//         resp.status(400).json({
//             status:"failure",
//             message:"overflow"
//         })
//     }
//     else{
//         resp.status(200).json({
//             status:"success",
//             message:"the subtraction of given numbers ",
//             results:sub
//         })
//     }
// })

//     app.post("/multiply",(req,resp)=>{
//         const{num1,num2}=req.body
//         if(typeof num1 !=="number" || typeof num2 !=="number"){
//             resp.status(400).json({
//                 status:"error",
//                 message:"invalid datatypes"
//             })
//         }
//         multiply= num1*num2
//         if(multiply <-10000000 ||num1<-10000000 || num2<-1000000){
//             resp.status(400).json({
//                 status:"failure",
//                 message:"underflow"
//             })
//         }
//         if(multiply>10000000 ||num1>10000000 || num2>1000000){
//             resp.status(400).json({
//                 statsu:"failure",
//                 message:"overflow"
//             })
//         }
//         else{
//             resp.status(200).json({
//                 status:"success",
//                 message:"the given multiply number is ",
//                 results:multiply
//             })
//         }
//     })
    
//     app.post("/divide",(req,resp)=>{
//         const{num1,num2}=req.body
//         if(typeof num1 !=="number"|| typeof num2 !=="number"){
//             resp.status(400).json({
//                 status:"error",
//                 messaage:"invalid datatypes"
//             })
//         }
//         // console.log(divide)
//         if(num2 ==0){
//             resp.status(400).json({
//                 status:"error",
//                 message:"Cannot divide by zero"
                
//             })
//         } 

//         divide=num1/num2

//         if(divide < -10000000 ||num1<-10000000 || num2<-1000000){
//             resp.status(400).json({
//                 status:"failure",
//                 message:"uderflow"
//             })
//         }
//         if(divide >10000000 ||num1>10000000 || num2>1000000){
//             resp.status(400).json({
//                 status:"failure",
//                 message:"overflow"
//             })
//         }
//         else{
//             resp.status(200).json({
//                 status:"success",
//                 message:"the divide number is ",
//                 results:multiply
//             })
//         }
//     })
   

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;