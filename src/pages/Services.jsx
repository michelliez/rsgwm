// pages/Services.jsx
import React from 'react';
import { TrendingUp, Shield, FileText, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { translations } from '../translations';

export default function Services({ language }) {
  const t = translations[language];

  const services = [
    { 
      icon: TrendingUp, 
      title: t.services.wealth.title, 
      desc: t.services.wealth.desc, 
      features: language === 'en' ? 
        ['Portfolio Management', 'Investment Strategy', 'Performance Tracking', 'Retirement Planning'] :
        ['投资组合管理', '投资策略', '绩效跟踪', '退休规划'],
      link: '/asset-management'
    },
    { 
      icon: Shield, 
      title: t.services.asset.title, 
      desc: t.services.asset.desc, 
      features: language === 'en' ?
        ['Trust Formation', 'Legal Structuring', 'Risk Mitigation', 'Wealth Preservation'] :
        ['信托设立', '法律架构', '风险缓解', '财富保全'],
      link: '/asset-management'
    },
    { 
      icon: FileText, 
      title: t.services.estate.title, 
      desc: t.services.estate.desc, 
      features: language === 'en' ?
        ['Will & Testament', 'Tax Planning', 'Legacy Strategy', 'Charitable Giving'] :
        ['遗嘱', '税务规划', '传承策略', '慈善捐赠'],
      link: '/contact'
    },
    { 
      icon: Briefcase, 
      title: t.services.financial.title, 
      desc: t.services.financial.desc, 
      features: language === 'en' ?
        ['Cross-border Fundraising', 'M&A Advisory', 'SPAC Services', 'Investment Consulting'] :
        ['跨境融资', '并购咨询', 'SPAC服务', '投资咨询'],
      link: '/contact'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-20 border-b border-gray-200"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url('https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=2070')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">{t.services.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' ? 
              'Comprehensive financial solutions tailored to your family\'s unique needs' :
              '为您家族的独特需求量身定制的全面金融解决方案'
            }
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-10 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-green-700 transition-all">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-lg">{service.desc}</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-700 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-green-700 font-semibold hover:underline"
                >
                  {language === 'en' ? 'Learn More' : '了解更多'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              {language === 'en' ? 'Why Choose Our Services' : '为什么选择我们的服务'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en' ? 
                'Decades of experience, personalized attention, and proven results' :
                '数十年的经验、个性化关注和经过验证的结果'
              }
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: language === 'en' ? 'Proven Track Record' : '经过验证的业绩记录', 
                desc: language === 'en' ? 
                  'Over 10 years serving high net-worth families with consistent results' :
                  '超过10年为高净值家庭提供服务，取得稳定成果'
              },
              { 
                title: language === 'en' ? 'Expert Team' : '专家团队', 
                desc: language === 'en' ?
                  '40+ years combined Wall Street experience from top-tier firms' :
                  '来自顶级公司的40年以上华尔街经验'
              },
              { 
                title: language === 'en' ? 'Personalized Approach' : '个性化方法', 
                desc: language === 'en' ?
                  'Customized strategies designed specifically for your financial goals' :
                  '专门为您的财务目标设计的定制策略'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:border-green-700 transition-all text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            {language === 'en' ? 'Ready to Get Started?' : '准备好开始了吗？'}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {language === 'en' ?
              'Schedule a consultation with our expert advisors today' :
              '立即与我们的专家顾问预约咨询'
            }
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-green-700 text-white rounded hover:bg-green-800 transition-all text-lg font-medium shadow-lg"
          >
            {language === 'en' ? 'Contact Us' : '联系我们'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}