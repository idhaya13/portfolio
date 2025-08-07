import { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="h-screen bg-black relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Nebula effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-blue-600/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-8 py-12 flex flex-col items-center justify-center h-screen">
        {/* Header section */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl lg:text-6xl font-thin text-white tracking-wider">
            CONTACT
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
          <p className="text-gray-400 text-base font-light max-w-md mx-auto leading-relaxed">
            Reach across the cosmos. Let's connect and create something extraordinary.
          </p>
        </div>

        {/* Contact form */}
        <div className="w-full max-w-sm">
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="space-y-6">
              {/* Name input */}
              <div className="relative group">
                <User className="absolute left-0 top-3 w-4 h-4 text-gray-500 transition-colors group-focus-within:text-white" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full pl-8 pr-0 py-3 bg-transparent border-0 border-b border-white/20 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors text-base font-light tracking-wide"
                />
              </div>

              {/* Email input */}
              <div className="relative group">
                <Mail className="absolute left-0 top-3 w-4 h-4 text-gray-500 transition-colors group-focus-within:text-white" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full pl-8 pr-0 py-3 bg-transparent border-0 border-b border-white/20 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors text-base font-light tracking-wide"
                />
              </div>

              {/* Message input */}
              <div className="relative group">
                <MessageSquare className="absolute left-0 top-3 w-4 h-4 text-gray-500 transition-colors group-focus-within:text-white" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="3"
                  required
                  className="w-full pl-8 pr-0 py-3 bg-transparent border-0 border-b border-white/20 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors text-base font-light tracking-wide resize-none"
                />
              </div>

              {/* Submit button */}
              <div className="pt-6">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || submitted}
                  className="w-full group relative overflow-hidden border border-white/30 hover:border-white/60 py-3 rounded-full text-white font-light text-base tracking-widest transition-all duration-500 hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center justify-center space-x-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border border-white/40 border-t-white rounded-full animate-spin"></div>
                        <span>TRANSMITTING</span>
                      </>
                    ) : submitted ? (
                      <>
                        <div className="w-5 h-5 border-2 border-green-400 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <span>TRANSMITTED</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row gap-8 mt-12 text-center">
          <div className="group cursor-pointer">
            <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors mx-auto mb-1" />
            <p className="text-gray-400 group-hover:text-white transition-colors font-light tracking-wide text-sm">
              mariaidhayainfancia.x@gmail.com
            </p>
          </div>
          
          <div className="group cursor-pointer">
            <Phone className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors mx-auto mb-1" />
            <p className="text-gray-400 group-hover:text-white transition-colors font-light tracking-wide text-sm">
              7904120364
            </p>
          </div>
          
          <div className="group cursor-pointer">
            <MapPin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors mx-auto mb-1" />
            <p className="text-gray-400 group-hover:text-white transition-colors font-light tracking-wide text-sm">
              Coimbatore,TN,India
            </p>
          </div>
        </div>

        {/* Shooting stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-white to-transparent animate-pulse opacity-60"
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
                transform: 'rotate(45deg)',
                animationDelay: `${i * 2}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;