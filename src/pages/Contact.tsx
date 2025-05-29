import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <div className="container-width section-padding py-20">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-gradient">Get In Touch</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="animate-fade-in">
          <Card className="bg-portfolio-navy/50 border-portfolio-slate/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-portfolio-slate/30 border-portfolio-slate/50 text-white focus:border-portfolio-blue"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-portfolio-slate/30 border-portfolio-slate/50 text-white focus:border-portfolio-blue"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-portfolio-slate/30 border-portfolio-slate/50 text-white focus:border-portfolio-blue"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-300">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-portfolio-slate/30 border-portfolio-slate/50 text-white focus:border-portfolio-blue resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-portfolio-blue hover:bg-portfolio-lightBlue"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2" size={16} />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
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
      </div>

      {/* FAQ Section */}
      <div className="mt-20 animate-fade-in">
        <h3 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-portfolio-navy/50 border-portfolio-slate/20">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold text-portfolio-blue mb-3">What type of projects do you work on?</h4>
              <p className="text-gray-300">
                I specialize in full-stack web development, AI/ML projects, and data analysis. 
                From e-learning platforms to NLP applications, I enjoy working on innovative solutions.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-portfolio-navy/50 border-portfolio-slate/20">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold text-portfolio-blue mb-3">How quickly can you start a project?</h4>
              <p className="text-gray-300">
                Depending on my current workload, I can typically start new projects within 1-2 weeks. 
                For urgent projects, I can often accommodate faster timelines.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
