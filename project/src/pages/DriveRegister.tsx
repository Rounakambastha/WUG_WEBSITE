// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Calendar, MapPin, Users, Clock, CheckCircle, Tag, AlertCircle, Phone, Mail, User } from 'lucide-react';
// import { useLanguage } from '../contexts/LanguageContext';
// import Button from '../components/UI/Button';

// const DriveRegister: React.FC = () => {
//   const { t } = useLanguage();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     areaOfInterest: '',
//     experience: '',
//     availability: '',
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});

//   // Placeholder drive data - would come from Sanity CMS
//   const upcomingDrive = {
//     title: 'Community Food Distribution Drive',
//     date: '2024-02-15',
//     time: '09:00 AM - 02:00 PM',
//     location: 'Central Community Center, Downtown',
//     description: 'Join us for our monthly food distribution drive where we serve nutritious meals to 500+ families in need. This is a hands-on volunteer opportunity where you\'ll help with food preparation, distribution, and community engagement.',
//     volunteersNeeded: 50,
//     volunteersRegistered: 32,
//     image: 'https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=800',
//     requirements: [
//       'Must be 16 years or older',
//       'Comfortable working with food',
//       'Able to stand for extended periods',
//       'Friendly and approachable demeanor'
//     ],
//     benefits: [
//       'Make a direct impact in your community',
//       'Meet like-minded volunteers',
//       'Gain valuable experience',
//       'Certificate of participation'
//     ]
//   };

//   const areasOfInterest = [
//     'Food Distribution',
//     'Community Outreach',
//     'Event Coordination',
//     'Photography/Documentation',
//     'Translation Services',
//     'First Aid Support'
//   ];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));

//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors: { [key: string]: string } = {};

//     if (!formData.name.trim()) {
//       newErrors.name = 'Full name is required';
//     }

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }

//     if (!formData.phone) {
//       newErrors.phone = 'Phone number is required';
//     }

//     if (!formData.areaOfInterest) {
//       newErrors.areaOfInterest = 'Please select an area of interest';
//     }

//     return newErrors;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newErrors = validateForm();

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     console.log('Drive registration:', formData);
//     setIsSubmitted(true);

//     // Reset form after 3 seconds
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         areaOfInterest: '',
//         experience: '',
//         availability: '',
//       });
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

//   return (
//     <div className="min-h-screen pt-32 md:pt-24 bg-gray-50 dark:bg-dark-bg">
//       <motion.div
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Header */}
//         <motion.div variants={itemVariants} className="text-center mb-12">
//           <h1 className="font-heading font-bold text-h1 text-secondary-500 dark:text-dark-text mb-4">
//             Register for Our Upcoming Drive
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             Join us in making a difference in our community. Your participation helps us serve those in need.
//           </p>
//           <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium mt-4">
//             <Tag size={16} className="mr-2" />
//             Dynamic Content Powered by Sanity CMS (Drives Placeholder)
//           </div>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Event Information Panel */}
//           <motion.div variants={itemVariants} className="space-y-8">
//             {/* Event Card */}
//             <div className="bg-white dark:bg-dark-surface rounded-2xl shadow-lg overflow-hidden">
//               <div className="relative">
//                 <img
//                   src={upcomingDrive.image}
//                   alt={upcomingDrive.title}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium animate-pulse">
//                     Urgent
//                   </span>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h2 className="font-heading font-bold text-2xl text-secondary-500 dark:text-dark-text mb-4">
//                   {upcomingDrive.title}
//                 </h2>

//                 <div className="space-y-3 mb-6">
//                   <div className="flex items-center text-gray-600 dark:text-gray-300">
//                     <Calendar size={20} className="mr-3 text-primary-500" />
//                     <span className="font-medium">
//                       {new Date(upcomingDrive.date).toLocaleDateString('en-US', {
//                         weekday: 'long',
//                         year: 'numeric',
//                         month: 'long',
//                         day: 'numeric'
//                       })}
//                     </span>
//                   </div>
//                   <div className="flex items-center text-gray-600 dark:text-gray-300">
//                     <Clock size={20} className="mr-3 text-primary-500" />
//                     <span>{upcomingDrive.time}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600 dark:text-gray-300">
//                     <MapPin size={20} className="mr-3 text-primary-500" />
//                     <span>{upcomingDrive.location}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600 dark:text-gray-300">
//                     <Users size={20} className="mr-3 text-primary-500" />
//                     <span>{upcomingDrive.volunteersRegistered}/{upcomingDrive.volunteersNeeded} volunteers registered</span>
//                   </div>
//                 </div>

