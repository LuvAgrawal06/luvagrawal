
import React, { useEffect } from 'react';
import { Award, Medal, Trophy, ExternalLink, Star, Crown, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const achievements = [
  {
    id: 1,
    title: "National Winner",
    competition: "Prodnosis 5.0 (Technex'25)",
    icon: <Trophy className="h-6 w-6 text-amber-400" />,
    highlight: true,
    competitionId: 2,
    bgColor: "bg-gradient-to-br from-amber-50 to-amber-100",
    borderColor: "border-amber-200",
    iconBg: "bg-amber-100"
  },
  {
    id: 2,
    title: "1st Runner-Up",
    competition: "Prodhive (B.A.S.H. 7.0 IIT BHU)",
    icon: <Medal className="h-6 w-6 text-blue-600" />,
    competitionId: 3,
    bgColor: "bg-gradient-to-br from-slate-50 to-slate-100",
    borderColor: "border-slate-200",
    iconBg: "bg-blue-100"
  },
  {
    id: 3,
    title: "1st Runner-Up",
    competition: "Design Rush (E-Summit'25 IIT BHU)",
    icon: <Medal className="h-6 w-6 text-blue-600" />,
    competitionId: 1,
    bgColor: "bg-gradient-to-br from-slate-50 to-slate-100",
    borderColor: "border-slate-200",
    iconBg: "bg-blue-100"
  },
  {
    id: 4,
    title: "1st Runner-Up",
    competition: "ADventure (E-Summit'25 IIT BHU)",
    icon: <Medal className="h-6 w-6 text-blue-600" />,
    competitionId: 4,
    bgColor: "bg-gradient-to-br from-slate-50 to-slate-100",
    borderColor: "border-slate-200",
    iconBg: "bg-blue-100"
  },
  {
    id: 5,
    title: "National Finalist",
    competition: "PMx'25 (IIT G)",
    icon: <Star className="h-6 w-6 text-purple-500" />,
    competitionId: 5,
    bgColor: "bg-gradient-to-br from-slate-50 to-slate-100",
    borderColor: "border-slate-200",
    iconBg: "bg-purple-100"
  },
  {
    id: 6,
    title: "National Finalist",
    competition: "Ranked 4th at Case-O-Nova 6.0 (IIM B)",
    icon: <Star className="h-6 w-6 text-purple-500" />,
    competitionId: 6,
    bgColor: "bg-gradient-to-br from-slate-50 to-slate-100",
    borderColor: "border-slate-200",
    iconBg: "bg-purple-100"
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
    <section id="achievements" className="bg-gradient-to-br from-slate-900 to-slate-800 section-padding py-24">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-10 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <span className="text-sm uppercase tracking-wider text-blue-400 font-medium mb-2 block">Recognition</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Achievements</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Consistently recognized for delivering innovative solutions and strategic insights in competitive environments.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id}
              className={`fade-in-bottom rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-lg ${
                achievement.highlight 
                ? 'bg-gradient-to-br from-amber-900/20 to-amber-700/20 border border-amber-500/30' 
                : 'bg-slate-800/50 border border-slate-700/70'
              } backdrop-blur-sm`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-8">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className={`text-2xl font-bold ${
                      achievement.highlight ? 'text-amber-300' : 'text-white'
                    }`}>
                      {achievement.title}
                    </h3>
                    <p className={achievement.highlight ? 'text-amber-200/80' : 'text-slate-300'}>
                      {achievement.competition}
                    </p>
                  </div>
                  
                  <div className={`p-4 rounded-full ${
                    achievement.highlight ? 'bg-amber-900/40' : `bg-slate-700/70`
                  } shadow-inner`}>
                    {achievement.icon}
                  </div>
                </div>
                
                <Link to={`/competition/${achievement.competitionId}`} className="mt-6 block">
                  <Button 
                    variant="ghost" 
                    className={`mt-4 p-0 text-sm flex items-center gap-1 w-full justify-center ${
                      achievement.highlight 
                        ? 'text-amber-300/80 hover:text-amber-200 hover:bg-amber-800/30' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    View Competition Details <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 py-3 px-6 bg-blue-900/30 rounded-full backdrop-blur-sm border border-blue-600/20">
            <Crown className="h-5 w-5 text-blue-400" />
            <span className="text-white font-medium">7x National Finalist in Prestigious Competitions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
