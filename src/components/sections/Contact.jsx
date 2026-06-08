import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

// Custom LinkedIn Icon
const LinkedinIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  // Replace 'YOUR_FORMSPREE_ID' with your actual 8-character ID from Formspree
  const [state, handleSubmit] = useForm("xvznkjjv");

  return (
    <section id="contact" style={{ marginBottom: '80px' }}>
      
      {/* Philosophical Quote Block */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '60px', 
        padding: '40px 20px', 
        backgroundColor: 'var(--bg-card)', 
        borderRadius: '12px',
        border: '1px solid #2a2a2a',
        borderTop: '4px solid var(--accent-red)'
      }}>
        <h3 style={{ 
          fontSize: '1.8rem', 
          fontWeight: '300', 
          lineHeight: '1.5', 
          margin: '0 auto 15px auto', 
          color: '#e2e8f0',
          fontStyle: 'italic',
          maxWidth: '750px'
        }}>
          "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."
        </h3>
        <p style={{ color: 'var(--accent-red)', margin: 0, fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
          — Antoine de Saint-Exupéry
        </p>
      </div>

      <div className="contact-wrapper">
        
        {/* Left Column: Contact Info Panel */}
        <div>
          <h2 style={{ fontSize: '2rem', margin: '0 0 30px 0' }}>Get in Touch</h2>
          <div className="contact-info-panel" style={{ gap: '35px' }}>
            
            <div className="info-item">
              <div className="info-icon"><Mail size={24} /></div>
              <div className="info-text-group">
                <span className="info-label">Email</span>
                <a href="mailto:raqeebaswar510@gmail.com" className="info-value" style={{ color: 'var(--accent-red)' }}>
                  raqeebaswar510@gmail.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Phone size={24} /></div>
              <div className="info-text-group">
                <span className="info-label">Phone</span>
                <span className="info-value">+94 77 225 8931</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><LinkedinIcon size={24} /></div>
              <div className="info-text-group">
                <span className="info-label">LinkedIn</span>
                <a href="https://linkedin.com/in/mohomed-rakeeb" target="_blank" rel="noopener noreferrer" className="info-value" style={{ color: 'var(--accent-red)' }}>
                  Mohomed Rakeeb
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><MapPin size={24} /></div>
              <div className="info-text-group">
                <span className="info-label">Location</span>
                <span className="info-value">Kegalle, Sri Lanka</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Clock size={24} /></div>
              <div className="info-text-group">
                <span className="info-label">Working Hours</span>
                <span className="info-value">Mon - Fri, 9:00 AM - 6:00 PM</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Send Message Form */}
        <div>
           <h2 style={{ fontSize: '2rem', margin: '0 0 30px 0' }}>Send a Message</h2>
          <div className="contact-form">
            
            {/* Conditional Rendering: Show success message if submitted, otherwise show form */}
            {state.succeeded ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ color: 'var(--accent-red)', marginBottom: '20px' }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-muted)' }}>Thanks for reaching out. I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input id="name" type="text" name="name" className="form-control" placeholder="John Doe" required />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" className="form-control" placeholder="john@example.com" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input id="subject" type="text" name="subject" className="form-control" placeholder="Project Inquiry" required />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>
                
                <div className="form-group" style={{ marginBottom: '30px' }}>
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea id="message" name="message" className="form-control" placeholder="Tell me about your project..." required></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                
                <button type="submit" disabled={state.submitting} className="btn-submit">
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;