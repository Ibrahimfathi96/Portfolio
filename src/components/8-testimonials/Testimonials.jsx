import "./testimonials.css";
import { motion } from "framer-motion";
import { useState } from "react";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Inc.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616c06a6db9?w=150&h=150&fit=crop&crop=face",
      content:
        "Ibrahim delivered an exceptional e-commerce app that exceeded our expectations. His attention to detail and professional approach made our collaboration seamless. The app's performance and user experience are outstanding.",
      rating: 5,
      project: "Riya E-commerce Platform",
    },
    {
      id: 2,
      name: "Ahmed Al-Rashid",
      role: "CEO",
      company: "Arabian Tech Solutions",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content:
        "Working with Ibrahim was a game-changer for our business. He built a robust accounting software that perfectly handles Saudi market compliance. His technical expertise and timely delivery are remarkable.",
      rating: 5,
      project: "Vom Accounting Software",
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Startup Founder",
      company: "InnovateNow",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content:
        "Ibrahim transformed our concept into a beautiful, functional mobile app. His React Native expertise and problem-solving skills are top-notch. The app has received excellent user feedback and ratings.",
      rating: 5,
      project: "NICHE Real Estate App",
    },
    {
      id: 4,
      name: "David Chen",
      role: "CTO",
      company: "MobileTech Ltd",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content:
        "Ibrahim's Flutter development skills are exceptional. He delivered a complex social media platform with real-time features that work flawlessly. His code quality and architecture choices are professional-grade.",
      rating: 5,
      project: "Jeyad Social Platform",
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Client Testimonials
        </motion.h2>

        <div className="testimonials-container">
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="testimonial-card"
          >
            <div className="testimonial-content">
              <div className="quote-icon">&ldquo;</div>
              <p className="testimonial-text">
                {testimonials[activeTestimonial].content}
              </p>
              <div className="testimonial-rating">
                {[...Array(testimonials[activeTestimonial].rating)].map(
                  (_, i) => (
                    <span key={i} className="star">
                      ⭐
                    </span>
                  )
                )}
              </div>
              <div className="testimonial-project">
                <span className="project-label">Project:</span>
                <span className="project-name">
                  {testimonials[activeTestimonial].project}
                </span>
              </div>
            </div>

            <div className="testimonial-author">
              <img
                src={testimonials[activeTestimonial].avatar}
                alt={testimonials[activeTestimonial].name}
                className="author-avatar"
              />
              <div className="author-info">
                <h4 className="author-name">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="author-role">
                  {testimonials[activeTestimonial].role}
                </p>
                <p className="author-company">
                  {testimonials[activeTestimonial].company}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="testimonial-navigation">
            <button onClick={prevTestimonial} className="nav-btn prev-btn">
              <span className="nav-icon">←</span>
            </button>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`dot ${
                    index === activeTestimonial ? "active" : ""
                  }`}
                />
              ))}
            </div>
            <button onClick={nextTestimonial} className="nav-btn next-btn">
              <span className="nav-icon">→</span>
            </button>
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="client-logos"
        >
          <h3 className="client-logos-title">Trusted by Leading Companies</h3>
          <div className="logos-grid">
            <div className="logo-item">
              <div className="logo-placeholder">Applai</div>
            </div>
            <div className="logo-item">
              <div className="logo-placeholder">Upwork</div>
            </div>
            <div className="logo-item">
              <div className="logo-placeholder">Nile Uni</div>
            </div>
            <div className="logo-item">
              <div className="logo-placeholder">GDSC</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
