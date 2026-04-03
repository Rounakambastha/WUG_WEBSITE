// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// i18n
//   .use(initReactI18next) // Initializes react-i18next with the necessary React bindings
//   .init({
//     fallbackLng: 'en', // Default language if the user's language is not available
//     debug: true, // Optional, enables logging for debugging (remove in production)
//     interpolation: {
//       escapeValue: false, // React already escapes HTML values
//     },
//     resources: {
//       en: {
//         translation: {
//           // Footer
//           'footer.address': '123 Humanity Street, Service City, SC 12345',
//           'footer.rights': '© 2024 Wake Up Guys®. All rights reserved.',
          
//           // Navbar
//           'nav.home': 'Home',
//           'nav.about': 'About Us',
//           'nav.gallery': 'Gallery',
//           'nav.blog': 'Blog',
//           'nav.volunteer': 'Volunteer',
//           'nav.donate': 'Donate',
//           'nav.contact': 'Contact',
//           'nav.signin': 'Sign In',
//           'nav.register': 'Register',
          
//           // Sign In
//           'signin.title': 'Welcome Back',
//           'signin.email': 'Email Address',
//           'signin.password': 'Password',
//           'signin.rememberMe': 'Remember me',
//           'signin.forgotPassword': 'Forgot password?',
//           'signin.createAccount': 'Create Account',

//           // Register
//           'register.title': 'Join Our Mission',
//           'register.firstName': 'First Name',
//           'register.lastName': 'Last Name',
//           'register.email': 'Email Address',
//           'register.password': 'Password',
//           'register.confirmPassword': 'Confirm Password',
//           'register.agreeToTerms': 'I agree to the Terms of Service',

//           // Drive Register
//           'driveRegister.title': 'Register for Our Upcoming Drive',
//           'driveRegister.fullName': 'Full Name',
//           'driveRegister.email': 'Email Address',
//           'driveRegister.phone': 'Phone Number',
//           'driveRegister.areaOfInterest': 'Area of Interest',
//           'driveRegister.experience': 'Previous Volunteer Experience (Optional)',
//           'driveRegister.availability': 'Availability Notes (Optional)',
//           'driveRegister.registrationProgress': 'Registration Progress',

//           // Gallery
//           'gallery.title': 'Our Work in Action',
//           'gallery.caption': 'Caption for gallery images',

//           // Donate
//           'donate.title': 'Make a Donation',
//           'donate.description': 'Support our mission to serve humanity with your generous contribution.',

//           // Volunteer
//           'volunteer.title': 'Volunteer With Us',
//           'volunteer.description': 'Join our mission to serve humanity and make a lasting impact in communities worldwide.',

//           // About
//           'about.title': 'About Wake Up Guys®',
//           'about.description': 'Learn more about our journey, mission, and the incredible team behind our initiatives.',

//           // Blog
//           'blog.title': 'Blog & News',
//           'blog.description': 'Stay updated with our latest campaigns, stories, and community impact news.',

//           // Campaigns
//           'campaigns.title': 'Campaigns',
//           'campaigns.excerpt': 'Campaign summary or excerpt',

//           // Newsletter
//           'newsletter.title': 'Stay Connected to Our Mission',
//           'newsletter.description': 'Get the latest updates about our initiatives and how you can get involved.',
//         },
//       },
//       hi: {
//         translation: {
//           // Footer
//           'footer.address': '123 मानवता स्ट्रीट, सेवा सिटी, SC 12345',
//           'footer.rights': '© 2024 Wake Up Guys®. सर्वाधिकार सुरक्षित।',

//           // Navbar
//           'nav.home': 'होम',
//           'nav.about': 'हमारे बारे में',
//           'nav.gallery': 'गैलरी',
//           'nav.blog': 'ब्लॉग',
//           'nav.volunteer': 'स्वयंसेवक',
//           'nav.donate': 'दान करें',
//           'nav.contact': 'संपर्क करें',
//           'nav.signin': 'साइन इन',
//           'nav.register': 'रजिस्टर',

//           // Sign In
//           'signin.title': 'स्वागत है',
//           'signin.email': 'ईमेल पता',
//           'signin.password': 'पासवर्ड',
//           'signin.rememberMe': 'मुझे याद रखें',
//           'signin.forgotPassword': 'पासवर्ड भूल गए?',
//           'signin.createAccount': 'खाता बनाएं',

//           // Register
//           'register.title': 'हमारे मिशन में शामिल हों',
//           'register.firstName': 'पहला नाम',
//           'register.lastName': 'अंतिम नाम',
//           'register.email': 'ईमेल पता',
//           'register.password': 'पासवर्ड',
//           'register.confirmPassword': 'पासवर्ड की पुष्टि करें',
//           'register.agreeToTerms': 'मैं सेवा की शर्तों से सहमत हूं',

//           // Drive Register
//           'driveRegister.title': 'हमारे आगामी ड्राइव के लिए पंजीकरण करें',
//           'driveRegister.fullName': 'पूरा नाम',
//           'driveRegister.email': 'ईमेल पता',
//           'driveRegister.phone': 'फोन नंबर',
//           'driveRegister.areaOfInterest': 'रुचि का क्षेत्र',
//           'driveRegister.experience': 'पिछला स्वयंसेवी अनुभव (वैकल्पिक)',
//           'driveRegister.availability': 'उपलब्धता नोट (वैकल्पिक)',
//           'driveRegister.registrationProgress': 'पंजीकरण प्रगति',

//           // Gallery
//           'gallery.title': 'हमारा काम क्रियाशीलता में',
//           'gallery.caption': 'गैलरी छवियों के लिए कैप्शन',

//           // Donate
//           'donate.title': 'दान करें',
//           'donate.description': 'हमारे मिशन में मदद करने के लिए अपनी उदार योगदान से हमें समर्थन दें।',

//           // Volunteer
//           'volunteer.title': 'हमारे साथ स्वयंसेवा करें',
//           'volunteer.description': 'हमारे मिशन में शामिल होकर मानवता की सेवा करें और समुदायों में स्थायी प्रभाव डालें।',

//           // About
//           'about.title': 'Wake Up Guys® के बारे में',
//           'about.description': 'हमारी यात्रा, मिशन, और हमारे पहलों के पीछे की अद्भुत टीम के बारे में जानें।',

//           // Blog
//           'blog.title': 'ब्लॉग और समाचार',
//           'blog.description': 'हमारी नवीनतम अभियान, कहानियां और सामुदायिक प्रभाव समाचार के बारे में अपडेट रहें।',

//           // Campaigns
//           'campaigns.title': 'अभियान',
//           'campaigns.excerpt': 'अभियान का सारांश या परिचय',

//           // Newsletter
//           'newsletter.title': 'हमारे मिशन से जुड़े रहें',
//           'newsletter.description': 'हमारी पहलों और इसमें कैसे शामिल हो सकते हैं, इसके बारे में नवीनतम अपडेट प्राप्त करें।',
//         },
//       },
//     },
//   });

