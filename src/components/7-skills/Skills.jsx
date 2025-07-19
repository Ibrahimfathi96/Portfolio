import "./skills.css";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 95, experience: "3+ years" },
        { name: "Flutter", level: 90, experience: "3+ years" },
        { name: "TypeScript", level: 85, experience: "2+ years" },
        { name: "JavaScript", level: 95, experience: "3+ years" },
        { name: "Dart", level: 90, experience: "3+ years" },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", level: 80, experience: "1.5+ years" },
        { name: "Express.js", level: 75, experience: "1.5+ years" },
        { name: "Firebase", level: 85, experience: "3+ years" },
        { name: "Supabase", level: 75, experience: "1+ year" },
        { name: "REST APIs", level: 90, experience: "3+ years" },
      ],
    },
    {
      title: "Tools & Platform",
      skills: [
        { name: "Git & GitHub", level: 90, experience: "3+ years" },
        { name: "VS Code", level: 95, experience: "3+ years" },
        { name: "Postman", level: 85, experience: "3+ years" },
        { name: "Figma", level: 70, experience: "3+ year" },
        { name: "App Store Connect", level: 85, experience: "2+ year" },
      ],
    },
  ];

  const achievements = [
    { metric: "14+", label: "Live Apps Published", icon: "📱" },
    { metric: "3+", label: "Years Experience", icon: "⏳" },
    { metric: "100%", label: "Client Satisfaction", icon: "⭐" },
    // { metric: "5M+", label: "App Downloads", icon: "📊" },
    { metric: "99.9%", label: "App Stability", icon: "🛡️" },
    // { metric: "3", label: "Countries Served", icon: "🌍" },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Technical Expertise & Achievements
        </motion.h2>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="achievements-grid"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <span className="achievement-icon">{achievement.icon}</span>
              <h3 className="achievement-metric">{achievement.metric}</h3>
              <p className="achievement-label">{achievement.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Skills Matrix */}
        <div className="skills-matrix">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="skill-category"
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">
                        {skill.name}{" "}
                        <span className="skill-experience">
                          ({skill.experience})
                        </span>
                      </span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="certifications"
        >
          <h3 className="subsection-title">
            Professional Certifications & Training
          </h3>
          <div className="cert-grid">
            <div className="cert-card">
              <div className="cert-icon">🎓</div>
              <h4>React Native Specialist</h4>
              <p>Nile University - DPE Program</p>
              <span className="cert-year">2023</span>
            </div>
            <div className="cert-card">
              <div className="cert-icon">📱</div>
              <h4>Flutter Developer</h4>
              <p>Google Developer Student Clubs</p>
              <span className="cert-year">2023</span>
            </div>
            <div className="cert-card">
              <div className="cert-icon">🚀</div>
              <h4>Mobile App Publisher</h4>
              <p>14+ Apps on App Store & Google Play</p>
              <span className="cert-year">2024</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
