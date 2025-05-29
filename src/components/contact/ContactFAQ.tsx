
import { Card, CardContent } from '@/components/ui/card';

const ContactFAQ = () => {
  return (
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
  );
};

export default ContactFAQ;
