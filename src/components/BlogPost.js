// src/components/BlogPost.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const blogPosts = [
    {
      id: 1,
      title: '10 Tips for Perfect Wedding Photography',
      excerpt: 'Learn how to capture the most important day of your life with these professional tips.',
      content: `
        <h2>Mastering Wedding Photography</h2>
        <p>Wedding photography requires a unique set of skills and preparation. From understanding lighting to capturing candid moments, this guide covers everything you need to know for perfect wedding photos.</p>
        
        <h3>1. Plan Ahead with the Couple</h3>
        <p>Meet with the couple before the wedding to understand their vision, preferred shots, and any special moments they want captured.</p>
        
        <h3>2. Scout the Location</h3>
        <p>Visit the wedding venue beforehand to identify the best spots for photos and understand the lighting conditions.</p>
        
        <h3>3. Prepare Your Equipment</h3>
        <p>Ensure you have backup equipment, extra batteries, and enough memory cards to capture the entire event without interruption.</p>
        
        <h3>4. Capture Candid Moments</h3>
        <p>Some of the best wedding photos are unposed. Keep your camera ready to capture spontaneous emotions and interactions.</p>
        
        <h3>5. Master Low-Light Photography</h3>
        <p>Weddings often involve dimly lit venues. Practice with your equipment to ensure you can capture clear images in various lighting conditions.</p>
        
        <p>By following these tips, you'll be well-prepared to capture beautiful memories that the couple will cherish for a lifetime.</p>
      `,
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80',
      date: '2023-10-15',
      author: 'Sarah Johnson',
      category: 'wedding',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Art of Pre-Wedding Photography',
      excerpt: 'Discover how pre-wedding shoots can help couples feel more comfortable in front of the camera.',
      content: `
        <h2>Creating Memorable Pre-Wedding Shoots</h2>
        <p>Pre-wedding photography sessions are becoming increasingly popular. They allow couples to get comfortable with their photographer and in front of the camera before the big day.</p>
        
        <h3>Benefits of Pre-Wedding Shoots</h3>
        <p>Pre-wedding shoots help couples become comfortable with being photographed, allowing for more natural and relaxed images on the wedding day.</p>
        
        <h3>Choosing the Right Location</h3>
        <p>Select a location that reflects the couple's personality and relationship. This could be where they first met, a favorite park, or a meaningful urban setting.</p>
        
        <h3>Creating a Relaxed Atmosphere</h3>
        <p>Help the couple relax by engaging them in conversation, playing their favorite music, or incorporating activities they enjoy doing together.</p>
        
        <h3>Storytelling Through Images</h3>
        <p>Use the pre-wedding shoot to tell the couple's love story. Capture images that reflect their journey together and their personalities.</p>
        
        <p>A successful pre-wedding shoot sets the tone for the wedding day and creates beautiful images that the couple can use in their wedding invitations or display at the reception.</p>
      `,
      image: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      date: '2023-09-28',
      author: 'Michael Chen',
      category: 'wedding',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Best Camera Equipment for Product Photography',
      excerpt: 'A comprehensive guide to choosing the right equipment for professional product photography.',
      content: `
        <h2>Essential Equipment for Product Photography</h2>
        <p>Product photography requires specific equipment to achieve the best results. From cameras and lenses to lighting equipment, this guide covers everything you need.</p>
        
        <h3>Camera Selection</h3>
        <p>While many cameras can produce good product photos, a DSLR or mirrorless camera with manual controls will give you the most flexibility and quality.</p>
        
        <h3>Lens Choices</h3>
        <p>A macro lens is ideal for small products, while a standard 50mm or 85mm prime lens works well for larger items. Zoom lenses offer versatility for various product sizes.</p>
        
        <h3>Lighting Equipment</h3>
        <p>Softboxes, light tents, and reflectors help create even, diffused lighting that minimizes harsh shadows and highlights product details.</p>
        
        <h3>Tripods and Stabilization</h3>
        <p>A sturdy tripod is essential for keeping your camera steady, especially when using longer exposures or shooting in lower light conditions.</p>
        
        <h3>Backdrops and Surfaces</h3>
        <p>Invest in a variety of backdrops and surfaces to create different moods and styles for your product photography.</p>
        
        <p>With the right equipment and techniques, you can create professional product images that showcase items in their best light and help drive sales.</p>
      `,
      image: 'https://images.unsplash.com/photo-1606778303242-8787b2b45be9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      date: '2023-09-15',
      author: 'Emma Rodriguez',
      category: 'equipment',
      readTime: '7 min read'
    }
  ];

  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return (
      <section className="blog-post">
        <div className="container">
          <div className="not-found">
            <h2>Blog Post Not Found</h2>
            <p>The requested blog post could not be found.</p>
            <button onClick={() => navigate('/blogs')} className="cta-button">
              Back to Blogs
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-post">
      <div className="container">
        <button onClick={() => navigate('/blogs')} className="back-button">
          <i className="fas fa-arrow-left"></i> Back to Blogs
        </button>

        <article className="post-content">
          <header className="post-header">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-meta">
              <span className="post-category">{post.category}</span>
              <h1>{post.title}</h1>
              <div className="post-details">
                <span className="post-author">By {post.author}</span>
                <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
                <span className="post-read-time">{post.readTime}</span>
              </div>
            </div>
          </header>

          <div 
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className="post-footer">
            <div className="post-tags">
              <span>Tags:</span>
              <a href="#">#{post.category}</a>
              <a href="#">#photography</a>
              <a href="#">#tips</a>
            </div>
            
            <div className="social-share">
              <span>Share this post:</span>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </footer>
        </article>

        <div className="related-posts">
          <h2>Related Posts</h2>
          <div className="related-grid">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map(relatedPost => (
                <div key={relatedPost.id} className="related-card" onClick={() => navigate(`/blog/${relatedPost.id}`)}>
                  <img src={relatedPost.image} alt={relatedPost.title} />
                  <h3>{relatedPost.title}</h3>
                  <p>{relatedPost.excerpt}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPost;
