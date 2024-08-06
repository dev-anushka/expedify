import React from 'react';
import SuccessStory from '../components/SuccessStory';
import Reviews from '../components/Review';
import LetExpedify from '../components/LetExpedify';
import Features from '../components/Features';
import TogetherBatter from '../components/TogetherBatter';
import Analytics from '../components/Analytics';
import Engagement from '../components/ChannelEngagement';

import HeroSection from '../components/HeroSection';
import BookDemoNowForm from '../components/BookDemoNowForm';
import TrustedBy from '../components/TrustedBy';


export const metadata = {
  title: "Expedify Engage",
};




export default function expedifyEngage() {
  return (
    <>
     <HeroSection/>
     <BookDemoNowForm/>
     <Engagement/>
     <Analytics/>
     <TogetherBatter/>
     <Features/>
     <TrustedBy/>
     <SuccessStory/>
     <Reviews/>
     <LetExpedify/>
    </>
  )
}
 