//                 {/* Progress Bar */}
//                 <div className="mb-6">
//                   <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
//                     <span>Registration Progress</span>
//                     <span>{Math.round((upcomingDrive.volunteersRegistered / upcomingDrive.volunteersNeeded) * 100)}%</span>
//                   </div>
//                   <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
//                     <div
//                       className="bg-primary-500 h-3 rounded-full transition-all duration-300"
//                       style={{ width: `${(upcomingDrive.volunteersRegistered / upcomingDrive.volunteersNeeded) * 100}%` }}
//                     />
//                   </div>
//                 </div>

//                 <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//                   {upcomingDrive.description}
//                 </p>
//               </div>
//             </div>

//             {/* Requirements & Benefits */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-white dark:bg-dark-surface rounded-xl p-6 shadow-lg">
//                 <h3 className="font-heading font-semibold text-lg text-secondary-500 dark:text-dark-text mb-4">
//                   Requirements
//                 </h3>
//                 <ul className="space-y-2">
//                   {upcomingDrive.requirements.map((req, index) => (
//                     <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
//                       <CheckCircle size={16} className="mr-2 text-green-500 mt-0.5 flex-shrink-0" />
//                       {req}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="bg-white dark:bg-dark-surface rounded-xl p-6 shadow-lg">
//                 <h3 className="font-heading font-semibold text-lg text-secondary-500 dark:text-dark-text mb-4">
//                   Benefits
//                 </h3>
//                 <ul className="space-y-2">
//                   {upcomingDrive.benefits.map((benefit, index) => (
//                     <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
//                       <CheckCircle size={16} className="mr-2 text-primary-500 mt-0.5 flex-shrink-0" />
//                       {benefit}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </motion.div>

//           {/* Registration Form */}
//           <motion.div variants={itemVariants}>
//             <div className="bg-white dark:bg-dark-surface rounded-2xl shadow-lg p-8">
//               {!isSubmitted ? (
//                 <>
//                   <div className="text-center mb-8">
//                     <h2 className="font-heading font-bold text-2xl text-secondary-500 dark:text-dark-text mb-2">
//                       Register Now
//                     </h2>
//                     <p className="text-gray-600 dark:text-gray-300">
//                       Fill out the form below to secure your spot as a volunteer.
//                     </p>
//                   </div>

//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                         Full Name *
//                       </label>
//                       <div className="relative">
//                         <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                         <input
//                           type="text"
//                           id="name"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           placeholder="Enter your full name"
//                           className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text transition-all duration-200 ${
//                             errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
//                           }`}
//                         />
//                       </div>
//                       {errors.name && (
//                         <p className="mt-1 text-sm text-red-500">{errors.name}</p>
//                       )}
//                     </div>

//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                         Email Address *
//                       </label>
//                       <div className="relative">
//                         <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           placeholder="Enter your email address"
//                           className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text transition-all duration-200 ${
//                             errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
//                           }`}
//                         />
//                       </div>
//                       {errors.email && (
//                         <p className="mt-1 text-sm text-red-500">{errors.email}</p>
//                       )}
//                     </div>

//                     <div>
//                       <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                         Phone Number *
//                       </label>
//                       <div className="relative">
//                         <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                         <input
//                           type="tel"
//                           id="phone"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleInputChange}
//                           placeholder="Enter your phone number"
//                           className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text transition-all duration-200 ${
//                             errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
//                           }`}
//                         />
//                       </div>
//                       {errors.phone && (
//                         <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
//                       )}
//                     </div>

