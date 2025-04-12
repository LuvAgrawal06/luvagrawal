
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Eye, LineChart, Rocket, Users, Code, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Detailed competition data with problem statement and solution
const competitionsData = [
  {
    id: 1,
    title: "Design Rush",
    description: "Conducted in-depth UX research and developed a prototype to improve the learning experience platform.",
    image: "/placeholder.svg",
    tags: ["UX Research", "Prototyping", "User Testing"],
    icon: <Eye className="h-5 w-5" />,
    color: "bg-blue-100 text-blue-700",
    achievement: "1st Runner-Up at E-Summit'25 IIT BHU",
    problemStatement: "The challenge was to redesign the user experience of a learning management system that was experiencing high drop-off rates and low engagement. The platform needed to cater to diverse learning styles while maintaining accessibility standards.",
    solution: "Our team conducted extensive user research including interviews and usability tests to identify pain points. We developed wireframes and prototypes focused on intuitive navigation and personalized learning paths. The final solution included a redesigned dashboard, adaptive content recommendations, and gamified learning elements to boost engagement.",
    year: "2023"
  },
  {
    id: 2,
    title: "Prodnosis 5.0",
    description: "Developed a comprehensive monetization strategy and created wireframes for a healthcare solution.",
    image: "/placeholder.svg",
    tags: ["Gap Analysis", "Monetization", "Wireframing"],
    icon: <LineChart className="h-5 w-5" />,
    color: "bg-green-100 text-green-700",
    achievement: "National Winner at Technex'25",
    problemStatement: "A healthcare startup needed to develop a sustainable monetization strategy for their patient monitoring app while maintaining accessibility for users across different socioeconomic backgrounds.",
    solution: "We conducted a thorough market analysis and competitor research to identify revenue gaps. Our solution introduced a tiered subscription model with a freemium base, premium features for individual users, and enterprise packages for healthcare providers. We also developed wireframes for new revenue-generating features like telehealth integration and health data analytics.",
    year: "2024"
  },
  {
    id: 3,
    title: "Prodhive B.A.S.H 7.0",
    description: "Designed and pitched a product solution for sustainable urban mobility challenges.",
    image: "/placeholder.svg",
    tags: ["Product Strategy", "Market Research", "Pitch Deck"],
    icon: <Rocket className="h-5 w-5" />,
    color: "bg-purple-100 text-purple-700",
    achievement: "1st Runner-Up at B.A.S.H. 7.0 IIT BHU",
    problemStatement: "Urban areas are facing increasing congestion and pollution due to transportation inefficiencies. The challenge was to develop a sustainable mobility solution that could reduce carbon footprint while remaining economically viable.",
    solution: "Our team proposed an integrated mobility platform that connected public transportation, bike-sharing, and electric scooter rentals through a single app. The solution included dynamic pricing based on carbon impact and a reward system for sustainable choices. We created a comprehensive go-to-market strategy focusing on partnerships with city municipalities and transportation providers.",
    year: "2023"
  },
  {
    id: 4,
    title: "ADventure",
    description: "Created an innovative advertising campaign strategy for a consumer electronics brand.",
    image: "/placeholder.svg",
    tags: ["Marketing", "Creative Strategy", "Campaign Analysis"],
    icon: <Users className="h-5 w-5" />,
    color: "bg-orange-100 text-orange-700",
    achievement: "1st Runner-Up at E-Summit'25 IIT BHU",
    problemStatement: "A consumer electronics brand was struggling to connect with Gen Z customers despite having products tailored to their needs. The challenge was to develop an advertising strategy that would resonate with this demographic while maintaining brand integrity.",
    solution: "We designed a multi-channel campaign leveraging user-generated content and micro-influencers across emerging platforms like TikTok and Instagram Reels. The campaign focused on authentic storytelling and sustainability messaging. We also developed an interactive AR experience allowing users to virtually try products before purchase, significantly boosting engagement and conversion rates.",
    year: "2023"
  },
  {
    id: 5,
    title: "PMx'25",
    description: "Developed a product roadmap and go-to-market strategy for an AI-powered productivity tool.",
    image: "/placeholder.svg",
    tags: ["Product Management", "Roadmapping", "GTM Strategy"],
    icon: <Code className="h-5 w-5" />,
    color: "bg-red-100 text-red-700",
    achievement: "National Finalist at IIT G",
    problemStatement: "An early-stage startup had developed an innovative AI-powered productivity tool but lacked clear direction for product development and market entry. They needed a comprehensive product strategy to secure funding and establish market presence.",
    solution: "Our team created a detailed product roadmap with prioritized features based on user research and market gaps. We developed a phased go-to-market strategy focusing initially on early adopters in specific professional sectors. The solution included pricing models, partnership opportunities, and a content marketing strategy to establish thought leadership in the productivity space.",
    year: "2025"
  },
  {
    id: 6,
    title: "Case-O-Nova 6.0",
    description: "Analyzed business case and proposed innovative solution for supply chain optimization.",
    image: "/placeholder.svg",
    tags: ["Business Strategy", "Supply Chain", "Innovation"],
    icon: <Lightbulb className="h-5 w-5" />,
    color: "bg-yellow-100 text-yellow-700",
    achievement: "National Finalist, Ranked 4th at IIM B",
    problemStatement: "A multinational corporation was experiencing significant inefficiencies in their supply chain, resulting in increased costs and delayed deliveries. The challenge was to identify bottlenecks and propose innovative solutions to optimize operations while maintaining product quality.",
    solution: "We conducted a comprehensive analysis of the existing supply chain using data analytics to identify critical pain points. Our solution incorporated blockchain technology for enhanced transparency and AI-driven demand forecasting to optimize inventory levels. We also proposed strategic supplier partnerships and a hub-and-spoke distribution model that reduced delivery times by 30% and cut logistics costs by 25%.",
    year: "2023"
  },
];

