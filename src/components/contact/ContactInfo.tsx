
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "amaljithuk@gmail.com",
      href: "mailto:amaljithuk@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/amaljithuk",
      href: "https://linkedin.com/in/amaljithuk"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Amaljithuk",
      href: "https://github.com/Amaljithuk"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kasaragod, Kerala, India",
      href: null
    }
  ];

  return (
    <div className="animate-slide-in-right space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          I'm always interested in hearing about new opportunities, whether it's a 
          freelance project, full-time position, or just a chat about technology. 
          Feel free to reach out through any of the channels below.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4">
        {contactInfo.map((info, index) => (
          <Card 
            key={index} 
            className="bg-portfolio-slate/20 border-portfolio-slate/30 hover:border-portfolio-blue/40 transition-colors card-hover"
          >
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-portfolio-blue/20 rounded-lg flex items-center justify-center mr-4">
                  <info.icon size={20} className="text-portfolio-blue" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-white hover:text-portfolio-blue transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-white">{info.value}</div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Availability */}
      <Card className="bg-gradient-to-r from-portfolio-blue/10 to-portfolio-lightBlue/10 border-portfolio-blue/20">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-white mb-3">Current Availability</h3>
          <p className="text-gray-300 mb-4">
            I'm currently available for freelance projects and open to discussing 
            full-time opportunities. Response time is typically within 24 hours.
          </p>
          <div className="flex items-center text-sm text-portfolio-blue">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Available for new projects
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
