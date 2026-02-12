// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
// import { useLanguage } from '../../contexts/LanguageContext';

// interface Testimonial {
//   id: number;
//   name: string;
//   role: string;
//   image: string;
//   quote: string;
// }

// const TestimonialsSection: React.FC = () => {
//   const { t } = useLanguage();
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const testimonials: Testimonial[] = [
//     {
//       id: 1,
//       name: 'Sarah Johnson',
//       role: 'Community Volunteer',
//       image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
//       quote: 'Working with Wake Up Guys® has been an incredible journey. Their dedication to serving humanity is truly inspiring and has motivated me to become a better person.',
//     },
//     {
//       id: 2,
//       name: 'Michael Chen',
//       role: 'Beneficiary Parent',
//       image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
//       quote: 'The impact this organization has had on our community is immeasurable. My children now have access to quality education and nutritious meals thanks to their programs.',
//     },
//     {
//       id: 3,
//       name: 'Priya Sharma',
//       role: 'Local Teacher',
//       image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
//       quote: 'The educational initiatives by Wake Up Guys® have transformed how we approach learning in our community. Their innovative methods truly make a difference.',
//     },
//     {
//       id: 4,
//       name: 'David Rodriguez',
//       role: 'Environmental Activist',
//       image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
//       quote: 'Their environmental conservation efforts are remarkable. Together, we\'ve planted over 1000 trees and cleaned numerous water bodies in our region.',
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [testimonials.length]);

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
//             {t('testimonials.title')}
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Hear from the people whose lives have been touched by our initiatives and community work.
//           </p>
//         </motion.div>

//         <div className="relative max-w-4xl mx-auto">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIndex}
//               className="bg-gray-50 dark:bg-dark-surface rounded-2xl p-8 lg:p-12 text-center shadow-lg"
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -100 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Quote size={48} className="text-primary-500 mx-auto mb-6" />
              
//               <blockquote className="text-xl lg:text-2xl text-gray-700 dark:text-gray-200 font-medium leading-relaxed mb-8">
//                 "{testimonials[currentIndex].quote}"
//               </blockquote>

//               <div className="flex items-center justify-center space-x-4">
//                 <img
//                   src={testimonials[currentIndex].image}
//                   alt={testimonials[currentIndex].name}
//                   className="w-16 h-16 rounded-full object-cover"
//                 />
//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg text-secondary-500 dark:text-dark-text">
//                     {testimonials[currentIndex].name}
//                   </h4>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     {testimonials[currentIndex].role}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Navigation Buttons */}
//           <button
//             onClick={prevTestimonial}
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-dark-surface shadow-lg rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-200"
//           >
//             <ChevronLeft size={24} />
//           </button>

//           <button
//             onClick={nextTestimonial}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-dark-surface shadow-lg rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-200"
//           >
//             <ChevronRight size={24} />
//           </button>

//           {/* Dots Indicator */}
//           <div className="flex justify-center space-x-2 mt-8">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-200 ${
//                   index === currentIndex
//                     ? 'bg-primary-500 w-8'
//                     : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-300'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: t('testimonials.name1'),
      role: t('testimonials.role1'),
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: t('testimonials.quote1'),
    },
    {
      id: 2,
      name: t('testimonials.name2'),
      role: t('testimonials.role2'),
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: t('testimonials.quote2'),
    },
    {
      id: 3,
      name: t('testimonials.name3'),
      role: t('testimonials.role3'),
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: t('testimonials.quote3'),
    },
    {
      id: 4,
      name: t('testimonials.name4'),
      role: t('testimonials.role4'),
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: t('testimonials.quote4'),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('testimonials.description')}
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-gray-50 dark:bg-dark-surface rounded-2xl p-8 lg:p-12 text-center shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Quote size={48} className="text-primary-500 mx-auto mb-6" />
              <blockquote className="text-xl lg:text-2xl text-gray-700 dark:text-gray-200 font-medium leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-secondary-500 dark:text-dark-text">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button onClick={prevTestimonial} className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-dark-surface shadow-lg rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-200">
            <ChevronLeft size={24} />
          </button>

          <button onClick={nextTestimonial} className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-dark-surface shadow-lg rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-200">
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary-500 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
