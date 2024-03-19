import React, { useEffect, useState } from 'react';
import { client } from '../../client';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const [singleBlogPost, setSingleBlogPost] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const getEntryById = async () => {
      try {
        const entry = await client.getEntry(id);
        setSingleBlogPost(entry);
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getEntryById();
  }, [id]);

  return (
    <body className='body-blog'>
      <div className="container-detail">
        <section className="blog-post">
          <img className="post-image-full" src={singleBlogPost?.fields?.images?.fields?.file?.url} title="" alt={singleBlogPost?.fields?.titles}  />
          <h2 className='title-ps'>{singleBlogPost?.fields?.titles}</h2>
          <div className='test'>
          <pre className="texto-detail" dangerouslySetInnerHTML={{ __html: singleBlogPost?.fields?.content }} />
          </div>
        </section>
      </div>
    </body>
  );
};

export default BlogDetails;