//                     <div>
//                       <label htmlFor="areaOfInterest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                         Area of Interest *
//                       </label>
//                       <select
//                         id="areaOfInterest"
//                         name="areaOfInterest"
//                         value={formData.areaOfInterest}
//                         onChange={handleInputChange}
//                         className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text transition-all duration-200 ${
//                           errors.areaOfInterest ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
//                         }`}
//                       >
//                         <option value="">Select your area of interest</option>
//                         {areasOfInterest.map((area) => (
//                           <option key={area} value={area}>
//                             {area}
//                           </option>
//                         ))}
//                       </select>
//                       {errors.areaOfInterest && (
//                         <p className="mt-1 text-sm text-red-500">{errors.areaOfInterest}</p>
//                       )}
//                     </div>

//                     <div>
//                       <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                         Previous Volunteer Experience (Optional)
//                       </label>
//                       <textarea
//                         id="experience"
//                         name="experience"
//                         value={formData.experience}
//                         onChange={handleInputChange}
//                         rows={3}
//                         placeholder="Tell us about any previous volunteer experience..."
//                         className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text resize-none"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="availability" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                         Availability Notes (Optional)
//                       </label>
//                       <textarea
//                         id="availability"
//                         name="availability"
//                         value={formData.availability}
//                         onChange={handleInputChange}
//                         rows={2}
//                         placeholder="Any specific time constraints or availability notes..."
//                         className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text resize-none"
//                       />
//                     </div>

//                     <Button
//                       type="submit"
//                       variant="primary"
//                       size="lg"
//                       className="w-full"
//                     >
//                       Register Now
//                     </Button>
//                   </form>
//                 </>
//               ) : (
//                 <motion.div
//                   className="text-center py-12"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
//                   <h3 className="text-2xl font-semibold text-secondary-500 dark:text-dark-text mb-2">
//                     Registration Successful!
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-300 mb-4">
//                     Thank you for registering. We'll send you confirmation details and further instructions via email.
//                   </p>
//                   <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
//                     <p className="text-sm text-green-700 dark:text-green-300">
//                       <strong>Next Steps:</strong> Check your email for confirmation and event details. 
//                       We'll contact you 24 hours before the event with final instructions.
//                     </p>
//                   </div>
//                 </motion.div>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default DriveRegister;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, CheckCircle, Tag, Phone, Mail, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase/config';
import Button from '../components/UI/Button';

