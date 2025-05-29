
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactFAQ from '@/components/contact/ContactFAQ';

const Contact = () => {
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
        <ContactForm />

        {/* Contact Information */}
        <ContactInfo />
      </div>

      {/* FAQ Section */}
      <ContactFAQ />
    </div>
  );
};

export default Contact;
