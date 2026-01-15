// pages/Overview.jsx
import React from 'react';
import { Building2, Award, Shield, Globe, Target } from 'lucide-react';
import { translations } from '../translations';

export default function Overview({ language }) {
  const t = translations[language];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">{t.overview.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' ? 'FINRA Registered Investment Advisor since 2014' : '2014年FINRA注册投资顾问'}
          </p>
        </div>
      </section>

      {/* RSG Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">{t.overview.rsg.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t.overview.rsg.content}
              </p>
              {language === 'zh' && (
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    RSG国际财富为众多企业和家庭提供企业传承规划、家族财富管理、家族资产多代传承、基金端的角度满足用户需求，为客户提供资产法律保护、安全保险、保值增值和家族财富多代传承、风险管理、金融投资等一系列全面的一站式的服务。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    随着近年中国经济的高速发展，中国境内的跨境资产保全/管理、家族信托、家族资产传承等服务的需求量显著增加。我们提出了整体式的全链条的全案式服务系列，以满足中国大陆客户从基础项目需求到社会地位提升的一系列价值诉求。超高净值人士的价值管理不仅体现在资产有效增值上，而且是包含家族凝聚力传承、家族理念传承、家族资产传承、个人精神与物质需求、企业发展延续等一系列需求的整合体。
                  </p>
                </div>
              )}
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="flex items-center space-x-4">
                  <Building2 className="w-12 h-12 text-green-700" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {language === 'en' ? 'Established 2014' : '成立于2014年'}
                    </div>
                    <div className="text-sm text-gray-600">
                      {language === 'en' ? 'New York, New York' : '纽约，纽约'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=2070" 
                alt="Wealth Management"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* RSA Capital Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015" 
                alt="Investment Strategy"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">{t.overview.rsa.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t.overview.rsa.content}
              </p>
              {language === 'zh' && (
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    集团旗下拥有注册于美国金融管理局和纽约州的专业投资、资产管理和金融服务公司 RSA资本（RockyStream Advisor LLC），拥有华尔街顶级投资投行20年+35年实战背景的资深团队，为客户提供投资标的搜寻与IPO上市、特殊目的收购SPAC、跨境并购、海外融资、投资咨询、企业财税规划、海外公司架构设计等一系列资产端业务。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    集团拥有丰富的金融市场工作经验与品牌声誉，立足纽约这一全球金融中心，整合了华尔街顶级投资银行（包括摩根士丹利、瑞士信贷 Credit Suisse、德意志投资银行等）、全球最优秀的企业上市、融资、并购律师事务所和资产保护律师事务所、全球领先的税务师事务所，并拥有分布全球的众多战略合作伙伴。集团的服务水平和运作能力，在从业43年的历史中为来自美国、欧洲和亚洲的众多企业和个人提供IPO上市、特殊目的收购SPAC、境外融资等服务。
                  </p>
                </div>
              )}
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    {language === 'en' ? 'Proprietary Quantitative Investment Strategies' : '专有量化投资策略'}
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    {language === 'en' ? 'Comprehensive Investment & Wealth Management' : '全面的投资和财富管理'}
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    {language === 'en' ? 'Tailored Solutions for Affluent Families' : '为富裕家庭量身定制的解决方案'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* M&A Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">{t.overview.ma.title}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.overview.ma.content}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:border-green-700 transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {language === 'en' ? 'Cross-border Fundraising' : '跨境融资'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' ? 'Global capital raising solutions for corporate clients' : '为企业客户提供全球资本筹集解决方案'}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:border-green-700 transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {language === 'en' ? 'M&A Advisory' : '并购咨询'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' ? 'Strategic merger and acquisition guidance' : '战略性并购指导'}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:border-green-700 transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {language === 'en' ? 'SPAC Services' : 'SPAC服务'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' ? 'Special purpose acquisition expertise since 2019' : '自2019年起提供特殊目的收购专业知识'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">{t.commitments.title}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.commitments.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {t.commitments.items.map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-green-700 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-green-700" />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">
              {language === 'en' ? 'Our Core Values' : '我们的核心价值观'}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Award, 
                title: language === 'en' ? 'Excellence' : '卓越', 
                desc: language === 'en' ? 'Uncompromising standards backed by decades of Wall Street experience' : '数十年华尔街经验支持的不妥协标准'
              },
              { 
                icon: Target, 
                title: language === 'en' ? 'Innovation' : '创新', 
                desc: language === 'en' ? 'Proprietary quantitative strategies and cutting-edge solutions' : '专有量化策略和尖端解决方案'
              },
              { 
                icon: Globe, 
                title: language === 'en' ? 'Global Reach' : '全球覆盖', 
                desc: language === 'en' ? 'Serving high net-worth families from around the world' : '为来自世界各地的高净值家庭提供服务'
              }
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-green-50">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}