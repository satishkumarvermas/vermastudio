import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CreditCard, FileText, Smartphone, Train, ShieldCheck, Landmark, ArrowRight } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  const featuredServices = [
    { icon: <ShieldCheck className="text-blue-600" size={32} />, title: t('services.aadhaar'), key: 'government' },
    { icon: <CreditCard className="text-blue-600" size={32} />, title: t('services.pan'), key: 'government' },
    { icon: <Landmark className="text-blue-600" size={32} />, title: t('services.banking'), key: 'financial' },
    { icon: <Smartphone className="text-blue-600" size={32} />, title: t('services.bills'), key: 'utility' },
    { icon: <Train className="text-blue-600" size={32} />, title: t('services.tickets'), key: 'utility' },
    { icon: <FileText className="text-blue-600" size={32} />, title: t('services.insurance'), key: 'financial' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-black py-20 sm:py-32 lg:py-40 border-b-8 border-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-6 sm:mb-8 leading-[0.9] tracking-tighter italic">
              {t('home.hero_title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 leading-relaxed max-w-2xl font-bold uppercase tracking-tight">
              {t('home.hero_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/services" className="brutal-btn-primary text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5">
                {t('home.view_all')} <ArrowRight className="ml-3" size={24} />
              </Link>
              <Link to="/contact" className="brutal-btn bg-white text-black text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5">
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
               <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-none mb-4">{t('home.featured_services')}</h2>
               <div className="w-32 sm:w-48 h-2 sm:h-3 bg-black"></div>
            </div>
            <Link to="/services" className="text-black font-black uppercase tracking-widest hover:underline flex items-center text-base sm:text-lg">
              Explore All <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {featuredServices.map((service, index) => (
              <div key={index} className="brutal-card group">
                <div className="mb-6 sm:mb-8 p-4 sm:p-6 border-4 border-black inline-block group-hover:bg-black group-hover:text-white transition-all">
                  {React.cloneElement(service.icon, { size: 40, className: 'text-black group-hover:text-white transition-all' })}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 font-bold uppercase tracking-tight mb-6 sm:mb-8 text-xs sm:text-sm">{t(`services.${service.key}`)}</p>
                <Link to="/services" className="brutal-btn w-full text-sm sm:text-base">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-24 bg-gray-100 border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 sm:gap-16">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl font-black text-black mb-8 sm:mb-10 leading-none">The Standard of Digital Trust</h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-10 sm:mb-12 leading-relaxed font-bold">
                Verma Studio has been serving the community for years, providing reliable and efficient access to government and digital services.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {['Fast Processing', 'Reliable Support', 'Expert Guidance', 'Secure Documentation'].map((item) => (
                  <div key={item} className="flex items-center space-x-4 border-2 border-black p-3 sm:p-4 bg-white shadow-brutal">
                    <ShieldCheck className="text-black shrink-0" size={24} />
                    <span className="font-black uppercase tracking-tighter text-xs sm:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
              <div className="bg-black text-white p-8 sm:p-12 h-full flex flex-col justify-between border-8 border-black shadow-brutal-lg min-h-[300px] sm:min-h-[400px]">
                 <Landmark size={120} className="text-white opacity-20 self-end" />
                 <div>
                    <h3 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase leading-[0.8] mb-4">Trusted<br />CSC Hub</h3>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-xs sm:text-sm">Since 2012 • 14 Years of Excellence</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
