import images from './images';

const Menu = [
    {
        text: 'About us',
        link: '#team',
    },
    {
        text: 'Services',
        link: '#services',
    },
    
    {
        text: 'Upcoming Features',
        link: '#process',
    }
    
];
const ServicesData = [
    {
        titleone: 'AI-Powered',
        titletwo: 'Banner Generation',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services01,
    },
    {
        titleone: 'Automated Content',
        titletwo: 'Generation',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services02,
    },
    {
        titleone: 'Hashtag Optimization',
        titletwo: 'and Strategy',
        link: '#',
        itemclass: 'bdark',
        imgURL: images.services03,
    }
    
]
// const CaseStudies = [
//     {
//         text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
//         link: '#',
//     },
//     {
//         text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
//         link: '#',
//     },
//     {
//         text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
//         link: '#',
//     },
// ];

const WorkingProcess = [
    {
        title: 'Direct Social Media Posting',
        description: 'Effortlessly expand your brand reach with our new direct social media posting feature. Soon, you wil be able to share AI-generated banners and promotional content across platforms like Facebook, Instagram, Twitter (X), and LinkedIn. Customize your message, add AI-optimized hashtags, and post instantly or schedule for later, all from within our application. This feature will streamline your promotional efforts, ensuring your content reaches the right audience at the right time, maximizing visibility and engagement.',
    },
    {
        title: 'AI Video Generation',
        description: 'Effortlessly create custom, high-impact videos with Easy Banner AI-driven video generation. Just input your campaign details, and let the AI handle the rest, delivering tailored, professional videos in minutes for any promotional need.',
    },
    {
        title: 'Multi-Language Support',
        description: 'Reach global audiences by generating videos and banners in multiple languages with AI-driven translation and localization.',
    }
    

];

const Team = [
    {
        name: 'Komal Kekare',
        position: 'Senior Software Engineer',
        info: '4+ years of experience in multi-cloud platforms like Azure, AWS, and GCP, with a recent focus on GenAI.',
        foto: images.team01,
        linkedin: '#',
    },
    {
        name: 'Alyana Vandana',
        position: 'Software devlopment Engineer',
        info: 'Experienced in multicloud environments with certifications in both AWS and GCP. Skilled in GenAI technologies and proficient in DevOps practices',
        foto: images.team02,
        
    },
    {
        name: 'Lokesh Kadi',
        position: 'Software development Engineer',
        info: 'Experienced in multicloud environments with certifications in both AWS and GCP. Skilled in GenAI,developing chatbots.',
        foto: images.team03,
        
    },
    {
        name: 'Soumyadip Roy',
        position: 'Associate Engineer',
        info: 'Experience in GCP cloud environments with certifications in both AWS and GCP. Skilled in GenAI technologies',
        foto: images.team04,
        
    },

];

// const Testimonials = [
//     {
//         name: 'John Smith',
//         position: 'Marketing Director at XYZ Corp',
//         testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
//     },
//     {
//         name: 'John Smith',
//         position: 'Marketing Director at XYZ Corp',
//         testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
//     },
//     {
//         name: 'John Smith',
//         position: 'Marketing Director at XYZ Corp',
//         testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
//     },
//     {
//         name: 'John Smith',
//         position: 'Marketing Director at XYZ Corp',
//         testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
//     },
// ];
export default { Menu, WorkingProcess, Team,  ServicesData };