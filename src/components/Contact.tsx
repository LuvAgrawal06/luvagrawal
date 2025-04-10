
import React, { useEffect } from 'react';
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
        <h2 className="section-title">Contact</h2>
        
        <div className="mt-12 flex justify-center">
          <div className="fade-in-bottom max-w-xl w-full">
            <h3 className="text-2xl font-bold text-navy-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4 hover:bg-navy-50 p-3 rounded-lg transition-colors">
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
              <h3 className="text-xl font-bold text-navy-800 mb-4">Available for Opportunities</h3>
              <p className="text-navy-700">
                Feel free to reach out for consulting projects, product strategy discussions, or potential collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
