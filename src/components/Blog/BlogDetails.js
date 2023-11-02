import React, { useEffect, useState } from 'react';
import { client } from '../../client';
import { useParams } from 'react-router-dom';
import * as marked from 'marked';

const BlogDetails = () => {
  const [singleBlogPost, setSingleBlogPost] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          setSingleBlogPost(entries)
        })
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getEntryById()
  }, [id])

  const renderMarkdown = (content) => {
    return { __html: marked(content) };
  }

  return (
    <div className="container-detail">
      <section className="blog-post">
        <img className="post-image-full" src={singleBlogPost?.fields?.images?.fields?.file?.url} title="" alt={singleBlogPost?.fields?.titles} />
        <h2>{singleBlogPost?.fields?.titles}</h2>
        <div className="content" dangerouslySetInnerHTML={renderMarkdown(singleBlogPost?.fields?.content)} />
      </section>
    </div>
  );
};

export default BlogDetails;
