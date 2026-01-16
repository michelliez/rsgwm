// pages/MarketInsights.jsx
import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, RefreshCw, ExternalLink } from 'lucide-react';

export default function MarketInsights({ language }) {
  const [marketData, setMarketData] = useState({
    sp500: { name: 'S&P 500', value: '5,985.34', change: '+25.32', percent: '+0.42%', up: true },
    nasdaq: { name: 'NASDAQ', value: '19,735.12', change: '+54.89', percent: '+0.28%', up: true },
    dowjones: { name: 'Dow Jones', value: '44,296.51', change: '+121.35', percent: '+0.27%', up: true },
    bond10y: { name: '10Y Treasury', value: '4.58%', change: '-0.05%', percent: '-1.08%', up: false },
    gold: { name: 'Gold', value: '$2,663.40', change: '+12.80', percent: '+0.48%', up: true },
    oil: { name: 'Crude Oil', value: '$71.24', change: '-0.45', percent: '-0.63%', up: false }
  });

  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate data refresh
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  // Auto-refresh every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000); // 60 seconds

    return () => clearInterval(interval);
  }, []);

  const newsItems = [
    {
      title: language === 'en' ? 'Fed Signals Potential Rate Cuts in 2024' : '美联储暗示2024年可能降息',
      source: 'Bloomberg',
      time: '2 hours ago',
      summary: language === 'en' ? 'Federal Reserve officials hint at possible interest rate reductions amid cooling inflation data.' : '美联储官员暗示随着通胀数据降温可能降低利率。',
      url: 'https://www.bloomberg.com/markets'
    },
    {
      title: language === 'en' ? 'Tech Stocks Rally on AI Optimism' : '科技股因人工智能乐观情绪上涨',
      source: 'CNBC',
      time: '4 hours ago',
      summary: language === 'en' ? 'Major technology companies see gains as artificial intelligence investments continue to drive growth.' : '随着人工智能投资继续推动增长，主要科技公司股价上涨。',
      url: 'https://www.cnbc.com/technology/'
    },
    {
      title: language === 'en' ? 'China Economic Data Beats Expectations' : '中国经济数据超预期',
      source: 'Reuters',
      time: '6 hours ago',
      summary: language === 'en' ? 'Latest GDP figures from China show stronger than expected economic recovery in Q4.' : '中国最新GDP数据显示第四季度经济复苏强于预期。',
      url: 'https://www.reuters.com/markets/'
    },
    {
      title: language === 'en' ? 'Gold Reaches New Highs Amid Uncertainty' : '黄金在不确定性中创新高',
      source: 'Financial Times',
      time: '8 hours ago',
      summary: language === 'en' ? 'Precious metals surge as investors seek safe-haven assets during market volatility.' : '随着投资者在市场波动期间寻求避险资产，贵金属飙升。',
      url: 'https://www.ft.com/markets'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                {language === 'en' ? 'Market Insights' : '市场洞察'}
              </h1>
              <p className="text-xl text-gray-300">
                {language === 'en' ? 'Real-time market data and latest financial news' : '实时市场数据和最新金融新闻'}
              </p>
            </div>
            <div className="text-right">
              <button 
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="flex items-center gap-2 text-sm text-gray-400 mb-2 hover:text-white transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                {language === 'en' ? 'Last Updated' : '最后更新'}
              </button>
              <div className="text-white font-medium">
                {lastUpdated.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Data Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
            {language === 'en' ? 'Major Indices' : '主要指数'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.values(marketData).map((data, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-600 mb-1">{data.name}</h3>
                    <div className="text-3xl font-bold text-gray-900">{data.value}</div>
                  </div>
                  <div className={`p-2 rounded-full ${data.up ? 'bg-green-100' : 'bg-red-100'}`}>
                    {data.up ? 
                      <TrendingUp className="w-5 h-5 text-green-600" /> : 
                      <TrendingDown className="w-5 h-5 text-red-600" />
                    }
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-lg font-semibold ${data.up ? 'text-green-600' : 'text-red-600'}`}>
                    {data.change}
                  </span>
                  <span className={`text-sm flex items-center gap-1 ${data.up ? 'text-green-600' : 'text-red-600'}`}>
                    {data.up ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    {data.percent}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market News */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
            {language === 'en' ? 'Latest Market News' : '最新市场新闻'}
          </h2>
          <div className="space-y-4">
            {newsItems.map((news, idx) => (
              <a
                key={idx}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-green-700 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 flex-1 pr-4 group-hover:text-green-700 transition-colors">
                    {news.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 whitespace-nowrap">{news.time}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-700 transition-colors" />
                  </div>
                </div>
                <p className="text-gray-600 mb-3">{news.summary}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-green-700">{news.source}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
            {language === 'en' ? 'Market Analysis' : '市场分析'}
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              {language === 'en' ? 
                'Markets showed mixed performance today with technology stocks leading gains while energy sector faced pressure. The Federal Reserve\'s recent commentary on monetary policy continues to influence investor sentiment, with expectations building for potential rate adjustments in the coming quarters.' :
                '今日市场表现参差不齐，科技股领涨，能源板块面临压力。美联储最近关于货币政策的评论继续影响投资者情绪，市场预期未来几个季度可能调整利率。'
              }
            </p>
            <p className="text-gray-700 leading-relaxed">
              {language === 'en' ?
                'Our advisors recommend maintaining a diversified portfolio approach during this period of market uncertainty. Consider consulting with our wealth management team to review your investment strategy and ensure alignment with your long-term financial goals.' :
                '我们的顾问建议在这段市场不确定时期保持多元化的投资组合策略。考虑咨询我们的财富管理团队，审查您的投资策略，确保与您的长期财务目标保持一致。'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-600 text-center">
            {language === 'en' ?
              'Market data is for informational purposes only. Past performance does not guarantee future results. Consult with a financial advisor before making investment decisions.' :
              '市场数据仅供参考。过去的表现不能保证未来的结果。在做出投资决策之前，请咨询财务顾问。'
            }
          </p>
        </div>
      </section>
    </div>
  );
}