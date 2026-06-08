import { servicesList } from '../../data/portfolioData';

const Services = () => {
  return (
    <section style={{ marginBottom: '80px' }}>
      <h2 className="section-title">My Services</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        {servicesList.map((service, index) => (
          <div key={index} className="service-card">
            <h3 style={{ color: 'var(--text-main)', marginTop: 0 }}>{service.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;