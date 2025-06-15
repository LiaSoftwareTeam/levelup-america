import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogDetail({ blog, relatedBlogs }) {
  if (!blog) return null;

  return (
    <motion.div 
      className="blog-detail-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="blog-detail-header">
        {blog.category && (
          <span className="blog-detail-category">{blog.category}</span>
        )}
        <h1 className="blog-detail-title">{blog.title}</h1>
        <div className="blog-detail-meta">
          <span className="blog-detail-author">Por {blog.author}</span>
          <span className="blog-detail-date">{blog.date}</span>
        </div>
      </div>

      {blog.image && (
        <div className="blog-detail-image">
          <Image 
            src={blog.image} 
            alt={blog.title} 
            width={900} 
            height={400} 
            priority={true}
          />
        </div>
      )}

      <div className="blog-detail-content">
        {/* Renderizar el contenido del blog */}
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>

      {blog.tags && blog.tags.length > 0 && (
        <div className="blog-detail-tags">
          {blog.tags.map((tag, index) => (
            <span key={index} className="blog-detail-tag">{tag}</span>
          ))}
        </div>
      )}

      {relatedBlogs && relatedBlogs.length > 0 && (
        <div className="related-blogs">
          <h3>Artículos relacionados</h3>
          <div className="related-blogs-grid">
            {relatedBlogs.map((relatedBlog, index) => (
              <div key={index} className="blog-card">
                <div className="blog-card-image">
                  {relatedBlog.image && (
                    <Image 
                      src={relatedBlog.image} 
                      alt={relatedBlog.title} 
                      width={300} 
                      height={150} 
                      priority={false}
                    />
                  )}
                </div>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">{relatedBlog.title}</h3>
                  <p className="blog-card-excerpt">{relatedBlog.description}</p>
                  <Link href={`/resources/blog/${relatedBlog.slug}`} className="blog-read-more">
                    Leer más
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}