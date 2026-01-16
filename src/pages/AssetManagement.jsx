// pages/AssetManagement.jsx
import React from 'react';
import { Shield, TrendingUp, PieChart, BarChart3, Target, Lock } from 'lucide-react';
import { translations } from '../translations';

export default function AssetManagement({ language }) {
  const t = translations[language];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-20 border-b border-gray-200"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">
            {language === 'en' ? 'Asset Management' : '资产管理'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' ? 
              'Proprietary quantitative strategies developed since 2009' :
              '自2009年开发的专有量化策略'
            }
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">{t.strategies.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {language === 'en' ?
                  'RSA Capital has developed multiple quantitative statistical investment models since 2009. Our strategies utilize advanced mathematical and statistical analysis to select high-quality, low-risk stocks and bonds based on industry-specific characteristics and risk indices.' :
                  'RSA Capital自2009年以来开发了多个量化统计投资模型。我们的策略利用先进的数学和统计分析，根据行业特定特征和风险指数选择高质量、低风险的股票和债券。'
                }
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {language === 'en' ?
                  'Our core products include multiple investment strategies for US stocks, bonds, ETFs, and funds, with long-term "return/risk ratios" that significantly exceed the S&P 500 index.' :
                  '我们的核心产品包括美国股票、债券、ETF和基金的多种投资策略，长期"回报/风险比"显著超过标普500指数。'
                }
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070" 
                alt="Investment Strategy"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:border-green-700 transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-green-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.strategies.growth.title}</h3>
              <p className="text-gray-600 mb-6">{t.strategies.growth.desc}</p>
              <ul className="space-y-2">
                {(language === 'en' ? 
                  ['Developed and tested since 2009', 'Monthly or quarterly rebalancing', 'Superior risk/return ratio vs S&P 500'] :
                  ['自2009年开发和测试', '每月或每季度再平衡', '优于标普500的风险/回报比']
                ).map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:border-green-700 transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-green-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.strategies.balanced.title}</h3>
              <p className="text-gray-600 mb-6">{t.strategies.balanced.desc}</p>
              <ul className="space-y-2">
                {(language === 'en' ?
                  ['Modern portfolio theory', 'Quality stock selection', 'Mixed stock & bond allocation'] :
                  ['现代投资组合理论', '优质股票选择', '股票和债券混合配置']
                ).map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:border-green-700 transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <PieChart className="w-7 h-7 text-green-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.strategies.custom.title}</h3>
              <p className="text-gray-600 mb-6">{t.strategies.custom.desc}</p>
              <ul className="space-y-2">
                {(language === 'en' ?
                  ['Personalized asset allocation', 'Based on risk tolerance', 'Aligned with investment timeline'] :
                  ['个性化资产配置', '基于风险承受能力', '与投资时间表对齐']
                ).map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-700 rounded-full mt-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Protection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Asset Protection & Risk Management' : '资产保护与风险管理'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en' ?
                'Comprehensive protection strategies for multi-generational wealth preservation' :
                '多代财富保全的全面保护策略'
              }
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                icon: Shield, 
                title: language === 'en' ? 'Comprehensive Protection' : '全面保护', 
                desc: language === 'en' ? 'Innovative asset protection products not available in local markets' : '本地市场无法获得的创新资产保护产品'
              },
              { 
                icon: Target, 
                title: language === 'en' ? 'Risk Assessment' : '风险评估', 
                desc: language === 'en' ? 'Quantitative analysis considering various risk levels to maximize returns' : '考虑各种风险水平的量化分析以最大化回报'
              },
              { 
                icon: Lock, 
                title: language === 'en' ? 'Multi-generational Planning' : '多代规划', 
                desc: language === 'en' ? 'Family asset protection and wealth transfer strategies' : '家族资产保护和财富转移策略'
              },
              { 
                icon: BarChart3, 
                title: language === 'en' ? 'Dynamic Rebalancing' : '动态再平衡', 
                desc: language === 'en' ? 'Continuous adjustment based on market cycles for long-term stable growth' : '根据市场周期持续调整以实现长期稳定增长'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-green-700 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '2009', label: language === 'en' ? 'Strategy Development' : '策略开发' },
              { value: '8+', label: language === 'en' ? 'Asset Management Strategies' : '内部投资策略' },
              { value: language === 'en' ? 'Outperform' : '优于', label: language === 'en' ? 'vs S&P 500' : '标普500' },
              { value: language === 'en' ? 'Global' : '全球', label: language === 'en' ? 'Investment Reach' : '投资覆盖' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}