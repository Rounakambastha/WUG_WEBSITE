// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
// import { useLanguage } from '../../contexts/LanguageContext';

// const Footer: React.FC = () => {
//   const { t } = useLanguage();

//   const socialLinks = [
//     { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
//     { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
//     { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
//     { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
//   ];

//   const quickLinks = [
//     { path: '/', label: t('nav.home') },
//     { path: '/about', label: t('nav.about') },
//     { path: '/gallery', label: t('nav.gallery') },
//     { path: '/blog', label: t('nav.blog') },
//     { path: '/volunteer', label: t('nav.volunteer') },
//     { path: '/donate', label: t('nav.donate') },
//   ];

//   const legalLinks = [
//     { path: '/privacy', label: 'Privacy Policy' },
//     { path: '/terms', label: 'Terms of Service' },
//     { path: '/cookies', label: 'Cookie Policy' },
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
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   };

//   return (
//     <footer className="bg-secondary-500 dark:bg-dark-bg text-white">
//       <motion.div
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* Contact Info & About */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <div className="flex items-center space-x-3">
//               <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
//                 <span className="text-white font-bold text-xl">W</span>
//               </div>
//               <div>
//                 <span className="font-heading font-bold text-xl">Wake Up Guys®</span>
//                 <p className="text-sm text-gray-300">Serving Humanity</p>
//               </div>
//             </div>
            
//             <p className="text-gray-300 text-sm leading-relaxed">
//               Empowering communities, transforming lives, and building a better tomorrow through youth-led initiatives. 
//               Join us in our mission to create lasting positive change.
//             </p>
            
//             <div className="space-y-3">
//               <div className="flex items-center space-x-3 text-sm text-gray-300">
//                 <MapPin size={18} className="text-primary-500 flex-shrink-0" />
//                 <span>{t('footer.address')}</span>
//               </div>
//               <div className="flex items-center space-x-3 text-sm text-gray-300">
//                 <Phone size={18} className="text-primary-500 flex-shrink-0" />
//                 <a href="tel:+911234567890" className="hover:text-white transition-colors">
//                   +91 12345 67890
//                 </a>
//               </div>
//               <div className="flex items-center space-x-3 text-sm text-gray-300">
//                 <Mail size={18} className="text-primary-500 flex-shrink-0" />
//                 <a href="mailto:contact@wakeupguys.org" className="hover:text-white transition-colors">
//                   contact@wakeupguys.org
//                 </a>
//               </div>
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <h3 className="font-heading font-semibold text-lg text-white">Quick Links</h3>
//             <div className="grid grid-cols-2 gap-3">
//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
//                 >
//                   <span className="w-1 h-1 bg-primary-500 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
            
//             <div className="pt-4">
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 hover:scale-105 transition-all duration-200 text-sm font-medium group"
//               >
//                 <Mail size={16} className="mr-2" />
//                 Get In Touch
//                 <motion.div
//                   className="ml-2"
//                   animate={{ x: [0, 3, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   →
//                 </motion.div>
//               </Link>
//             </div>
//           </motion.div>

//           {/* Social Media & Newsletter */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <h3 className="font-heading font-semibold text-lg text-white">Stay Connected</h3>
//             <p className="text-sm text-gray-300">
//               Follow our journey and be part of the positive change we're creating together.
//             </p>
            
//             <div className="flex space-x-4">
//               {socialLinks.map((social) => (
//                 <motion.a
//                   key={social.label}
//                   href={social.href}
//                   className={`w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-all duration-200 ${social.color}`}
//                   aria-label={social.label}
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <social.icon size={20} />
//                 </motion.a>
//               ))}
//             </div>
            
//             <div className="pt-4">
//               <Link
//                 to="/volunteer"
//                 className="inline-flex items-center px-6 py-3 bg-accent-500 text-white rounded-lg hover:bg-accent-600 hover:scale-105 transition-all duration-200 font-medium group"
//               >
//                 <Heart size={16} className="mr-2" />
//                 Join Our Mission
//               </Link>
//             </div>

//             {/* Newsletter Signup */}
//             <div className="pt-4">
//               <h4 className="font-semibold text-white mb-3">Newsletter</h4>
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
//                 />
//                 <button className="px-4 py-2 bg-primary-500 text-white rounded-r-lg hover:bg-primary-600 transition-colors">
//                   <Mail size={16} />
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom Section */}
//         <motion.div
//           variants={itemVariants}
//           className="border-t border-gray-700 mt-12 pt-8"
//         >
//           <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
//             <div className="flex items-center space-x-2 text-sm text-gray-400">
//               <span>{t('footer.rights')}</span>
//               <Heart size={16} className="text-red-500 animate-pulse" />
//               <span>Made with love for humanity</span>
//             </div>
            
//             <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
//               {legalLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className="text-sm text-gray-400 hover:text-white transition-colors"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
  ];

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/volunteer', label: t('nav.volunteer') },
    { path: '/donate', label: t('nav.donate') },
  ];

  const legalLinks = [
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms of Service' },
    { path: '/cookies', label: 'Cookie Policy' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-secondary-500 dark:bg-dark-bg text-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info & About */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl">Wake Up Guys®</span>
                <p className="text-sm text-gray-300">{t('hero.tagline')}</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPin size={18} className="text-primary-500 flex-shrink-0" />
                <span>{t('footer.address')}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone size={18} className="text-primary-500 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-white transition-colors">
                  +91 12345 67890
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail size={18} className="text-primary-500 flex-shrink-0" />
                <a href="mailto:contact@wakeupguys.org" className="hover:text-white transition-colors">
                  contact@wakeupguys.org
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="font-heading font-semibold text-lg text-white">{t('nav.home')} & More</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-primary-500 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 hover:scale-105 transition-all duration-200 text-sm font-medium group"
              >
                <Mail size={16} className="mr-2" />
                {t('contact.title')}
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Social Media & Newsletter */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="font-heading font-semibold text-lg text-white">{t('newsletter.title')}</h3>
            <p className="text-sm text-gray-300">{t('newsletter.description')}</p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-all duration-200 ${social.color}`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/volunteer"
                className="inline-flex items-center px-6 py-3 bg-accent-500 text-white rounded-lg hover:bg-accent-600 hover:scale-105 transition-all duration-200 font-medium group"
              >
                <Heart size={16} className="mr-2" />
                {t('volunteer.joinNow')}
              </Link>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold text-white mb-3">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                />
                <button className="px-4 py-2 bg-primary-500 text-white rounded-r-lg hover:bg-primary-600 transition-colors">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>{t('footer.rights')}</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>{t('mission.compService')}</span>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
