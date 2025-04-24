import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Categories() {
  const articles = [
    {
      image: 'https://img.freepik.com/foto-gratis/hombres-mujeres-negocios-trabajando-tableta-oficina_1303-22827.jpg?t=st=1742446245~exp=1742449845~hmac=d600997e2031dc92ab79bf9a31798141e82c8865eb164ea153eb5f8648a901ef&w=1380',
      category: 'business',
      title: 'How Business Leaders Navigate Digital Transformation',
      date: 'May 15, 2025',
      comments: 12,
    },
    {
      image: 'https://img.freepik.com/foto-gratis/grupo-personas-trabajando-plan-negocios-oficina_1303-15879.jpg?t=st=1742446274~exp=1742449874~hmac=ec019a081c90808846541bcfa77f75c461e5dfd38f8304a304aebd391c9b4aa0&w=1380',
      category: 'business',
      title: 'Strategic Planning for Modern Enterprises',
      date: 'May 8, 2025',
      comments: 6,
    },
    {
      image: 'https://img.freepik.com/foto-gratis/cerrar-persona-sonriente-sala-conferencias_23-2149085996.jpg?t=st=1742446211~exp=1742449811~hmac=4e8f9d48d45abd6dec0352bb28420ce8c09b1c03b635745b4f0e1b749e38e66d&w=1380',
      category: 'single-person',
      title: 'Personal Growth Through Professional Development',
      date: 'May 12, 2025',
      comments: 8,
    },
    {
      image: 'https://img.freepik.com/foto-gratis/laboratorio-computacion-moderno-equipado_23-2149241262.jpg?t=st=1742446110~exp=1742449710~hmac=7efe1caeeaf5ff2a4619dee8db57627267fb2122ca9921bd688b15346ba7969a&w=1380',
      category: 'single-person',
      title: 'Building a Strong Personal Brand',
      date: 'May 5, 2025',
      comments: 10,
    },
    {
      image: 'https://img.freepik.com/foto-gratis/jovenes-empresarios-oficina-trabajando-tableta_23-2149206515.jpg?t=st=1742446163~exp=1742449763~hmac=c66b86239a4043cb00b0f38bf8b4a67413f490115becb73cbe4162bcd7348d53&w=1380',
      category: 'other',
      title: 'Innovation Trends Shaping the Future',
      date: 'May 10, 2025',
      comments: 15,
    },
    {
      image: 'https://img.freepik.com/foto-gratis/apreton-manos_1098-17050.jpg?t=st=1742446186~exp=1742449786~hmac=6058ace362559e0968c5b45ca4b2951dbf8a8f7c8e3aac5e38017d9f65233a97&w=1380',
      category: 'other',
      title: 'Emerging Technologies in Focus',
      date: 'May 3, 2025',
      comments: 9,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filterArticles = (category) => {
    setSelectedCategory(category);
  };

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
          Explore Coaching & News
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
          <option value="business">Business</option>
          <option value="single-person">Single Person</option>
          <option value="other">Other</option>
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
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-content">
              <div className="article-category">{article.category}</div>
              <h2 className="article-title">{article.title}</h2>
              <div className="article-meta">
                <span className="article-date">{article.date}</span>
                <span className="article-comments">{article.comments} comments</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
