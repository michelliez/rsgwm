// pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Users, Award, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { translations } from '../translations';

export default function Home({ language }) {
  const t = translations[language];
  const [marketData, setMarketData] = useState({
    sp500: { value: '5,985.34', change: '+0.42%', up: true },
    nasdaq: { value: '19,735.12', change: '+0.28%', up: true },
    bond10y: { value: '4.58%', change: '-0.05%', up: false }
  });

  return (
    <div className="pt-24">
      {/* Market Ticker */}
      <section className="bg-gray-900 border-b border-gray-700 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between overflow-x-auto">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm font-medium">S&P 500</span>
                <span className="text-white font-semibold">{marketData.sp500.value}</span>
                <span className={`text-sm flex items-center gap-1 ${marketData.sp500.up ? 'text-green-500' : 'text-red-500'}`}>
                  {marketData.sp500.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {marketData.sp500.change}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm font-medium">NASDAQ</span>
                <span className="text-white font-semibold">{marketData.nasdaq.value}</span>
                <span className={`text-sm flex items-center gap-1 ${marketData.nasdaq.up ? 'text-green-500' : 'text-red-500'}`}>
                  {marketData.nasdaq.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {marketData.nasdaq.change}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm font-medium">10Y Bond</span>
                <span className="text-white font-semibold">{marketData.bond10y.value}</span>
                <span className={`text-sm flex items-center gap-1 ${marketData.bond10y.up ? 'text-green-500' : 'text-red-500'}`}>
                  {marketData.bond10y.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {marketData.bond10y.change}
                </span>
              </div>
            </div>
            <Link to="/market-insights" className="text-green-600 hover:text-green-700 text-sm font-medium whitespace-nowrap ml-4">
              {language === 'en' ? 'View Market Insights →' : '查看市场洞察 →'}
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=2070')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              {t.hero.title}<br />
              <span className="text-green-400">{t.hero.subtitle}</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded hover:bg-green-700 transition-all text-lg font-medium shadow-lg"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/overview"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded hover:bg-gray-100 transition-all text-lg font-medium"
              >
                {t.hero.learn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10+', label: t.stats.aum },
              { value: '300+', label: t.stats.clients },
              { value: '40+', label: t.stats.experience },
              { value: '6', label: t.stats.advisors }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-bold text-green-700 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en' ? 'Comprehensive wealth management solutions tailored to your family\'s unique needs' : '为您家族的独特需求量身定制的全面财富管理解决方案'}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: t.services.wealth.title, desc: language === 'en' ? 'Proprietary quantitative investment strategies' : '专有量化投资策略' },
              { icon: Shield, title: t.services.asset.title, desc: language === 'en' ? 'Global protection solutions' : '全球资产保护方案' },
              { icon: Users, title: t.services.estate.title, desc: language === 'en' ? 'Multi-generational wealth transfer' : '多代财富传承' },
              { icon: Award, title: t.services.financial.title, desc: language === 'en' ? 'Cross-border transaction expertise' : '跨境交易专业知识' }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-green-600 transition-all">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/services"
              className="inline-flex items-center text-green-700 font-semibold hover:underline"
            >
              {language === 'en' ? 'View All Services' : '查看所有服务'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us with Real Image */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                {language === 'en' ? 'Why Choose RockyStream?' : '为什么选择RockyStream？'}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {language === 'en' ? 'FINRA Registered Since 2014' : '2014年FINRA注册'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'en' ? 'Trusted regulatory compliance and transparency' : '值得信赖的监管合规和透明度'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {language === 'en' ? '40+ Years Wall Street Experience' : '40年以上华尔街经验'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'en' ? 'Senior advisors from Goldman Sachs, Morgan Stanley, and more' : '来自高盛、摩根士丹利等顶级机构的资深顾问'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {language === 'en' ? 'Personalized Service' : '个性化服务'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'en' ? 'Dedicated family office approach for each client' : '为每位客户提供专属的家族办公室服务'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070" 
                alt="Financial Planning"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            {language === 'en' ? 'Ready to Secure Your Financial Future?' : '准备好保障您的财务未来了吗？'}
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            {language === 'en' ? 'Schedule a confidential consultation with our expert advisors' : '与我们的专家顾问预约保密咨询'}
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded hover:bg-green-700 transition-all text-lg font-medium shadow-lg"
          >
            {language === 'en' ? 'Contact Us Today' : '立即联系我们'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}