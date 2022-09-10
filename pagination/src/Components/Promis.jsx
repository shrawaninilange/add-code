import React, { useEffect } from 'react'

const Promis = () => {
//     function fun1(){
//         return new Promise(function(resolve,reject){
//             setTimeout(()=>{
//                 const error = true
//                 if(!error){
//                     console.log("your are done")
//                     resolve()
//                 }
//                 else{
                    
//                     console.log("your promis not resolved")
//                     reject("soory")
//                 }

//             })
//         })
//     }

//     fun1().then(function(){
//         console.log("thanks for resolving")
//     })
//     .catch(function(error){
//         console.log("sorry very bad bro")
//     })

   
     function fun1(){
        return new Promise( function(res,rej){
          setTimeout(()=>{
            const error =true
            if(!error)
            {
                res("done")
            }
            else{
                rej("not")
            }

        })
        })
    }
    fun1().then(function(){
        console.log("thanks for resolving")
    })
    .catch(function(){
        console.log("n")
    })
  
  return (
    <div>Promis</div>
  )
}

export default Promis