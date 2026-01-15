// pages/Team.jsx
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { translations } from '../translations';

export default function Team({ language }) {
  const t = translations[language];

  const members = [
    t.team.feldman,
    t.team.sandness,
    t.team.zhou,
    t.team.zhang,
    t.team.wei,
    t.team.liang
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-20 border-b border-gray-200"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">{t.team.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' ?
              '20-40 years of Wall Street and investment banking expertise' :
              '20-40年华尔街和投资银行专业知识'
            }
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {members.map((member, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md hover:border-green-700 transition-all">
                <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <div className="text-6xl font-serif font-bold text-green-700 opacity-30">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-700 font-medium mb-4 text-sm">{member.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <button className="p-2 border border-gray-300 rounded hover:border-green-700 hover:bg-green-50 transition-all">
                      <img src="https://cdn.cdnlogo.com/logos/w/79/wechat.svg" alt="WeChat" className="w-4 h-4" />
                    </button>
                    <button className="p-2 border border-gray-300 rounded hover:border-green-700 hover:bg-green-50 transition-all">
                      <Linkedin className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 border border-gray-300 rounded hover:border-green-700 hover:bg-green-50 transition-all">
                      <Mail className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '40+', label: language === 'en' ? 'Years Max Experience' : '最多年限经验' },
              { value: '$2B+', label: language === 'en' ? 'Assets Managed' : '管理资产' },
              { value: '6', label: language === 'en' ? 'Senior Advisors' : '资深顾问' },
              { value: language === 'en' ? 'Global' : '全球', label: language === 'en' ? 'Network Reach' : '网络覆盖' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-green-700 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            {language === 'en' ? 'Join Our Team' : '加入我们的团队'}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {language === 'en' ?
              'We\'re always looking for talented professionals who share our commitment to excellence' :
              '我们一直在寻找与我们致力于卓越的才华横溢的专业人士'
            }
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-4 bg-green-700 text-white rounded hover:bg-green-800 transition-all font-medium shadow-lg"
          >
            {language === 'en' ? 'Careers at RockyStream' : 'RockyStream职业机会'}
          </a>
        </div>
      </section>
    </div>
  );
}