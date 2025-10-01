// EmailJS Configuration
// This file contains the configuration for EmailJS integration

// 1. Sign up at https://www.emailjs.com/
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Public Key from the Integration section
// 5. Replace the values below with your actual EmailJS credentials

export const emailjsConfig = {
  // Your EmailJS Public Key (found in EmailJS dashboard > Integration)
  publicKey: "v0DBoHj223N6dPaSO",
  
  // Your EmailJS Service ID (found in EmailJS dashboard > Email Services)
  serviceId: "service_2csxk0e",
  
  // Your EmailJS Template ID (found in EmailJS dashboard > Email Templates)
  templateId: "template_s3b5mis",
};

// Example template variables that will be sent to EmailJS:
// {{from_name}} - Contact form name field
// {{from_email}} - Contact form email field  
// {{message}} - Contact form message field
// {{to_name}} - Your name (recipient)

// Example EmailJS template:
// Subject: New Contact Form Message from {{from_name}}
// 
// Hello {{to_name}},
// 
// You have received a new message from your portfolio contact form.
// 
// Name: {{from_name}}
// Email: {{from_email}}
// 
// Message:
// {{message}}
// 
// Best regards,
// Your Portfolio Contact Form