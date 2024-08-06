'use client';
import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'Email', content: <Email /> },
    { id: 1, label: 'WebPush', content: <WebPush /> },
    { id: 2, label: 'AppPush', content: <AppPush /> },
    { id: 3, label: 'SMS', content: <SMS /> },
    { id: 4, label: 'WhatsApp', content: <WhatsApp /> },
    
  ];

  return (
    <div className='py-10'>
        <div className='container'>
        <h2 className="heading relative text-center mb-10 text-5xl font-semibold">
        ALIGN. SYNERGIZE. EXPEDIFY
        </h2>
        <div className="tab-box flex items-center h-full">
        
      <div className="w-60 border-r border-gray-300 pr-2">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`p-4 tab-item text-center cursor-pointer  ${
              activeTab === tab.id ? 'bg-[#ec7859] text-white font-semibold' : 'bg-white font-semibold'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="flex-grow p-4 tab-content">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
        </div>
    </div>
    
  );
};

const Email = () => {
    return (
        <div>
           <h5 className='font-semibold'>Preferences, Journey Stage, And Future Trends.</h5>
           <ul>
              <li>
                <strong>I. Interactive smalls:</strong> Create hyper-personalized emals that are Interactive and engaging, delivering an app-like experience to your customers. 
              </li>
              <li>
                <strong>I. Interactive smalls:</strong> Create hyper-personalized emals that are Interactive and engaging, delivering an app-like experience to your customers. 
              </li>
              <li>
                <strong>I. Interactive smalls:</strong> Create hyper-personalized emals that are Interactive and engaging, delivering an app-like experience to your customers. 
              </li>
              <li>
                <strong>I. Interactive smalls:</strong> Create hyper-personalized emals that are Interactive and engaging, delivering an app-like experience to your customers. 
              </li>
           </ul>
        </div>
      );
};

const AppPush = () => {
    return (
        <div>
           <h5 className='font-semibold'>Preferences, Journey Stage, And Future Trends.</h5>
           <ul>
              <li>
                <strong>I. Interactive smalls:</strong> Create hyper-personalized emals that are Interactive and engaging, delivering an app-like experience to your customers. 
              </li>
              <li>
                <strong>I. Interactive smalls:</strong> Create hyper-personalized emals that are Interactive and engaging, delivering an app-like experience to your customers. 
              </li>
              <li>
                <strong>I. Interactive smalls:</strong> Create hyper-personalized emals that are Interactive and engaging, delivering an app-like experience to your customers. 
              </li>
              <li>
                <strong>I. Interactive smalls:</strong> Create hyper-personalized emals that are Interactive and engaging, delivering an app-like experience to your customers. 
              </li>
           </ul>
        </div>
      );
};

const WebPush = () => {
    return (
        <div>
           <h5 className='font-semibold'>Revamp your customer engagement strategy with SMS messaging</h5>
           <ul>
              <li>
                <strong>1. SMS Click Tracking:</strong>Track user clicks on SMS links and optimize personalized campaigns accordingly.
              </li>
              <li>
                <strong>I. Interactive smalls:</strong> Create hyper-personalized emals that are Interactive and engaging, delivering an app-like experience to your customers. 
              </li>
              <li>
                <strong>I. Interactive smalls:</strong> Create hyper-personalized emals that are Interactive and engaging, delivering an app-like experience to your customers. 
              </li>
              <li>
                <strong>I. Interactive smalls:</strong> Create hyper-personalized emals that are Interactive and engaging, delivering an app-like experience to your customers. 
              </li>
           </ul>
        </div>
      );
};

const SMS = () => {
    return (
        <div>
           <h5 className='font-semibold'>Preferences, Journey Stage, And Future Trends.</h5>
           <ul>
              <li>
                <strong>I. Interactive smalls:</strong> Create hyper-personalized emals that are Interactive and engaging, delivering an app-like experience to your customers. 
              </li>
              <li>
                <strong>I. Interactive smalls:</strong> Create hyper-personalized emals that are Interactive and engaging, delivering an app-like experience to your customers. 
              </li>
              <li>
                <strong>I. Interactive smalls:</strong> Create hyper-personalized emals that are Interactive and engaging, delivering an app-like experience to your customers. 
              </li>
              <li>
                <strong>I. Interactive smalls:</strong> Create hyper-personalized emals that are Interactive and engaging, delivering an app-like experience to your customers. 
              </li>
           </ul>
        </div>
      );
};

const WhatsApp = () => {
    return (
        <div>
           <h5 className='font-semibold'>Preferences, Journey Stage, And Future Trends.</h5>
           <ul>
              <li>
                <strong>I. Interactive smalls:</strong> Create hyper-personalized emals that are Interactive and engaging, delivering an app-like experience to your customers. 
              </li>
              <li>
                <strong>I. Interactive smalls:</strong> Create hyper-personalized emals that are Interactive and engaging, delivering an app-like experience to your customers. 
              </li>
              <li>
                <strong>I. Interactive smalls:</strong> Create hyper-personalized emals that are Interactive and engaging, delivering an app-like experience to your customers. 
              </li>
              <li>
                <strong>I. Interactive smalls:</strong> Create hyper-personalized emals that are Interactive and engaging, delivering an app-like experience to your customers. 
              </li>
           </ul>
        </div>
      );
};

export default Tabs;
