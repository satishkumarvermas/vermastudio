import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Share2, MessageCircle, Globe } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white pt-16 pb-12 border-t-8 border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-black mb-6 tracking-tighter uppercase italic">Verma Studio</h3>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              {t('home.hero_subtitle')}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-black mb-6 uppercase tracking-widest border-b-4 border-white inline-block">
              {t('footer.contact_us')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin size={20} className="text-white shrink-0 mt-1" />
                <a 
                  href="https://maps.app.goo.gl/rnsdMuVC5aEorso96" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4 transition-all"
                >
                  Verma Studio, Balhara, Naikadih, Jharkhand - 825412
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone size={20} className="text-white shrink-0" />
                <span className="font-bold">+91 81029 20240, 81023 22242</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail size={20} className="text-white shrink-0" />
                <a 
                  href="mailto:vermastudio42@gmail.com"
                  className="font-bold hover:underline underline-offset-4 transition-all"
                >
                  vermastudio42@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-black mb-6 uppercase tracking-widest border-b-4 border-white inline-block">
              Stay Connected
            </h3>
            <div className="flex space-x-4 mb-8">
              {[Share2, MessageCircle, Globe].map((Icon, i) => (
                <a key={i} href="#" className="p-3 border-2 border-white hover:bg-white hover:text-black transition-all">
                  <Icon size={24} />
                </a>
              ))}
            </div>
            <a 
              href="https://g.page/r/CStUErOTw_3wECk/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="brutal-btn bg-white text-black font-black uppercase tracking-tighter inline-flex items-center"
            >
              Review Us
            </a>
          </div>
        </div>
        <div className="pt-12 border-t-2 border-gray-800 text-center text-gray-600 font-bold uppercase tracking-widest text-xs">
          <p>© {new Date().getFullYear()} Verma Studio. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
