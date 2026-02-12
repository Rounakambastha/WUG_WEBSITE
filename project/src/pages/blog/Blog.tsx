// // STATIIC PAGE BEFORE SANITY
// import React from 'react';
// import { motion } from 'framer-motion';
// import { useTranslation } from 'react-i18next';

// const Blog: React.FC = () => {
//   const { t } = useTranslation();

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
//             {t('blog.title')}
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
//             {t('blog.description')}
//           </p>
//         </div>

//         <div className="bg-gray-50 dark:bg-dark-surface rounded-2xl p-12 text-center">
//           <h2 className="font-heading font-semibold text-2xl text-secondary-500 dark:text-dark-text mb-4">
//             {t('blog.cmsReady')}
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 mb-4">
//             {t('blog.cmsDescription')}
//           </p>
//           <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm">
//             {t('blog.cmsBadge')}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Blog;
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { fetchBlogs } from '../../lib/sanity/fetchBlogs';
import type { BlogEntry } from '../../lib/sanity/fetchBlogs';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [blogs, setBlogs] = useState<BlogEntry[]>([]);

  useEffect(() => {
    fetchBlogs().then(setBlogs).catch(console.error);
  }, []);

  const lang = i18n.language as 'en' | 'hi';

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
            {t('blog.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('blog.description')}
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="bg-gray-50 dark:bg-dark-surface rounded-2xl p-12 text-center">
            <h2 className="font-heading font-semibold text-2xl text-secondary-500 dark:text-dark-text mb-4">
              {t('blog.cmsReady')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t('blog.cmsDescription')}
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm">
              {t('blog.cmsBadge')}
            </div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white dark:bg-dark-surface border rounded-2xl p-4 shadow hover:shadow-lg transition"
              >
                <img
                  src={blog.mainImage?.asset?.url}
                  alt={blog.title?.[lang] || blog.title.en || 'Blog image'}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">
                  {blog.title?.[lang] || blog.title.en}
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(blog.publishedAt).toLocaleDateString()}
                </p>
                <p className="mb-4">
                  {blog.excerpt?.[lang] || blog.excerpt.en}
                </p>
                <Link
                  to={`/blog/${blog.slug.current}`}
                  className="text-blue-500 hover:underline font-medium"
                >
                  {t('blog.readMore')}
                </Link>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Blog;

