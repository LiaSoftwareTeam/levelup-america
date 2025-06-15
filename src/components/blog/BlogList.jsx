import { motion } from 'framer-motion';
import BlogCard from './BlogCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function BlogList({ blogs }) {
  return (
    <motion.div 
      className="blog-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {blogs.map((blog, index) => (
        <motion.div key={blog.id || index} variants={itemVariants}>
          <BlogCard blog={blog} />
        </motion.div>
      ))}
    </motion.div>
  );
}