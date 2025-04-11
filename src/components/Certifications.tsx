import React, { useEffect } from 'react';

const Certifications = [
    {
      id: 1,
      title: "National Winner",
      competition: "Prodnosis 5.0 (Technex'25)",
      highlight: true,
    },
    {
        id: 2,
        title: "1st Runner Up",
        competition: "Prodhive (B.A.S.H. 7.0)",
        highlight: true,
      },

      ];
      const Certifications = () => {
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
          <section id="Certifications" className="bg-white section-padding">
            <div className="container max-w-6xl mx-auto">
              <h2 className="section-title">Certifications</h2>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Certifications.map((Certifications) => (
                  <div 
                    key={Certifications.id}
                    className={`fade-in-bottom rounded-lg p-6 transition-all duration-300 hover:shadow-lg ${
                        Certifications.highlight 
                      ? 'bg-gradient-to-br from-gold-50 to-gold-100 border border-gold-200' 
                      : 'bg-navy-50 border border-navy-100'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`text-xl font-bold ${
                          Certifications.highlight ? 'text-gold-800' : 'text-navy-800'
                        }`}>
                          {Certifications.title}
                        </h3>
                        <p className={Certifications.highlight ? 'text-gold-700' : 'text-navy-600'}>
                          {Certifications.competition}
                        </p>
                      </div>
                      <div className={`p-3 rounded-full ${
                        Certifications.highlight ? 'bg-gold-200/50' : 'bg-navy-100'
                      }`}>
                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      };
      
      export default Certifications;