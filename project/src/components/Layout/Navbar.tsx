// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Sun, Moon, Globe, AlertCircle, Menu, X } from 'lucide-react';
// import { useTheme } from '../../contexts/ThemeContext';
// import { useLanguage } from '../../contexts/LanguageContext';
// import CountdownTimer from '../UI/CountdownTimer';

// const Navbar: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();
//   const { theme, toggleTheme } = useTheme();
//   const { language, setLanguage, t } = useLanguage();

//   // Next event date (placeholder - would come from CMS)
//   const nextEventDate = '2024-02-15T09:00:00';

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//   }, [location.pathname]);

//   // Close mobile menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = () => {
//       setIsMobileMenuOpen(false);
//     };

//     if (isMobileMenuOpen) {
//       document.addEventListener('click', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [isMobileMenuOpen]);

//   const navItems = [
//     { path: '/', label: t('nav.home') },
//     { path: '/about', label: t('nav.about') },
//     { path: '/gallery', label: t('nav.gallery') },
//     { path: '/blog', label: t('nav.blog') },
//     { path: '/volunteer', label: t('nav.volunteer') },
//     { path: '/donate', label: t('nav.donate') },
//     { path: '/contact', label: t('nav.contact') },
//   ];

//   const authItems = [
//     { path: '/signin', label: t('nav.signin') },
//     { path: '/register', label: t('nav.register') },
//   ];

//   const handleUpcomingDriveClick = () => {
//     // Check if user is logged in (placeholder logic)
//     const isLoggedIn = false; // This would come from your auth context

//     if (!isLoggedIn) {
//       // Store intended destination and redirect to login
//       localStorage.setItem('redirectAfterLogin', '/drive-register');
//       window.location.href = '/signin';
//     } else {
//       window.location.href = '/drive-register';
//     }
//   };

//   const toggleMobileMenu = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <motion.nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-white/95 dark:bg-dark-bg/95 backdrop-blur-sm shadow-lg'
//           : 'bg-transparent'
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Desktop & Tablet Navbar */}
//         <div className="hidden md:flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
//               <span className="text-white font-bold text-lg">W</span>
//             </div>
//             <span className="font-heading font-bold text-lg text-secondary-500 dark:text-dark-text">
//               Wake Up Guys®
//             </span>
//           </Link>

//           {/* Navigation Links */}
//           <div className="flex items-center space-x-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`relative font-medium transition-colors duration-200 ${
//                   location.pathname === item.path
//                     ? 'text-primary-500'
//                     : 'text-secondary-500 hover:text-primary-500 dark:text-dark-text dark:hover:text-primary-500'
//                 }`}
//               >
//                 {item.label}
//                 {location.pathname === item.path && (
//                   <motion.div
//                     className="absolute bottom-[-2px] left-0 right-0 h-0.5 bg-primary-500"
//                     layoutId="activeNavItem"
//                   />
//                 )}
//               </Link>
//             ))}

//             {/* Upcoming Drive with Enhanced Badge */}
//             <button
//               onClick={handleUpcomingDriveClick}
//               className="relative group"
//             >
//               <motion.div
//                 className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-medium shadow-lg"
//                 animate={{ 
//                   boxShadow: [
//                     '0 0 0 0 rgba(239, 68, 68, 0.7)',
//                     '0 0 0 10px rgba(239, 68, 68, 0)',
//                     '0 0 0 0 rgba(239, 68, 68, 0)'
//                   ]
//                 }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <AlertCircle size={16} className="animate-pulse" />
//                 <span>Upcoming Drive 🚨</span>
//                 <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
//                   <CountdownTimer targetDate={nextEventDate} />
//                 </span>
//               </motion.div>
//             </button>
//           </div>

