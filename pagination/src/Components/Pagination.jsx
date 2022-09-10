import React from 'react'
import { Link } from 'react-router-dom'
 
const Pagination = ({postperPage,totalpost,paginate}) => {

    const pageNumber =[]
    for(var i =1 ;i<=Math.ceil(totalpost/postperPage); i++)
    {
        pageNumber.push(i)
    }

  return (
  
     <nav>
     <ul>
      {
        pageNumber.map((num)=>{
         return  <li className='tt' key={num}>
              <Link to="/post" onClick={()=>paginate(num)}> <h1 className='h1'>{num}</h1></Link>
                      </li>
        })
           

  
            
          
}
      </ul>
     </nav>
 

  )
}

export default Pagination