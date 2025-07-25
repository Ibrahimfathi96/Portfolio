import "./experience.css";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      period: "May 2024 - Present",
      company: "Softoio LLC",
      position: "React Native Developer (Full-time)",
      type: "Company",
      description: [
        "Sole developer for mobile apps, handling end-to-end React Native development",
        "Built and maintained multiple e-commerce applications (clothing, shoes, kids' fashion)",
        "Developed a social media app for horse enthusiasts, competitions, and community engagement",
        "Integrated core features: authentication, shopping cart, payments, API integrations for seamless UX",
        "Deployed and maintained apps on both App Store & Google Play",
        "Supervised other mobile developers (Flutter & React Native) alongside core development responsibilities",
      ],
      tech: [
        "React Native",
        "JavaScript",
        "TypeScript",
        "Flutter",
        "API Integration",
        "Authentication",
        "Payment Systems",
      ],
      projects: [
        "Riya",
        "Podium",
        "ElGarawi-Kids",
        "ShoePalace",
        "Jeyad",
        "Matloub",
        "Pizza & Pizza Delivery",
      ],
    },
    {
      id: 2,
      period: "Aug 2023 - Present",
      company: "Freelance Projects",
      position: "Mobile App Freelancer",
      type: "Freelance",
      description: [
        "Developed Flutter application for winning coupons for famous brands",
        "Built Parental Networking App with user registration, profile creation, and chat functionalities",
        "Created Full Stack E-commerce Application for Palestinian local brands",
        "Collaborated on Flutter mobile application for Iraqi Fiqh Academy facilitating Islamic fatwas",
      ],
      tech: ["Flutter", "React Native", "Firebase", "Full Stack Development"],
      projects: [
        "Halalah",
        "Parents Connect",
        "PAL-IN Store",
        "Fatwalraq",
        "Rakd & Rakd Worker & Rakd Admin",
      ],
    },
    {
      id: 3,
      period: "Apr 2024 - Feb 2025",
      company: "Senior React Native Developer",
      position: "React Native Developer (Full-time)",
      type: "Contract",
      description: [
        "Worked closely with a Senior React Native Developer on 4+ cross-platform apps",
        "Handled UI features, bug fixes, and feature implementation based on user feedback",
        "Developed live applications including e-commerce and real estate platforms",
        "Contributed to invoice generation, purchase/sales tracking, and compliance features for Saudi market",
        "Built interactive coupon display & redemption features and water delivery platforms",
      ],
      tech: [
        "React Native",
        "Flutter",
        "Cross-platform Development",
        "UI/UX",
        "Bug Fixing",
      ],
      projects: [
        "Gayar",
        "NICHE",
        "Vom Accounting Software",
        "Win Coupons App",
        "AquaHana",
      ],
    },
    {
      id: 4,
      period: "Nov 2023 - Feb 2024",
      company: "Nile University (Intern)",
      position: "React Native Developer Intern",
      type: "Internship",
      description: [
        "Developed two React Native apps, implementing custom UI components",
        "Worked with asynchronous operations and navigation systems",
        "Contributed to code reviews and worked collaboratively with the development team",
        "Gained hands-on experience with professional development practices",
      ],
      tech: [
        "React Native",
        "Custom UI Components",
        "Navigation",
        "Code Reviews",
      ],
      projects: ["Internal Training Projects"],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Professional Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="position">{exp.position}</h3>
                  <div className="company-info">
                    <h4 className="company">{exp.company}</h4>
                    <span className={`type ${exp.type.toLowerCase()}`}>
                      {exp.type}
                    </span>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>

                <div className="experience-body">
                  <ul className="description">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <div className="tech-stack">
                    <h5>Technologies:</h5>
                    <div className="tech-tags">
                      {exp.tech.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="key-projects">
                    <h5>Key Projects:</h5>
                    <div className="project-tags">
                      {exp.projects.map((project, idx) => (
                        <span key={idx} className="project-tag">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </div>

        {/* Internships Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="internships-section"
        >
          <h3 className="subsection-title">Training & Internships</h3>
          <div className="internships-grid">
            <div className="internship-card">
              <h4>React Native Training Program</h4>
              <p className="internship-org">
                Nile Preneurs & Digital Pathways for Employment (DPE - Nile
                University)
              </p>
              <span className="internship-period">July 2023 - Nov 2023</span>
            </div>
            <div className="internship-card">
              <h4>Flutter Training Program</h4>
              <p className="internship-org">
                Google Developer Students Clubs GDSC - Suez University
              </p>
              <span className="internship-period">Jan 2023 - Jun 2023</span>
            </div>
            <div className="internship-card">
              <h4>Flutter Training Program</h4>
              <p className="internship-org">Route Academy</p>
              <span className="internship-period">Sep 2022 - Jan 2023</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