const CompetitionDetails = () => {
  const { id } = useParams();
  const [competition, setCompetition] = useState<any>(null);
  
  useEffect(() => {
    // Find the competition by ID
    if (id) {
      const foundCompetition = competitionsData.find(comp => comp.id === parseInt(id));
      if (foundCompetition) {
        setCompetition(foundCompetition);
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
      }
    }
  }, [id]);

  if (!competition) {
    return (
      <div className="min-h-screen bg-navy-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy-800">Competition not found</h1>
          <Link to="/competitions">
            <Button variant="outline" className="mt-4">
              Back to Competitions
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-50">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 md:px-8 lg:px-0">
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center mb-8 gap-2">
            <Link to="/competitions" className="text-navy-600 hover:text-navy-800 transition-colors">
              <Button variant="ghost" className="flex items-center gap-2 p-0">
                <ArrowLeft className="h-4 w-4" />
                Back to Competitions
              </Button>
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className={`relative h-48 md:h-64 ${competition.color.replace('text-', 'bg-').replace('100', '200')} bg-opacity-40`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`p-6 rounded-full ${competition.color}`}>
                  {competition.icon}
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">{competition.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${competition.color}`}>
                  {competition.achievement}
                </span>
                <span className="text-sm text-navy-600">Year: {competition.year}</span>
              </div>
              
              <p className="text-navy-700 text-lg mb-6">
                {competition.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {competition.tags.map((tag: string) => (
                  <span 
                    key={tag} 
                    className="bg-navy-100 text-navy-700 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-navy-800 mb-4">Problem Statement</h2>
              <p className="text-navy-700">
                {competition.problemStatement}
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-navy-800 mb-4">Solution Approach</h2>
              <p className="text-navy-700">
                {competition.solution}
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Link to="/competitions">
              <Button 
                variant="outline" 
                className="border-navy-600 text-navy-700 hover:bg-navy-100 flex items-center gap-2 transition-all duration-300"
              >
                View All Competitions
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompetitionDetails;
