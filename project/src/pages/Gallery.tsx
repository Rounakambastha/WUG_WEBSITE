// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { X, ZoomIn, Tag } from 'lucide-react';
// import { useLanguage } from '../contexts/LanguageContext';

// interface GalleryImage {
//   id: number;
//   src: string;
//   alt: string;
//   title: string;
//   tag?: string;
// }

// const Gallery: React.FC = () => {
//   const { t } = useLanguage();
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
//   const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

//   const galleryImages: GalleryImage[] = [
//     {
//       id: 1,
//       src: 'https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=800',
//       alt: 'Community food distribution',
//       title: 'Food Distribution Drive',
//       tag: 'Nutrition',
//     },
//     {
//       id: 2,
//       src: 'https://images.pexels.com/photos/8613321/pexels-photo-8613321.jpeg?auto=compress&cs=tinysrgb&w=800',
//       alt: 'Education program',
//       title: 'Education for All',
//       tag: 'Education',
//     },
//     {
//       id: 3,
//       src: 'https://images.pexels.com/photos/6995220/pexels-photo-6995220.jpeg?auto=compress&cs=tinysrgb&w=800',
//       alt: 'Environmental cleanup',
//       title: 'Beach Cleanup Initiative',
//       tag: 'Environment',
//     },
//     {
//       id: 4,
//       src: 'https://images.pexels.com/photos/7512066/pexels-photo-7512066.jpeg?auto=compress&cs=tinysrgb&w=800',
//       alt: 'Tree plantation',
//       title: 'Green Future Campaign',
//       tag: 'Environment',
//     },
//     {
//       id: 5,
//       src: 'https://images.pexels.com/photos/6995421/pexels-photo-6995421.jpeg?auto=compress&cs=tinysrgb&w=800',
//       alt: 'Water conservation',
//       title: 'Clean Water Project',
//       tag: 'Water',
//     },
//     {
//       id: 6,
//       src: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=800',
//       alt: 'Healthcare outreach',
//       title: 'Medical Camp Outreach',
//       tag: 'Healthcare',
//     },
//     {
//       id: 7,
//       src: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
//       alt: 'Youth empowerment',
//       title: 'Youth Leadership Program',
//       tag: 'Empowerment',
//     },
//     {
//       id: 8,
//       src: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800',
//       alt: 'Community building',
//       title: 'Community Development',
//       tag: 'Community',
//     },
//     {
//       id: 9,
//       src: 'https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=800',
//       alt: 'Skills training',
//       title: 'Skills Training Workshop',
//       tag: 'Education',
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.6 },
//     },
//   };

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
//             Our Work in Action
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
//             Witness the positive change we're creating together in communities across the globe. 
//             Each image tells a story of hope, transformation, and collective impact.
//           </p>

//           {/* CMS Label */}
//           <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium">
//             <Tag size={16} className="mr-2" />
//             Dynamic Content Powered by Sanity CMS (Gallery Placeholder)
//           </div>
//         </div>

//         <motion.div
//           ref={ref}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//         >
//           {galleryImages.map((image) => (
//             <motion.div
//               key={image.id}
//               className="relative group cursor-pointer overflow-hidden rounded-xl bg-white dark:bg-dark-bg shadow-lg hover:shadow-xl transition-all duration-300"
//               variants={itemVariants}
//               whileHover={{ y: -5 }}
//               onClick={() => setSelectedImage(image)}
//             >
//               <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                   <ZoomIn size={32} className="text-white" />
//                 </div>

//                 {/* Tag */}
//                 {image.tag && (
//                   <div className="absolute top-4 right-4">
//                     <span className="px-3 py-1 bg-white/90 dark:bg-dark-bg/90 text-secondary-500 dark:text-dark-text rounded-full text-xs font-medium">
//                       {image.tag}
//                     </span>
//                   </div>
//                 )}
//               </div>

//               <div className="p-4">
//                 <h3 className="font-semibold text-lg text-secondary-500 dark:text-dark-text">
//                   {image.title}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>

//       {/* Modal */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImage(null)}
//           >
//             <motion.div
//               className="relative max-w-4xl max-h-full"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <img
//                 src={selectedImage.src}
//                 alt={selectedImage.alt}
//                 className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-lg">
//                 <h3 className="text-xl font-semibold mb-1">{selectedImage.title}</h3>
//                 {selectedImage.tag && (
//                   <span className="inline-block px-2 py-1 bg-primary-500 text-white rounded text-sm">
//                     {selectedImage.tag}
//                   </span>
//                 )}
//               </div>
//               <button
//                 onClick={() => setSelectedImage(null)}
//                 className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
//               >
//                 <X size={20} />
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Gallery;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ZoomIn, Tag, Loader } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fetchGallery, GalleryEntry } from '../lib/sanity/fetchGallery';


const Gallery: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedImage, setSelectedImage] = useState<GalleryEntry | null>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const data = await fetchGallery();
        setGalleryImages(data);
      } catch (error) {
        console.error('Failed to load gallery:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadGallery();
  }, []);

  const getLocalizedTitle = (item: GalleryEntry) => {
    return i18n.language === 'hi' && item.title_hi ? item.title_hi : item.title;
  };

  const getCategoryTag = (category?: string) => {
    if (!category) return '';
    // Map internal categories to translated/formatted strings if necessary
    switch (category) {
      case 'donation': return t('gallery.tag.donation', 'Donation');
      case 'event': return t('gallery.tag.event', 'Event');
      case 'volunteer': return t('gallery.tag.volunteer', 'Volunteer');
      default: return t('gallery.tag.other', 'Activity');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

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
            {t('gallery.sectionTitle')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('gallery.sectionDescription')}
          </p>

          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium">
            <Tag size={16} className="mr-2" />
            {t('gallery.cmsNote')}
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader size={40} className="text-primary-500 animate-spin" />
          </div>
        ) : galleryImages.length > 0 ? (
          <motion.div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {galleryImages.map((image) => (
              <motion.div
                key={image._id}
                className="relative group cursor-pointer overflow-hidden rounded-xl bg-white dark:bg-dark-bg shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                  <img
                    src={image.image?.asset?.url || 'https://via.placeholder.com/800x600?text=No+Image'}
                    alt={getLocalizedTitle(image)}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn size={32} className="text-white" />
                  </div>

                  {image.category && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 dark:bg-dark-bg/90 text-secondary-500 dark:text-dark-text rounded-full text-xs font-medium backdrop-blur-sm">
                        {getCategoryTag(image.category)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg text-secondary-500 dark:text-dark-text">
                    {getLocalizedTitle(image)}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400">No gallery images found. Please add content in Sanity CMS.</p>
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image?.asset?.url || 'https://via.placeholder.com/800x600'}
                alt={getLocalizedTitle(selectedImage)}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 rounded-b-lg">
                <h3 className="text-2xl font-semibold mb-2">{getLocalizedTitle(selectedImage)}</h3>
                {selectedImage.category && (
                  <span className="inline-block px-3 py-1 bg-primary-500 text-white rounded-full text-sm font-medium">
                    {getCategoryTag(selectedImage.category)}
                  </span>
                )}
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
