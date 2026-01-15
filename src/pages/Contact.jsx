// pages/Contact.jsx
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { translations } from '../translations';

export default function Contact({ language }) {
  const t = translations[language];
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:info@rockystreamglobal.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">{t.contact.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {formSubmitted && (
            <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-lg flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-700" />
              <p className="text-green-800 font-medium">{t.contact.success}</p>
            </div>
          )}

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {t.contact.name} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none transition-all"
                    placeholder={language === 'en' ? 'John Doe' : '张三'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {t.contact.email} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {t.contact.phone}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none transition-all"
                  placeholder="+1 (212) 555-0100"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {t.contact.message} <span className="text-red-600">*</span>
                </label>
                <textarea
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none transition-all resize-none"
                  placeholder={language === 'en' ? 'Tell us about your wealth management needs...' : '告诉我们您的财富管理需求...'}
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-green-700 text-white rounded hover:bg-green-800 transition-all font-medium flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-5 h-5" />
                {t.contact.submit}
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { 
                title: language === 'en' ? 'Response Time' : '响应时间', 
                desc: language === 'en' ? 'Within 24 hours' : '24小时内'
              },
              { 
                title: language === 'en' ? 'Consultation' : '咨询', 
                desc: language === 'en' ? 'Free initial meeting' : '免费初次会议'
              },
              { 
                title: language === 'en' ? 'Confidential' : '保密', 
                desc: language === 'en' ? '100% private & secure' : '100%私密和安全'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-green-700 transition-all">
                <div className="font-semibold text-gray-900 mb-2">{item.title}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* WeChat Contact Section */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                {language === 'en' ? 'Connect on WeChat' : '微信联系我们'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' ? 'Scan the QR code to add us on WeChat for instant communication' : '扫描二维码添加我们的微信，即时沟通'}
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="w-48 h-48 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 border-2 border-gray-200">
                  <div className="text-center">
                    <img src="https://cdn.cdnlogo.com/logos/w/79/wechat.svg" alt="WeChat" className="w-20 h-20 mx-auto mb-2" />
                    <p className="text-xs text-gray-500">{language === 'en' ? 'QR Code Here' : '二维码'}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-900">
                  {language === 'en' ? 'Official Account' : '官方账号'}
                </p>
              </div>
              <div className="text-left max-w-md">
                <h4 className="font-semibold text-gray-900 mb-3">
                  {language === 'en' ? 'Why Use WeChat?' : '为什么使用微信？'}
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-700 mr-2">✓</span>
                    {language === 'en' ? 'Instant messaging with our advisors' : '与我们的顾问即时通讯'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-700 mr-2">✓</span>
                    {language === 'en' ? 'Share documents securely' : '安全共享文件'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-700 mr-2">✓</span>
                    {language === 'en' ? 'Voice and video call support' : '语音和视频通话支持'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-700 mr-2">✓</span>
                    {language === 'en' ? 'Preferred by Chinese clients' : '中国客户首选'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}