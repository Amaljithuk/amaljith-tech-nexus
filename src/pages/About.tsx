
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Book, Briefcase, User } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Cochin University of Science and Technology",
      period: "Ongoing",
      status: "In Progress"
    },
    {
      degree: "B.Sc. in Computer Science",
      institution: "Govt. College Kasaragod",
      period: "Completed",
      grade: "CGPA 8.3"
    }
  ];

  const certifications = [
    {
      name: "IBM Skillbuild: Data Analytics",
      organization: "IBM",
      year: "2024"
    },
    {
      name: "Social Network Analysis",
      organization: "Professional Certification",
      year: "2024"
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "JavaScript"],
    "Web Technologies": ["ReactJS", "HTML5", "CSS3", "Node.js"],
    "Databases": ["SQL", "Database Management"],
    "AI/ML": ["Machine Learning", "Natural Language Processing", "BERT", "Data Analysis"],
    "Tools & Others": ["Git", "RESTful APIs", "Full-Stack Development"]
  };

  return (
    <div className="container-width section-padding py-20">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-gradient">About Me</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Passionate MCA graduate with expertise in full-stack development and AI technologies
        </p>
      </div>

      {/* Professional Summary */}
      <section className="mb-16 animate-fade-in">
        <Card className="bg-portfolio-navy/50 border-portfolio-slate/20 card-hover">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-portfolio-blue rounded-lg flex items-center justify-center mr-4">
                <User className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Professional Summary</h2>
            </div>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I am an MCA graduate from Cochin University of Science and Technology with a strong 
                passion for technology and innovation. My expertise lies in full-stack web development, 
                with particular strengths in Python, Java, ReactJS, and data analysis.
              </p>
              <p>
                My journey in computer science has been marked by a deep interest in artificial 
                intelligence and machine learning. I specialize in Natural Language Processing (NLP) 
                and have worked extensively with advanced models like BERT for building intelligent 
                question-answering systems.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest technological 
                trends. My goal is to contribute to innovative projects that make a meaningful impact 
                in the tech industry while building solutions that solve real-world problems.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Education */}
      <section className="mb-16 animate-fade-in">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-portfolio-blue rounded-lg flex items-center justify-center mr-4">
            <Book className="text-white" size={24} />
          </div>
          <h2 className="text-3xl font-bold text-white">Education</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="bg-portfolio-navy/50 border-portfolio-slate/20 card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-portfolio-blue font-medium mb-2">{edu.institution}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{edu.period}</span>
                  <Badge variant="outline" className="border-portfolio-blue text-portfolio-blue">
                    {edu.status || edu.grade}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-16 animate-fade-in">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-portfolio-blue rounded-lg flex items-center justify-center mr-4">
            <Briefcase className="text-white" size={24} />
          </div>
          <h2 className="text-3xl font-bold text-white">Certifications</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-portfolio-navy/50 border-portfolio-slate/20 card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-portfolio-blue font-medium mb-2">{cert.organization}</p>
                <span className="text-gray-400">{cert.year}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="animate-fade-in">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <Card key={index} className="bg-portfolio-navy/50 border-portfolio-slate/20 card-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-portfolio-blue mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-portfolio-slate/30 text-gray-200 hover:bg-portfolio-slate/50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
