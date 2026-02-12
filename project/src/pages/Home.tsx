import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import MissionSection from '../components/Home/MissionSection';
import StatsSection from '../components/Home/StatsSection';
import BlogPreviewSection from '../components/Home/BlogPreviewSection';
import UpcomingEventsSection from '../components/Home/UpcomingEventsSection';
import GallerySection from '../components/Home/GallerySection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import VolunteerCTASection from '../components/Home/VolunteerCTASection';
import NewsletterSection from '../components/Home/NewsletterSection';
import ContactSection from '../components/Home/ContactSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <StatsSection />
      <BlogPreviewSection />
      <UpcomingEventsSection />
      <GallerySection />
      <TestimonialsSection />
      <VolunteerCTASection />
      <NewsletterSection />
      <ContactSection />
    </div>
  );
};

export default Home;