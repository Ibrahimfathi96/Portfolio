import "./blog.css";
import { motion } from "framer-motion";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Best Practices for React Native Performance Optimization",
      excerpt:
        "Learn the essential techniques to make your React Native apps lightning-fast and provide smooth user experiences across platforms.",
      category: "React Native",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      tags: ["Performance", "React Native", "Mobile"],
    },
    {
      id: 2,
      title: "Flutter vs React Native: A Developer's Perspective",
      excerpt:
        "Having built 14+ apps with both frameworks, here's my honest comparison and when to choose each technology.",
      category: "Mobile Development",
      readTime: "12 min read",
      date: "Nov 28, 2024",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      tags: ["Flutter", "React Native", "Comparison"],
    },
    {
      id: 3,
      title: "Building Scalable Mobile Apps: Architecture Patterns",
      excerpt:
        "Discover the architecture patterns that helped me deliver professional-grade mobile applications for clients worldwide.",
      category: "Architecture",
      readTime: "10 min read",
      date: "Nov 10, 2024",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tags: ["Architecture", "Clean Code", "Best Practices"],
    },
  ];

  return (
    <section id="blog" className="blog">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Technical Articles & Insights
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-subtitle"
        >
          Sharing knowledge and best practices from building 14+ production
          mobile apps
        </motion.p>

        <div className="articles-grid">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="article-card"
            >
              <div className="article-image">
                <img src={article.image} alt={article.title} />
                <div className="article-category">{article.category}</div>
              </div>

              <div className="article-content">
                <div className="article-meta">
                  <span className="article-date">{article.date}</span>
                  <span className="article-read-time">{article.readTime}</span>
                </div>

                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>

                <div className="article-tags">
                  {article.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="read-more-btn">
                  <span>Read Article</span>
                  <span className="arrow">→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="blog-cta"
        >
          <h3>Want to stay updated?</h3>
          <p>
            Subscribe to get notified about new technical articles and mobile
            development insights
          </p>
          <button className="subscribe-btn">Subscribe to Newsletter</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
