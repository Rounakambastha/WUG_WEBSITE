// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Mail, Lock, Eye, EyeOff, User, Chrome, Facebook, Phone } from 'lucide-react';
// import { useLanguage } from '../contexts/LanguageContext';
// import Button from '../components/UI/Button';

// const Register: React.FC = () => {
//   const { t } = useLanguage();
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     agreeToTerms: false,
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));

//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors: { [key: string]: string } = {};

//     if (!formData.firstName.trim()) {
//       newErrors.firstName = 'First name is required';
//     }

//     if (!formData.lastName.trim()) {
//       newErrors.lastName = 'Last name is required';
//     }

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters';
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = 'Please confirm your password';
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     if (!formData.agreeToTerms) {
//       newErrors.agreeToTerms = 'You must agree to the terms and conditions';
//     }

//     return newErrors;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newErrors = validateForm();

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       // Add shake animation for errors
//       const form = e.currentTarget as HTMLFormElement;
//       form.classList.add('animate-shake');
//       setTimeout(() => form.classList.remove('animate-shake'), 500);
//       return;
//     }

//     console.log('Registration attempt:', formData);
//     // Handle registration logic here
//   };

//   const handleSocialLogin = (provider: string) => {
//     console.log(`${provider} login here`);
//     // Handle social login logic here
//   };

//   const containerVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   };

//   return (
//     <div className="min-h-screen pt-16 bg-gray-50 dark:bg-dark-bg flex items-center justify-center py-12">
//       <motion.div
//         className="max-w-md w-full mx-auto px-4"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.div
//           className="bg-white dark:bg-dark-surface rounded-2xl shadow-xl p-8"
//           variants={itemVariants}
//         >
//           <div className="text-center mb-8">
//             <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
//               <span className="text-white font-bold text-2xl">W</span>
//             </div>
//             <h1 className="font-heading font-bold text-h2 text-secondary-500 dark:text-dark-text mb-2">
//               Join Our Mission
//             </h1>
//             <p className="text-gray-600 dark:text-gray-300">
//               Create your account and start making a difference today.
//             </p>
//           </div>

//           {/* Social Login Buttons */}
//           <motion.div variants={itemVariants} className="space-y-3 mb-6">
//             <button
//               onClick={() => handleSocialLogin('Google')}
//               className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 group"
//               aria-label="Sign up with Google"
//             >
//               <Chrome size={20} className="mr-3 text-red-500" />
//               <span className="font-medium">Continue with Google</span>
//             </button>

//             <button
//               onClick={() => handleSocialLogin('Facebook')}
//               className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 group"
//               aria-label="Sign up with Facebook"
//             >
//               <Facebook size={20} className="mr-3 text-blue-600" />
//               <span className="font-medium">Continue with Facebook</span>
//             </button>

//             <button
//               onClick={() => handleSocialLogin('Phone')}
//               className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 group"
//               aria-label="Sign up with Phone"
//             >
//               <Phone size={20} className="mr-3 text-green-600" />
//               <span className="font-medium">Continue with Phone</span>
//             </button>
//           </motion.div>

//           <motion.div variants={itemVariants} className="relative mb-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white dark:bg-dark-surface text-gray-500">Or register with email</span>
//             </div>
//           </motion.div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
//               <div>
//                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   First Name
//                 </label>
//                 <div className="relative">
//                   <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     placeholder="First name"
//                     className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text transition-all duration-200 ${
//                       errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
//                     }`}
//                     aria-label="First name"
//                   />
//                 </div>
//                 {errors.firstName && (
//                   <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   placeholder="Last name"
//                   className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text transition-all duration-200 ${
//                     errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
//                   }`}
//                   aria-label="Last name"
//                 />
//                 {errors.lastName && (
//                   <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
//                 )}
//               </div>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="Enter your email address"
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text transition-all duration-200 ${
//                     errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
//                   }`}
//                   aria-label="Email address"
//                 />
//               </div>
//               {errors.email && (
//                 <p className="mt-1 text-sm text-red-500">{errors.email}</p>
//               )}
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   placeholder="Create a strong password"
//                   className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text transition-all duration-200 ${
//                     errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
//                   }`}
//                   aria-label="Password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                   aria-label={showPassword ? 'Hide password' : 'Show password'}
//                 >
//                   {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </button>
//               </div>
//               {errors.password && (
//                 <p className="mt-1 text-sm text-red-500">{errors.password}</p>
//               )}
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Confirm Password
//               </label>
//               <div className="relative">
//                 <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   placeholder="Confirm your password"
//                   className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text transition-all duration-200 ${
//                     errors.confirmPassword ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
//                   }`}
//                   aria-label="Confirm password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                   aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
//                 >
//                   {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </button>
//               </div>
//               {errors.confirmPassword && (
//                 <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
//               )}
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <div className="flex items-start">
//                 <input
//                   type="checkbox"
//                   id="agreeToTerms"
//                   name="agreeToTerms"
//                   checked={formData.agreeToTerms}
//                   onChange={handleInputChange}
//                   className="w-4 h-4 text-primary-500 bg-white border-gray-300 rounded focus:ring-primary-500 mt-1"
//                 />
//                 <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-600 dark:text-gray-300">
//                   I agree to the{' '}
//                   <Link to="/terms" className="text-primary-500 hover:text-primary-600 font-medium">
//                     Terms of Service
//                   </Link>{' '}
//                   and{' '}
//                   <Link to="/privacy" className="text-primary-500 hover:text-primary-600 font-medium">
//                     Privacy Policy
//                   </Link>
//                 </label>
//               </div>
//               {errors.agreeToTerms && (
//                 <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms}</p>
//               )}
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <Button
//                 type="submit"
//                 variant="primary"
//                 size="lg"
//                 className="w-full"
//               >
//                 Create Account
//               </Button>
//             </motion.div>
//           </form>

//           <motion.div variants={itemVariants} className="mt-6 text-center">
//             <p className="text-sm text-gray-600 dark:text-gray-300">
//               Already have an account?{' '}
//               <Link
//                 to="/signin"
//                 className="text-primary-500 hover:text-primary-600 font-medium"
//               >
//                 Sign in here
//               </Link>
//             </p>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, Chrome, Facebook, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/UI/Button';

const Register: React.FC = () => {
  const { t } = useTranslation();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = t('register.errors.firstName');
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = t('register.errors.lastName');
    }

    if (!formData.email) {
      newErrors.email = t('register.errors.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('register.errors.emailInvalid');
    }

    if (!formData.password) {
      newErrors.password = t('register.errors.passwordRequired');
    } else if (formData.password.length < 8) {
      newErrors.password = t('register.errors.passwordShort');
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = t('register.errors.confirmPasswordRequired');
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t('register.errors.passwordMismatch');
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = t('register.errors.terms');
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const form = e.currentTarget as HTMLFormElement;
      form.classList.add('animate-shake');
      setTimeout(() => form.classList.remove('animate-shake'), 500);
      return;
    }

    try {
      await signup(formData.email, formData.password, formData.firstName, formData.lastName);
      navigate('/');
    } catch (error: any) {
      console.error('Registration error:', error);
      setErrors({ email: t('register.errors.failedSignup', 'Failed to create an account. Email might be in use or invalid.') });
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} login here`);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-dark-bg flex items-center justify-center py-12">
      <motion.div className="max-w-md w-full mx-auto px-4" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="bg-white dark:bg-dark-surface rounded-2xl shadow-xl p-8" variants={itemVariants}>
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">W</span>
            </div>
            <h1 className="font-heading font-bold text-h2 text-secondary-500 dark:text-dark-text mb-2">
              {t('register.heading')}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {t('register.subheading')}
            </p>
          </div>

          {/* Social Buttons */}
          <motion.div variants={itemVariants} className="space-y-3 mb-6">
            <button onClick={() => handleSocialLogin('Google')} className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 group" aria-label="Sign up with Google">
              <Chrome size={20} className="mr-3 text-red-500" />
              <span className="font-medium">{t('register.google')}</span>
            </button>
            <button onClick={() => handleSocialLogin('Facebook')} className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 group" aria-label="Sign up with Facebook">
              <Facebook size={20} className="mr-3 text-blue-600" />
              <span className="font-medium">{t('register.facebook')}</span>
            </button>
            <button onClick={() => handleSocialLogin('Phone')} className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 group" aria-label="Sign up with Phone">
              <Phone size={20} className="mr-3 text-green-600" />
              <span className="font-medium">{t('register.phone')}</span>
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-dark-surface text-gray-500">
                {t('register.orWithEmail')}
              </span>
            </div>
          </motion.div>

          {/* FORM BEGINS */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First & Last Name */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('register.firstName')}
                </label>
                <div className="relative">
                  <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder={t('register.firstNamePlaceholder')}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text transition-all duration-200 ${errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                    aria-label="First name"
                  />
                </div>
                {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('register.lastName')}
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder={t('register.lastNamePlaceholder')}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text transition-all duration-200 ${errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('register.email')}
              </label>
              <div className="relative">
                <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('register.emailPlaceholder')}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text transition-all duration-200 ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </motion.div>

            {/* Password */}
            <motion.div variants={itemVariants}>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('register.password')}
              </label>
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder={t('register.passwordPlaceholder')}
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text transition-all duration-200 ${errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            </motion.div>

            {/* Confirm Password */}
            <motion.div variants={itemVariants}>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('register.confirmPassword')}
              </label>
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder={t('register.confirmPasswordPlaceholder')}
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text transition-all duration-200 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
            </motion.div>

            {/* Terms */}
            <motion.div variants={itemVariants}>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary-500 bg-white border-gray-300 rounded focus:ring-primary-500 mt-1"
                />
                <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                  {t('register.termsPrefix')}{' '}
                  <Link to="/terms" className="text-primary-500 hover:text-primary-600 font-medium">
                    {t('register.terms')}
                  </Link>{' '}
                  {t('register.and')}{' '}
                  <Link to="/privacy" className="text-primary-500 hover:text-primary-600 font-medium">
                    {t('register.privacy')}
                  </Link>
                </label>
              </div>
              {errors.agreeToTerms && <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms}</p>}
            </motion.div>

            {/* Submit */}
            <motion.div variants={itemVariants}>
              <Button type="submit" variant="primary" size="lg" className="w-full">
                {t('register.createAccount')}
              </Button>
            </motion.div>
          </form>

          <motion.div variants={itemVariants} className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t('register.alreadyHaveAccount')}{' '}
              <Link to="/signin" className="text-primary-500 hover:text-primary-600 font-medium">
                {t('register.signInHere')}
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;
