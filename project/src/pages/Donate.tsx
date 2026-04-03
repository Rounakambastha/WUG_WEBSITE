// import React from 'react';
// import { motion } from 'framer-motion';
// import { useLanguage } from '../contexts/LanguageContext';

// const Donate: React.FC = () => {
//   const { t } = useLanguage();

//   return (
//     <div className="min-h-screen pt-16">
//       <motion.div
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="text-center mb-16">
//           <h1 className="font-heading font-bold text-h1 text-secondary-500 dark:text-dark-text mb-6">
//             Make a Donation
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
//             Support our mission to serve humanity with your generous contribution.
//           </p>
//         </div>

//         <div className="bg-gray-50 dark:bg-dark-surface rounded-2xl p-12 text-center">
//           <h2 className="font-heading font-semibold text-2xl text-secondary-500 dark:text-dark-text mb-4">
//             Payment Integration Ready
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300">
//             This page is ready for payment gateway integration to process donations securely.
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Donate;
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Donate: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-h1 text-secondary-500 dark:text-dark-text mb-6">
            {t('donate.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('donate.description')}
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-dark-surface rounded-2xl p-12 text-center">
          <h2 className="font-heading font-semibold text-2xl text-secondary-500 dark:text-dark-text mb-4">
            {t('donate.ready')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t('donate.readyDesc')}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Donate;
