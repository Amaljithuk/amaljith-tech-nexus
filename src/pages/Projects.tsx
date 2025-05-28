
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ArrowRight, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Document Based Question Answering Model",
      description: "Advanced machine learning project utilizing fine-tuned BERT model for natural language processing. This system demonstrates sophisticated information retrieval capabilities, allowing users to ask questions about documents and receive accurate, contextual answers.",
      longDescription: "This project showcases the implementation of a state-of-the-art question-answering system using BERT (Bidirectional Encoder Representations from Transformers). The model has been fine-tuned on domain-specific data to improve accuracy and relevance of answers. Key features include document preprocessing, question understanding, context extraction, and answer generation with confidence scoring.",
      technologies: ["Python", "BERT", "NLP", "Machine Learning", "Transformers", "PyTorch"],
      features: [
        "Fine-tuned BERT model for domain-specific QA",
        "Context-aware answer extraction",
        "Confidence scoring for answer reliability",
        "Support for multiple document formats",
        "Real-time question processing"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      githubUrl: "https://github.com/Amaljithuk/document-qa-model",
      category: "AI/ML"
    },
    {
      id: 2,
      title: "EduConnect",
      description: "Comprehensive full-stack e-learning platform built with modern web technologies. Features an AI-powered chatbot for student assistance and a scalable backend architecture designed to handle multiple concurrent users and course content delivery.",
      longDescription: "EduConnect is a modern e-learning platform designed to revolutionize online education. The platform includes course management, user authentication, progress tracking, and an intelligent chatbot that helps students with their queries. The scalable architecture ensures smooth performance even with high user loads.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "SQL", "AI Chatbot"],
      features: [
        "User authentication and authorization",
        "Course creation and management",
        "Interactive learning modules",
        "AI-powered chatbot assistance",
        "Progress tracking and analytics",
        "Responsive design for all devices",
        "Real-time communication features"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      githubUrl: "https://github.com/Amaljithuk/educonnect",
      category: "Full-Stack"
    }
  ];

  return (
    <div className="container-width section-padding py-20">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-gradient">My Projects</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A showcase of my technical projects, demonstrating expertise in AI, machine learning, and full-stack development
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`animate-fade-in ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <Card className="bg-portfolio-navy/50 border-portfolio-slate/20 overflow-hidden card-hover">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-portfolio-blue text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </CardTitle>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-portfolio-blue font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-portfolio-blue/40 text-gray-300 bg-portfolio-slate/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-portfolio-blue font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-300 flex items-start">
                            <ArrowRight size={16} className="text-portfolio-blue mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        asChild
                        className="bg-portfolio-blue hover:bg-portfolio-lightBlue flex-1"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2" size={16} />
                          View on GitHub
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white flex-1"
                      >
                        <Code className="mr-2" size={16} />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 animate-fade-in">
        <div className="bg-gradient-to-r from-portfolio-blue/10 to-portfolio-lightBlue/10 rounded-2xl p-8 border border-portfolio-blue/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in collaborating?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to contribute to innovative solutions.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-portfolio-blue hover:bg-portfolio-lightBlue"
          >
            <a href="/contact">
              Get In Touch <ArrowRight className="ml-2" size={20} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
