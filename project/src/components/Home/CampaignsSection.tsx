// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Calendar, ArrowRight, Tag } from 'lucide-react';
// import { useLanguage } from '../../contexts/LanguageContext';

// const CampaignsSection: React.FC = () => {
//   const { t } = useLanguage();
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

//   // Placeholder campaigns data - ready for Sanity CMS integration
//   const campaigns = [
//     {
//       id: 1,
//       title: 'Clean Water Initiative',
//       date: '2024-01-15',
//       image: 'https://images.pexels.com/photos/6995421/pexels-photo-6995421.jpeg?auto=compress&cs=tinysrgb&w=600',
//       category: 'Water',
//       excerpt: 'Providing clean water access to underserved communities through sustainable infrastructure projects.',
//       status: 'active',
//     },
//     {
//       id: 2,
//       title: 'Education for All',
//       date: '2024-01-20',
//       image: 'https://images.pexels.com/photos/8613321/pexels-photo-8613321.jpeg?auto=compress&cs=tinysrgb&w=600',
//       category: 'Education',
//       excerpt: 'Supporting quality education initiatives and providing learning resources to children in need.',
//       status: 'active',
//     },
//     {
//       id: 3,
//       title: 'Food Security Program',
//       date: '2024-01-25',
//       image: 'https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=600',
//       category: 'Nutrition',
//       excerpt: 'Addressing hunger and malnutrition through community kitchens and nutrition education.',
//       status: 'active',
//     },
//     {
//       id: 4,
//       title: 'Environmental Conservation',
//       date: '2024-02-01',
//       image: 'https://images.pexels.com/photos/7512066/pexels-photo-7512066.jpeg?auto=compress&cs=tinysrgb&w=600',
//       category: 'Environment',
//       excerpt: 'Protecting our environment through tree plantation drives and awareness campaigns.',
//       status: 'upcoming',
//     },
//     {
//       id: 5,
//       title: 'Youth Empowerment',
//       date: '2024-02-05',
//       image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
//       category: 'Empowerment',
//       excerpt: 'Building leadership skills and creating opportunities for young changemakers.',
//       status: 'upcoming',
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
//     hidden: { opacity: 0, x: 30 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.6 },
//     },
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
//             Stories of Change
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
//             Discover the inspiring stories behind our community initiatives and the positive impact we're creating together.
//           </p>
//           <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium">
//             <Tag size={16} className="mr-2" />
//             Dynamic Content Powered by Sanity CMS (Blog Placeholder)
//           </div>
//         </motion.div>

//         {/* Horizontal Scroll Container */}
//         <motion.div
//           className="overflow-x-auto pb-4"
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//         >
//           <div className="flex space-x-6 w-max">
//             {campaigns.map((campaign, index) => (
//               <motion.div
//                 key={campaign.id}
//                 className="w-80 bg-white dark:bg-dark-surface rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
//                 variants={itemVariants}
//                 whileHover={{ y: -8, scale: 1.02 }}
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={campaign.image}
//                     alt={campaign.title}
//                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className={`px-3 py-1 rounded-full text-xs font-medium ${
//                       campaign.status === 'active' 
//                         ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
//                         : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
//                     }`}>
//                       {campaign.status === 'active' ? 'Active' : 'Upcoming'}
//                     </span>
//                   </div>
//                   <div className="absolute top-4 right-4">
//                     <span className="px-3 py-1 bg-white/90 dark:bg-dark-bg/90 text-secondary-500 dark:text-dark-text rounded-full text-xs font-medium">
//                       {campaign.category}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
//                     <Calendar size={16} className="mr-2" />
//                     {new Date(campaign.date).toLocaleDateString('en-US', {
//                       year: 'numeric',
//                       month: 'long',
//                       day: 'numeric'
//                     })}
//                   </div>

//                   <h3 className="font-heading font-semibold text-xl text-secondary-500 dark:text-dark-text mb-3 line-clamp-2">
//                     {campaign.title}
//                   </h3>

//                   <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
//                     {campaign.excerpt}
//                   </p>

//                   <button className="flex items-center text-primary-500 hover:text-primary-600 font-medium text-sm group">
//                     Learn More
//                     <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* View All Button */}
//         <motion.div
//           className="text-center mt-12"
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//         >
//           <motion.a
//             href="/blog"
//             className="inline-flex items-center px-8 py-3 bg-primary-500 text-white rounded-md font-semibold hover:bg-primary-600 transition-all duration-200"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             View All Stories
//             <ArrowRight size={20} className="ml-2" />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CampaignsSection;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CampaignsSection: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const campaigns = [
    {
      id: 1,
      title: t('campaign.cleanWater'),
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/6995421/pexels-photo-6995421.jpeg',
      category: t('campaign.category.water'),
      excerpt: t('campaign.cleanWaterDesc'),
      status: 'active',
    },
    {
      id: 2,
      title: t('campaign.educationForAll'),
      date: '2024-01-20',
      image: 'https://images.pexels.com/photos/8613321/pexels-photo-8613321.jpeg',
      category: t('campaign.category.education'),
      excerpt: t('campaign.educationDesc'),
      status: 'active',
    },
    {
      id: 3,
      title: t('campaign.foodSecurity'),
      date: '2024-01-25',
      image: 'https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg',
      category: t('campaign.category.nutrition'),
      excerpt: t('campaign.foodDesc'),
      status: 'active',
    },
    {
      id: 4,
      title: t('campaign.environment'),
      date: '2024-02-01',
      image: 'https://images.pexels.com/photos/7512066/pexels-photo-7512066.jpeg',
      category: t('campaign.category.environment'),
      excerpt: t('campaign.envDesc'),
      status: 'upcoming',
    },
    {
      id: 5,
      title: t('campaign.empowerment'),
      date: '2024-02-05',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
      category: t('campaign.category.empowerment'),
      excerpt: t('campaign.empowerDesc'),
      status: 'upcoming',
    },
  ];

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
            {t('campaigns.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            {t('campaigns.excerpt')}
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium">
            <Tag size={16} className="mr-2" />
            {t('campaigns.dynamic')}
          </div>
        </motion.div>

        <motion.div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 w-max">
            {campaigns.map((campaign) => (
              <motion.div
                key={campaign.id}
                className="w-80 bg-white dark:bg-dark-surface rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'active'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {t(`campaign.status.${campaign.status}`)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-dark-bg/90 text-secondary-500 dark:text-dark-text rounded-full text-xs font-medium">
                      {campaign.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar size={16} className="mr-2" />
                    {new Date(campaign.date).toLocaleDateString()}
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-secondary-500 dark:text-dark-text mb-3 line-clamp-2">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {campaign.excerpt}
                  </p>
                  <button className="flex items-center text-primary-500 hover:text-primary-600 font-medium text-sm group">
                    {t('campaigns.learnMore')}
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="/blog"
            className="inline-flex items-center px-8 py-3 bg-primary-500 text-white rounded-md font-semibold hover:bg-primary-600 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('campaigns.viewAll')}
            <ArrowRight size={20} className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CampaignsSection;
