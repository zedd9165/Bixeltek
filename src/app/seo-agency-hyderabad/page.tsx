export const metadata = {
    title: "Best SEO Services in Hyderabad | Trusted SEO Company | Bixeltek",
    description:
        "Boost your online presence with Bixeltek, a top SEO agency in Hyderabad. Our proven strategies help businesses dominate search results and drive organic growth.",
    keywords:
        "SEO services Hyderabad, Best SEO agency Hyderabad, Digital marketing Hyderabad, Local SEO Hyderabad, Google ranking services, Technical SEO, On-page SEO, Off-page SEO, E-commerce SEO, SEO expert Hyderabad, Increase website traffic, SEO consultant Hyderabad",
    openGraph: {
        title: " Best SEO Services in Hyderabad | Trusted SEO Company | Bixeltek",
        description:
            "Boost your online presence with Bixeltek, a top SEO agency in Hyderabad. Our proven strategies help businesses dominate search results and drive organic growth.",
        type: "website",
    },
};

export const dynamic = "force-dynamic";
import React from 'react';
import DarkFaqSection from '@/components/DarkFaq';
import ContactFrom from '@/components/ContactFrom';
import Link from 'next/link';
import healthcare from "@/assets/digital marketing for health care practices.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg";
import { FaSearch, FaTachometerAlt, FaFileAlt, FaStar, FaMapMarkerAlt, FaCode } from "react-icons/fa";
import { PiGreaterThan } from "react-icons/pi";
import SeoHero from '@/components/SeoHero';
import pet from "@/assets/sincerely-media-VNsdEl1gORk-unsplash.jpg";
import school from '@/assets/school.jpg'
import roofing from "@/assets/digital marketing for roofing industries.jpg";
import dental from "@/assets/digital marketing for health care practices.jpg";
import lawncare from "@/assets/digital marketing for lawn care services.jpg";
import blackcar from "@/assets/digital marketing for car detailers.jpg";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import { FaTooth, FaHospital, FaDog, FaGasPump, FaCar, FaBroom, FaGraduationCap, FaBuilding, FaTree, FaSeedling } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { GrFlag } from "react-icons/gr";
import { LuFileClock } from "react-icons/lu";
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';

