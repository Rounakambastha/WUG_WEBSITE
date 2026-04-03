// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { X, ZoomIn } from 'lucide-react';
// import { useLanguage } from '../../contexts/LanguageContext';

// interface GalleryImage {
//   id: number;
//   src: string;
//   alt: string;
//   caption: string;
// }

// const GallerySection: React.FC = () => {
//   const { t } = useLanguage();
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
//   const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

//   const galleryImages: GalleryImage[] = [
//     {
//       id: 1,
//       src: 'https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=800',
//       alt: 'Community service event',
//       caption: 'Food distribution drive in local communities',
//     },
//     {
//       id: 2,
//       src: 'https://images.pexels.com/photos/8613321/pexels-photo-8613321.jpeg?auto=compress&cs=tinysrgb&w=800',
//       alt: 'Education program',
//       caption: 'Teaching children in underserved areas',
//     },
//     {
//       id: 3,
//       src: 'https://images.pexels.com/photos/6995220/pexels-photo-6995220.jpeg?auto=compress&cs=tinysrgb&w=800',
//       alt: 'Environmental cleanup',
//       caption: 'Beach cleanup and environmental conservation',
//     },
//     {
//       id: 4,
//       src: 'https://images.pexels.com/photos/7512066/pexels-photo-7512066.jpeg?auto=compress&cs=tinysrgb&w=800',
//       alt: 'Tree plantation',
//       caption: 'Tree plantation drive for greener future',
//     },
//     {
//       id: 5,
//       src: 'https://images.pexels.com/photos/6995421/pexels-photo-6995421.jpeg?auto=compress&cs=tinysrgb&w=800',
//       alt: 'Water conservation',
//       caption: 'Clean water initiative in rural areas',
//     },
//     {
//       id: 6,
//       src: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=800',
//       alt: 'Healthcare outreach',
//       caption: 'Medical camps and health awareness programs',
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
//             {t('gallery.title')}
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Witness the positive change we're creating together in communities across the globe.
//           </p>
//         </motion.div>

//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//         >
//           {galleryImages.map((image) => (
//             <motion.div
//               key={image.id}
//               className="relative group cursor-pointer overflow-hidden rounded-xl bg-white dark:bg-dark-bg shadow-lg"
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
//               </div>
              
//               <div className="p-4">
//                 <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
//                   {image.caption}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* View More Button */}
//         <motion.div
//           className="text-center mt-12"
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//         >
//           <motion.a
//             href="/gallery"
//             className="inline-flex items-center px-8 py-3 bg-primary-500 text-white rounded-md font-semibold hover:bg-primary-600 transition-all duration-200"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             View Full Gallery
//           </motion.a>
//         </motion.div>
//       </div>

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
//                 <p className="text-center font-medium">{selectedImage.caption}</p>
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
//     </section>
//   );
// };

// export default GallerySection;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ZoomIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  captionKey: string;
}

const GallerySection: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Community service event',
      captionKey: 'gallery.caption1',
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/8613321/pexels-photo-8613321.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Education program',
      captionKey: 'gallery.caption2',
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/6995220/pexels-photo-6995220.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Environmental cleanup',
      captionKey: 'gallery.caption3',
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/7512066/pexels-photo-7512066.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Tree plantation',
      captionKey: 'gallery.caption4',
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/6995421/pexels-photo-6995421.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Water conservation',
      captionKey: 'gallery.caption5',
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Healthcare outreach',
      captionKey: 'gallery.caption6',
    },
  ];

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
            {t('gallery.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('gallery.description')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-white dark:bg-dark-bg shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn size={32} className="text-white" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  {t(image.captionKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="/gallery"
            className="inline-flex items-center px-8 py-3 bg-primary-500 text-white rounded-md font-semibold hover:bg-primary-600 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('gallery.viewFull')}
          </motion.a>
        </motion.div>
      </div>

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
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-lg">
                <p className="text-center font-medium">{t(selectedImage.captionKey)}</p>
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
    </section>
  );
};

export default GallerySection;
