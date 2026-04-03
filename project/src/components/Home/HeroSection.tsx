// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../../contexts/LanguageContext';
// import Button from '../UI/Button';

// const HeroSection: React.FC = () => {
//   const { t } = useLanguage();

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: 'easeOut' },
//     },
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-16">
//       {/* Full Screen Background Image */}
//       <div className="absolute inset-0 z-0">
//         <div 
//           className="w-full h-full bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500"
//           style={{
//             backgroundImage: 'url(https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=1920)',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundBlendMode: 'overlay',
//           }}
//         />
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       {/* Content */}
//       <motion.div
//         className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.h1
//           className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl mb-6 leading-tight"
//           variants={itemVariants}
//         >
//           {t('hero.tagline')}
//         </motion.h1>

//         <motion.p
//           className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
//           variants={itemVariants}
//         >
//           {t('hero.subtitle')}
//         </motion.p>

//         <motion.div
//           className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
//           variants={itemVariants}
//         >
//           <Link to="/volunteer">
//             <Button variant="accent" size="lg" className="group text-lg px-8 py-4">
//               {t('hero.joinUs')}
//               <ArrowRight size={22} className="ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </Link>

//           <Link to="/donate">
//             <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
//               {t('hero.donateNow')}
//             </Button>
//           </Link>
//         </motion.div>

//         {/* Enhanced Microcopy with pulsing animation */}
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.5, duration: 0.8 }}
//         >
//           <motion.p
//             className="text-lg text-white/80 font-medium"
//             animate={{ opacity: [0.6, 1, 0.6] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           >
//             ↓ See Our Work
//           </motion.p>
//         </motion.div>
//       </motion.div>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full"
//           animate={{ y: [-20, 20, -20] }}
//           transition={{ duration: 4, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute top-1/3 right-20 w-16 h-16 bg-accent-500/20 rounded-full"
//           animate={{ y: [20, -20, 20] }}
//           transition={{ duration: 3, repeat: Infinity, delay: 1 }}
//         />
//         <motion.div
//           className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-primary-300/20 rounded-full"
//           animate={{ y: [-15, 15, -15] }}
//           transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
//         />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../UI/Button';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl mb-6 leading-tight"
          variants={itemVariants}
        >
          {t('hero.tagline')}
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <Link to="/volunteer">
            <Button variant="accent" size="lg" className="group text-lg px-8 py-4">
              {t('hero.joinUs')}
              <ArrowRight size={22} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Link to="/donate">
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
              {t('hero.donateNow')}
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.p
            className="text-lg text-white/80 font-medium"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            {t('hero.scrollDown', { defaultValue: '↓ See Our Work' })}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-16 h-16 bg-accent-500/20 rounded-full"
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-primary-300/20 rounded-full"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