// export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          // Footer
          'footer.address': '123 Humanity Street, Service City, SC 12345',
          'footer.rights': '© 2024 Wake Up Guys®. All rights reserved.',

          // Navbar
          'nav.home': 'Home',
          'nav.about': 'About Us',
          'nav.gallery': 'Gallery',
          'nav.blog': 'Blog',
          'nav.volunteer': 'Volunteer',
          'nav.donate': 'Donate',
          'nav.contact': 'Contact',
          'nav.signin': 'Sign In',
          'nav.register': 'Register',

          "hero.tagline": "Serving Humanity",
          "hero.subtitle": "Join us in creating real change through service and compassion.",
          "hero.joinUs": "Join Us",
          "hero.donateNow": "Donate Now",


          // Sign In
          'signin.title': 'Welcome Back',
          'signin.email': 'Email Address',
          'signin.password': 'Password',
          'signin.rememberMe': 'Remember me',
          'signin.forgotPassword': 'Forgot password?',
          'signin.createAccount': 'Create Account',

          // Register
          'register.title': 'Join Our Mission',
          'register.firstName': 'First Name',
          'register.lastName': 'Last Name',
          'register.email': 'Email Address',
          'register.password': 'Password',
          'register.confirmPassword': 'Confirm Password',
          'register.agreeToTerms': 'I agree to the Terms of Service',

          // Drive Register
          'driveRegister.title': 'Register for Our Upcoming Drive',
          'driveRegister.fullName': 'Full Name',
          'driveRegister.email': 'Email Address',
          'driveRegister.phone': 'Phone Number',
          'driveRegister.areaOfInterest': 'Area of Interest',
          'driveRegister.experience': 'Previous Volunteer Experience (Optional)',
          'driveRegister.availability': 'Availability Notes (Optional)',
          'driveRegister.registrationProgress': 'Registration Progress',

          // Gallery
          'gallery.title': 'Our Work in Action',
          'gallery.caption': 'Caption for gallery images',

          // Donate
          'donate.title': 'Make a Donation',
          'donate.description': 'Support our mission to serve humanity with your generous contribution.',

          // Volunteer
          'volunteer.title': 'Volunteer With Us',
          'volunteer.description': 'Join our mission to serve humanity and make a lasting impact in communities worldwide.',
          'volunteer.joinNow': 'Become a Volunteer',
          'volunteer.communityFocus': 'Community Focus',
          'volunteer.communityDevelopment': 'Community Development',

          // About
          'about.title': 'About Wake Up Guys®',
          'about.description': 'Learn more about our journey, mission, and the incredible team behind our initiatives.',

          // Blog
          'blog.title': 'Blog & News',
          'blog.description': 'Stay updated with our latest campaigns, stories, and community impact news.',
          'blog.benefits': 'Benefits',
          'blog.news': 'Blog & News',
          'blog.certificate': 'Certificate of participation',

          // Campaigns
          'campaigns.title': 'Campaigns',
          'campaigns.excerpt': 'Campaign summary or excerpt',
          'campaign.beachCleanup': 'Beach Cleanup Initiative',
          'campaign.description': 'Beach cleanup and environmental conservation',
          'campaign.cleanWater': 'Clean Water Initiative',
          'campaign.cleanWaterDesc': 'Clean water initiative in rural areas',

          // Events
          'event.communityFoodDrive': 'Community Food Distribution Drive',
          'event.leadershipGrowth': 'Building leadership skills and creating opportunities for young changemakers.',

          // Newsletter
          'newsletter.title': 'Stay Connected to Our Mission',
          'newsletter.description': 'Get the latest updates about our initiatives and how you can get involved.',

          // Mission
          'mission.statement1': 'Addressing hunger and malnutrition through community kitchens and nutrition education.',
          'mission.statement2': 'Addressing specific challenges with innovative approaches.',
          'mission.compService': 'Compassionate Service',

          // Form Utilities
          'form.areaOfInterestLabel': 'Area of Interest',
          'form.areaOfInterestPlaceholder': 'Area of Interest *',
          'form.availabilityNotes': 'Any specific time constraints or availability notes...',
          'form.confirmPassword': 'Confirm Password',

          // Generic
          'phone.default': '+91 12345 67890',
          'address.main': '123 Humanity Street, Service City, SC 12345',
          'minutes.3': '3 min read',
          'minutes.4': '4 min read',
          'minutes.5': '5 min read',
          'minutes.6': '6 min read',

          //MissionSection
          'mission.title': "Our Mission",
          'mission.description': "We are a youth-led NGO committed to creating positive change in communities through innovative social initiatives, sustainable development programs, and humanitarian aid.",
          'mission.features.service': "Compassionate Service",
          'mission.features.serviceDesc': "Driven by empathy and dedication to help those in need.",
          'mission.features.community': "Community Focus",
          'mission.features.communityDesc': "Building stronger communities through collective action.",
          'mission.features.global': "Global Impact",
          'mission.features.globalDesc': "Creating positive change that transcends boundaries.",
          'mission.features.target': "Targeted Solutions",
          'mission.features.targetDesc': "Addressing specific challenges with innovative approaches.",
          'mission.card.title': "Youth-Led Initiative",
          'mission.card.subtitle': "Empowering the next generation",

          //statsSection
          'stats.heading': 'Our Impact So Far',
          'stats.description': "Together, we're making a measurable difference in communities around the world.",
          'stats.meals': 'Meals Served',
          'stats.drives': 'Drives Completed',
          'stats.volunteers': 'Active Volunteers',
          'stats.mealsDesc': 'Nutritious meals provided to communities in need',
          'stats.drivesDesc': 'Successful community service drives completed',
          'stats.volunteersDesc': 'Dedicated volunteers making a difference',
          'stats.callToAction': 'Want to be part of these growing numbers?',
          'stats.joinVolunteer': 'Join as Volunteer',
          'stats.makeDonation': 'Make a Donation',

          'campaigns.sectionTitle': 'Stories of Change',
          'campaigns.sectionDescription': 'Discover the inspiring stories behind our community initiatives and the positive impact we\'re creating together.',
          'campaigns.dynamicBadge': 'Dynamic Content Powered by Sanity CMS (Blog Placeholder)',
          'campaigns.status.active': 'Active',
          'campaigns.status.upcoming': 'Upcoming',
          'campaigns.viewAll': 'View All Stories',
          'campaigns.learnMore': 'Learn More',

          // Dummy campaign titles and excerpts
          'campaigns.cleanWater.title': 'Clean Water Initiative',
          'campaigns.cleanWater.excerpt': 'Providing clean water access to underserved communities through sustainable infrastructure projects.',
          'campaigns.education.title': 'Education for All',
          'campaigns.education.excerpt': 'Supporting quality education initiatives and providing learning resources to children in need.',
          'campaigns.foodSecurity.title': 'Food Security Program',
          'campaigns.foodSecurity.excerpt': 'Addressing hunger and malnutrition through community kitchens and nutrition education.',
          'campaigns.environment.title': 'Environmental Conservation',
          'campaigns.environment.excerpt': 'Protecting our environment through tree plantation drives and awareness campaigns.',
          'campaigns.youth.title': 'Youth Empowerment',
          'campaigns.youth.excerpt': 'Building leadership skills and creating opportunities for young changemakers.',
          'blog.sectionTitle': 'Stories of Change',
          'blog.sectionDescription': 'Discover the inspiring stories behind our community initiatives and the positive impact we\'re creating together.',
          'blog.dynamicContentNote': 'Dynamic Content Powered by Sanity CMS',
          'blog.readMore': 'Read More',
          'blog.viewAll': 'View All Stories',

          'blog.title1': 'Transforming Lives Through Education',
          'blog.excerpt1': 'How our literacy programs are empowering children in rural communities to build brighter futures.',
          'blog.title2': 'Clean Water Initiative Success Story',
          'blog.excerpt2': 'Celebrating the completion of our water purification project that now serves 500+ families daily.',
          'blog.title3': 'Youth Leadership in Action',
          'blog.excerpt3': 'Meet the young changemakers leading our community development initiatives across three states.',
          'blog.title4': 'Environmental Conservation Impact',
          'blog.excerpt4': 'Our tree plantation drive reaches milestone of 10,000 trees planted across urban and rural areas.',
          'blog.title5': 'Nutrition Program Expansion',
          'blog.excerpt5': 'Scaling our meal distribution program to reach 1000+ children daily with nutritious food.',

          'blog.category.education': 'Education',
          'blog.category.water': 'Water',
          'blog.category.leadership': 'Leadership',
          'blog.category.environment': 'Environment',
          'blog.category.nutrition': 'Nutrition',

          'blog.tag.education': 'Education',
          'blog.tag.health': 'Health',
          'blog.tag.community': 'Community',
          'blog.tag.environment': 'Environment',
          // Gallery
          'gallery.title': 'Gallery Highlights',
          'gallery.description': 'Witness the positive change we\'re creating together in communities across the globe.',
          'gallery.viewFull': 'View Full Gallery',
          'gallery.caption1': 'Food distribution drive in local communities',
          'gallery.caption2': 'Teaching children in underserved areas',
          'gallery.caption3': 'Beach cleanup and environmental conservation',
          'gallery.caption4': 'Tree plantation drive for greener future',
          'gallery.caption5': 'Clean water initiative in rural areas',
          'gallery.caption6': 'Medical camps and health awareness programs',

          // Contact Section
          'contact.title': 'Contact Us',
          'contact.description': 'Have questions about our initiatives or want to get involved? We\'d love to hear from you.',
          'contact.phone': 'Phone',
          'contact.email': 'Email',
          'contact.address': 'Address',
          'contact.map.title': 'Interactive Map Placeholder',
          'contact.map.description': 'Embed Google Maps or similar service here',
          'contact.form.name': 'Full Name *',
          'contact.form.email': 'Email Address *',
          'contact.form.message': 'Message *',
          'contact.form.placeholder.name': 'Enter your name',
          'contact.form.placeholder.email': 'Enter your email',
          'contact.form.placeholder.message': 'Tell us about your inquiry...',
          'contact.form.submit': 'Send Message',
          'contact.success.title': 'Message Sent!',
          'contact.success.message': 'Thank you for reaching out. We\'ll get back to you within 24 hours.',
          'contact.whatsapp': 'Chat on WhatsApp',

          // Newsletter Section
          'newsletter.title': 'Stay Connected to Our Mission',
          'newsletter.description': 'Get the latest updates about our initiatives, success stories, and ways you can make a difference in your community.',
          'newsletter.placeholder': 'Enter your email address',
          'newsletter.subscribe': 'Subscribe',
          'newsletter.note': 'Join 5,000+ subscribers. No spam, unsubscribe anytime.',
          'newsletter.success.title': 'Successfully Subscribed!',
          'newsletter.success.message': 'Thank you for joining our newsletter. Check your inbox for confirmation.',
          'newsletter.stats.subscribers': 'Subscribers',
          'newsletter.stats.frequency': 'Updates',
          'newsletter.stats.spam': 'Spam',

          'testimonials.title': 'Testimonials',
          'testimonials.description': 'Hear from the people whose lives have been touched by our initiatives and community work.',

          'testimonials.1.name': 'Sarah Johnson',
          'testimonials.1.role': 'Community Volunteer',
          'testimonials.1.quote': 'Working with Wake Up Guys® has been an incredible journey. Their dedication to serving humanity is truly inspiring and has motivated me to become a better person.',

          'testimonials.2.name': 'Michael Chen',
          'testimonials.2.role': 'Beneficiary Parent',
          'testimonials.2.quote': 'The impact this organization has had on our community is immeasurable. My children now have access to quality education and nutritious meals thanks to their programs.',

          'testimonials.3.name': 'Priya Sharma',
          'testimonials.3.role': 'Local Teacher',
          'testimonials.3.quote': 'The educational initiatives by Wake Up Guys® have transformed how we approach learning in our community. Their innovative methods truly make a difference.',

          'testimonials.4.name': 'David Rodriguez',
          'testimonials.4.role': 'Environmental Activist',
          'testimonials.4.quote': 'Their environmental conservation efforts are remarkable. Together, we\'ve planted over 1000 trees and cleaned numerous water bodies in our region.',
          // English
          'events.sectionTitle': 'Upcoming Events & Drives',
          'events.sectionDescription': 'Join our upcoming community initiatives and be part of the positive change we\'re creating together.',
          'events.dynamicBadge': 'Dynamic Content Powered by Sanity CMS',
          'events.urgent': 'Urgent',
          'events.registrationProgress': 'Registration Progress',
          'events.volunteersRegistered': 'volunteers registered',
          'events.signUp': 'Sign Up to Volunteer',
          'events.viewAll': 'View All Events',

          'events.title1': 'Community Food Drive',
          'events.description1': 'Join us for our monthly food distribution drive serving 500+ families in need.',
          'events.location1': 'Central Community Center',

          'events.title2': 'Tree Plantation Campaign',
          'events.description2': 'Help us plant 1000 trees to combat climate change and improve air quality.',
          'events.location2': 'Riverside Park',

          'events.title3': 'Education Workshop',
          'events.description3': 'Teaching digital literacy skills to children in underserved communities.',
          'events.location3': 'Local School',

          'events.category.food': 'Food Security',
          'events.category.environment': 'Environment',
          'events.category.education': 'Education',
          'volunteer.title': 'Become a Volunteer',
          'volunteer.description': 'Join our mission to serve humanity and create lasting positive change in communities worldwide.',
          'volunteer.points.1.title': 'Make a Real Impact',
          'volunteer.points.1.desc': 'Your contributions directly help communities in need and create lasting change.',
          'volunteer.points.2.title': 'Flexible Commitment',
          'volunteer.points.2.desc': 'Choose activities that fit your schedule and interests.',
          'volunteer.points.3.title': 'Growing Community',
          'volunteer.points.3.desc': 'Join a network of like-minded individuals passionate about service.',

          'volunteer.name': 'Full Name *',
          'volunteer.email': 'Email Address *',
          'volunteer.interest': 'Area of Interest',
          'volunteer.placeholders.name': 'Enter your full name',
          'volunteer.placeholders.email': 'Enter your email address',
          'volunteer.placeholders.selectInterest': 'Select an area of interest',
          'volunteer.subscribe': 'Subscribe to newsletter for updates',
          'volunteer.submit': 'Join Our Mission',
          'volunteer.thankyou.title': 'Thank You!',
          'volunteer.thankyou.message': 'We\'ve received your application and will get back to you soon.',

          'volunteer.interests.education': 'Education',
          'volunteer.interests.environment': 'Environment',
          'volunteer.interests.healthcare': 'Healthcare',
          'volunteer.interests.food': 'Food Security',
          'volunteer.interests.water': 'Water Conservation',
          'volunteer.interests.community': 'Community Development',

          'about.title': 'About Wake Up Guys®',
          'about.description': 'Learn more about our journey, mission, and the incredible team behind our initiatives.',
          'about.underDevelopment': 'Page Under Development',
          'about.underDevelopmentDesc': 'This page is currently being developed with comprehensive information about our organization, team, and impact stories.',          'blog.title': 'Blog & News',
          'blog.description': 'Stay updated with our latest campaigns, stories, and community impact news.',
          'blog.cmsReady': 'CMS Integration Ready',
          'blog.cmsDescription': 'This page is structured and ready for Sanity CMS integration to display dynamic blog content.',
          'blog.cmsBadge': 'Ready for Sanity CMS',
          'contact.title': 'Contact Us',
          'contact.intro': 'Get in touch with us to learn more about our initiatives or collaborate on projects.',
          'contact.pageUnderDev': 'Page Under Development',
          'contact.pageUnderDevDesc': 'This page will feature detailed contact information, office locations, and contact forms.',
          'donate.title': 'Make a Donation',
          'donate.description': 'Support our mission to serve humanity with your generous contribution.',
          'donate.readyTitle': 'Payment Integration Ready',
          'donate.readyDescription': 'This page is ready for payment gateway integration to process donations securely.',
          "drive.heading": "Register for Our Upcoming Drive",
          "drive.description": "Join us in making a difference in our community. Your participation helps us serve those in need.",
          "drive.badge": "Dynamic Content Powered by Sanity CMS (Drives Placeholder)",

          "drive.registerCard.urgent": "Urgent",
          "drive.registerCard.requirements": "Requirements",
          "drive.registerCard.benefits": "Benefits",
          "drive.registerCard.progress": "Registration Progress",
          "drive.registerCard.volunteers": "{{count}} volunteers registered",
          "drive.registerCard.description": "Join us for our monthly food distribution drive where we serve nutritious meals to 500+ families in need. This is a hands-on volunteer opportunity where you'll help with food preparation, distribution, and community engagement.",

          "drive.form.title": "Register Now",
          "drive.form.description": "Fill out the form below to secure your spot as a volunteer.",
          "drive.form.name": "Full Name *",
          "drive.form.email": "Email Address *",
          "drive.form.phone": "Phone Number *",
          "drive.form.areaOfInterest": "Area of Interest *",

          "drive.form.placeholders.name": "Enter your full name",
          "drive.form.placeholders.email": "Enter your email address",
          "drive.form.placeholders.phone": "Enter your phone number",
          "drive.form.placeholders.areaOfInterest": "Select your area of interest",
          "drive.form.placeholders.experience": "Tell us about any previous volunteer experience...",
          "drive.form.placeholders.availability": "Any specific time constraints or availability notes...",

          "drive.form.optional.experience": "Previous Volunteer Experience (Optional)",
          "drive.form.optional.availability": "Availability Notes (Optional)",
          "drive.form.submit": "Register Now",

          "drive.form.errors.name": "Full name is required",
          "drive.form.errors.emailRequired": "Email is required",
          "drive.form.errors.emailInvalid": "Please enter a valid email",
          "drive.form.errors.phone": "Phone number is required",
          "drive.form.errors.interest": "Please select an area of interest",

          "drive.success.heading": "Registration Successful!",
          "drive.success.message": "Thank you for registering. We'll send you confirmation details and further instructions via email.",
          "drive.success.followup.heading": "Next Steps:",
          "drive.success.followup.text": "Check your email for confirmation and event details. We'll contact you 24 hours before the event with final instructions.",

          "drive.areasOfInterest.0": "Food Distribution",
          "drive.areasOfInterest.1": "Community Outreach",
          "drive.areasOfInterest.2": "Event Coordination",
          "drive.areasOfInterest.3": "Photography/Documentation",
          "drive.areasOfInterest.4": "Translation Services",
          "drive.areasOfInterest.5": "First Aid Support",
          "gallery.sectionTitle": "Our Work in Action",
          "gallery.sectionDescription": "Witness the positive change we're creating together in communities across the globe. Each image tells a story of hope, transformation, and collective impact.",
          "gallery.cmsNote": "Dynamic Content Powered by Sanity CMS (Gallery Placeholder)",

          "gallery.title.food": "Food Distribution Drive",
          "gallery.title.education": "Education for All",
          "gallery.title.cleanup": "Beach Cleanup Initiative",
          "gallery.title.plantation": "Green Future Campaign",
          "gallery.title.water": "Clean Water Project",
          "gallery.title.healthcare": "Medical Camp Outreach",
          "gallery.title.youth": "Youth Leadership Program",
          "gallery.title.community": "Community Development",
          "gallery.title.skills": "Skills Training Workshop",

          "gallery.tag.nutrition": "Nutrition",
          "gallery.tag.education": "Education",
          "gallery.tag.environment": "Environment",
          "gallery.tag.water": "Water",
          "gallery.tag.healthcare": "Healthcare",
          "gallery.tag.empowerment": "Empowerment",
          "gallery.tag.community": "Community",

          "gallery.alt.food": "Community food distribution",
          "gallery.alt.education": "Education program",
          "gallery.alt.cleanup": "Environmental cleanup",
          "gallery.alt.plantation": "Tree plantation",
          "gallery.alt.water": "Water conservation",
          "gallery.alt.healthcare": "Healthcare outreach",
          "gallery.alt.youth": "Youth empowerment",
          "gallery.alt.community": "Community building",
          "gallery.alt.skills": "Skills training",
          "register.heading": "Join Our Mission",
          "register.subheading": "Create your account and start making a difference today.",
          "register.google": "Continue with Google",
          "register.facebook": "Continue with Facebook",
          "register.phone": "Continue with Phone",
          "register.orWithEmail": "Or register with email",
          "register.firstName": "First Name",
          "register.lastName": "Last Name",
          "register.firstNamePlaceholder": "First name",
          "register.lastNamePlaceholder": "Last name",
          "register.email": "Email Address",
          "register.emailPlaceholder": "Enter your email address",
          "register.password": "Password",
          "register.passwordPlaceholder": "Create a strong password",
          "register.confirmPassword": "Confirm Password",
          "register.confirmPasswordPlaceholder": "Confirm your password",
          "register.termsPrefix": "I agree to the",
          "register.terms": "Terms of Service",
          "register.privacy": "Privacy Policy",
          "register.and": "and",
          "register.createAccount": "Create Account",
          "register.alreadyHaveAccount": "Already have an account?",
          "register.signInHere": "Sign in here",

          "register.errors.firstName": "First name is required",
          "register.errors.lastName": "Last name is required",
          "register.errors.emailRequired": "Email is required",
          "register.errors.emailInvalid": "Please enter a valid email",
          "register.errors.passwordRequired": "Password is required",
          "register.errors.passwordShort": "Password must be at least 8 characters",
          "register.errors.confirmPasswordRequired": "Please confirm your password",
          "register.errors.passwordMismatch": "Passwords do not match",
          "register.errors.terms": "You must agree to the terms and conditions",
          "signin.heading": "Welcome Back",
          "signin.subheading": "Sign in to access your volunteer dashboard and track your impact.",
          "signin.google": "Continue with Google",
          "signin.facebook": "Continue with Facebook",
          "signin.phone": "Continue with Phone",
          "signin.orWithEmail": "Or continue with email",
          "signin.email": "Email Address",
          "signin.emailPlaceholder": "Enter your email address",
          "signin.password": "Password",
          "signin.passwordPlaceholder": "Enter your password",
          "signin.rememberMe": "Remember me",
          "signin.forgot": "Forgot password?",
          "signin.signin": "Sign In",
          "signin.noAccount": "Don't have an account?",
          "signin.create": "Create one here",

          "signin.errors.emailRequired": "Email is required",
          "signin.errors.emailInvalid": "Please enter a valid email",
          "signin.errors.passwordRequired": "Password is required",
          "signin.errors.passwordShort": "Password must be at least 6 characters",

          "volunteer.heading": "Volunteer With Us",
          "volunteer.subheading": "Join our mission to serve humanity and make a lasting impact in communities worldwide.",
          "volunteer.underDevelopment": "Page Under Development",
          "volunteer.description": "This page will feature comprehensive volunteer opportunities, application forms, and program details."




        }
      },
      hi: {
        translation: {
          'footer.address': '123 मानवता स्ट्रीट, सेवा सिटी, SC 12345',
          'footer.rights': '© 2024 Wake Up Guys®. सर्वाधिकार सुरक्षित।',

          'nav.home': 'होम',
          'nav.about': 'हमारे बारे में',
          'nav.gallery': 'गैलरी',
          'nav.blog': 'ब्लॉग',
          'nav.volunteer': 'स्वयंसेवक',
          'nav.donate': 'दान करें',
          'nav.contact': 'संपर्क करें',
          'nav.signin': 'साइन इन',
          'nav.register': 'रजिस्टर',

          "hero.tagline": "मानवता की सेवा",
          "hero.subtitle": "सेवा और करुणा के माध्यम से वास्तविक परिवर्तन लाने में हमारा साथ दें।",
          "hero.joinUs": "हमसे जुड़ें",
          "hero.donateNow": "अब दान करें",


          'signin.title': 'स्वागत है',
          'signin.email': 'ईमेल पता',
          'signin.password': 'पासवर्ड',
          'signin.rememberMe': 'मुझे याद रखें',
          'signin.forgotPassword': 'पासवर्ड भूल गए?',
          'signin.createAccount': 'खाता बनाएं',

          'register.title': 'हमारे मिशन में शामिल हों',
          'register.firstName': 'पहला नाम',
          'register.lastName': 'अंतिम नाम',
          'register.email': 'ईमेल पता',
          'register.password': 'पासवर्ड',
          'register.confirmPassword': 'पासवर्ड की पुष्टि करें',
          'register.agreeToTerms': 'मैं सेवा की शर्तों से सहमत हूं',

          'driveRegister.title': 'हमारे आगामी ड्राइव के लिए पंजीकरण करें',
          'driveRegister.fullName': 'पूरा नाम',
          'driveRegister.email': 'ईमेल पता',
          'driveRegister.phone': 'फोन नंबर',
          'driveRegister.areaOfInterest': 'रुचि का क्षेत्र',
          'driveRegister.experience': 'पिछला स्वयंसेवी अनुभव (वैकल्पिक)',
          'driveRegister.availability': 'उपलब्धता नोट (वैकल्पिक)',
          'driveRegister.registrationProgress': 'पंजीकरण प्रगति',

          'gallery.title': 'हमारा काम क्रियाशीलता में',
          'gallery.caption': 'गैलरी छवियों के लिए कैप्शन',

          'donate.title': 'दान करें',
          'donate.description': 'हमारे मिशन में मदद करने के लिए अपनी उदार योगदान से हमें समर्थन दें।',

          'volunteer.title': 'हमारे साथ स्वयंसेवा करें',
          'volunteer.description': 'हमारे मिशन में शामिल होकर मानवता की सेवा करें और समुदायों में स्थायी प्रभाव डालें।',
          'volunteer.joinNow': 'स्वयंसेवक बनें',
          'volunteer.communityFocus': 'सामुदायिक फोकस',
          'volunteer.communityDevelopment': 'सामुदायिक विकास',

          'about.title': 'Wake Up Guys® के बारे में',
          'about.description': 'हमारी यात्रा, मिशन, और हमारे पहलों के पीछे की अद्भुत टीम के बारे में जानें।',

          'blog.title': 'ब्लॉग और समाचार',
          'blog.description': 'हमारी नवीनतम अभियान, कहानियां और सामुदायिक प्रभाव समाचार के बारे में अपडेट रहें।',
          'blog.benefits': 'लाभ',
          'blog.news': 'ब्लॉग और समाचार',
          'blog.certificate': 'भागीदारी प्रमाण पत्र',

          'campaigns.title': 'अभियान',
          'campaigns.excerpt': 'अभियान का सारांश या परिचय',
          'campaign.beachCleanup': 'समुद्र तट सफाई पहल',
          'campaign.description': 'समुद्र तट की सफाई और पर्यावरण संरक्षण',
          'campaign.cleanWater': 'स्वच्छ जल पहल',
          'campaign.cleanWaterDesc': 'ग्रामीण क्षेत्रों में स्वच्छ जल अभियान',

          'event.communityFoodDrive': 'सामुदायिक खाद्य वितरण अभियान',
          'event.leadershipGrowth': 'नेतृत्व कौशल का विकास और युवा परिवर्तनकर्ताओं के लिए अवसर बनाना।',

          'newsletter.title': 'हमारे मिशन से जुड़े रहें',
          'newsletter.description': 'हमारी पहलों और इसमें कैसे शामिल हो सकते हैं, इसके बारे में नवीनतम अपडेट प्राप्त करें।',

          'mission.statement1': 'सामुदायिक रसोई और पोषण शिक्षा के माध्यम से भूख और कुपोषण को दूर करना।',
          'mission.statement2': 'नवीन तरीकों से विशिष्ट समस्याओं का समाधान।',
          'mission.compService': 'सहानुभूतिपूर्ण सेवा',

          'form.areaOfInterestLabel': 'रुचि का क्षेत्र',
          'form.areaOfInterestPlaceholder': '*रुचि का क्षेत्र',
          'form.availabilityNotes': 'कोई विशिष्ट समय सीमा या उपलब्धता नोट...',
          'form.confirmPassword': 'पासवर्ड की पुष्टि करें',

          'phone.default': '+९१ १२३४५ ६७८९०',
          'address.main': '१२३ मानवता स्ट्रीट, सेवा सिटी, SC १२३४५',
          'minutes.3': '३ मिनट पढ़ें',
          'minutes.4': '४ मिनट पढ़ें',
          'minutes.5': '५ मिनट पढ़ें',
          'minutes.6': '६ मिनट पढ़ें',

          //MissionSection
          'mission.title': "हमारा मिशन",
          'mission.description': "हम एक युवा नेतृत्व वाला एनजीओ हैं जो नवीन सामाजिक पहलों, सतत विकास कार्यक्रमों और मानवीय सहायता के माध्यम से समुदायों में सकारात्मक बदलाव लाने के लिए प्रतिबद्ध है।",
          'mission.features.service': "सहानुभूतिपूर्ण सेवा",
          'mission.features.serviceDesc': "ज़रूरतमंदों की मदद के लिए सहानुभूति और समर्पण से प्रेरित।",
          'mission.features.community': "सामुदायिक फोकस",
          'mission.features.communityDesc': "सामूहिक कार्रवाई के माध्यम से मजबूत समुदायों का निर्माण।",
          'mission.features.global': "वैश्विक प्रभाव",
          'mission.features.globalDesc': "ऐसा सकारात्मक परिवर्तन लाना जो सीमाओं से परे हो।",
          'mission.features.target': "लक्षित समाधान",
          'mission.features.targetDesc': "विशिष्ट चुनौतियों का नवीन तरीकों से समाधान।",
          'mission.card.title': "युवा नेतृत्व पहल",
          'mission.card.subtitle': "अगली पीढ़ी को सशक्त बनाना",

          //statsSection
          'stats.heading': 'अब तक का हमारा प्रभाव',
          'stats.description': 'हम मिलकर दुनियाभर में समुदायों में मापनीय बदलाव ला रहे हैं।',
          'stats.meals': 'परोसे गए भोजन',
          'stats.drives': 'पूरे किए गए ड्राइव्स',
          'stats.volunteers': 'सक्रिय स्वयंसेवक',
          'stats.mealsDesc': 'जरूरतमंद समुदायों को पौष्टिक भोजन प्रदान किया गया',
          'stats.drivesDesc': 'सफल सामुदायिक सेवा ड्राइव्स पूरी हुईं',
          'stats.volunteersDesc': 'समर्पित स्वयंसेवकों द्वारा किए गए सकारात्मक प्रयास',
          'stats.callToAction': 'क्या आप इन बढ़ते आंकड़ों का हिस्सा बनना चाहते हैं?',
          'stats.joinVolunteer': 'स्वयंसेवक बनें',
          'stats.makeDonation': 'दान करें',

          'campaigns.sectionTitle': 'परिवर्तन की कहानियाँ',
          'campaigns.sectionDescription': 'हमारी सामुदायिक पहलों के पीछे की प्रेरणादायक कहानियों और उनके सकारात्मक प्रभाव को जानें।',
          'campaigns.dynamicBadge': 'डायनामिक कंटेंट - Sanity CMS द्वारा संचालित (ब्लॉग प्लेसहोल्डर)',
          'campaigns.status.active': 'सक्रिय',
          'campaigns.status.upcoming': 'आगामी',
          'campaigns.viewAll': 'सभी कहानियाँ देखें',
          'campaigns.learnMore': 'और जानें',

          // Dummy campaign titles and excerpts
          'campaigns.cleanWater.title': 'स्वच्छ जल पहल',
          'campaigns.cleanWater.excerpt': 'सतत बुनियादी ढांचे के माध्यम से जरूरतमंद समुदायों तक स्वच्छ जल पहुँच प्रदान करना।',
          'campaigns.education.title': 'सभी के लिए शिक्षा',
          'campaigns.education.excerpt': 'गुणवत्ता शिक्षा पहलों का समर्थन और बच्चों को अध्ययन सामग्री उपलब्ध कराना।',
          'campaigns.foodSecurity.title': 'खाद्य सुरक्षा कार्यक्रम',
          'campaigns.foodSecurity.excerpt': 'सामुदायिक रसोई और पोषण शिक्षा के माध्यम से भूख और कुपोषण को दूर करना।',
          'campaigns.environment.title': 'पर्यावरण संरक्षण',
          'campaigns.environment.excerpt': 'वृक्षारोपण और जागरूकता अभियानों के माध्यम से पर्यावरण की रक्षा करना।',
          'campaigns.youth.title': 'युवा सशक्तिकरण',
          'campaigns.youth.excerpt': 'युवा परिवर्तनकर्ताओं के लिए नेतृत्व कौशल और अवसरों का निर्माण।',
          'blog.sectionTitle': 'परिवर्तन की कहानियाँ',
          'blog.sectionDescription': 'हमारे सामुदायिक प्रयासों के पीछे की प्रेरणादायक कहानियों और उनके सकारात्मक प्रभाव की खोज करें।',
          'blog.dynamicContentNote': 'Sanity CMS द्वारा संचालित डायनामिक सामग्री',
          'blog.readMore': 'और पढ़ें',
          'blog.viewAll': 'सभी कहानियाँ देखें',

          'blog.title1': 'शिक्षा के माध्यम से जीवन में परिवर्तन',
          'blog.excerpt1': 'हमारे साक्षरता कार्यक्रम ग्रामीण क्षेत्रों के बच्चों को उज्जवल भविष्य की ओर अग्रसर कर रहे हैं।',
          'blog.title2': 'स्वच्छ जल पहल की सफलता की कहानी',
          'blog.excerpt2': 'हमारे जल शुद्धिकरण परियोजना के पूरा होने का उत्सव, जो अब प्रतिदिन 500+ परिवारों को सेवा प्रदान करती है।',
          'blog.title3': 'युवा नेतृत्व की मिसाल',
          'blog.excerpt3': 'मिलिए उन युवाओं से जो तीन राज्यों में हमारे सामुदायिक विकास अभियानों का नेतृत्व कर रहे हैं।',
          'blog.title4': 'पर्यावरण संरक्षण का प्रभाव',
          'blog.excerpt4': 'हमारा वृक्षारोपण अभियान 10,000 पेड़ों के मील के पत्थर तक पहुँच चुका है।',
          'blog.title5': 'पोषण कार्यक्रम का विस्तार',
          'blog.excerpt5': 'हमारा भोजन वितरण कार्यक्रम अब प्रतिदिन 1000+ बच्चों तक पोषण युक्त भोजन पहुँचा रहा है।',

          'blog.category.education': 'शिक्षा',
          'blog.category.water': 'जल',
          'blog.category.leadership': 'नेतृत्व',
          'blog.category.environment': 'पर्यावरण',
          'blog.category.nutrition': 'पोषण',

          'blog.tag.education': 'शिक्षा',
          'blog.tag.health': 'स्वास्थ्य',
          'blog.tag.community': 'समुदाय',
          'blog.tag.environment': 'पर्यावरण',
          // Gallery
          'gallery.title': 'गैलरी हाइलाइट्स',
          'gallery.description': 'हमारे द्वारा दुनिया भर में समुदायों में लाई जा रही सकारात्मक बदलाव को देखें।',
          'gallery.viewFull': 'पूरी गैलरी देखें',
          'gallery.caption1': 'स्थानीय समुदायों में खाद्य वितरण अभियान',
          'gallery.caption2': 'वंचित क्षेत्रों में बच्चों को शिक्षित करना',
          'gallery.caption3': 'समुद्र तट की सफाई और पर्यावरण संरक्षण',
          'gallery.caption4': 'हरे-भरे भविष्य के लिए वृक्षारोपण अभियान',
          'gallery.caption5': 'ग्रामीण क्षेत्रों में स्वच्छ जल पहल',
          'gallery.caption6': 'चिकित्सा शिविर और स्वास्थ्य जागरूकता कार्यक्रम',
          
          //Contact Section
          'contact.title': 'संपर्क करें',
          'contact.description': 'क्या आपके पास हमारे पहलों के बारे में कोई प्रश्न है या आप शामिल होना चाहते हैं? हम आपसे सुनना चाहेंगे।',
          'contact.phone': 'फ़ोन',
          'contact.email': 'ईमेल',
          'contact.address': 'पता',
          'contact.map.title': 'इंटरएक्टिव मैप प्लेसहोल्डर',
          'contact.map.description': 'यहां Google Maps या इसी तरह की सेवा एम्बेड करें',
          'contact.form.name': 'पूरा नाम *',
          'contact.form.email': 'ईमेल पता *',
          'contact.form.message': 'संदेश *',
          'contact.form.placeholder.name': 'अपना नाम दर्ज करें',
          'contact.form.placeholder.email': 'अपना ईमेल दर्ज करें',
          'contact.form.placeholder.message': 'हमें अपनी पूछताछ के बारे में बताएं...',
          'contact.form.submit': 'संदेश भेजें',
          'contact.success.title': 'संदेश भेजा गया!',
          'contact.success.message': 'हमसे संपर्क करने के लिए धन्यवाद। हम 24 घंटे के भीतर आपसे संपर्क करेंगे।',
          'contact.whatsapp': 'व्हाट्सएप पर चैट करें',
          // न्यूज़लेटर अनुभाग
          'newsletter.title': 'हमारे मिशन से जुड़े रहें',
          'newsletter.description': 'हमारी पहलों, सफलता की कहानियों और सामुदायिक योगदान के तरीकों के बारे में नवीनतम अपडेट प्राप्त करें।',
          'newsletter.placeholder': 'अपना ईमेल पता दर्ज करें',
          'newsletter.subscribe': 'सदस्यता लें',
          'newsletter.note': '5,000+ सदस्य जुड़ चुके हैं। कोई स्पैम नहीं, कभी भी सदस्यता रद्द करें।',
          'newsletter.success.title': 'सफलतापूर्वक सदस्यता ली गई!',
          'newsletter.success.message': 'हमारे न्यूज़लेटर से जुड़ने के लिए धन्यवाद। कृपया पुष्टि के लिए अपने इनबॉक्स की जांच करें।',
          'newsletter.stats.subscribers': 'सदस्य',
          'newsletter.stats.frequency': 'अपडेट्स',
          'newsletter.stats.spam': 'स्पैम',
          'testimonials.title': 'साक्षात्कार',
          'testimonials.description': 'उन लोगों की बातें सुनें जिनके जीवन को हमारी पहलों और सामुदायिक कार्यों ने छुआ है।',

          'testimonials.1.name': 'सारा जॉनसन',
          'testimonials.1.role': 'सामुदायिक स्वयंसेवक',
          'testimonials.1.quote': 'Wake Up Guys® के साथ काम करना एक अविश्वसनीय यात्रा रही है। मानवता की सेवा के प्रति उनकी प्रतिबद्धता वास्तव में प्रेरणादायक है और इसने मुझे एक बेहतर इंसान बनने के लिए प्रेरित किया है।',

          'testimonials.2.name': 'माइकल चेन',
          'testimonials.2.role': 'लाभार्थी अभिभावक',
          'testimonials.2.quote': 'इस संगठन का हमारे समुदाय पर प्रभाव अत्यधिक है। मेरे बच्चों को अब गुणवत्ता युक्त शिक्षा और पौष्टिक भोजन की सुविधा मिल रही है, उनके कार्यक्रमों की बदौलत।',

          'testimonials.3.name': 'प्रिया शर्मा',
          'testimonials.3.role': 'स्थानीय शिक्षक',
          'testimonials.3.quote': 'Wake Up Guys® की शैक्षिक पहल ने हमारे समुदाय में सीखने के तरीके को बदल दिया है। उनकी नवीन विधियाँ वास्तव में फर्क डालती हैं।',

          'testimonials.4.name': 'डेविड रोड्रिग्ज़',
          'testimonials.4.role': 'पर्यावरण कार्यकर्ता', 
          'testimonials.4.quote': 'उनके पर्यावरण संरक्षण प्रयास सराहनीय हैं। हमने मिलकर 1000 से अधिक पेड़ लगाए हैं और हमारे क्षेत्र में कई जल स्रोतों की सफाई की है।',
          // Hindi
          'events.sectionTitle': 'आगामी कार्यक्रम और ड्राइव्स',
          'events.sectionDescription': 'हमारे आगामी सामुदायिक अभियानों में शामिल हों और सकारात्मक बदलाव का हिस्सा बनें।',
          'events.dynamicBadge': 'सैनिटी CMS द्वारा संचालित डायनामिक कंटेंट',
          'events.urgent': 'अत्यावश्यक',
          'events.registrationProgress': 'पंजीकरण प्रगति',
          'events.volunteersRegistered': 'स्वयंसेवक पंजीकृत',
          'events.signUp': 'स्वयंसेवक के रूप में शामिल हों',
          'events.viewAll': 'सभी कार्यक्रम देखें',

          'events.title1': 'सामुदायिक भोजन वितरण अभियान',
          'events.description1': 'हमारे मासिक खाद्य वितरण अभियान में शामिल हों जो 500+ परिवारों को सेवा प्रदान करता है।',
          'events.location1': 'सेंट्रल कम्युनिटी सेंटर',

          'events.title2': 'वृक्षारोपण अभियान',
          'events.description2': 'जलवायु परिवर्तन से निपटने और वायु गुणवत्ता सुधारने के लिए 1000 पेड़ लगाएं।',
          'events.location2': 'रिवरसाइड पार्क',

          'events.title3': 'शैक्षिक कार्यशाला',
          'events.description3': 'कम संसाधनों वाले समुदायों में बच्चों को डिजिटल साक्षरता कौशल सिखाना।',
          'events.location3': 'स्थानीय विद्यालय',

          'events.category.food': 'भोजन सुरक्षा',
          'events.category.environment': 'पर्यावरण',
          'events.category.education': 'शिक्षा',
          'volunteer.title': 'स्वयंसेवक बनें',
          'volunteer.description': 'हमारे मिशन में शामिल हों और दुनिया भर में समुदायों में सकारात्मक बदलाव लाएं।',
          'volunteer.points.1.title': 'वास्तविक प्रभाव डालें',
          'volunteer.points.1.desc': 'आपका योगदान सीधे जरूरतमंद समुदायों की सहायता करता है।',
          'volunteer.points.2.title': 'लचीली प्रतिबद्धता',
          'volunteer.points.2.desc': 'अपनी समय-सारणी और रुचियों के अनुसार गतिविधियाँ चुनें।',
          'volunteer.points.3.title': 'बढ़ता हुआ समुदाय',
          'volunteer.points.3.desc': 'सेवा के लिए समर्पित समान सोच वाले लोगों के नेटवर्क में शामिल हों।',

          'volunteer.name': 'पूरा नाम *',
          'volunteer.email': 'ईमेल पता *',
          'volunteer.interest': 'रुचि का क्षेत्र',
          'volunteer.placeholders.name': 'अपना पूरा नाम दर्ज करें',
          'volunteer.placeholders.email': 'अपना ईमेल पता दर्ज करें',
          'volunteer.placeholders.selectInterest': 'रुचि का क्षेत्र चुनें',
          'volunteer.subscribe': 'अपडेट्स के लिए न्यूज़लेटर की सदस्यता लें',
          'volunteer.submit': 'हमारे मिशन में शामिल हों',
          'volunteer.thankyou.title': 'धन्यवाद!',
          'volunteer.thankyou.message': 'हमने आपका आवेदन प्राप्त कर लिया है और जल्द ही आपसे संपर्क करेंगे।',

          'volunteer.interests.education': 'शिक्षा',
          'volunteer.interests.environment': 'पर्यावरण',
          'volunteer.interests.healthcare': 'स्वास्थ्य सेवा',
          'volunteer.interests.food': 'खाद्य सुरक्षा',
          'volunteer.interests.water': 'जल संरक्षण',
          'volunteer.interests.community': 'सामुदायिक विकास',

          'about.title': 'Wake Up Guys® के बारे में',
          'about.description': 'हमारी यात्रा, मिशन और हमारी पहलों के पीछे की अद्भुत टीम के बारे में जानें।',
          'about.underDevelopment': 'पृष्ठ विकासाधीन है',
          'about.underDevelopmentDesc': 'यह पृष्ठ वर्तमान में हमारे संगठन, टीम और प्रभावशाली कहानियों के बारे में विस्तृत जानकारी के साथ विकसित किया जा रहा है।',
          'blog.title': 'ब्लॉग और समाचार',
          'blog.description': 'हमारे नवीनतम अभियान, कहानियाँ और सामुदायिक प्रभाव समाचार के बारे में अपडेट रहें।',
          'blog.cmsReady': 'CMS एकीकरण के लिए तैयार',
          'blog.cmsDescription': 'यह पृष्ठ Sanity CMS एकीकरण के लिए संरचित है और डायनामिक ब्लॉग सामग्री प्रदर्शित करने के लिए तैयार है।',
          'blog.cmsBadge': 'Sanity CMS के लिए तैयार',
          'contact.title': 'संपर्क करें',
          'contact.intro': 'हमारी पहलों के बारे में अधिक जानने या परियोजनाओं पर सहयोग करने के लिए हमसे संपर्क करें।',
          'contact.pageUnderDev': 'पृष्ठ निर्माणाधीन है',
          'contact.pageUnderDevDesc': 'यह पृष्ठ विस्तृत संपर्क जानकारी, कार्यालय स्थान और संपर्क फ़ॉर्म दिखाएगा।',
          'donate.title': 'दान करें',
          'donate.description': 'मानवता की सेवा करने के हमारे मिशन में अपने उदार योगदान से समर्थन करें।',
          'donate.readyTitle': 'भुगतान एकीकरण तैयार है',
          'donate.readyDescription': 'यह पृष्ठ दान को सुरक्षित रूप से संसाधित करने के लिए भुगतान गेटवे एकीकरण के लिए तैयार है।',
          
          "drive.heading": "हमारे आगामी अभियान के लिए पंजीकरण करें",
          "drive.description": "हमारे समुदाय में बदलाव लाने के लिए हमारे साथ जुड़ें। आपकी भागीदारी ज़रूरतमंदों की सेवा में मदद करती है।",
          "drive.badge": "डायनामिक सामग्री Sanity CMS द्वारा संचालित (ड्राइव प्लेसहोल्डर)",

          "drive.registerCard.urgent": "अति आवश्यक",
          "drive.registerCard.requirements": "आवश्यकताएँ",
          "drive.registerCard.benefits": "लाभ",
          "drive.registerCard.progress": "पंजीकरण प्रगति",
          "drive.registerCard.volunteers": "{{count}} स्वयंसेवक पंजीकृत",
          "drive.registerCard.description": "हमारे मासिक खाद्य वितरण अभियान में शामिल हों, जहां हम 500+ परिवारों को पौष्टिक भोजन प्रदान करते हैं। यह एक व्यावहारिक स्वयंसेवी अवसर है जहाँ आप भोजन की तैयारी, वितरण और सामुदायिक संपर्क में मदद करेंगे।",

          "drive.form.title": "अभी पंजीकरण करें",
          "drive.form.description": "स्वयंसेवक के रूप में अपनी जगह सुरक्षित करने के लिए नीचे दिया गया फॉर्म भरें।",
          "drive.form.name": "पूरा नाम *",
          "drive.form.email": "ईमेल पता *",
          "drive.form.phone": "फोन नंबर *",
          "drive.form.areaOfInterest": "रुचि का क्षेत्र *",

          "drive.form.placeholders.name": "अपना पूरा नाम दर्ज करें",
          "drive.form.placeholders.email": "अपना ईमेल पता दर्ज करें",
          "drive.form.placeholders.phone": "अपना फोन नंबर दर्ज करें",
          "drive.form.placeholders.areaOfInterest": "अपना रुचि क्षेत्र चुनें",
          "drive.form.placeholders.experience": "कोई भी पिछला स्वयंसेवक अनुभव बताएं...",
          "drive.form.placeholders.availability": "विशेष समय सीमाएँ या उपलब्धता नोट्स...",

          "drive.form.optional.experience": "पिछला स्वयंसेवक अनुभव (वैकल्पिक)",
          "drive.form.optional.availability": "उपलब्धता नोट्स (वैकल्पिक)",
          "drive.form.submit": "अभी पंजीकरण करें",

          "drive.form.errors.name": "पूरा नाम आवश्यक है",
          "drive.form.errors.emailRequired": "ईमेल आवश्यक है",
          "drive.form.errors.emailInvalid": "कृपया एक मान्य ईमेल दर्ज करें",
          "drive.form.errors.phone": "फोन नंबर आवश्यक है",
          "drive.form.errors.interest": "कृपया एक रुचि क्षेत्र चुनें",

          "drive.success.heading": "पंजीकरण सफल!",
          "drive.success.message": "पंजीकरण के लिए धन्यवाद। हम आपको पुष्टिकरण विवरण और आगे के निर्देश ईमेल द्वारा भेजेंगे।",
          "drive.success.followup.heading": "आगे की प्रक्रिया:",
          "drive.success.followup.text": "पुष्टिकरण और कार्यक्रम विवरण के लिए अपना ईमेल जांचें। हम कार्यक्रम से 24 घंटे पहले अंतिम निर्देश भेजेंगे।",

          "drive.areasOfInterest.0": "खाद्य वितरण",
          "drive.areasOfInterest.1": "सामुदायिक संपर्क",
          "drive.areasOfInterest.2": "कार्यक्रम समन्वय",
          "drive.areasOfInterest.3": "फोटोग्राफी/दस्तावेज़ीकरण",
          "drive.areasOfInterest.4": "अनुवाद सेवाएँ",
          "drive.areasOfInterest.5": "प्राथमिक चिकित्सा सहायता",

          "gallery.sectionTitle": "हमारे कार्य की झलकियाँ",
          "gallery.sectionDescription": "देखिए हम किस तरह से समुदायों में सकारात्मक बदलाव ला रहे हैं। हर तस्वीर एक नई आशा और सामूहिक प्रयास की कहानी कहती है।",
          "gallery.cmsNote": "डायनामिक कंटेंट Sanity CMS द्वारा संचालित",

          "gallery.title.food": "खाद्य वितरण अभियान",
          "gallery.title.education": "सभी के लिए शिक्षा",
          "gallery.title.cleanup": "समुद्र तट सफाई पहल",
          "gallery.title.plantation": "हरित भविष्य अभियान",
          "gallery.title.water": "स्वच्छ जल परियोजना",
          "gallery.title.healthcare": "चिकित्सा शिविर",
          "gallery.title.youth": "युवा नेतृत्व कार्यक्रम",
          "gallery.title.community": "समुदाय विकास",
          "gallery.title.skills": "कौशल प्रशिक्षण कार्यशाला",

          "gallery.tag.nutrition": "पोषण",
          "gallery.tag.education": "शिक्षा",
          "gallery.tag.environment": "पर्यावरण",
          "gallery.tag.water": "जल",
          "gallery.tag.healthcare": "स्वास्थ्य सेवा",
          "gallery.tag.empowerment": "सशक्तिकरण",
          "gallery.tag.community": "समुदाय",

          "gallery.alt.food": "समुदाय खाद्य वितरण",
          "gallery.alt.education": "शैक्षिक कार्यक्रम",
          "gallery.alt.cleanup": "पर्यावरण सफाई",
          "gallery.alt.plantation": "वृक्षारोपण",
          "gallery.alt.water": "जल संरक्षण",
          "gallery.alt.healthcare": "स्वास्थ्य सेवा अभियान",
          "gallery.alt.youth": "युवा सशक्तिकरण",
          "gallery.alt.community": "समुदाय निर्माण",
          "gallery.alt.skills": "कौशल प्रशिक्षण",
          "register.heading": "हमारे मिशन से जुड़ें",
          "register.subheading": "अपना खाता बनाएं और आज ही बदलाव लाना शुरू करें।",
          "register.google": "Google से जारी रखें",
          "register.facebook": "Facebook से जारी रखें",
          "register.phone": "फोन नंबर से जारी रखें",
          "register.orWithEmail": "या ईमेल से पंजीकरण करें",
          "register.firstName": "पहला नाम",
          "register.lastName": "अंतिम नाम",
          "register.firstNamePlaceholder": "पहला नाम दर्ज करें",
          "register.lastNamePlaceholder": "अंतिम नाम दर्ज करें",
          "register.email": "ईमेल पता",
          "register.emailPlaceholder": "अपना ईमेल पता दर्ज करें",
          "register.password": "पासवर्ड",
          "register.passwordPlaceholder": "मजबूत पासवर्ड बनाएं",
          "register.confirmPassword": "पासवर्ड की पुष्टि करें",
          "register.confirmPasswordPlaceholder": "पासवर्ड की पुष्टि करें",
          "register.termsPrefix": "मैं सहमत हूं",
          "register.terms": "सेवा की शर्तें",
          "register.privacy": "गोपनीयता नीति",
          "register.and": "और",
          "register.createAccount": "खाता बनाएं",
          "register.alreadyHaveAccount": "पहले से ही खाता है?",
          "register.signInHere": "यहां साइन इन करें",

          "register.errors.firstName": "पहला नाम आवश्यक है",
          "register.errors.lastName": "अंतिम नाम आवश्यक है",
          "register.errors.emailRequired": "ईमेल आवश्यक है",
          "register.errors.emailInvalid": "कृपया एक मान्य ईमेल दर्ज करें",
          "register.errors.passwordRequired": "पासवर्ड आवश्यक है",
          "register.errors.passwordShort": "पासवर्ड कम से कम 8 अक्षरों का होना चाहिए",
          "register.errors.confirmPasswordRequired": "कृपया पासवर्ड की पुष्टि करें",
          "register.errors.passwordMismatch": "पासवर्ड मेल नहीं खा रहे हैं",
          "register.errors.terms": "आपको शर्तों और नियमों से सहमत होना होगा",

          "signin.heading": "फिर से स्वागत है",
          "signin.subheading": "स्वयंसेवक डैशबोर्ड तक पहुँचने और अपना प्रभाव ट्रैक करने के लिए साइन इन करें।",
          "signin.google": "Google से जारी रखें",
          "signin.facebook": "Facebook से जारी रखें",
          "signin.phone": "फोन नंबर से जारी रखें",
          "signin.orWithEmail": "या ईमेल से जारी रखें",
          "signin.email": "ईमेल पता",
          "signin.emailPlaceholder": "अपना ईमेल पता दर्ज करें",
          "signin.password": "पासवर्ड",
          "signin.passwordPlaceholder": "अपना पासवर्ड दर्ज करें",
          "signin.rememberMe": "मुझे याद रखें",
          "signin.forgot": "पासवर्ड भूल गए?",
          "signin.signin": "साइन इन करें",
          "signin.noAccount": "क्या आपके पास खाता नहीं है?",
          "signin.create": "यहां खाता बनाएं",

          "signin.errors.emailRequired": "ईमेल आवश्यक है",
          "signin.errors.emailInvalid": "कृपया एक मान्य ईमेल दर्ज करें",
          "signin.errors.passwordRequired": "पासवर्ड आवश्यक है",
          "signin.errors.passwordShort": "पासवर्ड कम से कम 6 अक्षरों का होना चाहिए",

          "volunteer.heading": "हमारे साथ स्वयंसेवक बनें",
          "volunteer.subheading": "मानवता की सेवा करने और दुनिया भर में समुदायों पर स्थायी प्रभाव डालने के हमारे मिशन में शामिल हों।",
          "volunteer.underDevelopment": "पृष्ठ निर्माणाधीन है",
          "volunteer.description": "यह पृष्ठ व्यापक स्वयंसेवी अवसरों, आवेदन प्रपत्रों और कार्यक्रम विवरणों को प्रदर्शित करेगा।",

          // "volunteer.description": "This page will feature comprehensive volunteer opportunities, application forms, and program details.",
          // "nav.upcomingDrive": "Upcoming Drive 🚨"
          "nav.upcomingDrive": "आगामी अभियान 🚨"







        }
      }
    }
  });

export default i18n;
