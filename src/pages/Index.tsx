import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code } from 'lucide-react';

const Index = () => {
  const skills = [
    'Python', 'Java', 'ReactJS', 'JavaScript', 'Node.js', 'SQL',
    'Machine Learning', 'NLP', 'Data Analysis', 'BERT', 'HTML/CSS'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container-width section-padding py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="text-gradient">Amaljith U K</span>
            </h1>
            <p className="text-xl lg:text-2xl text-portfolio-gray mb-8">
              MCA Graduate | Full-Stack Developer | NLP & Machine Learning Enthusiast
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Passionate about building innovative web applications and AI solutions. 
              Experienced in full-stack development with expertise in Python, Java, ReactJS, 
              and cutting-edge machine learning technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-portfolio-blue hover:bg-portfolio-lightBlue">
                <Link to="/contact">
                  Get In Touch <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white">
                <Link to="/projects">
                  View Projects
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-portfolio-blue to-portfolio-lightBlue p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/5af4c3dd-a460-4f4f-b74f-710635c36751.png" 
                    alt="Amaljith U K - Profile Picture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-portfolio-blue/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-portfolio-lightBlue/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container-width section-padding py-20 bg-portfolio-navy/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-gray-300 text-lg">Technologies I work with</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="px-6 py-3 bg-portfolio-slate/30 rounded-full border border-portfolio-blue/20 
                         hover:border-portfolio-blue/40 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-gray-200 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick About Section */}
      <section className="container-width section-padding py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="w-32 h-32 bg-gradient-to-br from-portfolio-blue to-portfolio-lightBlue rounded-2xl flex items-center justify-center mb-8">
              <Code size={60} className="text-white" />
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm an MCA graduate from Cochin University of Science and Technology with a strong 
              foundation in computer science and a passion for emerging technologies. My expertise 
              spans full-stack web development, natural language processing, and machine learning.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              With achievements like qualifying UGC NET and ranking 6th in ModelQuest ML Hackathon, 
              I bring both theoretical knowledge and practical skills to every project.
            </p>
            <Button asChild variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white">
              <Link to="/about">
                Learn More About Me <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
