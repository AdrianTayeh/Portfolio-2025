import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';
import { validateContactForm, hasValidationErrors, type ValidationErrors } from '../utils/validation';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const errors = validateContactForm(formData);
    setValidationErrors(errors);
    
    if (hasValidationErrors(errors)) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      emailjs.init(emailjsConfig.publicKey);
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Adrian",
        // Additional debugging parameters - try these if the above don't work
        user_name: formData.name,
        user_email: formData.email,
        user_message: formData.message,
        name: formData.name,
        email: formData.email,
        reply_to: formData.email,
      };

      // Debug log to verify data is being sent
      console.log('Sending email with parameters:', templateParams);

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams
      );

      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adriantayeh@gmail.com",
      href: "mailto:adriantayeh@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+46 707 81 30 22",
      href: "tel:+46707813022",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Malmö, Sweden",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/AdrianTayeh", label: "GitHub" },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/adrian-tayeh/",
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/adrian.tayeh",
      label: "Instagram",
    },
  ];
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 lg:px-8 py-20"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <span className="text-primary/60 mb-2 block">05 — Contact</span>
            <h2 className="text-5xl lg:text-6xl">Let's Connect</h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Have a project in mind or just want to chat? I'd love to hear from
              you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      // Clear validation error when user starts typing
                      if (validationErrors.name) {
                        setValidationErrors({ ...validationErrors, name: undefined });
                      }
                    }}
                    required
                    className={`w-full px-4 py-3 bg-secondary rounded-lg border transition-colors focus:outline-none ${
                      validationErrors.name 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-border focus:border-primary'
                    }`}
                    placeholder="Your name"
                  />
                  {validationErrors.name && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      // Clear validation error when user starts typing
                      if (validationErrors.email) {
                        setValidationErrors({ ...validationErrors, email: undefined });
                      }
                    }}
                    required
                    className={`w-full px-4 py-3 bg-secondary rounded-lg border transition-colors focus:outline-none ${
                      validationErrors.email 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-border focus:border-primary'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {validationErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                    <span className="text-sm text-muted-foreground ml-2">
                      ({formData.message.length}/1000)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      // Clear validation error when user starts typing
                      if (validationErrors.message) {
                        setValidationErrors({ ...validationErrors, message: undefined });
                      }
                    }}
                    required
                    rows={6}
                    maxLength={1000}
                    className={`w-full px-4 py-3 bg-secondary rounded-lg border transition-colors focus:outline-none resize-none ${
                      validationErrors.message 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-border focus:border-primary'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {validationErrors.message && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                    submitStatus === 'success' 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : submitStatus === 'error'
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      Try Again
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Status message */}
                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 text-sm text-center mt-2"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.p>
                )}
                
                {submitStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-sm text-center mt-2"
                  >
                    Sorry, there was an error sending your message. Please try again.
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className="mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p>{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-6">Find Me Online</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-lg bg-secondary hover:bg-accent flex items-center justify-center transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="p-6 bg-secondary rounded-xl"
              >
                <h4 className="mb-2">Open to Opportunities</h4>
                <p className="text-muted-foreground">
                  I'm currently available for freelance projects and full-time
                  positions. Let's create something amazing together!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
