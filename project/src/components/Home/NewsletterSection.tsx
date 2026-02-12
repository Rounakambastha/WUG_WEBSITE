// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Mail, CheckCircle } from 'lucide-react';
// import { useLanguage } from '../../contexts/LanguageContext';

// const NewsletterSection: React.FC = () => {
//   const { t } = useLanguage();
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
//   const [email, setEmail] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email) {
//       // Here you would typically send the email to your backend
//       console.log('Newsletter subscription:', email);
//       setIsSubmitted(true);
      
//       // Reset after 3 seconds
//       setTimeout(() => {
//         setIsSubmitted(false);
//         setEmail('');
//       }, 3000);
//     }
//   };

//   return (
//     <section className="py-20 bg-gray-50 dark:bg-dark-surface">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           className="text-center"
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-6">
//             <Mail size={32} className="text-white" />
//           </div>

//           <h2 className="font-heading font-bold text-h2 text-secondary-500 dark:text-dark-text mb-4">
//             Stay Connected to Our Mission
//           </h2>
          
//           <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
//             Get the latest updates about our initiatives, success stories, and ways you can make a difference in your community.
//           </p>

//           {!isSubmitted ? (
//             <motion.form
//               onSubmit={handleSubmit}
//               className="max-w-md mx-auto"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//             >
//               <div className="relative">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   onFocus={() => setIsFocused(true)}
//                   onBlur={() => setIsFocused(false)}
//                   placeholder="Enter your email address"
//                   required
//                   className={`w-full px-6 py-4 pr-32 text-lg border-2 rounded-full focus:outline-none transition-all duration-300 ${
//                     isFocused
//                       ? 'border-primary-500 shadow-lg ring-4 ring-primary-100 dark:ring-primary-900'
//                       : 'border-gray-300 dark:border-gray-600'
//                   } bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text placeholder-gray-500 dark:placeholder-gray-400`}
//                 />
//                 <motion.button
//                   type="submit"
//                   className="absolute right-2 top-2 bottom-2 px-6 bg-primary-500 text-white rounded-full hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 font-medium"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Subscribe
//                 </motion.button>
//               </div>
              
//               <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
//                 Join 5,000+ subscribers. No spam, unsubscribe anytime.
//               </p>
//             </motion.form>
//           ) : (
//             <motion.div
//               className="text-center"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold text-secondary-500 dark:text-dark-text mb-2">
//                 Successfully Subscribed!
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300">
//                 Thank you for joining our newsletter. Check your inbox for confirmation.
//               </p>
//             </motion.div>
//           )}

//           {/* Social Proof */}
//           <motion.div
//             className="flex items-center justify-center space-x-6 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//           >
//             <div className="text-center">
//               <div className="font-semibold text-2xl text-primary-500">5K+</div>
//               <div className="text-sm text-gray-600 dark:text-gray-300">Subscribers</div>
//             </div>
//             <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
//             <div className="text-center">
//               <div className="font-semibold text-2xl text-primary-500">Weekly</div>
//               <div className="text-sm text-gray-600 dark:text-gray-300">Updates</div>
//             </div>
//             <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
//             <div className="text-center">
//               <div className="font-semibold text-2xl text-primary-500">0%</div>
//               <div className="text-sm text-gray-600 dark:text-gray-300">Spam</div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default NewsletterSection;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const NewsletterSection: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter subscription:', email);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-6">
            <Mail size={32} className="text-white" />
          </div>

          <h2 className="font-heading font-bold text-h2 text-secondary-500 dark:text-dark-text mb-4">
            {t('newsletter.title')}
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('newsletter.description')}
          </p>

          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder={t('newsletter.placeholder')}
                  required
                  className={`w-full px-6 py-4 pr-32 text-lg border-2 rounded-full focus:outline-none transition-all duration-300 ${
                    isFocused
                      ? 'border-primary-500 shadow-lg ring-4 ring-primary-100 dark:ring-primary-900'
                      : 'border-gray-300 dark:border-gray-600'
                  } bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text placeholder-gray-500 dark:placeholder-gray-400`}
                />
                <motion.button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 px-6 bg-primary-500 text-white rounded-full hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('newsletter.subscribe')}
                </motion.button>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                {t('newsletter.note')}
              </p>
            </motion.form>
          ) : (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-500 dark:text-dark-text mb-2">
                {t('newsletter.success.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('newsletter.success.message')}
              </p>
            </motion.div>
          )}

          <motion.div
            className="flex items-center justify-center space-x-6 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="font-semibold text-2xl text-primary-500">5K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {t('newsletter.stats.subscribers')}
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="font-semibold text-2xl text-primary-500">Weekly</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {t('newsletter.stats.frequency')}
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="font-semibold text-2xl text-primary-500">0%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {t('newsletter.stats.spam')}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
