// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Mail, Lock, Eye, EyeOff, Chrome, Facebook, Phone } from 'lucide-react';
// import { useLanguage } from '../contexts/LanguageContext';
// import Button from '../components/UI/Button';

// const SignIn: React.FC = () => {
//   const { t } = useLanguage();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     rememberMe: false,
//   });
//   const [showPassword, setShowPassword] = useState(false);
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
    
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }
    
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
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
    
//     console.log('Sign in attempt:', formData);
//     // Handle sign in logic here
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
//               Welcome Back
//             </h1>
//             <p className="text-gray-600 dark:text-gray-300">
//               Sign in to access your volunteer dashboard and track your impact.
//             </p>
//           </div>

//           {/* Social Login Buttons */}
//           <motion.div variants={itemVariants} className="space-y-3 mb-6">
//             <button
//               onClick={() => handleSocialLogin('Google')}
//               className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 group"
//               aria-label="Sign in with Google"
//             >
//               <Chrome size={20} className="mr-3 text-red-500" />
//               <span className="font-medium">Continue with Google</span>
//             </button>
            
//             <button
//               onClick={() => handleSocialLogin('Facebook')}
//               className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 group"
//               aria-label="Sign in with Facebook"
//             >
//               <Facebook size={20} className="mr-3 text-blue-600" />
//               <span className="font-medium">Continue with Facebook</span>
//             </button>
            
//             <button
//               onClick={() => handleSocialLogin('Phone')}
//               className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 group"
//               aria-label="Sign in with Phone"
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
//               <span className="px-2 bg-white dark:bg-dark-surface text-gray-500">Or continue with email</span>
//             </div>
//           </motion.div>

//           <form onSubmit={handleSubmit} className="space-y-6">
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
//                   placeholder="Enter your password"
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

//             <motion.div variants={itemVariants} className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="rememberMe"
//                   name="rememberMe"
//                   checked={formData.rememberMe}
//                   onChange={handleInputChange}
//                   className="w-4 h-4 text-primary-500 bg-white border-gray-300 rounded focus:ring-primary-500"
//                 />
//                 <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600 dark:text-gray-300">
//                   Remember me
//                 </label>
//               </div>
//               <Link
//                 to="/forgot-password"
//                 className="text-sm text-primary-500 hover:text-primary-600 font-medium"
//               >
//                 Forgot password?
//               </Link>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <Button
//                 type="submit"
//                 variant="primary"
//                 size="lg"
//                 className="w-full"
//               >
//                 Sign In
//               </Button>
//             </motion.div>
//           </form>

//           <motion.div variants={itemVariants} className="mt-6 text-center">
//             <p className="text-sm text-gray-600 dark:text-gray-300">
//               Don't have an account?{' '}
//               <Link
//                 to="/register"
//                 className="text-primary-500 hover:text-primary-600 font-medium"
//               >
//                 Create one here
//               </Link>
//             </p>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default SignIn;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Chrome, Facebook, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from '../components/UI/Button';

const SignIn: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
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

    if (!formData.email) {
      newErrors.email = t('signin.errors.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('signin.errors.emailInvalid');
    }

    if (!formData.password) {
      newErrors.password = t('signin.errors.passwordRequired');
    } else if (formData.password.length < 6) {
      newErrors.password = t('signin.errors.passwordShort');
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const form = e.currentTarget as HTMLFormElement;
      form.classList.add('animate-shake');
      setTimeout(() => form.classList.remove('animate-shake'), 500);
      return;
    }

    console.log('Sign in attempt:', formData);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} login here`);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
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
              {t('signin.heading')}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {t('signin.subheading')}
            </p>
          </div>

          {/* Social Login Buttons */}
          <motion.div variants={itemVariants} className="space-y-3 mb-6">
            <button onClick={() => handleSocialLogin('Google')} className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 group" aria-label="Sign in with Google">
              <Chrome size={20} className="mr-3 text-red-500" />
              <span className="font-medium">{t('signin.google')}</span>
            </button>
            <button onClick={() => handleSocialLogin('Facebook')} className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 group" aria-label="Sign in with Facebook">
              <Facebook size={20} className="mr-3 text-blue-600" />
              <span className="font-medium">{t('signin.facebook')}</span>
            </button>
            <button onClick={() => handleSocialLogin('Phone')} className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 group" aria-label="Sign in with Phone">
              <Phone size={20} className="mr-3 text-green-600" />
              <span className="font-medium">{t('signin.phone')}</span>
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-dark-surface text-gray-500">{t('signin.orWithEmail')}</span>
            </div>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('signin.email')}
              </label>
              <div className="relative">
                <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('signin.emailPlaceholder')}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text transition-all duration-200 ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('signin.password')}
              </label>
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder={t('signin.passwordPlaceholder')}
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-secondary-500 dark:text-dark-text transition-all duration-200 ${errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="rememberMe" name="rememberMe" checked={formData.rememberMe} onChange={handleInputChange} className="w-4 h-4 text-primary-500 bg-white border-gray-300 rounded focus:ring-primary-500" />
                <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                  {t('signin.rememberMe')}
                </label>
              </div>
              <Link to="/forgot-password" className="text-sm text-primary-500 hover:text-primary-600 font-medium">
                {t('signin.forgot')}
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button type="submit" variant="primary" size="lg" className="w-full">
                {t('signin.signin')}
              </Button>
            </motion.div>
          </form>

          <motion.div variants={itemVariants} className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t('signin.noAccount')}{' '}
              <Link to="/register" className="text-primary-500 hover:text-primary-600 font-medium">
                {t('signin.create')}
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignIn;

