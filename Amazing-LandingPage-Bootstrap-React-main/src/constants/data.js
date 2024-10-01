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
        titletwo: 'Cancer Detection',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services01,
    },
    {
        titleone: 'Specialist',
        titletwo: 'Consultation',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services02,
    },
    {
        titleone: 'Advanced Imaging',
        titletwo: 'Analysis',
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
        title: 'DICOM Viewer',
        description: 'A specialized viewer for medical imaging (CT scans, MRIs, etc.) that enables healthcare providers to visualize and analyze cancer-related diagnostic images, ensuring accurate assessments and treatment planning.',
    },
    {
        title: 'Insurance & Prior Authorization Management',
        description: 'Streamlines the process of submitting prior authorizations for cancer treatments and medications. Integrates with insurance portals for tracking claims, benefits usage, and ensuring timely approval of necessary treatments.',
    },
    {
        title: 'Medication & Treatment Reminders',
        description: 'Automates reminders for critical cancer treatments such as medication intake, chemotherapy, radiation, and doctor appointments. It also helps patients celebrate milestones like treatment completion, with notifications and encouragement from their care team.',
    },
    {
        title: 'Knowledge Base',
        description: 'Provides personalized health tips and mental health support, offering valuable resources for cancer patients to cope with their condition, manage symptoms, and maintain a positive outlook during treatment.',
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
        name: 'ALyana Vandana',
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
        info: '8 months of Experience in GCP cloud environments with certifications in both AWS and GCP. Skilled in GenAI technologies',
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