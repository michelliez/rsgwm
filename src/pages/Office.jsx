// pages/Office.jsx
import React from 'react';
import { MapPin, Phone, Mail, Clock, Building } from 'lucide-react';
import { translations } from '../translations';

export default function Office({ language }) {
  const t = translations[language];

  const offices = [
    {
      name: t.contact.ny1,
      address: t.contact.ny1address,
      city: t.contact.ny1city,
      phone: t.contact.njphone,
      image: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=2031'
    },
    {
      name: t.contact.ny2,
      address: t.contact.ny2address,
      city: t.contact.ny2city,
      phone: t.contact.njphone,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070'
    },
    {
      name: t.contact.nj,
      address: t.contact.njaddress,
      city: t.contact.njcity,
      phone: t.contact.njphone,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2035'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-20 border-b border-gray-200"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2072')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">{t.contact.office}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' ?
              'Conveniently located in New York and New Jersey' :
              '便利地位于纽约和新泽西'
            }
          </p>
        </div>
      </section>

      {/* Office Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {offices.map((office, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${office.image}')` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{office.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                      <div className="text-gray-600 text-sm">
                        <p>{office.address}</p>
                        <p>{office.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-700 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">{office.phone}</p>
                    </div>
                  </div>
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(office.address + ' ' + office.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block w-full text-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all text-sm font-medium"
                  >
                    {language === 'en' ? 'Get Directions' : '获取路线'}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Headquarters Contact Info */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
              {language === 'en' ? 'Headquarters Contact Information' : '总部联系信息'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone className="w-8 h-8 text-green-700 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {language === 'en' ? 'Phone Number' : '电话号码'}
                </h3>
                <p className="text-gray-600 text-sm">{t.contact.njphone}</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-green-700 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {language === 'en' ? 'Email' : '电子邮件'}
                </h3>
                <p className="text-gray-600 text-sm">{t.contact.emailaddr}</p>
              </div>
              <div className="text-center">
                <Building className="w-8 h-8 text-green-700 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {language === 'en' ? 'Website' : '网站'}
                </h3>
                <p className="text-gray-600 text-sm">{t.contact.website}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}