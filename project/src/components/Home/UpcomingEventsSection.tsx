// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Calendar, MapPin, Users, ArrowRight, Tag } from 'lucide-react';
// import { useLanguage } from '../../contexts/LanguageContext';
// import Button from '../UI/Button';

// const UpcomingEventsSection: React.FC = () => {
//   const { t } = useLanguage();
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

//   // Placeholder events data - ready for Sanity CMS integration
//   const upcomingEvents = [
//     {
//       id: 1,
//       title: 'Community Food Drive',
//       date: '2024-02-15',
//       time: '09:00 AM',
//       location: 'Central Community Center',
//       description: 'Join us for our monthly food distribution drive serving 500+ families in need.',
//       volunteers: 25,
//       maxVolunteers: 50,
//       image: 'https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=600',
//       category: 'Food Security',
//       urgent: true,
//     },
//     {
//       id: 2,
//       title: 'Tree Plantation Campaign',
//       date: '2024-02-20',
//       time: '07:00 AM',
//       location: 'Riverside Park',
//       description: 'Help us plant 1000 trees to combat climate change and improve air quality.',
//       volunteers: 18,
//       maxVolunteers: 40,
//       image: 'https://images.pexels.com/photos/7512066/pexels-photo-7512066.jpeg?auto=compress&cs=tinysrgb&w=600',
//       category: 'Environment',
//       urgent: false,
//     },
//     {
//       id: 3,
//       title: 'Education Workshop',
//       date: '2024-02-25',
//       time: '02:00 PM',
//       location: 'Local School',
//       description: 'Teaching digital literacy skills to children in underserved communities.',
//       volunteers: 12,
//       maxVolunteers: 20,
//       image: 'https://images.pexels.com/photos/8613321/pexels-photo-8613321.jpeg?auto=compress&cs=tinysrgb&w=600',
//       category: 'Education',
//       urgent: false,
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   };

//   const handleSignUp = (eventId: number) => {
//     // Check if user is logged in (placeholder logic)
//     const isLoggedIn = false; // This would come from your auth context
    
//     if (!isLoggedIn) {
//       // Redirect to login page
//       window.location.href = '/signin';
//     } else {
//       console.log(`Signing up for event ${eventId}`);
//       // Handle event registration logic here
//     }
//   };

//   return (
//     <section className="py-20 bg-white dark:bg-dark-bg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="font-heading font-bold text-h2 text-secondary-500 dark:text-dark-text mb-4">
//             Upcoming Events & Drives
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
//             Join our upcoming community initiatives and be part of the positive change we're creating together.
//           </p>
//           <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium">
//             <Tag size={16} className="mr-2" />
//             Dynamic Content Powered by Sanity CMS
//           </div>
//         </motion.div>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//         >
//           {upcomingEvents.map((event) => (
//             <motion.div
//               key={event.id}
//               className="bg-white dark:bg-dark-surface rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
//               variants={itemVariants}
//               whileHover={{ y: -5, scale: 1.02 }}
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={event.image}
//                   alt={event.title}
//                   className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute top-4 left-4 flex space-x-2">
//                   <span className="px-3 py-1 bg-white/90 dark:bg-dark-bg/90 text-secondary-500 dark:text-dark-text rounded-full text-xs font-medium">
//                     {event.category}
//                   </span>
//                   {event.urgent && (
//                     <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-medium animate-pulse">
//                       Urgent
//                     </span>
//                   )}
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="font-heading font-semibold text-xl text-secondary-500 dark:text-dark-text mb-3">
//                   {event.title}
//                 </h3>

//                 <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
//                   {event.description}
//                 </p>

//                 <div className="space-y-2 mb-4">
//                   <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
//                     <Calendar size={16} className="mr-2 text-primary-500" />
//                     {new Date(event.date).toLocaleDateString('en-US', {
//                       weekday: 'long',
//                       year: 'numeric',
//                       month: 'long',
//                       day: 'numeric'
//                     })} at {event.time}
//                   </div>
//                   <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
//                     <MapPin size={16} className="mr-2 text-primary-500" />
//                     {event.location}
//                   </div>
//                   <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
//                     <Users size={16} className="mr-2 text-primary-500" />
//                     {event.volunteers}/{event.maxVolunteers} volunteers registered
//                   </div>
//                 </div>

