"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import { Content } from 'next/font/google';

const TAB_DATA = [
    { id: "skills", label: "Skills",Content:(
        <ul className='list-disc list-inside pl-2'>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            
        </ul>
    ) },
    { id: "education", label: "Education", Content: (
        <ul className='list-disc list-inside pl-2'>
            <li>Bachelor's in Computer Science</li>
            <li>Master's in Software Engineering</li>
        </ul>
    ) },
    { id: "certifications", label: "Certifications", Content: (
        <ul className='list-disc list-inside pl-2'>
            <li>Certified JavaScript Developer</li>
            <li>React Professional Certification</li>
        </ul>
    ) },
];

const AboutSection = () => {

    const [tab, setTab] = useState("skills");
    const [isPending,startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/aboutme1.png" alt="Description" width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
                    <p className='text-base md:text-lg' >I am a full stack developer with a passion for building web applications.
                        blah blah blah more.I am a full stack developer with a passion for building web applications.
                        blah blah blah more.I am a full stack developer with a passion for building web applications.
                        blah blah blah more.I am a full stack developer with a passion for building web applications.
                        blah blah blah more.I am a full stack developer with a passion for building web applications.
                        blah blah blah more.I am a full stack developer with a passion for building web applications.
                        blah blah blah more.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
                    </div>
                    <div className='mt-4'>
                        {TAB_DATA.find(item => item.id === tab)?.Content}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default AboutSection

