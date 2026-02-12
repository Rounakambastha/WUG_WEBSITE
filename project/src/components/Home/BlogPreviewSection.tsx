// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Calendar, ArrowRight, Tag, Clock } from 'lucide-react';
// import { useLanguage } from '../../contexts/LanguageContext';

// const BlogPreviewSection: React.FC = () => {
//   const { t } = useLanguage();
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

//   // Placeholder blog posts data - ready for Sanity CMS integration
//   const blogPosts = [
//     {
//       id: 1,
//       title: 'Transforming Lives Through Education',
//       excerpt: 'How our literacy programs are empowering children in rural communities to build brighter futures.',
//       image: 'https://images.pexels.com/photos/8613321/pexels-photo-8613321.jpeg?auto=compress&cs=tinysrgb&w=600',
//       date: '2024-01-15',
//       readTime: '5 min read',
//       category: 'Education',
//       tag: 'Education',
//     },
//     {
//       id: 2,
//       title: 'Clean Water Initiative Success Story',
//       excerpt: 'Celebrating the completion of our water purification project that now serves 500+ families daily.',
//       image: 'https://images.pexels.com/photos/6995421/pexels-photo-6995421.jpeg?auto=compress&cs=tinysrgb&w=600',
//       date: '2024-01-20',
//       readTime: '4 min read',
//       category: 'Water',
//       tag: 'Health',
//     },
//     {
//       id: 3,
//       title: 'Youth Leadership in Action',
//       excerpt: 'Meet the young changemakers leading our community development initiatives across three states.',
//       image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
//       date: '2024-01-25',
//       readTime: '6 min read',
//       category: 'Leadership',
//       tag: 'Community',
//     },
//     {
//       id: 4,
//       title: 'Environmental Conservation Impact',
//       excerpt: 'Our tree plantation drive reaches milestone of 10,000 trees planted across urban and rural areas.',
//       image: 'https://images.pexels.com/photos/7512066/pexels-photo-7512066.jpeg?auto=compress&cs=tinysrgb&w=600',
//       date: '2024-02-01',
//       readTime: '3 min read',
//       category: 'Environment',
//       tag: 'Environment',
//     },
//     {
//       id: 5,
//       title: 'Nutrition Program Expansion',
//       excerpt: 'Scaling our meal distribution program to reach 1000+ children daily with nutritious food.',
//       image: 'https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=600',
//       date: '2024-02-05',
//       readTime: '4 min read',
//       category: 'Nutrition',
//       tag: 'Health',
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
//     <section className="py-20 bg-gray-50 dark:bg-dark-surface">
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
//             Dynamic Content Powered by Sanity CMS
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
//             {blogPosts.map((post, index) => (
//               <motion.article
//                 key={post.id}
//                 className="w-80 bg-white dark:bg-dark-bg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
//                 variants={itemVariants}
//                 whileHover={{ y: -8, scale: 1.02 }}
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="px-3 py-1 bg-white/90 dark:bg-dark-bg/90 text-secondary-500 dark:text-dark-text rounded-full text-xs font-medium">
//                       {post.tag}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
//                     <div className="flex items-center">
//                       <Calendar size={16} className="mr-2" />
//                       {new Date(post.date).toLocaleDateString('en-US', {
//                         year: 'numeric',
//                         month: 'short',
//                         day: 'numeric'
//                       })}
//                     </div>
//                     <div className="flex items-center">
//                       <Clock size={16} className="mr-1" />
//                       {post.readTime}
//                     </div>
//                   </div>

//                   <h3 className="font-heading font-semibold text-xl text-secondary-500 dark:text-dark-text mb-3 line-clamp-2">
//                     {post.title}
//                   </h3>

//                   <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
//                     {post.excerpt}
//                   </p>

//                   <button className="flex items-center text-primary-500 hover:text-primary-600 font-medium text-sm group">
//                     Read More
//                     <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </div>
//               </motion.article>
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

// export default BlogPreviewSection;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight, Tag, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BlogPreviewSection: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const blogPosts = [
    {
      id: 1,
      title: t('blog.title1'),
      excerpt: t('blog.excerpt1'),
      image: 'https://images.pexels.com/photos/8613321/pexels-photo-8613321.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-15',
      readTime: t('minutes.5'),
      category: t('blog.category.education'),
      tag: t('blog.tag.education'),
    },
    {
      id: 2,
      title: t('blog.title2'),
      excerpt: t('blog.excerpt2'),
      image: 'https://images.pexels.com/photos/6995421/pexels-photo-6995421.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-20',
      readTime: t('minutes.4'),
      category: t('blog.category.water'),
      tag: t('blog.tag.health'),
    },
    {
      id: 3,
      title: t('blog.title3'),
      excerpt: t('blog.excerpt3'),
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-25',
      readTime: t('minutes.6'),
      category: t('blog.category.leadership'),
      tag: t('blog.tag.community'),
    },
    {
      id: 4,
      title: t('blog.title4'),
      excerpt: t('blog.excerpt4'),
      image: 'https://images.pexels.com/photos/7512066/pexels-photo-7512066.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-02-01',
      readTime: t('minutes.3'),
      category: t('blog.category.environment'),
      tag: t('blog.tag.environment'),
    },
    {
      id: 5,
      title: t('blog.title5'),
      excerpt: t('blog.excerpt5'),
      image: 'https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-02-05',
      readTime: t('minutes.4'),
      category: t('blog.category.nutrition'),
      tag: t('blog.tag.health'),
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
    hidden: { opacity: 0, x: 30 },
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-h2 text-secondary-500 dark:text-dark-text mb-4">
            {t('blog.sectionTitle')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            {t('blog.sectionDescription')}
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium">
            <Tag size={16} className="mr-2" />
            {t('blog.dynamicContentNote')}
          </div>
        </motion.div>

        <motion.div
          className="overflow-x-auto pb-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="flex space-x-6 w-max">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                className="w-80 bg-white dark:bg-dark-bg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-dark-bg/90 text-secondary-500 dark:text-dark-text rounded-full text-xs font-medium">
                      {post.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="font-heading font-semibold text-xl text-secondary-500 dark:text-dark-text mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <button className="flex items-center text-primary-500 hover:text-primary-600 font-medium text-sm group">
                    {t('blog.readMore')}
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
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
            {t('blog.viewAll')}
            <ArrowRight size={20} className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
