'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getBlogBySlug, getRelatedBlogs } from '@/utils/blogData';
import BlogDetail from '@/components/blog/BlogDetail';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../blog.css';

export default function BlogDetailPage() {
  const params = useParams();
  const { slug } = params;
  
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simular carga de datos
    const fetchBlog = async () => {
      try {
        // En un entorno real, esto podría ser una llamada a API
        const blogData = getBlogBySlug(slug);
        setBlog(blogData);
        
        if (blogData) {
          const related = getRelatedBlogs(slug, 3);
          setRelatedBlogs(related);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar el blog:', error);
        setLoading(false);
      }
    };
    
    if (slug) {
      fetchBlog();
    }
  }, [slug]);
  
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="blog-detail-container">
          <div className="blog-loading">
            <p>Cargando artículo...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="blog-detail-container">
          <div className="blog-not-found">
            <h2>Artículo no encontrado</h2>
            <p>Lo sentimos, el artículo que buscas no existe o ha sido movido.</p>
            <Link href="/resources/blog" className="blog-back-link">
              <ArrowLeft size={16} /> Volver a todos los artículos
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <div className="blog-detail-wrapper">
        <Link href="/resources/blog" className="blog-back-link">
          <ArrowLeft size={16} /> Volver a todos los artículos
        </Link>
        <BlogDetail blog={blog} relatedBlogs={relatedBlogs} />
      </div>
      <Footer />
    </>
  );
}