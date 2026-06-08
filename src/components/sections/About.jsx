import { motion } from 'framer-motion';
import { Code, Layout, Server, Brain, CheckCircle, LineChart } from 'lucide-react';
import { education, experienceList, detailedSkills } from '../../data/portfolioData';

const getIcon = (name) => {
  switch (name) {
    case 'Code': return <Code size={24} />;
    case 'Layout': return <Layout size={24} />;
    case 'Server': return <Server size={24} />;
    case 'Brain': return <Brain size={24} />;
    case 'CheckCircle': return <CheckCircle size={24} />;
    case 'LineChart': return <LineChart size={24} />;
    default: return <Code size={24} />;
  }
};

const About = () => {
  return (
    <section style={{ marginBottom: '100px' }}>
      <h2 className="section-title">About & Expertise</h2>
      <div className="grid-2-col" style={{ alignItems: 'start' }}>
        
        {/* Left Column: Beautiful Resume Cards */}
        <div>
          <h3 style={{ color: 'var(--text-main)', marginBottom: '20px', fontSize: '1.5rem' }}>Education</h3>
          
          {/* Animated Education Card */}
          <motion.div 
            className="resume-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: 'var(--accent-red)' }}>{education.degree}</h4>
            <p style={{ margin: '0 0 5px 0', color: '#fff', fontWeight: '500' }}>{education.institution}</p>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{education.period}</span>
          </motion.div>

          <h3 style={{ color: 'var(--text-main)', marginTop: '40px', marginBottom: '20px', fontSize: '1.5rem' }}>Experience</h3>
          {experienceList.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className="resume-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: 'var(--accent-red)' }}>{exp.role}</h4>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '15px' }}>{exp.period}</span>
              <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.6', color: '#cbd5e1' }}>{exp.description}</p>
            </motion.div>
          ))}

          {/* Animated Tools & Workflows */}
          <h3 style={{ color: 'var(--text-main)', marginTop: '40px', marginBottom: '20px', fontSize: '1.5rem' }}>Tools & Workflows</h3>
          <motion.div 
            style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {['Figma', 'Git & GitHub', 'Postman', 'Agile Methodology', 'Vite', 'Vercel', 'Advanced Excel'].map((tool, index) => (
              <span key={index} style={{ 
                background: '#1a1a1a', 
                border: '1px solid #333', 
                padding: '8px 16px', 
                borderRadius: '20px', 
                fontSize: '0.9rem', 
                color: 'var(--text-muted)',
                transition: 'border-color 0.3s ease, color 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-red)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#333';
                e.currentTarget.style.color = 'var(--text-muted)';
              }}
              >
                {tool}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Skill Cards */}
        <div>
          <h3 style={{ color: 'var(--text-main)', marginBottom: '20px', fontSize: '1.5rem' }}>Technical Skillset</h3>
          <div className="skills-grid">
            
            {/* FIXED: Replaced standard div with motion.div */}
            {detailedSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="skill-icon-wrapper">
                  {getIcon(skill.iconName)}
                </div>
                <h4 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>{skill.title}</h4>
                <p style={{ margin: '0', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {skill.description}
                </p>
              </motion.div>
            ))}
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;