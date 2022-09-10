import React from 'react'

const Post = ({ post ,loading}) => {
 if(loading){
    return <div>load</div>
 }
   
  return (
     <ul>
        {
            post.map((e)=>{
              return (
                <h2 key={e.id}>{e.title}</h2>
              )
            })
        }
     </ul>
  )
}

export default Post