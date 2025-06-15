import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        {blog.image && (
          <Image 
            src={blog.image} 
            alt={blog.title} 
            width={400} 
            height={200} 
            priority={false}
          />
        )}
      </div>
      <div className="blog-card-content">
        {blog.category && (
          <span className="blog-card-category">{blog.category}</span>
        )}
        <h3 className="blog-card-title">{blog.title}</h3>
        <p className="blog-card-excerpt">{blog.description}</p>
        <div className="blog-card-meta">
          <span className="blog-card-author">Por {blog.author}</span>
          <span className="blog-card-date">{blog.date}</span>
        </div>
        <Link href={`/resources/blog/${blog.slug}`} className="blog-read-more">
          Leer más <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}