
    function Search(){
        var container= document.getElementById("container") 
        container.innerText=""
        async function getdata(){
             try {
                 
                var filmName = document.getElementById("movi").value
                var res = await fetch(`http://www.omdbapi.com/?apikey=8e2cdc3&s=${filmName}`)

                var data = await res.json()
                console.log(data)
                display(data)
             } catch (error) {
                 console.log(error)
             }
         }
 
                getdata()
          }


//           function display(data){
//     console.log("data:",data)
    
//     data.Search.forEach(function(el) {
      
//         let div=document.createElement("div")

//         let poster=document.createElement("img")
//         poster.src=el.Poster
//         poster.setAttribute("id","moive")

//         let p=document.createElement("h2")
//         p.innerText=el.Title
//         p.setAttribute("id","new")

        // let imdb=document.createElement("h1")
        // imdb.innerText=random

//         let year=document.createElement("p")
//         year.innerText=el.Year
//         year.setAttribute("id","new1")

//         div.append(poster,p,year);

//         container.append(div)

//   });
// }






   
          function display(data){

            console.log(data)
               

              data.Search.forEach(function(el){

                let div = document.createElement("div")

                let poster = document.createElement("img")
                poster.src= el.Poster
                poster.setAttribute("id","moive")

                let p2 = document.createElement("h1")
                p2.innerText= el.Title
                p2.setAttribute("id","new")

       

                let p1 = document.createElement("h3")
                p1.innerText= el.Year
                p1.setAttribute("id","new1")
                          
        // let imdb=document.createElement("h1")
        // imdb.innerText=el.Imdb


            div.append(poster,p2,p1)
            container.append(div)


              })
          }
