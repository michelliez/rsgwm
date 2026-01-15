// pages/Office.jsx
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { translations } from '../translations';

export default function Office({ language }) {
  const t = translations[language];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">{t.contact.office}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' ?
              'Located in the heart of Midtown Manhattan' :
              '位于曼哈顿中城中心'
            }
          </p>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                {language === 'en' ? 'Get In Touch' : '联系我们'}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-lg border border-green-200">
                  <MapPin className="w-6 h-6 text-green-700 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {language === 'en' ? 'Address' : '地址'}
                    </div>
                    <div className="text-gray-600">{t.contact.address}</div>
                    <div className="text-gray-600">{t.contact.city}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <Phone className="w-6 h-6 text-green-700" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {language === 'en' ? 'Phone' : '电话'}
                    </div>
                    <div className="text-gray-600">+1 (212) 555-0100</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <Mail className="w-6 h-6 text-green-700" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {language === 'en' ? 'Email' : '电子邮件'}
                    </div>
                    <div className="text-gray-600">info@rockystreamglobal.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <Clock className="w-6 h-6 text-green-700 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {language === 'en' ? 'Office Hours' : '办公时间'}
                    </div>
                    <div className="text-gray-600">
                      {language === 'en' ? 'Monday - Friday: 9:00 AM - 6:00 PM EST' : '周一至周五：上午9:00 - 下午6:00 EST'}
                    </div>
                    <div className="text-gray-600">
                      {language === 'en' ? 'Saturday: By Appointment Only' : '周六：仅限预约'}
                    </div>
                    <div className="text-gray-600">
                      {language === 'en' ? 'Sunday: Closed' : '周日：关闭'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-full min-h-96 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative">
              <img 
                src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?q=80&w=2070" 
                alt="Manhattan Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <a 
                  href="https://maps.google.com/?q=Lexington+Avenue+E+46th+Street+New+York"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-700 text-white rounded hover:bg-green-800 transition-all font-medium shadow-lg"
                >
                  {language === 'en' ? 'Get Directions' : '获取路线'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Location & Transportation' : '位置和交通'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {language === 'en' ?
                'Our office is conveniently located in Midtown Manhattan at the intersection of Lexington Avenue and E 46th Street' :
                '我们的办公室便利地位于曼哈顿中城列克星敦大道和东46街的交汇处'
              }
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: language === 'en' ? 'Subway Access' : '地铁通道', 
                desc: language === 'en' ? '4, 5, 6, 7, S lines at Grand Central' : 'Grand Central的4、5、6、7、S线'
              },
              { 
                title: language === 'en' ? 'Parking' : '停车', 
                desc: language === 'en' ? 'Multiple garages nearby' : '附近有多个停车场'
              },
              { 
                title: language === 'en' ? 'Validation' : '验证', 
                desc: language === 'en' ? 'Available for client meetings' : '客户会议可用'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-700 transition-all text-center">
                <div className="font-semibold text-gray-900 mb-2">{item.title}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            {language === 'en' ? 'Nearby Landmarks' : '附近地标'}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: language === 'en' ? 'Grand Central Terminal' : '中央车站', distance: language === 'en' ? '2 blocks' : '2个街区' },
              { name: language === 'en' ? 'Chrysler Building' : '克莱斯勒大厦', distance: language === 'en' ? '3 blocks' : '3个街区' },
              { name: language === 'en' ? 'United Nations HQ' : '联合国总部', distance: language === 'en' ? '5 blocks' : '5个街区' },
              { name: language === 'en' ? 'Bryant Park' : '布莱恩特公园', distance: language === 'en' ? '6 blocks' : '6个街区' }
            ].map((landmark, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-green-700 transition-all text-center">
                <div className="font-semibold text-gray-900 mb-2">{landmark.name}</div>
                <div className="text-sm text-gray-600">{landmark.distance}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}