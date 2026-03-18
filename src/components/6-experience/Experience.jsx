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
        "Sole developer for 5 mobile apps end-to-end, from architecture to App Store & Google Play deployment",
        "Built and maintained multiple e-commerce applications (clothing, shoes, kids' fashion)",
        "Developed a social media app for horse/camel/falcon enthusiasts, competitions, and community engagement",
        "Integrated core features: authentication, shopping cart, payments, and API integrations for seamless UX",
        "Published apps achieved 4.5–5 star ratings and accumulated 8,000+ downloads across platforms",
        "Supervised 4 developers across 7 additional apps; oversaw full delivery from development to store publication",
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
        "Jeyad",
        "Neyaq",
        "Qarnas",
        "AlAmthal",
        "Matlob",
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
        "Solo-delivered 2 apps including Rakd — a 3-role platform (client, worker, admin) for car wash booking with real-time tracking",
        "Built Halalah (Flutter) — live on App Store with 4.5+ star rating; coupon app for major Saudi brands",
        "Supervised 1 developer on PAL-IN Store: full-stack e-commerce app for Palestinian local brands",
        "Collaborated on Fatwalraq — Flutter app for Iraqi Fiqh Academy facilitating Islamic fatwas",
      ],
      tech: ["Flutter", "React Native", "Firebase", "Full Stack Development"],
      projects: [
        "Halalah",
        "Rakd & Rakd Worker & Rakd Admin",
        "PAL-IN Store",
        "Fatwalraq",
      ],
    },
    {
      id: 3,
      period: "Apr 2024 - Feb 2025",
      company: "Senior React Native Developer",
      position: "React Native Developer (Full-time)",
      type: "Contract",
      description: [
        "Solo-delivered 1 app end-to-end and actively maintained 5+ existing live apps alongside a senior developer",
        "Implemented UI features, bug fixes, and new functionality based on user feedback across multiple platforms",
        "Contributed to invoice generation, VAT compliance, and purchase/sales tracking features for the Saudi market",
        "Built coupon redemption and water delivery platforms across multiple regional markets",
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
        "Trained on 2 React Native apps, implementing custom UI components, navigation, and async operations",
        "Participated in code reviews and collaborated within a team of 5+ developers",
        "Completed 3-month intensive program covering professional React Native development workflows",
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