//                 {/* Progress Bar */}
//                 <div className="mb-4">
//                   <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
//                     <span>Registration Progress</span>
//                     <span>{Math.round((event.volunteers / event.maxVolunteers) * 100)}%</span>
//                   </div>
//                   <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//                     <div
//                       className="bg-primary-500 h-2 rounded-full transition-all duration-300"
//                       style={{ width: `${(event.volunteers / event.maxVolunteers) * 100}%` }}
//                     />
//                   </div>
//                 </div>

//                 <Button
//                   onClick={() => handleSignUp(event.id)}
//                   variant="primary"
//                   size="md"
//                   className="w-full group"
//                 >
//                   Sign Up to Volunteer
//                   <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* View All Events Button */}
//         <motion.div
//           className="text-center mt-12"
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//         >
//           <motion.a
//             href="/events"
//             className="inline-flex items-center px-8 py-3 bg-accent-500 text-white rounded-md font-semibold hover:bg-accent-600 transition-all duration-200"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             View All Events
//             <ArrowRight size={20} className="ml-2" />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default UpcomingEventsSection;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Users, ArrowRight, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from '../UI/Button';

const UpcomingEventsSection: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const upcomingEvents = [
    {
      id: 1,
      title: t('events.title1'),
      date: '2024-02-15',
      time: '09:00 AM',
      location: t('events.location1'),
      description: t('events.description1'),
      volunteers: 25,
      maxVolunteers: 50,
      image: 'https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: t('events.category.food'),
      urgent: true,
    },
    {
      id: 2,
      title: t('events.title2'),
      date: '2024-02-20',
      time: '07:00 AM',
      location: t('events.location2'),
      description: t('events.description2'),
      volunteers: 18,
      maxVolunteers: 40,
      image: 'https://images.pexels.com/photos/7512066/pexels-photo-7512066.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: t('events.category.environment'),
      urgent: false,
    },
    {
      id: 3,
      title: t('events.title3'),
      date: '2024-02-25',
      time: '02:00 PM',
      location: t('events.location3'),
      description: t('events.description3'),
      volunteers: 12,
      maxVolunteers: 20,
      image: 'https://images.pexels.com/photos/8613321/pexels-photo-8613321.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: t('events.category.education'),
      urgent: false,
    },
  ];

  const handleSignUp = (eventId: number) => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      window.location.href = '/signin';
    } else {
      console.log(`Signing up for event ${eventId}`);
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-h2 text-secondary-500 dark:text-dark-text mb-4">
            {t('events.sectionTitle')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            {t('events.sectionDescription')}
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium">
            <Tag size={16} className="mr-2" />
            {t('events.dynamicBadge')}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {upcomingEvents.map((event) => (
            <motion.div key={event.id} className="bg-white dark:bg-dark-surface rounded-xl shadow-lg group">
              <div className="relative overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className="px-3 py-1 bg-white/90 dark:bg-dark-bg/90 text-secondary-500 dark:text-dark-text rounded-full text-xs font-medium">
                    {event.category}
                  </span>
                  {event.urgent && (
                    <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-medium animate-pulse">
                      {t('events.urgent')}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-secondary-500 dark:text-dark-text mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {event.description}
                </p>
                <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-primary-500" />
                    {new Date(event.date).toLocaleDateString('en-US')} at {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-primary-500" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-2 text-primary-500" />
                    {event.volunteers}/{event.maxVolunteers} {t('events.volunteersRegistered')}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span>{t('events.registrationProgress')}</span>
                    <span>{Math.round((event.volunteers / event.maxVolunteers) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                    <div
                      className="bg-primary-500 h-2 rounded-full"
                      style={{ width: `${(event.volunteers / event.maxVolunteers) * 100}%` }}
                    />
                  </div>
                </div>

                <Button
                  onClick={() => handleSignUp(event.id)}
                  variant="primary"
                  size="md"
                  className="w-full group"
                >
                  {t('events.signUp')}
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="/events"
            className="inline-flex items-center px-8 py-3 bg-accent-500 text-white rounded-md font-semibold hover:bg-accent-600 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('events.viewAll')}
            <ArrowRight size={20} className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
