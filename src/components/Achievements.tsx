
import React, { useEffect } from 'react';
import { Award, Medal, Trophy } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: "National Winner",
    competition: "Prodnosis 5.0 (Technex'25)",
    icon: <Trophy className="h-6 w-6 text-gold-500" />,
    highlight: true,
  },
  {
    id: 2,
    title: "1st Runner-Up",
    competition: "Prodhive (B.A.S.H. 7.0 IIT BHU)",
    icon: <Medal className="h-6 w-6 text-silver" />,
  },
  {
    id: 3,
    title: "1st Runner-Up",
    competition: "Design Rush (E-Summit'25 IIT BHU)",
    icon: <Medal className="h-6 w-6 text-silver" />,
  },
  {
    id: 4,
    title: "1st Runner-Up",
    competition: "ADventure (E-Summit'25 IIT BHU)",
    icon: <Medal className="h-6 w-6 text-silver" />,
  },
  {
    id: 5,
    title: "National Finalist",
    competition: "PMx'25 (IIT G)",
    icon: <Award className="h-6 w-6 text-navy-600" />,
  },
  {
    id: 6,
    title: "National Finalist",
    competition: "Ranked 4th at Case-O-Nova 6.0 (IIM B)",
    icon: <Award className="h-6 w-6 text-navy-600" />,
  },
];

const Achievements = () => {
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
    <section id="achievements" className="bg-white section-padding">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-title">Achievements</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className={`fade-in-bottom rounded-lg p-6 transition-all duration-300 hover:shadow-lg ${
                achievement.highlight 
                ? 'bg-gradient-to-br from-gold-50 to-gold-100 border border-gold-200' 
                : 'bg-navy-50 border border-navy-100'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`text-xl font-bold ${
                    achievement.highlight ? 'text-gold-800' : 'text-navy-800'
                  }`}>
                    {achievement.title}
                  </h3>
                  <p className={achievement.highlight ? 'text-gold-700' : 'text-navy-600'}>
                    {achievement.competition}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${
                  achievement.highlight ? 'bg-gold-200/50' : 'bg-navy-100'
                }`}>
                  {achievement.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
