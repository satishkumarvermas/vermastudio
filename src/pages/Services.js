import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  ShieldCheck, 
  Landmark, 
  Smartphone, 
  MapPin, 
  BadgeCheck, 
  UserPlus, 
  FileText, 
  Plane, 
  HeartPulse, 
  HardDrive, 
  FileSearch, 
  Printer, 
  Sun, 
  Search, 
  Image, 
  CreditCard,
  Keyboard,
  Scroll
} from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const serviceCategories = [
    {
      title: t('services.government'),
      icon: <ShieldCheck className="text-white" />,
      items: [
        { 
          name: t('services.aadhaar'), 
          icon: <UserPlus size={18} />,
          image: "https://www.livelaw.in/h-upload/2024/07/06/548125-aadhaar.webp",
          docs: ["Proof of Identity (PAN/Voter ID)", "Proof of Address (Utility Bill)", "Date of Birth Proof"]
        },
        { 
          name: t('services.pan'), 
          icon: <CreditCard size={18} />,
          image: "https://digitalbachat.in/wp-content/uploads/2021/10/How-to-apply-PAN-card-online.jpg.webp",
          docs: ["Aadhaar Card", "2 Passport Size Photos", "Address Proof"]
        },
        { 
          name: t('services.passport'), 
          icon: <Plane size={18} />,
          image: "https://delhincrtimes.com/wp-content/uploads/2026/04/passport-seva-kendra-delhi-2026-appointment-booking-passportindia-gov-in.webp",
          docs: ["Aadhaar Card", "10th Marksheet/DOB Proof", "Bank Passbook/Utility Bill"]
        },
        { 
          name: t('services.voter'), 
          icon: <BadgeCheck size={18} />,
          image: "https://c.ndtvimg.com/2024-02/kpq2l27o_voting-1200_295x200_23_February_24.jpg",
          docs: ["Aadhaar Card", "Age Proof", "1 Passport Size Photo"]
        },
        { 
          name: "Lost Voter Card Recovery", 
          icon: <Search size={18} />,
          image: "https://images.picxy.com/cache/2020/6/8/4bd3fc92d87e3a4d283523b163ba45b0.jpg",
          docs: ["EPIC Number (if known)", "Aadhaar Card", "Police Lost Report (FIR)"]
        },
        { 
          name: t('services.certificates'), 
          icon: <FileText size={18} />,
          image: "https://i.ytimg.com/vi/Rybzj--MkFU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCpYowf3t6tAqxXG3k90N1GRo80yA",
          docs: ["Aadhaar Card", "Ration Card", "Land Receipt / Salary Slip", "Affidavit"]
        },
        { 
          name: "Birth Certificate", 
          icon: <FileText size={18} />,
          image: "https://jharyojana.com/wp-content/uploads/2021/07/Jharkhand-Birth-Certificate-Online-Apply-%E0%A4%9D%E0%A4%BE%E0%A4%B0%E0%A4%96%E0%A4%A3%E0%A5%8D%E0%A4%A1-%E0%A4%9C%E0%A4%A8%E0%A5%8D%E0%A4%AE-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AE%E0%A4%BE%E0%A4%A3-%E0%A4%AA%E0%A4%A4%E0%A5%8D%E0%A4%B0-%E0%A4%91%E0%A4%A8%E0%A4%B2%E0%A4%BE%E0%A4%87%E0%A4%A8-%E0%A4%86%E0%A4%B5%E0%A5%87%E0%A4%A6%E0%A4%A8-%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A5%87-%E0%A4%95%E0%A4%B0%E0%A5%87.jpg",
          docs: ["Hospital Discharge Paper", "Parents Aadhaar Card", "Address Proof"]
        },
        { 
          name: "Death Certificate", 
          icon: <FileText size={18} />,
          image: "https://static.newstrack.com/h-upload/2024/11/08/1813255-fake.jpg",
          docs: ["Doctor Medical Certificate", "Deceased Person Aadhaar", "Applicant Identity Proof"]
        },
        { 
          name: t('services.ayushman'), 
          icon: <HeartPulse size={18} />,
          image: "https://hindime.in/wp-content/uploads/2025/11/Ayushman-Card.webp",
          docs: ["Aadhaar Card", "Ration Card", "Active Mobile Number"]
        },
        { 
          name: "Ration Card Services", 
          icon: <FileText size={18} />,
          image: "https://aahar-jharkhand.org/wp-content/uploads/2025/10/Jharkhand-.webp",
          docs: ["Family Aadhaar Cards", "Head of Family Photo", "Income Certificate"]
        },
      ]
    },
    {
      title: "Payments & Travel Bookings",
      icon: <Smartphone className="text-white" />,
      items: [
        { 
          name: "All Types of Tax Payment", 
          icon: <FileText size={18} />,
          image: "https://tcsbl.bank.in/wp-content/uploads/2023/03/8-1.png",
          docs: ["Property ID / Assessment No.", "Previous Tax Receipt", "Mobile Number"]
        },
        { 
          name: "Utility Bill Payments", 
          icon: <CreditCard size={18} />,
          image: "https://www.sambhavpay.com/web_theme/image/products/bbps/bill_payments.png",
          docs: ["Consumer ID / Account No.", "Service Provider Name", "Latest Bill Copy"]
        },
        { 
          name: "Train Ticket Booking", 
          icon: <Plane size={18} />,
          image: "https://5.imimg.com/data5/SELLER/Default/2024/3/401912335/FD/LK/CE/105190742/railway-ticketing.jpg",
          docs: ["Passenger Name (as per ID)", "Age & Gender", "Aadhaar Card (for travel)"]
        },
      ]
    },
    {
      title: "Printing & Professional Services",
      icon: <Printer className="text-white" />,
      items: [
        { 
          name: "PVC Card Printing (Aadhaar/PAN)", 
          icon: <CreditCard size={18} />,
          image: "https://images.picxy.com/cache/2020/6/8/4bd3fc92d87e3a4d283523b163ba45b0.jpg",
          docs: ["Digital Copy of Document", "Aadhaar Number", "PAN Number"]
        },
        { 
          name: "Hindi & English Typing", 
          icon: <Keyboard size={18} />,
          image: "https://mscomputer.org/public/uploads/course/provide-hindi-typing-service.jpg",
          docs: ["Handwritten Draft", "Language Preference", "Specific Format Details"]
        },
        { 
          name: "Online Form Filling", 
          icon: <FileText size={18} />,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsc6u1mCtHT5mn5MeEaQQRQ0dxDdTVgekiJA&s",
          docs: ["Personal Qualification Info", "Aadhaar Card", "Scanned Photo/Sign"]
        },
        { 
          name: t('services.photo'), 
          icon: <Image size={18} />,
          image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop",
          docs: ["Original Document", "Pen Drive/Email File", "Physical Presence"]
        },
      ]
    },
    {
      title: t('services.financial'),
      icon: <Landmark className="text-white" />,
      items: [
        { 
          name: t('services.banking'), 
          icon: <Landmark size={18} />,
          image: "https://yourule.in/bucket/page-images/1752312082975-f1e20a91e71d67e7da7d4a73317c251e.jpg",
          docs: ["Aadhaar Card", "PAN Card", "2 Passport Photos", "Mobile Number"]
        },
        { 
          name: t('services.cash'), 
          icon: <CreditCard size={18} />,
          image: "https://www.emantor.com/images/resource/aeps.jpg",
          docs: ["Aadhaar Number (for AEPS)", "Bank Name", "Fingerprint Auth"]
        },
      ]
    },
    {
      title: t('services.land'),
      icon: <Scroll className="text-white" />,
      items: [
        { 
          name: t('services.land_receipt'), 
          icon: <FileText size={18} />,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBKPJ5dMTR6f0TOQoR0B-O3aA0hgBr64T9g&s",
          docs: ["Old Receipt Copy", "Khatiyan Details", "Register II Volume/Page"]
        },
        { 
          name: t('services.mutation'), 
          icon: <Search size={18} />,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS23nRKDdPwVPJ9D_SKXzAbGwWsxB5-IaM9jA&s",
          docs: ["Registry Copy (Kewala)", "Death Certificate (if inheritance)", "Address Proof"]
        },
      ]
    }
  ];

  return (
    <div className="bg-white py-20 sm:py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 sm:mb-24">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-black leading-none tracking-tighter mb-6 sm:mb-8 uppercase italic">Services</h1>
          <div className="w-full h-4 sm:h-8 bg-black mb-6 sm:mb-8"></div>
          <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-8">
             <p className="text-xl sm:text-2xl text-black font-black uppercase tracking-widest max-w-xl">
               {t('tagline')}
             </p>
             <p className="text-lg sm:text-xl text-gray-500 font-bold uppercase tracking-tight">
               {t('establishment')}
             </p>
          </div>
        </div>

        <div className="space-y-24 sm:space-y-32">
          {serviceCategories.map((category, idx) => (
            <div key={idx}>
              <div className="flex items-center space-x-4 sm:space-x-6 mb-8 sm:mb-12 border-b-4 sm:border-b-8 border-black pb-3 sm:pb-4">
                <div className="p-3 sm:p-4 bg-black text-white shrink-0">
                  {React.cloneElement(category.icon, { size: 24, className: 'sm:size-32' })}
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-black uppercase tracking-tighter">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                {category.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="border-4 border-black shadow-brutal hover:shadow-brutal-lg transition-all flex flex-col bg-white overflow-hidden group"
                  >
                    <div className="h-40 sm:h-48 overflow-hidden border-b-4 border-black grayscale group-hover:grayscale-0 transition-all">
                       <img src={item.image} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-4 sm:p-6 flex-grow">
                       <div className="flex items-center space-x-3 mb-4">
                          <div className="p-2 bg-black text-white shrink-0">
                             {React.cloneElement(item.icon, { size: 16, className: 'sm:size-18' })}
                          </div>
                          <h3 className="text-lg sm:text-xl font-black text-black uppercase tracking-tight">
                            {item.name}
                          </h3>
                       </div>
                       
                       <div className="mt-4 sm:mt-6">
                          <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-400 mb-2 sm:mb-3">Required Documents:</h4>
                          <ul className="space-y-1.5 sm:space-y-2">
                             {item.docs.map((doc, docIdx) => (
                                <li key={docIdx} className="flex items-start space-x-2 text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-tight">
                                   <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-black mt-1 sm:mt-1.5 shrink-0"></div>
                                   <span>{doc}</span>
                                </li>
                             ))}
                          </ul>
                       </div>
                    </div>
                    <div className="p-4 sm:p-6 pt-0 mt-auto">
                       <a 
                          href={`https://wa.me/918102920240?text=Hi, I want to apply for ${item.name}. Please tell me more.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="brutal-btn w-full text-xs sm:text-sm py-2 sm:py-3"
                       >
                          Apply Now
                       </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 sm:mt-32 bg-black p-8 sm:p-12 md:p-20 text-white border-8 border-black shadow-brutal-lg relative overflow-hidden">
          <div className="relative z-10 text-center sm:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 sm:mb-8 uppercase leading-none tracking-tighter">Ready to<br className="hidden sm:block" /> help you!</h2>
            <p className="text-gray-400 mb-8 sm:mb-12 text-lg sm:text-xl font-bold uppercase tracking-widest">Visit Verma Studio today for fast and reliable service.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
              <a 
                href="tel:+918102920240" 
                className="brutal-btn bg-white text-black text-lg sm:text-xl px-8 sm:px-12 py-3 sm:py-5"
              >
                Call Us
              </a>
              <a 
                href="https://wa.me/918102920240" 
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn-primary text-lg sm:text-xl px-8 sm:px-12 py-3 sm:py-5 border-white hover:bg-white hover:text-black"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none hidden lg:block">
             <MapPin size={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
