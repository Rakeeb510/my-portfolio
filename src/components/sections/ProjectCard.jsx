import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    // FIXED: The opening tag now correctly uses motion.div
    <motion.div 
      className="project-card" 
      style={{ padding: '40px' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      
      {/* Header Area */}
      <div style={{ borderBottom: '1px solid #333', paddingBottom: '20px', marginBottom: '30px' }}>
        <h3 style={{ fontSize: '2.2rem', margin: '0 0 10px 0', color: 'var(--accent-red)' }}>
          {project.title}
        </h3>
        <p style={{ color: '#fff', fontSize: '1.1rem', margin: '0' }}>
          <strong>My Role:</strong> {project.role}
        </p>
      </div>

      {/* Two-Column Grid (Updated for Mobile) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '40px', 
        alignItems: 'start' 
      }}>
        
        {/* LEFT COLUMN: Video, Tags, and Team Execution */}
        <div>
          {project.video && (
            <div style={{ 
              borderRadius: '12px', 
              overflow: 'hidden', 
              border: '1px solid #333',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              marginBottom: '20px'
            }}>
              <video controls preload="metadata" style={{ width: '100%', display: 'block' }}>
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '25px' }}>
            {project.techStack.map((tech, index) => (
              <span key={index} style={{ 
                background: 'rgba(248, 58, 58, 0.1)', 
                color: 'var(--accent-red)', 
                border: '1px solid rgba(248, 58, 58, 0.3)',
                padding: '6px 14px', 
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Team Execution Block */}
          <div style={{ 
            backgroundColor: '#111', 
            padding: '20px', 
            borderRadius: '8px', 
            borderLeft: '4px solid var(--accent-red)' 
          }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: '#e2e8f0' }}>Team Execution</h4>
            <p style={{ margin: '0', fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.6' }}>
              {project.execution}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Overview & Contributions */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          
          <div style={{ flexGrow: 1 }}>
            <h4 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', margin: '0 0 10px 0' }}>
              Project Overview
            </h4>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '25px' }}>
              {project.overview}
            </p>

            <h4 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', margin: '0 0 10px 0' }}>
              My Direct Contributions
            </h4>
            <ul style={{ paddingLeft: '20px', marginBottom: '30px', lineHeight: '1.7' }}>
              {project.keyFeatures.map((feature, i) => (
                <li key={i} style={{ marginBottom: '10px' }}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Github Link anchored at the bottom right */}
          <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid #333' }}>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ color: 'var(--accent-red)', fontSize: '1.1rem' }}>
              View Source Code ➔
            </a>
          </div>

        </div>

      </div>
    </motion.div> 
    // FIXED: The closing tag now properly matches the motion.div opening tag
  );
};

export default ProjectCard;