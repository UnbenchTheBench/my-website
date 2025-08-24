'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);


  const [contactInfos, setcontactInfos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filepath] = useState('app/contact/contactInfo.xlsx');

  useEffect(() => {
    fetchContactInfo();
  }, [filepath]);

  async function fetchContactInfo() {
    setLoading(true);
    try {
      const response = await fetch(`/api/getExcelData?filepath=${encodeURIComponent(filepath)}`);
      if (response.ok) {
        const data = await response.json();
        setcontactInfos(data);
      } else {
        // Fallback to sample data if API fails
        setcontactInfos([]);
      }
    } catch (error) {
      console.error('Error fetching contact info:', error);
      // Fallback to sample data
      setcontactInfos([]);
    } finally {
      setLoading(false);
    }
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/benchydutreuil', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/benchydutreuil', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/benchydutreuil', color: 'hover:text-sky-400' },
    { name: 'Portfolio', icon: '🌐', url: '/', color: 'hover:text-cyan-400' }
  ];

  return (
    <main className={styles.main}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.title}
      >
        Get In Touch
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={styles.subtitle}
      >
        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
      </motion.p>

      <div className={styles.container}>

        <div className={styles.grid}>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.contactInfo}
          >
            <h2 className={styles.contactInfoTitle}>Contact Information</h2>
            

            {!loading ? (
              contactInfos.length > 0 ? (
                contactInfos.map((info, idx) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className={styles.contactItem}
                  >
                    <span className={styles.contactIcon}>{info.icon}</span>
                    <div className={styles.contactContent}>
                      <h3>{info.title}</h3>
                      <a 
                        href={info.link} 
                        className={styles.contactLink}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className={styles.noContactInfo}>
                  No contact information available
                </div>
              )
            ) : (
              <div className={styles.loading}>
                Loading Contacts...
              </div>
            )}

            {/* Social Links */}
            <div className={styles.socialSection}>
              <h3 className={styles.socialTitle}>Follow Me</h3>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className={styles.socialLink}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.contactForm}
          >
            <h2 className={styles.contactFormTitle}>Send a Message</h2>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                  placeholder="Your name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                  placeholder="What's this about?"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={styles.formTextarea}
                  placeholder="Tell me more about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={styles.successMessage}
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className={styles.additionalInfo}
      >
        <h2 className={styles.additionalInfoTitle}>Let's Work Together</h2>
        <p className={styles.additionalInfoText}>
          Whether you have a project in mind, want to discuss potential opportunities, or just want to say hello, 
          I'd love to hear from you. I'm always interested in new challenges and collaborations.
        </p>
      </motion.div>
    </main>
  );
}
