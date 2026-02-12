// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Heart, Users, Globe, Target } from 'lucide-react';
// import { useLanguage } from '../../contexts/LanguageContext';

// const MissionSection: React.FC = () => {
//   const { t } = useLanguage();
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

//   const features = [
//     {
//       icon: Heart,
//       title: 'Compassionate Service',
//       description: 'Driven by empathy and dedication to help those in need.',
//     },
//     {
//       icon: Users,
//       title: 'Community Focus',
//       description: 'Building stronger communities through collective action.',
//     },
//     {
//       icon: Globe,
//       title: 'Global Impact',
//       description: 'Creating positive change that transcends boundaries.',
//     },
//     {
//       icon: Target,
//       title: 'Targeted Solutions',
//       description: 'Addressing specific challenges with innovative approaches.',
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
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.6 },
//     },
//   };

//   return (
//     <section className="py-20 bg-gray-50 dark:bg-dark-surface">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//         >
//           {/* Text Content */}
//           <motion.div variants={itemVariants} className="space-y-8">
//             <div>
//               <h2 className="font-heading font-bold text-h2 text-secondary-500 dark:text-dark-text mb-4">
//                 {t('mission.title')}
//               </h2>
//               <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
//                 {t('mission.description')}
//               </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-start space-x-3"
//                   variants={itemVariants}
//                 >
//                   <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
//                     <feature.icon size={20} className="text-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-secondary-500 dark:text-dark-text mb-1">
//                       {feature.title}
//                     </h3>
//                     <p className="text-sm text-gray-600 dark:text-gray-300">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Image */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, x: 50 },
//               visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
//             }}
//             className="relative"
//           >
//             <div className="relative overflow-hidden rounded-2xl">
//               <img
//                 src="https://images.pexels.com/photos/6995220/pexels-photo-6995220.jpeg?auto=compress&cs=tinysrgb&w=800"
//                 alt="Our Mission"
//                 className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//             </div>
            
//             {/* Floating Card */}
//             <div className="absolute -bottom-6 -left-6 bg-white dark:bg-dark-bg p-6 rounded-xl shadow-lg">
//               <div className="flex items-center space-x-3">
//                 <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
//                   <Users size={24} className="text-white" />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-secondary-500 dark:text-dark-text">
//                     Youth-Led Initiative
//                   </p>
//                   <p className="text-sm text-gray-600 dark:text-gray-300">
//                     Empowering the next generation
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default MissionSection;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, Globe, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MissionSection: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const features = [
    {
      icon: Heart,
      title: t('mission.features.service'),
      description: t('mission.features.serviceDesc'),
    },
    {
      icon: Users,
      title: t('mission.features.community'),
      description: t('mission.features.communityDesc'),
    },
    {
      icon: Globe,
      title: t('mission.features.global'),
      description: t('mission.features.globalDesc'),
    },
    {
      icon: Target,
      title: t('mission.features.target'),
      description: t('mission.features.targetDesc'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="font-heading font-bold text-h2 text-secondary-500 dark:text-dark-text mb-4">
                {t('mission.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('mission.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                    <feature.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-500 dark:text-dark-text mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/6995220/pexels-photo-6995220.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Mission"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-dark-bg p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-secondary-500 dark:text-dark-text">
                    {t('mission.card.title')}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t('mission.card.subtitle')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
