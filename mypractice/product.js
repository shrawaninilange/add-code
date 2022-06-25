var container  = document.getElementById("container")
 
    var url =" https://fakestoreapi.com/products"


    async function getData(){
      
            let res =await fetch(url)
         
            let data =await res.json()
            appendproducts(data)
            console.log("data",data)
         
        
    }       

    getData()

    function appendproducts(data){
        console.log(data)
        data.forEach(function (el) {
            var div =document.createElement("div")
            
            let img =document.createElement("img")
            img.src=el.image

            let title =document.createElement("p")
            title.innerText=el.title   

            let price =document.createElement("p")
            price.innerText=el.price



            div.append(img,title,price)

            container.append(div);
      
        })
    }

    
 