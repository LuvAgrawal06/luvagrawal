
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin } from 'lucide-react';

const contactInfo = [
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Phone",
    value: "+91 6395989230",
    link: "tel:+916395989230",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    value: "luv.agrawal.chy24@itbhu.ac.in",
    link: "mailto:luv.agrawal.chy24@itbhu.ac.in",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    title: "LinkedIn",
    value: "luv-agrawal-41119a30b",
    link: "https://linkedin.com/in/luv-agrawal-41119a30b",
  },
];

const Contact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.fade-in-bottom');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="contact" className="bg-white section-padding">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div className="fade-in-bottom">
            <h3 className="text-2xl font-bold text-navy-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="bg-navy-100 p-3 rounded-full text-navy-700">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-900">{item.title}</h4>
                    <a 
                      href={item.link} 
                      className="text-navy-600 hover:text-navy-900 transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold text-navy-800 mb-4">Let's Connect</h3>
              <p className="text-navy-700">
                I'm always open to discussing product design work, business strategy opportunities, or potential collaborations.
              </p>
            </div>
          </div>
          
          <div className="fade-in-bottom">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">
                  Name
                </label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Your Name" 
                  className="border-navy-200 focus:border-navy-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Your Email" 
                  className="border-navy-200 focus:border-navy-500"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-1">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  type="text" 
                  placeholder="Subject" 
                  className="border-navy-200 focus:border-navy-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  className="border-navy-200 focus:border-navy-500 min-h-32"
                />
              </div>
              
              <Button className="bg-navy-800 hover:bg-navy-900 w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
