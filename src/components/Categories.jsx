import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogs } from '@/utils/blogData';

export default function Categories() {
  // Usar los primeros 6 blogs de nuestro archivo blogData.js
  const articles = blogs.slice(0, 6).map(blog => ({
    id: blog.id,
    slug: blog.slug,
    image: blog.image,
    category: blog.category,
    title: blog.title,
    date: blog.date,
    comments: Math.floor(Math.random() * 15) + 5, // Número aleatorio de comentarios entre 5 y 20
  }));

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterArticles = (category) => {
    setSelectedCategory(category);
  };

  // Obtener categorías únicas de los artículos
  const categories = ['all', ...new Set(articles.map(article => article.category))];

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="container-categories" id='events'>
      <header className="header-categories">
        <motion.h1
          className="title-categories"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Guidance & Resources
        </motion.h1>
      </header>

      <div className="filter-container">
        <select
          className="filter-select"
          id="categoryFilter"
          value={selectedCategory}
          onChange={(e) => filterArticles(e.target.value)}
        >
          <option value="all">Explore by</option>
          {categories.filter(cat => cat !== 'all').map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="articles-grid">
        {filteredArticles.map((article, index) => (
          <motion.article
            className="article-card"
            key={article.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link href={`/resources/blog/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={article.image} alt={article.title} className="article-image" />
              <div className="article-content">
                <div className="article-category">{article.category}</div>
                <h2 className="article-title">{article.title}</h2>
                <div className="article-meta">
                  <span className="article-date">{article.date}</span>
                  {/* <span className="article-comments">{article.comments} comments</span> */}
                </div>
                <div className="article-button-container">
                  <button className="article-button" style={{ width: "100%" }}>Leer más</button>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