export default function Seo() {



    const industries = [
        { name: "Dental", icon: <FaTooth /> },
        { name: "Healthcare", icon: <FaHospital /> },
        { name: "Pet Shops", icon: <FaDog /> },
        { name: "Oil & Gas", icon: <FaGasPump /> },
        { name: "Automobile", icon: <FaCar /> },
        { name: "Roof Cleaning", icon: <FaBroom /> },
        { name: "Education", icon: <FaGraduationCap /> },
        { name: "Real Estate", icon: <FaBuilding /> },
        { name: "Arborist & Tree Removal", icon: <FaTree /> },
        { name: "Lawn Care", icon: <FaSeedling /> },
    ];

    const seoChallenges = [
        { icon: <FaSearch />, title: "Poor Keyword Targeting", desc: "Missing high-intent search queries that bring in buyers." },
        { icon: <FaTachometerAlt />, title: "Slow Website Speed", desc: "A slow site leads to higher bounce rates & lower rankings." },
        { icon: <FaFileAlt />, title: "Weak Content Strategy", desc: "Google favors sites with valuable, engaging, and optimized content." },
        { icon: <FaStar />, title: "Low Domain Authority", desc: "Without high-quality backlinks, your competitors will outrank you." },
        { icon: <FaMapMarkerAlt />, title: "Incomplete Google My Business", desc: "Losing local customers due to poor local SEO optimization." },
        { icon: <FaCode />, title: "Lack of Technical SEO", desc: "Site structure, schema markup & mobile optimization need fixes." }
    ];

    const faqs = [
        {
            question: "How much does SEO services cost in Hyderabad ?",
            answer: "The cost of SEO services in Hyderabad varies based on keyword competition, website size, and optimization level. We offer affordable SEO packages tailored to your business goals. Typically our packeges start from 25,000 INR per month.",
        },
        {
            question: "Do you provide SEO services outside Hyderabad?",
            answer: "Yes! We offer professional SEO services to businesses across India, the USA, the UK, the UAE, Canada, and more, helping brands improve their Google rankings worldwide.",
        },
        {
            question: "How can SEO improve my website’s Google ranking and organic traffic?",
            answer: "SEO helps boost your website’s visibility on Google by optimizing content, keywords, backlinks, and technical aspects. Our expert SEO strategies drive organic traffic and improve search rankings.",
        },
        {
            question: "What are the key benefits of investing in SEO for my business?",
            answer: "SEO increases organic traffic, improves brand credibility, generates high-quality leads, enhances user experience, and delivers long-term results for your online business growth.",
        },
        {
            question: "How long does it take to see results from SEO optimization?",
            answer: "SEO is a long-term strategy, and results typically take 3-6 months, depending on competition, keyword ranking, and website optimization efforts.",
        },
        {
            question: "Do you offer local SEO services for businesses in Hyderabad?",
            answer: "Yes! Our **local SEO services** help businesses rank higher in Google My Business and local search results, attracting more customers from Hyderabad and surrounding areas.",
        },
        {
            question: "Do you provide e-commerce SEO for online stores?",
            answer: "Yes! We offer E-Commerce SEO services, including product page optimization, technical SEO, schema markup, and conversion rate optimization to boost sales and traffic.",
        },
        {
            question: "Will SEO make my website mobile-friendly and faster?",
            answer: "Yes! Our SEO services include mobile optimization, page speed improvements, and core web vitals optimization to enhance user experience and search rankings.",
        },
        {
            question: "Can I track my SEO performance and keyword rankings?",
            answer: "Absolutely! We provide regular SEO reports, keyword ranking updates, Google Analytics tracking, and insights to monitor your website’s growth and ROI.",
        },
        {
            question: "Why should I choose Bixeltek for SEO services in Hyderabad?",
            answer: "Bixeltek is a trusted SEO agency in Hyderabad, specializing in on-page SEO, off-page SEO, link building, technical SEO, and content marketing to boost your website’s search engine rankings.",
        },
    ];



    const items = [
        { text: "Measurable Goals", icon: <GrFlag />, description: "Set clear, achievable objectives that align with your business growth. Our SEO strategies focus on measurable success indicators, ensuring transparency and progress tracking." },
        { text: "Data-Driven Strategies", icon: <BsGraphUpArrow />, description: "Utilizing analytics and performance insights, we craft SEO plans backed by data. This ensures your website ranks higher and reaches the right audience effectively." },
        { text: "Transparent Reporting", icon: <TbReportAnalytics />, description: "Stay informed with detailed reports that break down your website's performance. We provide easy-to-understand analytics, keeping you in control of your SEO journey." },
        { text: "Continuous Optimisation", icon: <LuFileClock />, description: "SEO is an ongoing process. We continuously refine strategies, optimize content, and adapt to algorithm changes to keep your website competitive." },
    ];
    const seoServices = [
        {
            title: 'Keyword Research',
            description: 'Discover high-volume, low-competition keywords to improve SEO rankings, drive organic traffic, and target the right audience.',
            color: "bg-zinc-500"
        },
        {
            title: 'On-Page Optimization',
            description: 'Optimize meta tags, headings, URLs, and content structure to boost search engine rankings and enhance user experience.',
            color: "bg-violet-400"
        },
        {
            title: 'Link Building',
            description: 'Earn high-quality, authoritative backlinks using white-hat SEO techniques to improve domain authority and organic search rankings.',
            color: "bg-green-500"
        },
        {
            title: 'Content Marketing',
            description: 'Create keyword-rich, engaging, and SEO-optimized content to increase website traffic, improve search rankings, and drive conversions.',
        },
        {
            title: 'Technical SEO',
            description: 'Optimize site speed, mobile-friendliness, structured data, and indexing to ensure search engines crawl and rank your site effectively.',
        },
        {
            title: 'Mobile Optimization',
            description: 'Enhance mobile responsiveness, loading speed, and UX to improve mobile search rankings and reduce bounce rates.',
        },
        {
            title: 'Local SEO',
            description: 'Boost local search rankings with Google My Business optimization, geo-targeted keywords, citations, and customer reviews.',
        },
        {
            title: 'SEO Audits',
            description: 'Conduct in-depth website SEO audits to identify and fix errors, enhance performance, and improve search engine rankings.',
        },
        {
            title: 'Conversion Rate Optimization (CRO)',
            description: 'Optimize landing pages, CTAs, and user journey using A/B testing to increase conversions, sales, and lead generation.',
        },
    ];

    return (
        <>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
            <SeoHero />
            <section className="max-w-4xl mx-auto text-center py-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-sofiasanscondensed font-medium text-white mb-1">Why Your Website Isn&apos;t Ranking</h2>
                <h2 className='text-5xl font-sofiasanscondensed text-purple-500 mb-6'>The SEO Challenge</h2>

                <div className="grid grid-cols-2 px-2 md:px-0 md:grid-cols-3 gap-6">
                    {seoChallenges.map((item, index) => (
                        <div key={index} className="px-2 py-6 md:px-6 text-white flex flex-col justify-center items-center bg-transparent">
                            <div className="text-white text-3xl mb-3">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-center">{item.title}</h3>
                            <p className="text-sm text-gray-300 text-center">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <a href="tel:+919100032301" className="text-white text-xl font-sans group font-semibold ">
                        Book A Call With An <span className='text-purple-500 text-xl'>SEO Expert<PiGreaterThan className='inline-block text-lg group-hover:translate-x-2 transition-all duration-300 ml-1 mb-1' /></span>
                    </a>
                </div>
            </section>


            <section>
                <section>
                    <div className="min-h-screen bg-black flex items-center justify-center px-0 md:px-4 py-10">
                        <div className="max-w-7xl w-full bg-black text-white rounded-xl shadow-md p-8 flex flex-col md:flex-row">

                            <div className="w-full md:w-1/2 p-0 md:py-6 md:px-3">
                                <h2 className="text-3xl md:text-5xl font-normal font-sofiasanscondensed tracking-wide text-white mb-4 ">
                                    Why Choose <span className='text-[#6728cc]'>Bixeltek</span> – Your Trusted SEO Company in Hyderabad?
                                </h2>

                                <p className="text-gray-300 relative font-sans text-lg py-5 leading-relaxed">
                                    Ready to outshine the competition and drive consistent leads? Bixeltek is your trusted SEO company in Hyderabad, offering cutting-edge SEO services that propel your business to the top of Google&apos;s search results. Let&apos;s turn organic traffic into tangible growth.
                                </p>


                                <div className='grid grid-cols-1 gap-y-7 pb-10 pt-5  text-white'>
                                    <h3 className='font-light text-[16px] tracking-wide flex'>
                                        <VscDebugBreakpointDataUnverified size={30} className="text-[#670ef7] mr-2 mt-1" />
                                        Proven Local Expertise – We optimize your SEO for Hyderabad&apos;s unique market, ensuring high-intent local audiences find your business.
                                    </h3>
                                    <h3 className='font-light text-[16px] tracking-wide flex'>
                                        <VscDebugBreakpointDataUnverified size={30} className="text-[#670ef7] mr-2 mt-1" />
                                        Data-Driven Methodology – Our SEO strategies evolve with keyword analytics, competitor insights, and real-time performance tracking.
                                    </h3>
                                    <h3 className='font-light text-[16px] tracking-wide flex'>
                                        <VscDebugBreakpointDataUnverified size={30} className="text-[#670ef7] mr-2 mt-1" />
                                        Transparent & Collaborative – We provide clear reporting, regular updates, and involve you in key SEO strategy decisions.
                                    </h3>
                                    <h3 className='font-light text-[16px] tracking-wide flex'>
                                        <VscDebugBreakpointDataUnverified size={30} className="text-[#670ef7] mr-2 mt-1" />
                                        Cutting-Edge Tools – Advanced keyword research, auditing software, and optimization ensure peak SEO performance.
                                    </h3>
                                </div>
                                <div className='mt-2 mb-10 ml-2'>
                                    <a href="tel:+919100032301" >
                                        <button className='px-4 py-3 bg-[#670ef7] text-white transition-all duration-300 hover:bg-white font-medium hover:text-black rounded-md'>Book An Appointment</button>
                                    </a>
                                </div>
                            </div>


                            {/* Right Section: Contact Form */}
                            <ContactFrom />
                        </div>
                    </div>
                </section>
            </section>
            <section className="pt-2 pb-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
                        className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-indigo-800 to-violet-800 flex items-center justify-between flex-col lg:flex-row"
                    >
                        <div className="block text-center w-full md:w-3/4 mb-5 lg:text-left lg:mb-0">
                            <h2
                                className="font-manrope text-2xl text-white font-semibold mb-5 lg:mb-2"
                            >
                                Dominate &quot;Near Me&quot; Searches in Hyderabad with Local SEO
                            </h2>
                            <p className=" text-base md:text-xl text-indigo-100">
                                Capture high-intent customers who are actively searching for services nearby. Our targeted local SEO ensures your business appears at the top of “near me” results, driving foot traffic and real leads in Hyderabad.
                            </p>
                        </div>
                        <div className='w-full md:w-1/4 flex justify-center md:justify-end'>
                            <Link
                                href="/contact-us"
                                className="flex w-fit items-center text-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-10 transition-all duration-500"
                            >Get In Touch
                                <svg
                                    width="19"
                                    height="14"
                                    viewBox="0 0 19 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                                        stroke="#4F46E5"
                                        stroke-width="2.4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
            {/* <section className="bg-black text-gray-300 py-16">
                <div className="max-w-[90%] mx-auto px-6 lg:px-8">
                    
                    <div className="text-center">
                        <h2 className="text-5xl font-bold text-left text-white capitalize">
                            SEO Services You Can Expect from <span className='text-[#670ef7] font-normal font-sans italic'>Bixeltek</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-300 max-w-3xl text-left">
                            At Bixeltek, we provide a full suite of SEO services tailored to meet your unique business needs. Our goal is to help you gain visibility, attract organic traffic, and achieve sustainable growth in the digital landscape.
                        </p>
                    </div>


                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    We develop tailor-made SEO strategies designed to align with your specific business goals, ensuring maximum impact and results.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Optimize every element of your website, including title tags, meta descriptions, alt attributes, and internal linking, to improve search engine rankings.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Conduct comprehensive research to identify the best-performing keywords and analyze market trends to help you target the right audience.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Create engaging and valuable content that resonates with your audience, driving traffic and building authority in your industry.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Evaluate your competitors’ strategies to uncover opportunities for differentiation and market advantage.
                                </p>
                            </div>
                        </div>

                     
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Build high-quality, diverse backlinks on authoritative domains to boost your site’s credibility and search engine rankings.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Use ethical and effective SEO practices to achieve sustainable growth, with the option to combine organic strategies with paid advertising.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Share your articles and updates across social media platforms, curated websites, and relevant news outlets to maximize reach and engagement.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Leverage tools like Google Analytics to monitor trends, analyze traffic, and make data-driven decisions for your SEO campaigns.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Optimize your online store for search engines to increase product visibility, enhance user experience, and drive more sales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            <section className='py-24'>
                <div>
                    <div className=' max-w-[90%] mx-auto mb-5 text-center'>
                        <h2 className='text-white text-5xl font-sofiasanscondensed mb-3 font-semibold '>Our Comprehensive SEO Services in Hyderabad</h2>
                        <p className='text-gray-100 text-[17px] tracking-wider max-w-3xl mx-auto'>We offer a full suite of strategies and solutions, meticulously designed to propel your website above the competition. Each service aims to improve your online presence, boost conversions, and ensure long-term digital growth.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 max-w-[90%] mx-auto mt-10">
                        {seoServices.map((service, index) => (
                            <div
                                key={index}
                                className={`relative w-full h-80 border border-gray-800 bg-black hover:bg-[#670ef7] transition-all duration-300  flex flex-col justify-center items-center p-16`}>

                                <h3 className="text-white text-3xl font-bold text-center mb-2">{service.title}</h3>
                                <p className="text-gray-300 text-center">{service.description}</p>

                                {index % 4 === 0 && (
                                    <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30"><i className="fa fa-plus text-2xl" aria-hidden="true"></i></span>
                                )}

                                {(index % 4 === 1 || index == 0 || index == 2) && (
                                    <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30"><i className="fa fa-plus text-2xl" aria-hidden="true"></i></span>
                                )}

                                {(index % 4 === 2 || index == 0 || index == 3) && (
                                    <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30"><i className="fa fa-plus text-2xl" aria-hidden="true"></i></span>
                                )}

                                {(index % 4 === 3 || index == 5 || index == 6 || index == 8) && (
                                    <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30"><i className="fa fa-plus text-2xl" aria-hidden="true"></i></span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className='pt-20 pb-10 md:pb-20'>
                <div className='flex flex-col items-center gap-3'>
                    <h2 className='text-4xl md:text-5xl text-center text-white font-sofiasanscondensed'>We&apos;re an <span className='text-[#670ef7]'>ROI-led</span> SEO agency. What does that mean?</h2>
                    <p className='text-white max-w-[90%] md:max-w-5xl text-center text-[15px] md:text-[16px] '>It&apos;s simple. We&apos;re not just about ticking boxes or chasing vanity metrics. As SEO specialists,every campaign, every strategy, every decision we make is geared towards one goal: maximising your return on investment through our expert SEO services. Here&apos;s how we make it happen:</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-0 max-w-7xl text-white mx-auto text-center">

                    <div className="flex flex-col gap-3 text-xl items-center border-none md:border-r md:border-dashed  border-[#670ef7] justify-center p-6 ">
                        {items[0].icon}
                        <h3 className="mt-2 font-semibold font-poppins">{items[0].text}</h3>
                        <p className="text-sm mt-2">{items[0].description}</p>
                    </div>

                    {/* Top-right */}
                    <div className="flex flex-col gap-3 text-xl items-center border-none md:border-r md:border-dashed  border-[#670ef7] justify-center p-6">
                        {items[1].icon}
                        <h3 className="mt-2 font-semibold font-poppins">{items[1].text}</h3>
                        <p className="text-sm mt-2">{items[1].description}</p>
                    </div>

                    {/* Bottom-left */}
                    <div className="flex flex-col gap-3 text-xl items-center justify-center p-6  border-none md:border-r md:border-dashed  border-[#670ef7]">
                        {items[2].icon}
                        <h3 className="mt-2 font-semibold font-poppins">{items[2].text}</h3>
                        <p className="text-sm mt-2">{items[2].description}</p>
                    </div>

                    {/* Bottom-right */}
                    <div className="flex flex-col gap-3 text-xl items-center  justify-center p-6">
                        {items[3].icon}
                        <h3 className="mt-2 font-semibold font-poppins">{items[3].text}</h3>
                        <p className="text-sm mt-2 ">{items[3].description}</p>
                    </div>
                </div>
            </section>
            <section className='w-full flex flex-wrap max-w-[90%] mx-auto lg:flex-nowrap overflow-y-hidden items-center'>
                {/* Left Content Section */}
                <div className='w-full lg:w-1/2 px-6 py-10 lg:py-14'>
                    <h2 className="text-4xl md:text-5xl font-semibold  font-sofiasanscondensed text-white">
                        Proven Results Across <span className='text-purple-500'>Diverse Industries</span>
                    </h2>
                    <p className="mt-4 text-[16px] md:text-lg text-gray-300">
                        Our expertise spans multiple industries, helping businesses achieve growth through data-driven strategies and
                        innovative solutions. From technology and finance to healthcare and retail, we empower brands with actionable insights
                        and cutting-edge digital solutions.
                    </p>
                    <p className="mt-2 text-[16px] md:text-lg text-gray-300">
                        Explore how our tailored approach delivers measurable success, increasing engagement, conversions, and brand visibility
                        in a competitive landscape.
                    </p>
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-2 gap-5">
                        {industries.map((industry, index) => (
                            <div key={index} className="flex items-center text-lg text-white">
                                <span className="text-white text-xl inline-block  mr-3">{industry.icon}</span>
                                <h2 className='font-poppins text-xs md:text-sm'>SEO for {industry.name}</h2>
                            </div>
                        ))}
                    </div>
                    <Link href={'/industries'}>
                        <button className=" mt-6 md:mt-8 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700">
                            Learn More
                        </button>
                    </Link>
                </div>

                 <div className="flex w-full lg:w-1/2 justify-center gap-4 p-1">
                                    <div className='w-1/3 flex flex-col  items-center justify-center gap-3'>
                                        <Image src={healthcare} alt='healthcare' className='rounded-xl'></Image>
                                        <Image src={oil} alt='oil' className='rounded-xl'></Image>
                                    </div>
                                    <div className='w-1/3 flex flex-col gap-3'>
                                        <Image src={roofing} alt='roofind' className='rounded-xl'></Image>
                                        <Image src={pet} alt='pet' className='rounded-xl'></Image>
                                        <Image src={school} alt='dental' className='rounded-xl'></Image>
                                    </div>
                                    <div className='w-1/3 flex flex-col justify-center gap-3'>
                                        <Image src={lawncare} alt='lawncare' className='rounded-xl'></Image>
                                        <Image src={blackcar} alt='automobiles' className='rounded-xl'></Image>
                                    </div>
                                </div>
            </section>
            <section className='py-10'>

                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                    <div className="w-2/3  lg:w-1/3 mx-auto text-center mb-6">
                        <h2 className="text-gray-600 text-xl dark:text-neutral-200 ">Trusted by Open Source, enterprise, and more than 99,000 of you</h2>
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-6 gap-x-6">
                        <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-100" enable-background="new 0 0 2499 614" viewBox="0 0 2499 614" xmlns="http://www.w3.org/2000/svg"><path d="m431.7 0h-235.5v317.8h317.8v-235.5c0-45.6-36.7-82.3-82.3-82.3zm-308.9 0h-40.5c-45.6 0-82.3 36.7-82.3 82.3v40.5h122.8zm-122.8 196.2h122.8v122.8h-122.8zm392.5 317.8h40.5c45.6 0 82.3-36.7 82.3-82.3v-39.2h-122.8zm-196.3-121.5h122.8v122.8h-122.8zm-196.2 0v40.5c0 45.6 36.7 82.3 82.3 82.3h40.5v-122.8zm828-359.6h-48.1v449.4h254.5v-43h-206.4zm360.8 119c-93.7 0-159.5 69.6-159.5 169.6v11.5c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-21.5-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h243.1v-2.5s1.3-15.2 1.3-22.8c-.3-91.2-53.4-149.5-134.4-149.5zm-108.9 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm521.6-96.2v16.5c-20.3-34.2-58.2-55.7-97.5-55.7h-3.8c-86.1 0-145.6 68.4-145.6 168.4 0 101.3 57 169.6 141.8 169.6 67.1 0 97.5-40.5 107.6-58.2v49.4h45.6v-447h-46.8v157zm-98.8 257c-59.5 0-98.7-50.6-98.7-126.6 0-73.4 41.8-125.3 100-125.3 49.4 0 98.7 39.2 98.7 125.3 0 93.7-51.9 126.6-100 126.6zm424.1-250.7v2.5c-8.9-15.2-36.7-48.1-103.8-48.1-84.8 0-140.5 64.6-140.5 163.3s58.2 165.8 144.3 165.8c46.8 0 78.5-16.5 100-50.6v44.3c0 62-39.2 97.5-108.9 97.5-29.1 0-59.5-7.6-86.1-21.5l-2.5-1.3-17.7 39.2 2.5 1.3c32.9 16.5 69.6 25.3 105.1 25.3 74.7 0 154.4-38 154.4-143.1v-311.3h-46.8zm-93.7 241.8c-62 0-102.5-48.1-102.5-122.8 0-76 35.4-119 96.2-119 67.1 0 98.7 39.2 98.7 119 1.3 78.5-31.6 122.8-92.4 122.8zm331.7-286.1c-93.7 0-158.2 69.6-158.2 168.4v11.4c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-22.8-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h244.2v-2.5s1.3-15.2 1.3-22.8c0-89.9-53.2-148.2-135.5-148.2zm-107.6 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm440.6-127.9c-6.3-1.3-11.4-1.3-17.7-2.5-44.3 0-81 27.9-100 74.7v-72.2h-46.8l1.3 320.3v2.5h48.1v-135.4c0-20.3 2.5-41.8 8.9-60.8 15.2-49.4 49.4-81 89.9-81 5.1 0 10.1 0 15.2 1.3h2.5v-46.8z" fill="currentColor" /></svg>

                        <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-100" xmlns="http://www.w3.org/2000/svg" viewBox="-4.126838974812941 0.900767442746961 939.436838974813 230.18142889845947" width="2500" height="607"><path d="M667.21 90.58c-13.76 0-23.58 4.7-28.4 13.6l-2.59 4.82V92.9h-22.39v97.86h23.55v-58.22c0-13.91 7.56-21.89 20.73-21.89 12.56 0 19.76 7.77 19.76 21.31v58.8h23.56v-63c0-23.3-12.79-37.18-34.22-37.18zm-114.21 0c-27.79 0-45 17.34-45 45.25v13.74c0 26.84 17.41 43.51 45.44 43.51 18.75 0 31.89-6.87 40.16-21l-14.6-8.4c-6.11 8.15-15.87 13.2-25.55 13.2-14.19 0-22.66-8.76-22.66-23.44v-3.89h65.73v-16.23c0-26-17.07-42.74-43.5-42.74zm22.09 43.15h-44.38v-2.35c0-16.11 7.91-25 22.27-25 13.83 0 22.09 8.76 22.09 23.44zm360.22-56.94V58.07h-81.46v18.72h28.56V172h-28.56v18.72h81.46V172h-28.57V76.79zM317.65 55.37c-36.38 0-59 22.67-59 59.18v19.74c0 36.5 22.61 59.18 59 59.18s59-22.68 59-59.18v-19.74c-.01-36.55-22.65-59.18-59-59.18zm34.66 80.27c0 24.24-12.63 38.14-34.66 38.14S283 159.88 283 135.64v-22.45c0-24.24 12.64-38.14 34.66-38.14s34.66 13.9 34.66 38.14zm98.31-45.06c-12.36 0-23.06 5.12-28.64 13.69l-2.53 3.9V92.9h-22.4v131.53h23.56v-47.64l2.52 3.74c5.3 7.86 15.65 12.55 27.69 12.55 20.31 0 40.8-13.27 40.8-42.93v-16.64c0-21.37-12.63-42.93-41-42.93zM468.06 149c0 15.77-9.2 25.57-24 25.57-13.8 0-23.43-10.36-23.43-25.18v-14.72c0-15 9.71-25.56 23.63-25.56 14.69 0 23.82 9.79 23.82 25.56zm298.47-90.92L719 190.76h23.93l9.1-28.44h54.64l.09.28 9 28.16h23.92L792.07 58.07zm-8.66 85.53l21.44-67.08 21.22 67.08zM212.59 95.12a57.27 57.27 0 0 0-4.92-47.05 58 58 0 0 0-62.4-27.79A57.29 57.29 0 0 0 102.06 1a57.94 57.94 0 0 0-55.27 40.14A57.31 57.31 0 0 0 8.5 68.93a58 58 0 0 0 7.13 67.94 57.31 57.31 0 0 0 4.92 47A58 58 0 0 0 83 211.72 57.31 57.31 0 0 0 126.16 231a57.94 57.94 0 0 0 55.27-40.14 57.3 57.3 0 0 0 38.28-27.79 57.92 57.92 0 0 0-7.12-67.95zM126.16 216a42.93 42.93 0 0 1-27.58-10c.34-.19 1-.52 1.38-.77l45.8-26.44a7.43 7.43 0 0 0 3.76-6.51V107.7l19.35 11.17a.67.67 0 0 1 .38.54v53.45A43.14 43.14 0 0 1 126.16 216zm-92.59-39.54a43 43 0 0 1-5.15-28.88c.34.21.94.57 1.36.81l45.81 26.45a7.44 7.44 0 0 0 7.52 0L139 142.52v22.34a.67.67 0 0 1-.27.6l-46.3 26.72a43.14 43.14 0 0 1-58.86-15.77zm-12-100A42.92 42.92 0 0 1 44 57.56V112a7.45 7.45 0 0 0 3.76 6.51l55.9 32.28L84.24 162a.68.68 0 0 1-.65.06L37.3 135.33a43.13 43.13 0 0 1-15.77-58.87zm159 37l-55.9-32.28L144 70a.69.69 0 0 1 .65-.06l46.29 26.73a43.1 43.1 0 0 1-6.66 77.76V120a7.44 7.44 0 0 0-3.74-6.54zm19.27-29c-.34-.21-.94-.57-1.36-.81L152.67 57.2a7.44 7.44 0 0 0-7.52 0l-55.9 32.27V67.14a.73.73 0 0 1 .28-.6l46.29-26.72a43.1 43.1 0 0 1 64 44.65zM78.7 124.3l-19.36-11.17a.73.73 0 0 1-.37-.54V59.14A43.09 43.09 0 0 1 129.64 26c-.34.19-.95.52-1.38.77l-45.8 26.44a7.45 7.45 0 0 0-3.76 6.51zm10.51-22.67l24.9-14.38L139 101.63v28.74l-24.9 14.38-24.9-14.38z" fill="currentColor" /></svg>

                        <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-100" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2428 1002"><path fill-rule="evenodd" clip-rule="evenodd" d="M311.5 389.8h191.8l67 117.5 77.8-117.5h178.3L682.7 590.7l154 220.7H648.1l-77.8-135.8-91.7 135.8h-175l153.2-220.7-145.3-200.9Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M1279.3 640.7H955.4c2.9 26 10 45.2 21 58a76.5 76.5 0 0 0 61.1 27.3c16 0 31.5-4 45.3-12 8.8-5 18.2-13.7 28.2-26.5l159.2 14.7c-24.4 42.4-53.7 72.7-88 91.2-34.5 18.2-83.8 27.5-148.2 27.5-55.8 0-99.7-7.9-131.8-23.6a193.2 193.2 0 0 1-79.6-75c-21-34.4-31.6-74.6-31.6-121 0-65.8 21.2-119.2 63.3-159.8 42.3-40.8 100.6-61.3 175-61.3 60.3 0 108 9.2 142.8 27.5a184 184 0 0 1 79.8 79.3c18.3 34.7 27.4 79.8 27.4 135.3v18.4ZM1115 563.3c-3.2-31.3-11.6-53.7-25.2-67.1a73.1 73.1 0 0 0-53.8-20.3 73.6 73.6 0 0 0-61.6 30.6c-9.7 12.7-16 31.6-18.5 56.8H1115Zm137-173.5h168.3l81.9 267.1 84.5-267H1750l-179.1 421.5h-143.3L1252 389.8Zm463.2 212c0-64.3 21.7-117.4 65-159 43.5-41.7 102-62.6 176-62.6 84.4 0 148.2 24.5 191.3 73.5 34.6 39.4 52 88 52 145.8 0 64.7-21.5 117.8-64.5 159.3-43 41.3-102.4 62-178.5 62-67.7 0-122.5-17.1-164.3-51.5-51.4-42.6-77-98.4-77-167.6Zm162-.5c0 37.7 7.5 65.5 22.8 83.4a72 72 0 0 0 57.3 27.1c23.4 0 42.5-9 57.4-26.7 15-17.8 22.5-46 22.5-85.4 0-36.4-7.6-63.7-22.7-81.5a70.5 70.5 0 0 0-56-26.7c-23.5 0-43 9-58.3 27-15.4 18.2-23 45.9-23 82.8ZM2363.1.1a64 64 0 0 1 0 127.9 64 64 0 0 1 0-128Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M1912.1 671.5c220.3-135 326.4-327 334-419.2 8.7-106.7-71-235.9-358.9-238-345 3.6-790 158.3-1163.6 360.4h138c315.8-152.6 672-266.2 1000.8-275.2 287.7-7.8 304.4 149.2 302 199-3.6 71-74.7 234.5-252.3 373Zm-1315.7-222-36 22.7 10 17.5 26-40.1ZM419.8 567.5C212 717 57 873.2.8 1001.9 77.8 897.1 217 771 394.9 647l40.4-58.1-15.5-21.4Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M2036.3 580a819.8 819.8 0 0 0 114.2-122.8l-3-3.5c-8-9.2-17-17.5-26.5-25-21 39.8-50 83.7-88.2 128.3 1.6 7 2.8 14.7 3.5 23Z" fill="currentColor" /></svg>

                        <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-100" viewBox="0 -8.881784197001252e-16 267.51517722360785 65.24679557585003" xmlns="http://www.w3.org/2000/svg" width="2500" height="610"><path d="M263.043 56.411a4.418 4.418 0 1 0 .085 0zm0 8.33a3.874 3.874 0 1 1 3.809-3.938v.065a3.791 3.791 0 0 1-3.708 3.871h-.1m-16.96-9.535h-9.6V40.17c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6V24.287h9.216v4.225h.129a10.1 10.1 0 0 1 9.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 1 1 5.57-5.572 5.571 5.571 0 0 1-5.57 5.572m4.8 35.143h-9.61V24.287h9.61zM250.87.004h-55.21a4.728 4.728 0 0 0-4.781 4.67v55.439a4.731 4.731 0 0 0 4.781 4.675h55.21a4.741 4.741 0 0 0 4.8-4.675V4.67a4.738 4.738 0 0 0-4.8-4.67m-86.12 31.749c-4.8 0-7.68 3.205-7.68 7.875s2.879 7.878 7.68 7.878 7.687-3.2 7.687-7.878-2.881-7.875-7.687-7.875m16.525 23.437h-8.838v-4.1h-.131a12.071 12.071 0 0 1-9.544 4.868c-9.224 0-15.3-6.657-15.3-16.071 0-8.646 5.377-16.585 14.216-16.585 3.973 0 7.684 1.087 9.861 4.1h.126V9.577h9.609zm-46.139-19.048a5.756 5.756 0 0 0-5.894-5.89 6.406 6.406 0 0 0-6.784 5.89zm8.132 13.7a16.909 16.909 0 0 1-13.128 6.151c-9.6 0-17.286-6.408-17.286-16.331s7.685-16.328 17.286-16.328c8.973 0 14.6 6.4 14.6 16.328v3.01h-22.282a7.171 7.171 0 0 0 7.235 6.019 8.193 8.193 0 0 0 6.851-3.778zM47.834 24.279h9.219v4.225h.131a10.085 10.085 0 0 1 9.09-4.994c9.735 0 11.527 6.405 11.527 14.726V55.19h-9.6V40.159c0-3.588-.066-8.2-5-8.2-4.99 0-5.76 3.907-5.76 7.939v15.288h-9.6zM82.669 9.58h9.6v27.265l10.88-12.583h11.77l-12.6 14.313 12.335 16.63h-12.066L92.397 39.923h-.126v15.28h-9.6zM32.911 24.276h9.6v30.916h-9.6zm4.8-15.37a5.569 5.569 0 1 1-5.57 5.569 5.569 5.569 0 0 1 5.57-5.569M0 9.587h9.993v36.4h18.5v9.222H0zm263.744 51.522a1.2 1.2 0 0 0 1.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836" fill="currentColor" /></svg>

                        <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-100" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 33"><path d="M9.3 16.5C9.3 9 14.3 2.7 21.2.7a16.5 16.5 0 1 0 0 31.6c-6.9-2-11.9-8.3-11.9-15.8Z" fill="currentColor" /><path d="M21.7 10c4 0 7.4 2.8 8.5 6.4a8.9 8.9 0 1 0-17 0c1-3.6 4.4-6.3 8.5-6.3Z" fill="currentColor" /><path d="M24.8 19.4c0 3-2 5.5-4.8 6.3A6.6 6.6 0 1 0 20 13c2.8.8 4.8 3.4 4.8 6.4Z" fill="currentColor" /><path d="M39.6 13.5A4.4 4.4 0 0 1 44 9.1h1.3v2.7l-1 .2-1 .6-.2.4-.1.5h2.3v3H43v9.2h-3.4v-9.3h-1.3v-2.9h1.3ZM55.7 13.5h3.4v6.1a6.9 6.9 0 0 1-1.7 4.6 6 6 0 0 1-4.5 1.8c-1 0-1.8-.1-2.5-.5a6 6 0 0 1-3.2-3.4c-.3-.8-.4-1.6-.4-2.5v-6H50v6c0 .5 0 1 .2 1.3l.5 1c.2.4.5.6.9.8.3.2.8.3 1.2.3a2.6 2.6 0 0 0 2.1-1c.3-.3.4-.7.5-1l.2-1.4v-6ZM61.2 25.7V9.5h3.4v16.2h-3.4ZM66.9 25.7V9.5h3.3v16.2H67ZM78.5 21.2l3.3-7.7h3.7l-5.7 12.2h-2.7l-5.6-12.2H75l3.4 7.7ZM87 13.5h3.3v12.2H87V13.5Zm1.6-5 .8.1.6.4.4.7.2.7a1.9 1.9 0 0 1-.6 1.4l-.6.4a2 2 0 0 1-.8.1c-.5 0-1-.2-1.3-.5a2 2 0 0 1-.4-2.1c0-.3.2-.5.4-.7l.6-.4.7-.1ZM98.8 13.2a6.7 6.7 0 0 1 4.8 1.9 6.3 6.3 0 0 1 1.9 5.7h-9.8a3.3 3.3 0 0 0 3.2 2.2c.5 0 1-.1 1.4-.4.5-.2.9-.5 1.2-1h3.7c-.2.7-.5 1.3-1 1.8a6.1 6.1 0 0 1-3.3 2.3 7 7 0 0 1-6.9-1.6 6.1 6.1 0 0 1-2-4.5 6.1 6.1 0 0 1 2-4.5c.7-.6 1.4-1 2.2-1.4.8-.3 1.7-.5 2.6-.5Zm3.2 5.2c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.3-.7-2-.7s-1.4.3-2 .7c-.5.4-.9.9-1.1 1.5h6.3ZM123 13.5h3.6l-5 12.2H119l-2.5-6.5-2.5 6.5h-2.7l-5-12.2h3.6l2.7 7 2.8-7h2.2l2.8 7 2.7-7Z" fill="currentColor" /></svg>

                        <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-100" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 32"><g clip-path="url(#a)"><path d="M46.6 11c.5-.7 1-1.3 1.9-1.7.7-.5 1.6-.7 2.6-.7v3.9h-1c-1.1 0-2 .2-2.6.8-.6.5-1 1.5-1 2.8v7.3H43V8.8h3.7v2.3ZM53 16c0-1.4.2-2.7.8-3.9a6.6 6.6 0 0 1 5.9-3.6 6 6 0 0 1 4.9 2.4v-2h3.7v14.5h-3.7v-2.1c-.5.6-1.2 1.2-2 1.7-.9.4-1.8.6-3 .6a6.4 6.4 0 0 1-5.8-3.6 8.7 8.7 0 0 1-.9-4Zm11.6.1c0-.9-.2-1.7-.6-2.3-.3-.6-.8-1.1-1.4-1.5-.6-.3-1.3-.5-2-.5a3.8 3.8 0 0 0-3.3 2c-.4.6-.5 1.4-.5 2.2 0 1 .1 1.7.5 2.4a3.8 3.8 0 0 0 3.4 2 4 4 0 0 0 1.9-.5c.6-.4 1-.9 1.4-1.5.4-.6.6-1.4.6-2.3ZM86.4 8.8l-9.2 21.5h-4l3.3-7.3-6-14.2h4.2L78.5 19l3.9-10.2h4ZM95.2 23.6a8 8 0 0 1-3.8-.9 7 7 0 0 1-2.7-2.7 8 8 0 0 1-1-3.9c0-1.5.3-2.8 1-4a7 7 0 0 1 2.8-2.6 8 8 0 0 1 3.8-1 8 8 0 0 1 3.9 1 7.6 7.6 0 0 1 3.7 6.6c0 1.5-.3 2.8-1 4a7 7 0 0 1-2.8 2.6c-1.2.6-2.4 1-3.9 1Zm0-3.2a3.6 3.6 0 0 0 3.3-2c.4-.6.6-1.4.6-2.3 0-1.4-.4-2.4-1.1-3.2a3.6 3.6 0 0 0-2.7-1.1c-1.1 0-2 .4-2.7 1.1-.7.8-1.1 1.8-1.1 3.2 0 1.4.4 2.5 1 3.2.8.7 1.6 1.1 2.7 1.1ZM114.1 8.6c1.8 0 3.2.6 4.3 1.7 1 1 1.6 2.6 1.6 4.5v8.6h-3.7v-8c0-1.2-.3-2.1-1-2.7-.5-.7-1.3-1-2.3-1-1 0-1.9.3-2.5 1-.6.6-.8 1.5-.8 2.6v8h-3.8V8.9h3.8v1.8a5 5 0 0 1 1.8-1.4 6 6 0 0 1 2.6-.6ZM25.1 0H7C3 0 0 3 0 6.9V25C0 29 3 32 6.9 32H25c3.8 0 6.9-3 6.9-6.9V7C32 3 29 0 25.1 0Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M12.7 12a2.5 2.5 0 1 0 0-5.1 2.5 2.5 0 0 0 0 5Zm4-5.1a6.1 6.1 0 1 1 0 12.1V7Zm0 12.1 6.2 6.1H9V11.4l7.7 7.6Z" fill="currentColor" className="fill-white dark:fill-neutral-900" /></g></svg>
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-5 gap-x-6 sm:gap-x-6">
                        <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-100" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 88 22" xmlSpace="preserve" enable-background="new 0 0 88 22"><path d="M36.3 14.6a7.3 7.3 0 0 1-5.6 2.8c-3.8 0-6.8-2.7-6.8-6.2a6 6 0 0 1 2-4.5A6 6 0 0 1 30.5 5c2.2 0 4.3 1 5.6 2.8l-2.5 1.8a3.7 3.7 0 0 0-3.1-1.8 3.5 3.5 0 0 0-3.5 3.5c.1 2 1.7 3.5 3.6 3.5 1.3 0 2.5-.6 3.2-1.7l2.5 1.5z" fill="currentColor" /><path d="M37.7 0H40.8V17.1H37.7z" fill="currentColor" /><path d="M49.1 14.7c2 0 3.7-1.6 3.8-3.6-.1-2-1.8-3.6-3.8-3.6s-3.7 1.6-3.8 3.6c.1 2 1.7 3.6 3.8 3.6m0-9.8c1.7-.1 3.4.5 4.7 1.7 1.3 1.2 2 2.8 2.1 4.5a6.4 6.4 0 0 1-2.1 4.5 6.4 6.4 0 0 1-4.7 1.7c-3.8 0-6.8-2.7-6.8-6.2s3-6.2 6.8-6.2" fill="currentColor" /><path d="M55.3 5.1 59 5.1 62 11.5 65.2 5.1 68.6 5.1 62 17.8z" fill="currentColor" /><path d="M77.5 9.4a3 3 0 0 0-2.9-1.9c-1.3 0-2.5.7-3.1 1.9h6zm2 6.3a7 7 0 0 1-4.6 1.6c-3.8 0-6.8-2.7-6.8-6.2 0-1.7.7-3.3 1.9-4.5a6 6 0 0 1 4.6-1.7c1.7-.1 3.3.6 4.5 1.8s1.8 2.8 1.7 4.5v.8h-9.6a3.9 3.9 0 0 0 6.5 1.5l1.8 2.2zm2.8-5.3c0-2.9 2.2-5.2 5.7-5.2V8c-.7 0-1.5.3-2 .8s-.7 1.3-.6 2v6.3h-3.1v-6.7z" fill="currentColor" /><path d="M9.7 5.6a5 5 0 0 0-8.3-3.5C0 3.5-.4 5.6.3 7.4s2.5 3 4.5 3h4.9V5.6zm1.4 0a5 5 0 0 1 8.3-3.5c1.4 1.4 1.8 3.5 1.1 5.3s-2.5 3-4.5 3h-4.9V5.6zm0 11a5 5 0 0 0 8.3 3.5c1.4-1.4 1.8-3.5 1.1-5.3s-2.5-3-4.5-3h-4.9v4.8zm-6.3 3.5c1.9 0 3.5-1.5 3.5-3.5v-3.5H4.8c-1.9 0-3.5 1.5-3.5 3.5s1.6 3.5 3.5 3.5zm4.9-3.5a5 5 0 0 1-8.3 3.5C0 18.7-.4 16.6.3 14.8s2.5-3 4.5-3h4.9v4.8z" fill="currentColor" /></svg>

                        <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-100" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 151 32"><path d="M.7 7.6v7.6h15.1V0H.7v7.6ZM17.4 0v15.2h15.1V0H17.4ZM139.3 5.1a5 5 0 0 0-3 2.2c-.6 1-.8 1.8-.8 3.2v1.3h-2.2v1.4l-.1 1.3h2.3v11.1h3.3V14.5h4.8V18c0 4.2.1 5 .6 6 .4.9 1.1 1.5 2 1.7a8 8 0 0 0 3.2 0l.7-.3v-2.6l-.6.2c-1 .4-2 .2-2.4-.6-.1-.3-.2-.8-.2-4.2v-3.7h3.2v-2.7H147v-4h-.3l-1.7.6-1.3.4v3.1h-2.4l-2.4-.1v-1.4c0-1.5.2-2 .9-2.4.4-.3 1.4-.4 2-.1l.6.1V6.7c0-1.2 0-1.4-.2-1.5-.3-.1-2.3-.2-2.8 0ZM66.6 6.3c-.6.4-1 .9-1 1.6 0 1.1 1 1.9 2.2 1.8 1-.1 1.7-.8 1.7-1.8 0-.7-.2-1.1-.9-1.6-.5-.3-1.5-.3-2 0ZM42.1 16v9.6h3.2V10.9l3 7.3 3 7.4h2.3l2.9-7.4 3-7.3v14.7h3.3V6.4h-4.5L55.6 13l-2.9 7-.2.6-1-2.6-2.8-7-1.8-4.6H42V16ZM76.8 11.7a6.8 6.8 0 0 0-5 4.7c-.4 1-.5 3.3-.2 4.4a6.8 6.8 0 0 0 3.2 4.3c1.8 1 4.5 1 6.5.2l.7-.2v-3l-.7.4c-2 1-4.1.9-5.4-.5-1-1-1.3-2.4-1-4.1a4 4 0 0 1 2.4-3.4 5 5 0 0 1 4.3.5l.5.3v-3.1l-.8-.3c-1-.3-3.4-.4-4.5-.2ZM90.7 11.7c-1.1.2-2 .8-2.6 2l-.3.5v-2.4h-3.2v13.8h3.2V17l.4-.7c.5-1 1-1.6 2-1.8a4 4 0 0 1 2 .3l.4.2v-1.6c0-1.1 0-1.6-.2-1.7a4 4 0 0 0-1.7-.1ZM98 11.7a6.4 6.4 0 0 0-5 5c-.3 1-.3 3.1 0 4.3.5 2.3 2.3 4 4.6 4.7 1 .2 3 .2 4.1 0 2.1-.6 3.8-2 4.5-4 .5-1.1.7-2.4.6-3.7a6.6 6.6 0 0 0-1.9-4.6c-.7-.8-1.3-1.1-2.4-1.5-.9-.3-3.5-.4-4.5-.2Zm3.4 2.8c.8.4 1.5 1.2 1.8 2 .1.6.2 1 .2 2.3 0 1.4 0 1.7-.3 2.3-.3.8-.8 1.4-1.6 1.8-.5.2-.7.3-1.6.3-1.2 0-1.8-.2-2.5-.8-1.1-1-1.6-3.2-1.2-5.2.4-1.4 1-2.2 2-2.7.9-.4 2.4-.4 3.2 0ZM111.8 11.7a4.9 4.9 0 0 0-3.1 2.5c-.4.8-.4 2.4 0 3.3.5 1 1 1.4 3 2.4L114 21c.3.3.4 1.2.1 1.6-.7 1-3.1 1-5-.2l-.7-.4V25l.5.2c1.3.5 3.8.7 5.1.3a4.6 4.6 0 0 0 3.2-2.3c.2-.5.3-.8.3-1.7 0-1 0-1.2-.3-1.6-.6-1-1.3-1.7-3.4-2.6-1.5-.7-2-1-2-1.7-.3-1.6 2.1-2.1 4.5-1l.6.4v-1.5l-.1-1.5-.7-.2a11 11 0 0 0-4.2-.2ZM124 11.8c-1.7.4-3.2 1.4-4 2.7a9 9 0 0 0-.6 7.3c1 2.8 4 4.4 7.4 4 1.9-.2 3-.7 4.1-2 1.5-1.3 2-2.8 2-5.2 0-2.4-.5-4-1.8-5.2a5.6 5.6 0 0 0-2.9-1.6c-1.1-.3-3.1-.3-4.3 0Zm3.7 2.8c.6.3 1.2 1 1.6 1.8.2.6.2 1 .2 2.2 0 2.4-.5 3.5-1.8 4.2-.6.3-.8.4-1.7.4-1.3 0-2-.3-2.7-1-.8-1-1-1.7-1-3.4 0-2.3.5-3.5 2-4.2.6-.4.7-.4 1.8-.3.8 0 1.2 0 1.6.3ZM66 18.7v6.9h3.2V11.9h-1.6l-1.7-.1v6.9ZM.7 24.4V32h15.1V16.8H.7v7.6ZM17.4 24.4v7.5H25l7.5.1V16.8H17.4v7.6Z" fill="currentColor" /></svg>

                        <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-100" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107 32"><g clip-path="url(#a)" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.1 0A3.1 3.1 0 0 0 0 3.1v25.2c0 1.7 1.4 3.1 3.1 3.1h25.2c1.7 0 3.1-1.4 3.1-3.1V3C31.4 1.4 30 0 28.3 0H3Zm7.3 18H13c2 0 3.3-2 2.5-3.8l-2.7-6a2.4 2.4 0 0 1 4.4-2L24.7 23a2.5 2.5 0 1 1-4.6 2l-.5-1c-.4-1-1.4-1.6-2.5-1.6h-3c-1 0-2 .6-2.5 1.6l-.4 1a2.5 2.5 0 0 1-4.7-2L8 19.6c.4-1 1.3-1.6 2.4-1.6Zm10.7-9.4L22.5 5c0-.3.5-.3.6 0l.6 1.2.1.1 1.5.8c.2.1.2.5 0 .6L21.5 9a.3.3 0 0 1-.5-.4ZM7.4 13.4l3.6 1.3c.3.1.5-.1.4-.4l-1.3-3.6a.3.3 0 0 0-.6 0L8.7 12l-.1.2-1.3.6c-.2.1-.2.5 0 .6ZM42.1 26.7h-3l6.6-20.3c.1-.3.4-.4.6-.4h4.5c.2 0 .5.1.6.4L58 26.7h-3l-2-6.3H44l-2 6.3Zm2.9-9 2.8-8.6a.8.8 0 0 1 1.5 0l2.8 8.7H45Z" /><path d="M60.5 11.3v15.4h2.7V12c0-.3-.3-.6-.7-.6h-2ZM106 6h-2v20.7h2.7V6.6c0-.3-.3-.6-.7-.6ZM68.2 13.5a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0ZM77.9 11.4c3.9.3 5.4 3.8 5.7 5.4h-2.9c-.3-2-2.7-3.9-5.7-2.8-3.3 1.2-3.2 4.8-3 6 .2 1.1.6 3 3 4 3 1.1 5.4-.8 5.7-2.8h2.9c-.3 1.7-1.8 5-5.7 5.4-4.3.5-6-1.5-6.8-2.4a7 7 0 0 1-1.4-2.8c-.8-3.5.4-6.5 1.4-7.6.7-1 2.5-2.8 6.8-2.4Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M87.8 13.8c-1 1-2.2 4-1.5 7.6.2.8.8 2 1.5 2.8.7.9 2.3 2.5 5.8 2.5 3.6 0 5.1-1.6 5.9-2.5a7 7 0 0 0 1.4-2.8c.8-3.5-.5-6.5-1.4-7.6-.7-1-2.3-2.5-5.9-2.5-3.5 0-5.1 1.6-5.8 2.5Zm1 6.3c-.2-1.3-.4-4.9 3-6a5.4 5.4 0 0 1 3.6 0c3.4 1.1 3.3 4.7 3.1 6-.2 1-.6 3-3 4a5.4 5.4 0 0 1-3.7 0c-2.4-1-2.9-3-3-4Z" /></g></svg>

                        <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-100" xmlns="http://www.w3.org/2000/svg" width="2500" height="1036" viewBox="0 -6.166 294.398 121.975"><path d="M12.139 90.511c-3.939 0-7.799-.479-10.938-1.292l.487-8.277c3.053 1.123 7.313 2.012 11.254 2.012 5.952 0 10.775-2.492 10.775-8.359C23.718 63.172 0 68.002 0 50.466c0-9.325 7.315-15.834 19.941-15.834 3.214 0 6.51.397 9.809.959l-.485 7.802c-3.132-.963-6.591-1.527-9.806-1.527-6.754 0-10.211 3.134-10.211 7.638 0 10.855 23.72 6.839 23.72 23.798-.005 9.973-7.882 17.209-20.829 17.209M54.106 90.264c-2.249 0-3.938-.076-6.03-.479v17.397h-8.601V49.746h8.12c0 2.094-.082 5.309-.484 7.476h.162c2.25-5.068 6.833-8.283 12.944-8.283 9.487 0 14.712 6.75 14.712 18.814.001 14.076-7.473 22.511-20.823 22.511m3.861-34.246c-6.434 0-9.892 7.558-9.892 14.384v12.312c1.852.562 3.86.804 6.272.804 6.833 0 11.497-4.182 11.497-14.958.001-8.039-2.49-12.542-7.877-12.542zM102.519 57.381C94.561 55.936 90.7 61.485 90.7 73.466v16.238h-8.606V49.746H90.3c0 2.246-.246 5.791-.809 8.844h.162c1.771-5.388 5.79-10.377 13.271-9.651l-.405 8.442M114.803 43.797c-3.056 0-5.55-2.414-5.55-5.393 0-2.971 2.494-5.385 5.55-5.385 2.974 0 5.467 2.333 5.467 5.385 0 2.979-2.493 5.393-5.467 5.393m4.26 45.907h-8.6V49.746h8.6v39.958zM154.449 89.704V63.975c0-4.982-1.374-7.875-5.951-7.875-6.03 0-10.457 6.345-10.457 14.302v19.303h-8.603V49.746h8.203c0 2.094-.162 5.546-.563 7.796l.082.075c2.33-5.141 7.157-8.68 13.91-8.68 9.084 0 11.9 5.711 11.9 12.787v27.979h-8.521M186.675 90.425c-8.524 0-11.1-3.294-11.1-12.214V56.417h-7.634v-6.671h7.634V37.04l8.523-2.333v15.039h10.532v6.671h-10.448v19.137c0 5.954 1.205 7.558 5.224 7.558 1.769 0 3.699-.24 5.226-.643v7.076c-2.331.486-5.307.88-7.957.88" fill="currentColor" /><path d="M233.712 78.636c11.72-15.086 20.938-32.809 20.938-45.537 0-6.652-4.765-11.295-10.978-14.823.123 13.831-4.668 46.263-9.96 60.36M195.279 115.809c27.47-9.188 67.29-30.598 94.985-49.725 2.324-1.6 4.135-3.085 4.135-5.685 0-4.519-8.275-10.576-12.292-12.987-21.792 22.653-65.163 56.596-86.828 68.397" fill="currentColor" /><path d="M220.76 96.567c16.938-11.709 41.545-33.739 49.873-45.727 1.963-2.82 3.416-4.454 3.416-7.405 0-4.839-5.644-8.382-9.703-10.849-9.727 22.924-31.579 51.469-43.586 63.981M236.192 64.087c2.191-14.477.903-31.952-1.894-42.913-1.521-5.969-6.901-12.706-11.88-14.812 6.526 18.522 12.128 44.898 13.774 57.725" fill="currentColor" /><path d="M231.367 43.779C226.235 29.91 213.446.998 194.633-6.165c12.247 13.516 30.417 40.337 36.734 49.944" fill="currentColor" /></svg>

                        <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-100" width="2500" height="728" viewBox="0 0 512 149" xmlns="http://www.w3.org/2000/svg"><path d="M.06 27.679h17.852v39.662h37.651V27.679h17.875v97.358H55.563V84.542H17.912v40.495H.06V27.679zM129.993 93.326c0 8.15-6.64 14.782-14.788 14.782-8.151 0-14.787-6.632-14.787-14.782V51.41h-16.93v41.916c0 17.487 14.229 31.711 31.717 31.711 17.484 0 31.712-14.224 31.712-31.711V51.41h-16.924v41.916M194.179 51.901c-8.398 0-14.26 2.437-19.921 7.994V27.679h-16.985v59.705c0 22.348 16.158 37.653 34.311 37.653 20.181 0 37.863-15.578 37.863-36.567 0-20.723-16.305-36.569-35.268-36.569zm.422 57.423c-11.509 0-20.31-9.612-20.31-20.854 0-11.244 8.801-20.859 20.31-20.859 9.752 0 18.558 9.615 18.558 20.859 0 11.242-8.806 20.854-18.558 20.854zM257.974 56.18c0-8.538 5.689-11.245 11.917-11.245 5.014 0 11.649 3.792 15.979 8.398l11.103-13.001c-5.549-7.448-16.788-12.596-25.998-12.596-18.421 0-31.694 10.7-31.694 28.444 0 32.91 40.497 22.478 40.497 40.902 0 5.682-5.551 10.698-11.913 10.698-10.026 0-13.278-4.876-17.881-10.024l-12.327 12.729c7.86 9.617 17.608 14.495 29.257 14.495 17.47 0 31.556-10.835 31.556-27.767 0-36.566-40.496-25.188-40.496-41.033M343.184 50.947c-18.151 0-34.311 15.296-34.311 37.649v59.859h16.984v-32.369c5.662 5.553 11.521 7.994 19.922 7.994 18.962 0 35.269-15.844 35.269-36.567 0-20.992-17.687-36.566-37.864-36.566zm3.018 57.425c-11.508 0-20.31-9.625-20.31-20.859 0-11.244 8.802-20.859 20.31-20.859 9.75 0 18.557 9.615 18.557 20.859 0 11.234-8.807 20.859-18.557 20.859zM506.069 109.324c-10.018 0-12.862-4.332-12.862-10.971V68.965h15.572V54.069h-15.572v-19.64l-17.195 7.718v59.863c0 15.306 10.56 23.027 25.045 23.027 2.167 0 5.15-.14 6.777-.541l4.199-15.438c-1.896.131-4.062.266-5.964.266" fill="currentColor" /><path d="M461.278 69.831c-3.256-5.602-7.836-10.093-13.562-13.474-4.279-2.491-8.716-4.072-13.716-4.751v-17.8c5-2.123 8.103-6.822 8.103-12.304 0-7.472-5.992-13.527-13.458-13.527-7.472 0-13.569 6.055-13.569 13.527 0 5.482 2.924 10.181 7.924 12.304v17.808c-4 .578-8.148 1.825-11.936 3.741-7.737-5.876-33.107-25.153-47.948-36.412.352-1.269.623-2.577.623-3.957 0-8.276-6.702-14.984-14.981-14.984S333.78 6.71 333.78 14.986c0 8.275 6.706 14.985 14.985 14.985 2.824 0 5.436-.826 7.69-2.184l3.132 2.376 43.036 31.008c-2.275 2.089-4.394 4.465-6.089 7.131C393.099 73.737 391 79.717 391 86.24v1.361c0 4.579.87 8.902 2.352 12.963 1.305 3.546 3.213 6.77 5.576 9.685l-14.283 14.318a11.501 11.501 0 0 0-12.166 2.668 11.499 11.499 0 0 0-3.388 8.19c.001 3.093 1.206 6 3.394 8.187a11.5 11.5 0 0 0 8.188 3.394 11.51 11.51 0 0 0 8.191-3.394 11.514 11.514 0 0 0 3.39-8.187c0-1.197-.185-2.365-.533-3.475l14.763-14.765c2.024 1.398 4.21 2.575 6.56 3.59 4.635 2.004 9.751 3.225 15.35 3.225h1.026c6.19 0 12.029-1.454 17.518-4.428 5.784-3.143 10.311-7.441 13.731-12.928 3.438-5.502 5.331-11.581 5.331-18.269v-.334c0-6.579-1.523-12.649-4.722-18.21zm-18.038 30.973c-4.007 4.453-8.613 7.196-13.82 7.196h-.858c-2.974 0-5.883-.822-8.731-2.317-3.21-1.646-5.65-3.994-7.647-6.967-2.064-2.918-3.184-6.104-3.184-9.482v-1.026c0-3.321.637-6.47 2.243-9.444 1.717-3.251 4.036-5.779 7.12-7.789 3.028-1.996 6.262-2.975 9.864-2.975h.335c3.266 0 6.358.644 9.276 2.137 2.973 1.592 5.402 3.767 7.285 6.628 1.829 2.862 2.917 5.949 3.267 9.312.055.699.083 1.415.083 2.099 0 4.564-1.744 8.791-5.233 12.628z" fill="currentColor" /></svg>
                    </div>


                    <div className="mt-8 text-center">
                        <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="/casestudies-bixeltek/Tumblewash-Casestudy" target="_blank" rel="noopener noreferrer">
                            Read case studies
                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </a>
                    </div>
                </div>
            </section>
            <DarkFaqSection faqs={faqs} />
        </>
    );
}
