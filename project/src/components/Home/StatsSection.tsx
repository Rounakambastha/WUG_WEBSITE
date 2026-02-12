// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import CounterAnimation from '../UI/CounterAnimation';
// import { useLanguage } from '../../contexts/LanguageContext';

// const StatsSection: React.FC = () => {
//   const { t } = useLanguage();
//   const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

//   const stats = [
//     {
//       number: 1000,
//       suffix: '+',
//       label: t('stats.meals'),
//       description: 'Nutritious meals provided to communities in need',
//     },
//     {
//       number: 30,
//       suffix: '+',
//       label: t('stats.drives'),
//       description: 'Successful community service drives completed',
//     },
//     {
//       number: 80,
//       suffix: '+',
//       label: t('stats.volunteers'),
//       description: 'Dedicated volunteers making a difference',
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

//   return (
//     <section className="py-20 bg-primary-500 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="font-heading font-bold text-h2 mb-4">
//             Our Impact So Far
//           </h2>
//           <p className="text-xl text-primary-100 max-w-2xl mx-auto">
//             Together, we're making a measurable difference in communities around the world.
//           </p>
//         </motion.div>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               className="text-center group"
//               variants={itemVariants}
//             >
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
//                 <div className="mb-4">
//                   <CounterAnimation
//                     end={stat.number}
//                     suffix={stat.suffix}
//                     className="font-heading font-bold text-4xl lg:text-5xl text-white"
//                   />
//                 </div>
//                 <h3 className="font-semibold text-xl mb-2 text-primary-100">
//                   {stat.label}
//                 </h3>
//                 <p className="text-primary-200 text-sm leading-relaxed">
//                   {stat.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//         >
//           <p className="text-lg text-primary-100 mb-6">
//             Want to be part of these growing numbers?
//           </p>
//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           >
//             <motion.a
//               href="/volunteer"
//               className="px-8 py-3 bg-white text-primary-500 rounded-md font-semibold hover:bg-gray-100 transition-all duration-200"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               Join as Volunteer
//             </motion.a>
//             <motion.a
//               href="/donate"
//               className="px-8 py-3 bg-accent-500 text-white rounded-md font-semibold hover:bg-accent-600 transition-all duration-200"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               Make a Donation
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CounterAnimation from '../UI/CounterAnimation';
import { useTranslation } from 'react-i18next';

const StatsSection: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    {
      number: 1000,
      suffix: '+',
      label: t('stats.meals'),
      description: t('stats.mealsDesc'),
    },
    {
      number: 30,
      suffix: '+',
      label: t('stats.drives'),
      description: t('stats.drivesDesc'),
    },
    {
      number: 80,
      suffix: '+',
      label: t('stats.volunteers'),
      description: t('stats.volunteersDesc'),
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-h2 mb-4">
            {t('stats.heading')}
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            {t('stats.description')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <div className="mb-4">
                  <CounterAnimation
                    end={stat.number}
                    suffix={stat.suffix}
                    className="font-heading font-bold text-4xl lg:text-5xl text-white"
                  />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-primary-100">
                  {stat.label}
                </h3>
                <p className="text-primary-200 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-primary-100 mb-6">
            {t('stats.callToAction')}
          </p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="/volunteer"
              className="px-8 py-3 bg-white text-primary-500 rounded-md font-semibold hover:bg-gray-100 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('stats.joinVolunteer')}
            </motion.a>
            <motion.a
              href="/donate"
              className="px-8 py-3 bg-accent-500 text-white rounded-md font-semibold hover:bg-accent-600 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('stats.makeDonation')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
