import ProjectCard from './components/sections/ProjectCard';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import { projects } from './data/portfolioData';
import { motion } from 'framer-motion';
import { PDFDownloadLink } from '@react-pdf/renderer'; // NEW
import CVDocument from './components/CVDocument';

import profilePic from './assets/profile.webp';
import iqratVideo from './assets/iqrat-demo.mp4'; 

// Custom Icons for Socials
const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function App() {
  const updatedProjects = projects.map(proj => 
    proj.id === 1 ? { ...proj, video: iqratVideo } : proj
  );

  return (
    <div className="container">
      
      {/* Hero Section */}
      <section className="hero-section">
        {/* Left Column animating in from the left */}
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="hello-badge">Hello,</span>
          <h1 className="hero-title">
            I'm Mohomed Rakeeb <br />
            Frontend Developer <br />
            & UI/UX Designer
          </h1>
          <p className="hero-subtitle">
            A passionate computer science student dedicated to building interactive, user-centric web applications and creating wonderful digital experiences.
          </p>
          
          <div className="button-group" style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            
            {/* Smooth scrolls to the Contact section */}
            <a href="#contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
              Hire Me
            </a>
            
            {/* DYNAMIC ATS PDF DOWNLOAD */}
            <PDFDownloadLink 
              document={<CVDocument />} 
              fileName="Mohomed_Rakeeb_CV.pdf"
              style={{ textDecoration: 'none' }}
            >
              {({ loading }) => (
                <button className="btn-secondary">
                  {loading ? 'Generating CV...' : 'Download CV ➔'}
                </button>
              )}
            </PDFDownloadLink>
            
            <div style={{ width: '1px', height: '30px', backgroundColor: '#333', margin: '0 10px' }}></div>
            
            <div className="hero-socials" style={{ margin: 0, display: 'flex', gap: '15px' }}>
              <a href="https://github.com/Rakeeb510" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                <GitHubIcon />
              </a>
              <a href="https://linkedin.com/in/mohomed-rakeeb" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column (Image) scaling and fading in */}
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <img src={profilePic} alt="Mohomed Rakeeb" className="profile-pic" />
        </motion.div>
      </section>

      <About />
      
      <Services />

      <section style={{ marginBottom: '80px' }}>
        <h2 className="section-title">Featured Work</h2>
        {updatedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <Contact />

      {/* The New Footer to anchor the page */}
      <footer className="footer">
        {/* Left Side: Avatar and Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img 
            src={profilePic} 
            alt="Mohomed Rakeeb" 
            style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              border: '2px solid var(--accent-red)' 
            }} 
          />
          <div>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: '#fff' }}>Mohomed Rakeeb</h3>
            <p style={{ margin: '0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Frontend Developer & UI/UX Designer based in Sri Lanka.
            </p>
          </div>
        </div>
        
        {/* Right Side: Social Icons */}
        <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://github.com/Rakeeb510" target="_blank" rel="noopener noreferrer" className="social-icon-btn" style={{ width: '35px', height: '35px' }}>
              <GitHubIcon />
            </a>
            <a href="https://linkedin.com/in/mohomed-rakeeb" target="_blank" rel="noopener noreferrer" className="social-icon-btn" style={{ width: '35px', height: '35px' }}>
              <LinkedinIcon />
            </a>
        </div>
      </footer>

    </div>
  );
}

export default App;