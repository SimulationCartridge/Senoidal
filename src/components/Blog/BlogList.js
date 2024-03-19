import React, { useEffect, useState } from 'react'
import { client } from '../../client'
import { Link } from 'react-router-dom';

const BlogList = () => {

const [blogPosts, setBlogPosts] = useState([])



useEffect(() => {
    client.getEntries()
      .then((response) => {
        console.log(response);
        setBlogPosts(response.items);
      })
      .catch(console.error);
  }, []); 
  return (
    <section className='list-container'>
        <h3 class="header-posts">Posts</h3>
        <div class="posts-container">  
            {blogPosts.map((post) => (
              <div key={post.sys.id}
              className='post'>
                <div  className='image-container'>
                  <img className="post-image"
                  src={post.fields.images.fields.file.url} 
                  alt={post.fields.titles} 
                   />
                  <Link 
                  className='overlay'
                  to={`/archivo/${post.sys.id}`}>
                    Leer más
                    
                    <h2
                  className='overlay-text'>
                    {post.fields.title}
                    </h2>
                  </Link>

                </div> 
              </div>
            ))}
        </div>
        </section>
  )
}

export default BlogList