// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Send, CheckCircle } from 'lucide-react';
// import { useLanguage } from '../../contexts/LanguageContext';
// import Button from '../UI/Button';

// const VolunteerCTASection: React.FC = () => {
//   const { t } = useLanguage();
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     interest: '',
//     newsletter: false,
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const interestAreas = [
//     'Education',
//     'Environment',
//     'Healthcare',
//     'Food Security',
//     'Water Conservation',
//     'Community Development',
//   ];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value, type } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Here you would typically send the data to your backend
//     console.log('Volunteer form submitted:', formData);
//     setIsSubmitted(true);
    
//     // Reset form after 3 seconds
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({ name: '', email: '', interest: '', newsletter: false });
//     }, 3000);
//   };

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

//   const formFieldVariants = {
//     hidden: { opacity: 0, x: -30 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.6 },
//     },
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//         >
//           {/* Content */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <h2 className="font-heading font-bold text-h2 mb-4">
//               Become a Volunteer
//             </h2>
//             <p className="text-xl text-primary-100 leading-relaxed">
//               Join our mission to serve humanity and create lasting positive change in communities worldwide.
//             </p>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-3">
//                 <CheckCircle size={24} className="text-green-300 mt-1 flex-shrink-0" />
//                 <div>
//                   <h3 className="font-semibold text-lg">Make a Real Impact</h3>
//                   <p className="text-primary-200">
//                     Your contributions directly help communities in need and create lasting change.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-3">
//                 <CheckCircle size={24} className="text-green-300 mt-1 flex-shrink-0" />
//                 <div>
//                   <h3 className="font-semibold text-lg">Flexible Commitment</h3>
//                   <p className="text-primary-200">
//                     Choose activities that fit your schedule and interests.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-3">
//                 <CheckCircle size={24} className="text-green-300 mt-1 flex-shrink-0" />
//                 <div>
//                   <h3 className="font-semibold text-lg">Growing Community</h3>
//                   <p className="text-primary-200">
//                     Join a network of like-minded individuals passionate about service.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Form */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
//           >
//             {!isSubmitted ? (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="space-y-4">
//                   <motion.div 
//                     variants={formFieldVariants}
//                     initial="hidden"
//                     animate={inView ? "visible" : "hidden"}
//                     transition={{ delay: 0.2 }}
//                   >
//                     <label htmlFor="name" className="block text-sm font-medium text-primary-100 mb-2">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       required
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       placeholder="Enter your full name"
//                       className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
//                     />
//                   </motion.div>

//                   <motion.div 
//                     variants={formFieldVariants}
//                     initial="hidden"
//                     animate={inView ? "visible" : "hidden"}
//                     transition={{ delay: 0.4 }}
//                   >
//                     <label htmlFor="email" className="block text-sm font-medium text-primary-100 mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       required
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       placeholder="Enter your email address"
//                       className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
//                     />
//                   </motion.div>

//                   <motion.div 
//                     variants={formFieldVariants}
//                     initial="hidden"
//                     animate={inView ? "visible" : "hidden"}
//                     transition={{ delay: 0.6 }}
//                   >
//                     <label htmlFor="interest" className="block text-sm font-medium text-primary-100 mb-2">
//                       Area of Interest
//                     </label>
//                     <select
//                       id="interest"
//                       name="interest"
//                       value={formData.interest}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
//                     >
//                       <option value="" className="text-gray-800">Select an area of interest</option>
//                       {interestAreas.map((area) => (
//                         <option key={area} value={area} className="text-gray-800">
//                           {area}
//                         </option>
//                       ))}
//                     </select>
//                   </motion.div>

//                   <motion.div 
//                     variants={formFieldVariants}
//                     initial="hidden"
//                     animate={inView ? "visible" : "hidden"}
//                     transition={{ delay: 0.8 }}
//                     className="flex items-center space-x-3"
//                   >
//                     <input
//                       type="checkbox"
//                       id="newsletter"
//                       name="newsletter"
//                       checked={formData.newsletter}
//                       onChange={handleInputChange}
//                       className="w-4 h-4 text-primary-500 bg-white/20 border-white/30 rounded focus:ring-white/50"
//                     />
//                     <label htmlFor="newsletter" className="text-sm text-primary-100">
//                       Subscribe to newsletter for updates
//                     </label>
//                   </motion.div>
//                 </div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                   transition={{ delay: 1.0 }}
//                 >
//                   <Button
//                     type="submit"
//                     variant="accent"
//                     size="lg"
//                     className="w-full group"
//                   >
//                     Join Our Mission
//                     <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
//                   </Button>
//                 </motion.div>
//               </form>
//             ) : (
//               <motion.div
//                 className="text-center py-8"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <CheckCircle size={64} className="text-green-300 mx-auto mb-4" />
//                 <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
//                 <p className="text-primary-100">
//                   We've received your application and will get back to you soon.
//                 </p>
//               </motion.div>
//             )}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default VolunteerCTASection;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from '../UI/Button';

const VolunteerCTASection: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    newsletter: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestAreas = [
    t('volunteer.interests.education'),
    t('volunteer.interests.environment'),
    t('volunteer.interests.healthcare'),
    t('volunteer.interests.food'),
    t('volunteer.interests.water'),
    t('volunteer.interests.community'),
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer form submitted:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', interest: '', newsletter: false });
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="space-y-6">
            <h2 className="font-heading font-bold text-h2 mb-4">
              {t('volunteer.title')}
            </h2>
            <p className="text-xl text-primary-100 leading-relaxed">
              {t('volunteer.description')}
            </p>
            <div className="space-y-4">
              {[1, 2, 3].map(num => (
                <div key={num} className="flex items-start space-x-3">
                  <CheckCircle size={24} className="text-green-300 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">{t(`volunteer.points.${num}.title`)}</h3>
                    <p className="text-primary-200">{t(`volunteer.points.${num}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-100 mb-2">
                      {t('volunteer.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t('volunteer.placeholders.name')}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-100 mb-2">
                      {t('volunteer.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t('volunteer.placeholders.email')}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-primary-100 mb-2">
                      {t('volunteer.interest')}
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white"
                    >
                      <option value="">{t('volunteer.placeholders.selectInterest')}</option>
                      {interestAreas.map((area, index) => (
                        <option key={index} value={area} className="text-gray-800">
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="w-4 h-4"
                    />
                    <label htmlFor="newsletter" className="text-sm text-primary-100">
                      {t('volunteer.subscribe')}
                    </label>
                  </div>
                </div>

                <Button type="submit" variant="accent" size="lg" className="w-full group">
                  {t('volunteer.submit')}
                  <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            ) : (
              <motion.div className="text-center py-8">
                <CheckCircle size={64} className="text-green-300 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{t('volunteer.thankyou.title')}</h3>
                <p className="text-primary-100">{t('volunteer.thankyou.message')}</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteerCTASection;
