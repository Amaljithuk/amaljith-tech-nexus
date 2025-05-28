import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Star, Briefcase } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "UGC NET Qualified for Assistant Professor",
      description: "Successfully qualified the UGC NET examination for Assistant Professor position with an outstanding percentile of 96.36, demonstrating excellence in Computer Science and Applications.",
      percentile: "96.36 Percentile",
      year: "2024",
      category: "Academic Excellence",
      icon: Award,
      details: [
        "National level examination for Assistant Professor eligibility",
        "Top 4% of all candidates nationwide",
        "Subject: Computer Science and Applications",
        "Demonstrates strong theoretical and practical knowledge"
      ],
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      title: "ModelQuest ML Hackathon - 6th Position",
      description: "Secured 6th position among numerous participants in the prestigious ModelQuest Machine Learning Hackathon organized by NIT Trichy, showcasing practical AI/ML skills.",
      position: "6th Position",
      year: "2024",
      category: "Machine Learning",
      icon: Trophy,
      details: [
        "Competed against top ML enthusiasts nationwide",
        "Organized by National Institute of Technology, Trichy",
        "Demonstrated practical ML problem-solving skills",
        "Built innovative ML solutions under time constraints"
      ],
      color: "from-blue-400 to-purple-500"
    }
  ];

  const otherAccomplishments = [
    {
      title: "IBM Skillbuild Certification",
      description: "Completed advanced Data Analytics certification from IBM",
      year: "2024",
      icon: Briefcase
    },
    {
      title: "Social Network Analysis Certification",
      description: "Professional certification in Social Network Analysis",
      year: "2024",
      icon: Star
    },
    {
      title: "Academic Excellence",
      description: "Maintained CGPA of 8.3 in B.Sc. Computer Science",
      year: "Graduation",
      icon: Award
    }
  ];

  return (
    <div className="container-width section-padding py-20">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-gradient">Achievements</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Recognition of excellence in academics, competitions, and professional development
        </p>
      </div>

      {/* Major Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Major Accomplishments</h2>
        
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="bg-portfolio-navy/50 border-portfolio-slate/20 overflow-hidden card-hover">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Achievement Visual */}
                    <div className={`bg-gradient-to-br ${achievement.color} p-8 flex flex-col items-center justify-center text-center`}>
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        <achievement.icon size={40} className="text-white" />
                      </div>
                      <div className="text-white">
                        <div className="text-2xl font-bold mb-2">
                          {achievement.percentile || achievement.position}
                        </div>
                        <div className="text-lg opacity-90">{achievement.year}</div>
                      </div>
                    </div>

                    {/* Achievement Content */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {achievement.title}
                          </h3>
                          <Badge className="bg-portfolio-blue text-white mb-4">
                            {achievement.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {achievement.description}
                      </p>

                      <div>
                        <h4 className="text-portfolio-blue font-semibold mb-3">Key Highlights:</h4>
                        <ul className="space-y-2">
                          {achievement.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-gray-300 flex items-start">
                              <Star size={16} className="text-portfolio-blue mr-2 mt-0.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Other Accomplishments */}
      <section className="animate-fade-in">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Additional Accomplishments</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherAccomplishments.map((accomplishment, index) => (
            <Card
              key={index}
              className="bg-portfolio-navy/50 border-portfolio-slate/20 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-portfolio-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <accomplishment.icon size={24} className="text-portfolio-blue" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {accomplishment.title}
                </h3>
                <p className="text-gray-300 mb-3">
                  {accomplishment.description}
                </p>
                <Badge variant="outline" className="border-portfolio-blue text-portfolio-blue">
                  {accomplishment.year}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="mt-16 animate-fade-in">
        <Card className="bg-gradient-to-r from-portfolio-blue/10 to-portfolio-lightBlue/10 border-portfolio-blue/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Achievement Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-blue mb-2">96.36%</div>
                <div className="text-gray-300">UGC NET Percentile</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-blue mb-2">6th</div>
                <div className="text-gray-300">ML Hackathon Rank</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-blue mb-2">8.3</div>
                <div className="text-gray-300">Academic CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-blue mb-2">2+</div>
                <div className="text-gray-300">Certifications</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Achievements;
