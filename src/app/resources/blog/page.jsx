'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllBlogs } from '@/utils/blogData';
import BlogList from '@/components/blog/BlogList';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './blog.css';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  // Obtener categorías únicas de los blogs
  const categories = ['Todos', ...new Set(blogs.map(blog => blog.category))];
  
  useEffect(() => {
    // Simular carga de datos
    const fetchBlogs = async () => {
      try {
        // En un entorno real, esto podría ser una llamada a API
        const data = getAllBlogs();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar los blogs:', error);
        setLoading(false);
      }
    };
    
    fetchBlogs();
  }, []);
  
  // Filtrar blogs por categoría
  const filteredBlogs = activeCategory === 'Todos' 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);
  
  return (
    <>
      <Navbar />
      <div className="blog-list-container">
        <motion.div 
          className="blog-list-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Consejos y Recursos</h1>
          <p>Explora nuestros artículos sobre desarrollo personal, liderazgo, productividad y más para potenciar tu crecimiento profesional y personal.</p>
        </motion.div>
        
        {/* Filtro de categorías */}
        <motion.div 
          className="blog-categories"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`blog-category-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {loading ? (
          <div className="blog-loading">
            <p>Cargando artículos...</p>
          </div>
        ) : (
          <>
            {filteredBlogs.length > 0 ? (
              <BlogList blogs={filteredBlogs} />
            ) : (
              <div className="blog-empty-state">
                <p>No hay artículos disponibles en esta categoría.</p>
                <button 
                  className="blog-category-button active"
                  onClick={() => setActiveCategory('Todos')}
                >
                  Ver todos los artículos
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
}