//           {/* Right Side Controls */}
//           <div className="flex items-center space-x-3">
//             {/* Language Toggle */}
//             <button
//               onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
//               className="flex items-center space-x-1 px-2 py-1 rounded-md text-secondary-500 hover:text-primary-500 dark:text-dark-text dark:hover:text-primary-500 transition-colors"
//             >
//               <Globe size={16} />
//               <span className="uppercase font-medium text-sm">{language}</span>
//             </button>

//             {/* Theme Toggle */}
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-md text-secondary-500 hover:text-primary-500 dark:text-dark-text dark:hover:text-primary-500 transition-colors"
//             >
//               {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
//             </button>

//             {/* Auth Links */}
//             <div className="flex items-center space-x-2">
//               {authItems.map((item) => (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
//                     item.path === '/register'
//                       ? 'bg-primary-500 text-white hover:bg-primary-600 hover:scale-105'
//                       : 'text-secondary-500 hover:text-primary-500 dark:text-dark-text dark:hover:text-primary-500'
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navbar with Hamburger Menu */}
//         <div className="md:hidden">
//           <div className="flex justify-between items-center h-14 py-3">
//             {/* Logo */}
//             <Link to="/" className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
//                 <span className="text-white font-bold text-sm">W</span>
//               </div>
//               <span className="font-heading font-bold text-sm text-secondary-500 dark:text-dark-text">
//                 Wake Up Guys®
//               </span>
//             </Link>

//             {/* Mobile Controls */}
//             <div className="flex items-center space-x-2">
//               {/* Language Toggle */}
//               <button
//                 onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
//                 className="flex items-center space-x-1 px-2 py-1 rounded-md text-sm text-secondary-500 hover:text-primary-500 dark:text-dark-text dark:hover:text-primary-500 transition-colors"
//               >
//                 <Globe size={14} />
//                 <span className="uppercase font-medium text-xs">{language}</span>
//               </button>

//               {/* Theme Toggle */}
//               <button
//                 onClick={toggleTheme}
//                 className="p-1 rounded-md text-secondary-500 hover:text-primary-500 dark:text-dark-text dark:hover:text-primary-500 transition-colors"
//               >
//                 {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
//               </button>

//               {/* Hamburger Menu Button */}
//               <button
//                 onClick={toggleMobileMenu}
//                 className="p-2 rounded-md text-secondary-500 hover:text-primary-500 dark:text-dark-text dark:hover:text-primary-500 transition-colors"
//                 aria-label="Toggle mobile menu"
//               >
//                 {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu Overlay */}
//           <AnimatePresence>
//             {isMobileMenuOpen && (
//               <motion.div
//                 className="absolute top-full left-0 right-0 bg-white dark:bg-dark-bg shadow-lg border-t border-gray-200 dark:border-gray-700"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.2 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="px-4 py-6 space-y-4">
//                   {/* Navigation Links */}
//                   <div className="space-y-3">
//                     {navItems.map((item) => (
//                       <Link
//                         key={item.path}
//                         to={item.path}
//                         className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
//                           location.pathname === item.path
//                             ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20'
//                             : 'text-secondary-500 hover:text-primary-500 hover:bg-gray-50 dark:text-dark-text dark:hover:text-primary-500 dark:hover:bg-gray-800'
//                         }`}
//                       >
//                         {item.label}
//                       </Link>
//                     ))}
//                   </div>

//                   {/* Upcoming Drive - Mobile */}
//                   <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
//                     <button
//                       onClick={handleUpcomingDriveClick}
//                       className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg text-sm font-medium shadow-lg"
//                     >
//                       <AlertCircle size={16} className="animate-pulse" />
//                       <span>Upcoming Drive 🚨</span>
//                       <CountdownTimer targetDate={nextEventDate} className="text-xs" />
//                     </button>
//                   </div>

