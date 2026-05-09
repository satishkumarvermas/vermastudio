import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { label: 'Happy Clients', value: '5000+', icon: <Users className="text-primary-600" /> },
    { label: 'Years Experience', value: '10+', icon: <Clock className="text-primary-600" /> },
    { label: 'Services Offered', value: '50+', icon: <Award className="text-primary-600" /> },
    { label: 'Trusted by Govt', value: '100%', icon: <Shield className="text-primary-600" /> },
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-white py-24 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-8xl font-black text-black mb-8 leading-none tracking-tighter">
            {t('nav.about')}<br />Verma Studio
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl font-bold leading-relaxed uppercase tracking-tight">
            Verma Studio is a leading Common Service Centre (CSC) dedicated to bridging the digital divide by providing essential government and financial services to the community.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch gap-16">
            <div className="md:w-1/2">
               <div className="h-full bg-black text-white p-12 border-8 border-black shadow-brutal-lg flex flex-col justify-end min-h-[400px]">
                  <h2 className="text-5xl font-black uppercase tracking-tighter leading-[0.8] mb-6">Dedicated to<br />Digital<br />Empowerment</h2>
                  <div className="bg-white text-black p-4 inline-block self-start font-black uppercase tracking-widest text-sm">
                     10+ Years of Excellence
                  </div>
               </div>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl font-black text-black mb-8 border-b-8 border-black inline-block self-start uppercase">Our Mission</h2>
              <p className="text-gray-700 text-xl mb-6 leading-relaxed font-bold">
                Our mission is to simplify the complex world of government applications and digital transactions for every citizen. We believe that technology should empower people, not overwhelm them.
              </p>
              <p className="text-gray-700 text-xl mb-12 leading-relaxed font-bold">
                Whether it's your first time applying for a PAN card or you need help with a complex banking transaction, we are here to guide you every step of the way with transparency and integrity.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 {stats.map((stat, idx) => (
                    <div key={idx} className="border-4 border-black p-6 bg-white shadow-brutal">
                       <div className="mb-4">
                          {React.cloneElement(stat.icon, { size: 32, className: 'text-black' })}
                       </div>
                       <div>
                          <p className="text-3xl font-black text-black leading-none">{stat.value}</p>
                          <p className="text-xs text-gray-500 font-black uppercase tracking-widest mt-1">{stat.label}</p>
                       </div>
                    </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center mb-20 uppercase tracking-tighter italic">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Integrity', desc: 'We maintain the highest standards of honesty and transparency in all our dealings.' },
              { title: 'Efficiency', desc: 'We value your time and strive to process every request as quickly as possible.' },
              { title: 'Community', desc: 'We are proud to serve our local community and help build a digitally literate society.' }
            ].map((value, idx) => (
              <div key={idx} className="border-4 border-white p-10 bg-black hover:bg-white hover:text-black transition-all group">
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">{value.title}</h3>
                <p className="text-gray-400 font-bold leading-relaxed group-hover:text-black transition-all">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
