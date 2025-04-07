import React from 'react'
import {  footerLinks } from '../../assets/assets';

const Footer = () => {
  

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/10 mt-24  w-full">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-primary/30 text-gray-500">
                <div>
                <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center" >
              <img src="/favicon.svg" alt="Favicon" className="w-8 h-8" />
              <h1 className=" text-2xl font-bold text-gray-700">rocify</h1>
            </div>
          </div>
                    <p className="max-w-[410px] mt-6">We deliver fresh groceries and snacks straight to your door. Trusted by thousands , we aim to make your shopping experience simple and affordable.</p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className="hover:underline transition">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright { new Date().getFullYear()} © Grocify All Right Reserved.
            </p>
        </div>
    );
};

export default Footer