const DriveRegister: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    areaOfInterest: '',
    experience: '',
    availability: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const upcomingDrive = {
    title: t('drive.title'),
    date: '2024-02-15',
    time: '09:00 AM - 02:00 PM',
    location: t('drive.location'),
    description: t('drive.description'),
    volunteersNeeded: 50,
    volunteersRegistered: 32,
    image: 'https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=800',
    requirements: Array.isArray(t('drive.requirements', { returnObjects: true })) ? (t('drive.requirements', { returnObjects: true }) as string[]) : [],
    benefits: Array.isArray(t('drive.benefits', { returnObjects: true })) ? (t('drive.benefits', { returnObjects: true }) as string[]) : [],
  };

  const interestsRaw = t('drive.interests', { returnObjects: true });
  const areasOfInterest = Array.isArray(interestsRaw) ? (interestsRaw as string[]) : [];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = t('drive.errors.name');
    if (!formData.email) newErrors.email = t('drive.errors.email');
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('drive.errors.invalidEmail');
    if (!formData.phone) newErrors.phone = t('drive.errors.phone');
    if (!formData.areaOfInterest) newErrors.areaOfInterest = t('drive.errors.areaOfInterest');
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await addDoc(collection(db, 'drive_registrations'), {
        ...formData,
        driveId: 'upcoming_drive_placeholder', // Static currently, will be dynamic from CMS later
        createdAt: new Date()
      });
      console.log('Drive registration saved to Firestore!');
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          areaOfInterest: '',
          experience: '',
          availability: '',
        });
      }, 3000);
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Failed to register due to a database error. Please try again.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen pt-32 md:pt-24 bg-gray-50 dark:bg-dark-bg">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="font-heading font-bold text-h1 text-secondary-500 dark:text-dark-text mb-4">
            {t('drive.heading')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('drive.subheading')}
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium mt-4">
            <Tag size={16} className="mr-2" />
            {t('drive.cmsBadge')}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white dark:bg-dark-surface rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <img src={upcomingDrive.image} alt="Drive" className="w-full h-64 object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium animate-pulse">
                    {t('drive.urgent')}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-heading font-bold text-2xl text-secondary-500 dark:text-dark-text mb-4">
                  {upcomingDrive.title}
                </h2>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar size={20} className="mr-3 text-primary-500" />
                    <span className="font-medium">
                      {new Date(upcomingDrive.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock size={20} className="mr-3 text-primary-500" />
                    <span>{upcomingDrive.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin size={20} className="mr-3 text-primary-500" />
                    <span>{upcomingDrive.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Users size={20} className="mr-3 text-primary-500" />
                    <span>
                      {upcomingDrive.volunteersRegistered}/{upcomingDrive.volunteersNeeded} {t('drive.volunteersRegistered')}
                    </span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span>{t('drive.progress')}</span>
                    <span>{Math.round((upcomingDrive.volunteersRegistered / upcomingDrive.volunteersNeeded) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-primary-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${(upcomingDrive.volunteersRegistered / upcomingDrive.volunteersNeeded) * 100}%` }}
                    />
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{upcomingDrive.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-dark-surface rounded-xl p-6 shadow-lg">
                <h3 className="font-heading font-semibold text-lg text-secondary-500 dark:text-dark-text mb-4">
                  {t('drive.requirementsTitle')}
                </h3>
                <ul className="space-y-2">
                  {upcomingDrive.requirements.map((req: string, index: number) => (
                    <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle size={16} className="mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-dark-surface rounded-xl p-6 shadow-lg">
                <h3 className="font-heading font-semibold text-lg text-secondary-500 dark:text-dark-text mb-4">
                  {t('drive.benefitsTitle')}
                </h3>
                <ul className="space-y-2">
                  {upcomingDrive.benefits.map((b: string, index: number) => (
                    <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle size={16} className="mr-2 text-primary-500 mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-dark-surface rounded-2xl shadow-lg p-8">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <h2 className="font-heading font-bold text-2xl text-secondary-500 dark:text-dark-text mb-2">
                      {t('drive.formTitle')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">{t('drive.formDesc')}</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {['name', 'email', 'phone'].map((field) => (
                      <div key={field}>
                        <label htmlFor={field} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {t(`drive.form.${field}`)} *
                        </label>
                        <div className="relative">
                          {field === 'name' && <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
                          {field === 'email' && <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
                          {field === 'phone' && <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
                          <input
                            type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                            id={field}
                            name={field}
                            value={formData[field as keyof typeof formData]}
                            onChange={handleInputChange}
                            placeholder={t(`drive.placeholders.${field}`)}
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text transition-all duration-200 ${errors[field] ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                              }`}
                          />
                        </div>
                        {errors[field] && <p className="mt-1 text-sm text-red-500">{errors[field]}</p>}
                      </div>
                    ))}

                    <div>
                      <label htmlFor="areaOfInterest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('drive.form.areaOfInterest')} *
                      </label>
                      <select
                        id="areaOfInterest"
                        name="areaOfInterest"
                        value={formData.areaOfInterest}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text ${errors.areaOfInterest ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                          }`}
                      >
                        <option value="">{t('drive.placeholders.areaOfInterest')}</option>
                        {areasOfInterest.map((area: string) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                      {errors.areaOfInterest && <p className="mt-1 text-sm text-red-500">{errors.areaOfInterest}</p>}
                    </div>

                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('drive.form.experience')}
                      </label>
                      <textarea
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder={t('drive.placeholders.experience')}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text resize-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="availability" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('drive.form.availability')}
                      </label>
                      <textarea
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        rows={2}
                        placeholder={t('drive.placeholders.availability')}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text resize-none"
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      {t('drive.submit')}
                    </Button>
                  </form>
                </>
              ) : (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-secondary-500 dark:text-dark-text mb-2">
                    {t('drive.success.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{t('drive.success.message')}</p>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      <strong>{t('drive.success.nextStepsLabel')}:</strong> {t('drive.success.nextSteps')}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default DriveRegister;