//                   {/* Auth Links - Mobile */}
//                   <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
//                     <div className="grid grid-cols-2 gap-3">
//                       {authItems.map((item) => (
//                         <Link
//                           key={item.path}
//                           to={item.path}
//                           className={`px-4 py-3 rounded-md text-sm font-medium text-center transition-all ${
//                             item.path === '/register'
//                               ? 'bg-primary-500 text-white hover:bg-primary-600'
//                               : 'border border-gray-300 dark:border-gray-600 text-secondary-500 hover:text-primary-500 hover:border-primary-500 dark:text-dark-text dark:hover:text-primary-500'
//                           }`}
//                         >
//                           {item.label}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Globe, AlertCircle, Menu, X, Settings, ChevronDown, User, LogOut } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import CountdownTimer from '../UI/CountdownTimer';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { isLoggedIn, userRole, userName, userEmail, logout } = useAuth();
  const { t, i18n } = useTranslation();

  const nextEventDate = '2024-02-15T09:00:00';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutsideDropdown = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };
    if (isProfileDropdownOpen) document.addEventListener('mousedown', handleClickOutsideDropdown);
    return () => document.removeEventListener('mousedown', handleClickOutsideDropdown);
  }, [isProfileDropdownOpen]);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/volunteer', label: t('nav.volunteer') },
    { path: '/donate', label: t('nav.donate') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const authItems = [
    { path: '/signin', label: t('nav.signin') },
    { path: '/register', label: t('nav.register') },
  ];

  const handleUpcomingDriveClick = () => {
    if (!isLoggedIn) {
      localStorage.setItem('redirectAfterLogin', '/drive-register');
      window.location.href = '/signin';
    } else {
      window.location.href = '/drive-register';
    }
  };

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 dark:bg-dark-bg/95 backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="font-heading font-bold text-lg text-secondary-500 dark:text-dark-text">
              Wake Up Guys®
            </span>
          </Link>

          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-colors duration-200 ${location.pathname === item.path
                  ? 'text-primary-500'
                  : 'text-secondary-500 hover:text-primary-500 dark:text-dark-text dark:hover:text-primary-500'
                  }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute bottom-[-2px] left-0 right-0 h-0.5 bg-primary-500"
                    layoutId="activeNavItem"
                  />
                )}
              </Link>
            ))}
            <button onClick={handleUpcomingDriveClick} className="relative group">
              <motion.div
                className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-medium shadow-lg"
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(239, 68, 68, 0.7)',
                    '0 0 0 10px rgba(239, 68, 68, 0)',
                    '0 0 0 0 rgba(239, 68, 68, 0)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                whileHover={{ scale: 1.05 }}
              >
                <AlertCircle size={16} className="animate-pulse" />
                <span>Upcoming Drive 🚨</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  <CountdownTimer targetDate={nextEventDate} />
                </span>
              </motion.div>
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en')}
              className="flex items-center space-x-1 px-2 py-1 rounded-md text-secondary-500 hover:text-primary-500 dark:text-dark-text dark:hover:text-primary-500 transition-colors"
            >
              <Globe size={16} />
              <span className="uppercase font-medium text-sm">{i18n.language}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-secondary-500 hover:text-primary-500 dark:text-dark-text dark:hover:text-primary-500 transition-colors"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <div className="flex items-center space-x-2">
              {isLoggedIn ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="flex items-center space-x-2 px-3 py-2 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold uppercase shadow-sm">
                      {userName?.charAt(0) || userEmail?.charAt(0) || 'U'}
                    </div>
                    <span className="text-sm font-medium text-secondary-500 dark:text-dark-text max-w-[120px] truncate">
                      Welcome{userName ? `, ${userName}` : ''}
                    </span>
                    <ChevronDown size={16} className={`text-gray-500 transition-transform duration-200 ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isProfileDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute right-0 mt-2 w-56 bg-white dark:bg-dark-surface rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden py-1 z-50 origin-top-right"
                      >
                        <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                          <p className="text-sm text-gray-900 dark:text-white font-medium truncate">{userName}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{userEmail}</p>
                        </div>

                        <div className="py-1">
                          <Link to="/profile" onClick={() => setIsProfileDropdownOpen(false)} className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <User size={16} />
                            <span>My Profile</span>
                          </Link>

                          {userRole === 'admin' && (
                            <a href="http://localhost:3333" target="_blank" rel="noreferrer" onClick={() => setIsProfileDropdownOpen(false)} className="flex items-center space-x-3 px-4 py-2 text-sm text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                              <Settings size={16} />
                              <span className="font-medium">Manage Content</span>
                            </a>
                          )}
                        </div>

                        <div className="border-t border-gray-100 dark:border-gray-700 py-1">
                          <button onClick={() => { logout(); setIsProfileDropdownOpen(false); }} className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                            <LogOut size={16} />
                            <span>Logout</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                authItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${item.path === '/register'
                      ? 'bg-primary-500 text-white hover:bg-primary-600 hover:scale-105'
                      : 'text-secondary-500 hover:text-primary-500 dark:text-dark-text dark:hover:text-primary-500'
                      }`}
                  >
                    {item.label}
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden">
          <div className="flex justify-between items-center h-14 py-3">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-heading font-bold text-sm text-secondary-500 dark:text-dark-text">
                Wake Up Guys®
              </span>
            </Link>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en')}
                className="flex items-center space-x-1 px-2 py-1 rounded-md text-sm text-secondary-500 hover:text-primary-500 dark:text-dark-text dark:hover:text-primary-500 transition-colors"
              >
                <Globe size={14} />
                <span className="uppercase font-medium text-xs">{i18n.language}</span>
              </button>

              <button
                onClick={toggleTheme}
                className="p-1 rounded-md text-secondary-500 hover:text-primary-500 dark:text-dark-text dark:hover:text-primary-500 transition-colors"
              >
                {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
              </button>

              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-secondary-500 hover:text-primary-500 dark:text-dark-text dark:hover:text-primary-500 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="absolute top-full left-0 right-0 bg-white dark:bg-dark-bg shadow-lg border-t border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="px-4 py-6 space-y-4">
                  {/* Navigation Links */}
                  <div className="space-y-3">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${location.pathname === item.path
                          ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : 'text-secondary-500 hover:text-primary-500 hover:bg-gray-50 dark:text-dark-text dark:hover:text-primary-500 dark:hover:bg-gray-800'
                          }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  {/* Upcoming Drive */}
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={handleUpcomingDriveClick}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg text-sm font-medium shadow-lg"
                    >
                      <AlertCircle size={16} className="animate-pulse" />
                      <span>{t('nav.upcomingDrive')}</span>
                      <CountdownTimer targetDate={nextEventDate} className="text-xs" />
                    </button>
                  </div>

                  {/* Auth / Profile Links */}
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                    {isLoggedIn ? (
                      <div className="space-y-3 pt-2">
                        <div className="flex items-center space-x-3 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold uppercase shadow-sm">
                            {userName?.charAt(0) || userEmail?.charAt(0) || 'U'}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{userName}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{userEmail}</p>
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                            <User size={16} />
                            <span>My Profile</span>
                          </Link>
                          {userRole === 'admin' && (
                            <a href="http://localhost:3333" target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-4 py-2 text-sm text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-sm">
                              <Settings size={16} />
                              <span>Manage Content</span>
                            </a>
                          )}
                          <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="flex items-center justify-center space-x-2 px-4 py-2 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 rounded-lg">
                            <LogOut size={16} />
                            <span>Logout</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        {authItems.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`px-4 py-3 rounded-md text-sm font-medium text-center transition-all ${item.path === '/register'
                              ? 'bg-primary-500 text-white hover:bg-primary-600'
                              : 'border border-gray-300 dark:border-gray-600 text-secondary-500 hover:text-primary-500 hover:border-primary-500 dark:text-dark-text dark:hover:text-primary-500'
                              }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;
