// pages/Contact.jsx
import React, { useState } from 'react';
import { Send, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';
import { translations } from '../translations';
import wechatQR from '../assets/wechat-qr.jpeg';

export default function Contact({ language }) {
  const t = translations[language];
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:${t.contact.emailaddr}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-20 border-b border-gray-200"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">{t.contact.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                {language === 'en' ? 'Send Us a Message' : '给我们留言'}
              </h2>
              
              {formSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-700" />
                  <p className="text-green-800 font-medium">{t.contact.success}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {t.contact.name} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {t.contact.phone}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                    placeholder="+1 (212) 555-0100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {t.contact.message} <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder={language === 'en' ? 'Tell us about your wealth management needs...' : '告诉我们您的财富管理需求...'}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-green-600 text-white rounded hover:bg-green-700 transition-all font-medium flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  {t.contact.submit}
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                {t.contact.office}
              </h2>
              <div className="space-y-6">
                {/* NY Manhattan Office */}
                <div className="border border-gray-200 rounded-lg p-6 hover:border-green-600 transition-all">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">{t.contact.ny1}</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-green-700 mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <p>{t.contact.ny1address}</p>
                        <p>{t.contact.ny1city}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4 text-green-700 flex-shrink-0" />
                      <p className="text-sm">{t.contact.njphone}</p>
                    </div>
                  </div>
                </div>

                {/* NY Irvington Office */}
                <div className="border border-gray-200 rounded-lg p-6 hover:border-green-600 transition-all">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">{t.contact.ny2}</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-green-700 mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <p>{t.contact.ny2address}</p>
                        <p>{t.contact.ny2city}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4 text-green-700 flex-shrink-0" />
                      <p className="text-sm">{t.contact.njphone}</p>
                    </div>
                  </div>
                </div>

                {/* NJ Office */}
                <div className="border border-gray-200 rounded-lg p-6 hover:border-green-600 transition-all">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">{t.contact.nj}</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-green-700 mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <p>{t.contact.njaddress}</p>
                        <p>{t.contact.njcity}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4 text-green-700 flex-shrink-0" />
                      <p className="text-sm">{t.contact.njphone}</p>
                    </div>
                  </div>
                </div>

                {/* Email & Website */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-green-700 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{language === 'en' ? 'Email' : '电子邮件'}</p>
                        <p className="text-sm text-gray-600">{t.contact.emailaddr}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-13H9v6h2V5zm0 8H9v2h2v-2z"/>
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{language === 'en' ? 'Website' : '网站'}</p>
                        <p className="text-sm text-gray-600">{t.contact.website}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* WeChat Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
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
                <div className="w-48 h-48 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3 border border-gray-200 p-2">
                  <img 
                    src={wechatQR} 
                    alt="WeChat QR Code" 
                    className="w-full h-full object-contain"
                  />
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