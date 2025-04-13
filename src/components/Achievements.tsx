
import React, { useEffect } from 'react';
import { Award, Medal, Trophy, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const achievements = [
  {
    id: 1,
    title: "National Winner",
    competition: "Prodnosis 5.0 (Technex'25)",
    icon: <Trophy className="h-6 w-6 text-amber-400" />,
    highlight: true,
    competitionId: 2
  },
  {
    id: 2,
    title: "1st Runner-Up",
    competition: "Prodhive (B.A.S.H. 7.0 IIT BHU)",
    icon: <Medal className="h-6 w-6 text-slate-400" />,
    competitionId: 3
  },
  {
    id: 3,
    title: "1st Runner-Up",
    competition: "Design Rush (E-Summit'25 IIT BHU)",
    icon: <Medal className="h-6 w-6 text-slate-400" />,
    competitionId: 1
  },
  {
    id: 4,
    title: "1st Runner-Up",
    competition: "ADventure (E-Summit'25 IIT BHU)",
    icon: <Medal className="h-6 w-6 text-slate-400" />,
    competitionId: 4
  },
  {
    id: 5,
    title: "National Finalist",
    competition: "PMx'25 (IIT G)",
    icon: <Award className="h-6 w-6 text-slate-600" />,
    competitionId: 5
  },
  {
    id: 6,
    title: "National Finalist",
    competition: "Ranked 4th at Case-O-Nova 6.0 (IIM B)",
    icon: <Award className="h-6 w-6 text-slate-600" />,
    competitionId: 6
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
    <section id="achievements" className="bg-gradient-to-b from-slate-900 to-slate-800 section-padding py-24">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-slate-400 font-medium mb-2 block">Recognition</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Achievements</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id}
              className={`fade-in-bottom rounded-lg p-8 transition-all duration-300 hover:translate-y-[-5px] ${
                achievement.highlight 
                  ? 'bg-gradient-to-br from-amber-900/20 to-amber-700/20 border border-amber-500/30' 
                  : 'bg-slate-800/50 border border-slate-700'
              } backdrop-blur-sm`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`text-xl font-bold ${
                    achievement.highlight ? 'text-amber-300' : 'text-white'
                  }`}>
                    {achievement.title}
                  </h3>
                  <p className={achievement.highlight ? 'text-amber-200/80' : 'text-slate-300'}>
                    {achievement.competition}
                  </p>
                  <Link to={`/competition/${achievement.competitionId}`}>
                    <Button 
                      variant="ghost" 
                      className={`mt-4 p-0 text-sm flex items-center gap-1 ${
                        achievement.highlight ? 'text-amber-300/80 hover:text-amber-200' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      View Competition <ExternalLink className="h-3 w-3" />
                    </Button>
                  </Link>
                </div>
                <div className={`p-4 rounded-full ${
                  achievement.highlight ? 'bg-amber-900/30' : 'bg-slate-700/50'
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
