import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, MessageSquare, ExternalLink, CreditCard } from 'lucide-react';
import qrCode from '../assets/qr.jpg';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    message: ''
  });

  // You can replace this URL with your actual Google Maps embed link
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.744898725369!2d85.90512347455554!3d24.463023178190795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f3bfeb58a3481b%3A0xf0fdc393b312542b!2sVERMA%20STUDIO!5e1!3m2!1sen!2sin!4v1778298966982!5m2!1sen!2sin";

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "918102920240";
    const text = `*New Message from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-20">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-black mb-6 sm:mb-8 leading-none tracking-tighter uppercase italic">{t('nav.contact')}</h1>
          <div className="w-32 sm:w-48 h-4 sm:h-6 bg-black"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Contact & Reviews (5/12) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="brutal-card bg-white h-full p-6 sm:p-10">
               <h2 className="text-2xl sm:text-3xl font-black text-black mb-8 sm:mb-10 uppercase border-b-4 border-black inline-block">Connect</h2>
               <div className="space-y-8 sm:space-y-10">
                  <div className="flex items-start space-x-4 sm:space-x-6">
                     <div className="border-2 border-black p-1.5 sm:p-2 text-black bg-white shadow-brutal shrink-0">
                        <MapPin size={14} className="sm:size-18" />
                     </div>
                     <div>
                        <h3 className="font-black text-black text-lg sm:text-xl uppercase tracking-tighter mb-2">Our Location</h3>
                        <a 
                           href="https://maps.app.goo.gl/rnsdMuVC5aEorso96" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-gray-600 font-bold text-sm sm:text-base hover:text-black hover:underline underline-offset-4 transition-all"
                        >
                           Verma Studio, Balhara, <br />
                           Naikadih, Jharkhand - 825412
                        </a>
                     </div>
                  </div>

                  <div className="flex items-start space-x-4 sm:space-x-6">
                     <div className="border-2 border-black p-1.5 sm:p-2 text-black bg-white shadow-brutal shrink-0">
                        <Phone size={14} className="sm:size-18" />
                     </div>
                     <div>
                        <h3 className="font-black text-black text-lg sm:text-xl uppercase tracking-tighter mb-2">Phone Number</h3>
                        <p className="text-black text-xl sm:text-2xl font-black tracking-tighter">+91 81029 20240</p>
                        <p className="text-black text-xl sm:text-2xl font-black tracking-tighter">+91 81023 22242</p>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mt-2">Mon-Sun: 7:00 AM - 8:00 PM</p>
                     </div>
                  </div>

                  <div className="flex items-start space-x-4 sm:space-x-6">
                     <div className="border-2 border-black p-1.5 sm:p-2 text-black bg-white shadow-brutal shrink-0">
                        <Mail size={14} className="sm:size-18" />
                     </div>
                     <div>
                        <h3 className="font-black text-black text-lg sm:text-xl uppercase tracking-tighter mb-2">Email Address</h3>
                        <a 
                           href="mailto:vermastudio42@gmail.com"
                           className="text-black text-base sm:text-xl font-black hover:underline underline-offset-4 transition-all break-all"
                        >
                           vermastudio42@gmail.com
                        </a>
                     </div>
                  </div>
               </div>

               <div className="mt-10 sm:mt-12 pt-10 sm:pt-12 border-t-4 border-black grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <a 
                    href="https://wa.me/918102920240" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="brutal-btn bg-[#25D366] text-white border-[#128C7E] hover:bg-white hover:text-[#25D366] py-3 text-sm"
                  >
                    <MessageSquare size={20} className="mr-2 sm:mr-3" />
                    <span>WhatsApp</span>
                  </a>
                  <a 
                    href="https://maps.app.goo.gl/rnsdMuVC5aEorso96" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="brutal-btn-primary py-3 text-sm"
                  >
                    <ExternalLink size={20} className="mr-2 sm:mr-3" />
                    <span>Open Maps</span>
                  </a>
               </div>

               {/* Integrated Google Review */}
               <div className="mt-10 sm:mt-12 pt-8 border-t-4 border-black flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-center sm:text-left">
                     <h3 className="font-black text-xl uppercase tracking-tighter mb-1">Happy with us?</h3>
                     <p className="font-bold text-gray-600 uppercase tracking-widest text-[10px]">Rate us on Google</p>
                  </div>
                  <a 
                    href="https://g.page/r/CStUErOTw_3wECk/review" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="brutal-btn bg-black text-white hover:bg-white hover:text-black w-full sm:w-auto text-sm"
                  >
                    Review Now
                  </a>
               </div>
            </div>
          </div>

          {/* Right Column: Form & QR & Map (7/12) */}
          <div className="lg:col-span-7 space-y-8 flex flex-col">
            {/* Smaller Form Card */}
            <div className="bg-black p-6 sm:p-10 border-8 border-black shadow-brutal-lg text-white">
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tighter italic">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="YOUR NAME"
                        className="w-full bg-transparent border-b-2 border-white p-2 font-black text-sm text-white focus:outline-none focus:bg-white focus:text-black transition-all"
                      />
                   </div>
                   <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="MOBILE NO."
                        className="w-full bg-transparent border-b-2 border-white p-2 font-black text-sm text-white focus:outline-none focus:bg-white focus:text-black transition-all"
                      />
                   </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Message</label>
                  <textarea 
                    rows="2" 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="WRITE YOUR MESSAGE HERE..."
                    className="w-full bg-transparent border-b-2 border-white p-2 font-black text-sm text-white focus:outline-none focus:bg-white focus:text-black transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-white text-black py-4 font-black text-xl uppercase tracking-tighter border-4 border-white hover:bg-black hover:text-white transition-all shadow-brutal flex items-center justify-center space-x-4"
                >
                  <span>Send via WhatsApp</span>
                  <Send size={24} />
                </button>
              </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
               {/* Payment QR Code */}
               <div 
                  className="brutal-card bg-white border-4 border-black flex flex-col items-center text-center py-10 group relative"
               >
                  <h3 className="font-black text-3xl uppercase tracking-tighter mb-6 group-hover:text-primary-600 transition-colors">Scan & Pay</h3>
                  
                  {/* Clickable QR for Mobile */}
                  <a 
                     href="upi://pay?pa=8102920240@okbizaxis&pn=VERMA%20STUDIO&cu=INR"
                     className="border-4 border-black p-4 bg-white mb-6 hover:scale-105 transition-transform cursor-pointer"
                     title="Click to pay via UPI app"
                  >
                     <img src={qrCode} alt="Verma Studio QR Code" className="w-40 h-auto" />
                  </a>

                  <p className="font-bold text-gray-600 uppercase tracking-widest text-xs mb-6">Secure Google Pay</p>
                  
                  <div className="flex flex-col space-y-3 w-full px-6">
                     <a 
                        href="upi://pay?pa=8102920240@okbizaxis&pn=VERMA%20STUDIO&cu=INR"
                        className="bg-black text-white border-2 border-black px-4 py-3 font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center space-x-2 shadow-brutal hover:shadow-none"
                     >
                        <CreditCard size={18} />
                        <span>Pay Now</span>
                     </a>
                     <a 
                        href={qrCode} 
                        download="Verma_Studio_QR.jpg"
                        className="bg-white border-2 border-black text-black px-4 py-2 font-black text-[10px] uppercase tracking-tighter hover:bg-black hover:text-white transition-all flex items-center justify-center space-x-2"
                     >
                        <Send size={12} className="rotate-90" />
                        <span>Save QR</span>
                     </a>
                  </div>
               </div>

               {/* Google Maps Embed */}
               <div className="border-8 border-black shadow-brutal-lg h-full min-h-[350px] sm:min-h-[450px] overflow-hidden">
                  <iframe 
                   src={googleMapsUrl}
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen="" 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Verma Studio Location"
                  ></iframe>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
