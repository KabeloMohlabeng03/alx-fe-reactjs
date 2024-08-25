import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#9C27B0', fontSize: '2rem', marginBottom: '10px' }}>
        Contact Us
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            fontSize: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            fontSize: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            fontSize: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            minHeight: '100px',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#9C27B0',
            color: '#fff',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
