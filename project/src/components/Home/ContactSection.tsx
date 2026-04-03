// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { MessageSquare, Phone, Mail, MapPin, Send } from 'lucide-react';
// import { useLanguage } from '../../contexts/LanguageContext';
// import Button from '../UI/Button';

// const ContactSection: React.FC = () => {
//   const { t } = useLanguage();
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Here you would typically send the data to your backend
//     console.log('Contact form submitted:', formData);
//     setIsSubmitted(true);
    
//     // Reset form after 3 seconds
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({ name: '', email: '', message: '' });
//     }, 3000);
//   };

//   const contactInfo = [
//     {
//       icon: Phone,
//       title: 'Phone',
//       content: '+91 12345 67890',
//       href: 'tel:+911234567890',
//     },
//     {
//       icon: Mail,
//       title: 'Email',
//       content: 'contact@wakeupguys.org',
//       href: 'mailto:contact@wakeupguys.org',
//     },
//     {
//       icon: MapPin,
//       title: 'Address',
//       content: '123 Humanity Street, Service City, SC 12345',
//       href: '#',
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
//             {t('contact.title')}
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Have questions about our initiatives or want to get involved? We'd love to hear from you.
//           </p>
//         </motion.div>

//         <motion.div
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12"
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//         >
//           {/* Contact Info & Map */}
//           <motion.div variants={itemVariants} className="space-y-8">
//             <div className="space-y-6">
//               {contactInfo.map((info, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-start space-x-4"
//                   variants={itemVariants}
//                 >
//                   <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
//                     <info.icon size={24} className="text-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg text-secondary-500 dark:text-dark-text mb-1">
//                       {info.title}
//                     </h3>
//                     {info.href && info.href !== '#' ? (
//                       <a
//                         href={info.href}
//                         className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
//                       >
//                         {info.content}
//                       </a>
//                     ) : (
//                       <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Map Placeholder */}
//             <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
//               <div className="text-center">
//                 <MapPin size={48} className="text-gray-400 mx-auto mb-2" />
//                 <p className="text-gray-500 dark:text-gray-400">
//                   Interactive Map Placeholder
//                 </p>
//                 <p className="text-sm text-gray-400">
//                   Embed Google Maps or similar service here
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div variants={itemVariants}>
//             <div className="bg-gray-50 dark:bg-dark-surface rounded-2xl p-8">
//               {!isSubmitted ? (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     <motion.div variants={itemVariants}>
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                         Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         required
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text"
//                         placeholder="Enter your name"
//                       />
//                     </motion.div>

//                     <motion.div variants={itemVariants}>
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                         Email Address *
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         required
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text"
//                         placeholder="Enter your email"
//                       />
//                     </motion.div>
//                   </div>

//                   <motion.div variants={itemVariants}>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                       Message *
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows={5}
//                       required
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text resize-none"
//                       placeholder="Tell us about your inquiry..."
//                     />
//                   </motion.div>

//                   <Button
//                     type="submit"
//                     variant="primary"
//                     size="lg"
//                     className="w-full group"
//                   >
//                     Send Message
//                     <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
//                   </Button>
//                 </form>
//               ) : (
//                 <motion.div
//                   className="text-center py-12"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <MessageSquare size={64} className="text-primary-500 mx-auto mb-4" />
//                   <h3 className="text-2xl font-semibold text-secondary-500 dark:text-dark-text mb-2">
//                     Message Sent!
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     Thank you for reaching out. We'll get back to you within 24 hours.
//                   </p>
//                 </motion.div>
//               )}
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* WhatsApp Floating Button */}
//         <motion.a
//           href="https://wa.me/911234567890"
//           className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 z-40"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 1, type: "spring", stiffness: 200 }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <motion.div
//             animate={{ y: [-2, 2, -2] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <MessageSquare size={24} />
//           </motion.div>
//         </motion.a>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Phone, Mail, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from '../UI/Button';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      content: t('phone.default'),
      href: 'tel:+911234567890',
    },
    {
      icon: Mail,
      title: t('contact.email'),
      content: 'contact@wakeupguys.org',
      href: 'mailto:contact@wakeupguys.org',
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      content: t('address.main'),
      href: '#',
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
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div key={index} className="flex items-start space-x-4" variants={itemVariants}>
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-secondary-500 dark:text-dark-text mb-1">
                      {info.title}
                    </h3>
                    {info.href && info.href !== '#' ? (
                      <a
                        href={info.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 dark:text-gray-400">{t('contact.map.title')}</p>
                <p className="text-sm text-gray-400">{t('contact.map.description')}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-gray-50 dark:bg-dark-surface rounded-2xl p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.placeholder.name')}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.placeholder.email')}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text"
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.placeholder.message')}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text resize-none"
                    />
                  </motion.div>

                  <Button type="submit" variant="primary" size="lg" className="w-full group">
                    {t('contact.form.submit')}
                    <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              ) : (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <MessageSquare size={64} className="text-primary-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-secondary-500 dark:text-dark-text mb-2">
                    {t('contact.success.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('contact.success.message')}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>

        <motion.a
          href="https://wa.me/911234567890"
          className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg z-40"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div animate={{ y: [-2, 2, -2] }} transition={{ duration: 2, repeat: Infinity }}>
            <MessageSquare size={24} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
