import React from "react";
import Button from "./Button";
import {
    FaRocket,
    FaGraduationCap,
    FaLaptopCode,
    FaUniversity,
    FaUsers,
    FaBriefcase,
    FaStar,
    FaBookOpen,
} from "react-icons/fa";

const Hero = () => {
    return (
        <section className="bg-[#051424] text-white min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-20 overflow-hidden">

            <div className="max-w-5xl mx-auto text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 border border-[#273647] bg-[rgba(18,33,49,0.7)] px-5 py-2 rounded-full text-[#5de6ff] text-sm mb-6">
                    <FaRocket />
                    <span>AN INITIATIVE BY A BACKBENCHER FOR THE BACKBENCHERS</span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight font-[Sora]">
                    TO BE THE
                    <span className="text-[#5de6ff]"> BEST </span>
                    <br />
                    GET TRAINED FROM THE
                    <span className="text-[#5de6ff]"> BEST </span>
                </h1>

                {/* Description */}
                <p className="text-[#94a3b8] text-lg mt-6 leading-relaxed max-w-3xl mx-auto">
                    Find your best guidance for BCA, MCA, B.Tech (CSE / IT), B.Sc (CS / IT),
                    Polytechnic (CST) and modern tech careers with industry-focused learning.
                </p>

                {/* Course Tags */}
                <div className="flex flex-wrap justify-center gap-4 mt-8">

                    <div className="flex items-center gap-2 bg-[#122131] border border-[#273647] px-5 py-3 rounded-xl">
                        <FaGraduationCap className="text-[#5de6ff]" />
                        BCA / MCA
                    </div>

                    <div className="flex items-center gap-2 bg-[#122131] border border-[#273647] px-5 py-3 rounded-xl">
                        <FaLaptopCode className="text-[#5de6ff]" />
                        B.Tech (CSE / IT)
                    </div>

                    <div className="flex items-center gap-2 bg-[#122131] border border-[#273647] px-5 py-3 rounded-xl">
                        <FaBookOpen className="text-[#5de6ff]" />
                        B.Sc (CS / IT)
                    </div>

                    <div className="flex items-center gap-2 bg-[#122131] border border-[#273647] px-5 py-3 rounded-xl">
                        <FaUniversity className="text-[#5de6ff]" />
                        Polytechnic (CST)
                    </div>

                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

                    <Button
                        text="Join Now"
                    />

                    <Button
                        text="Explore Courses"
                        variant="secondary"
                    />

                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">

                    <div className="bg-[rgba(18,33,49,0.7)] border border-[#273647] rounded-2xl p-6 hover:border-[#5de6ff] transition duration-300">
                        <FaUsers className="text-[#5de6ff] text-3xl mx-auto mb-3" />
                        <h2 className="text-[#5de6ff] text-3xl font-bold">15K+</h2>
                        <p className="text-[#94a3b8] mt-2">Students Trained</p>
                    </div>

                    <div className="bg-[rgba(18,33,49,0.7)] border border-[#273647] rounded-2xl p-6 hover:border-[#5de6ff] transition duration-300">
                        <FaBriefcase className="text-[#5de6ff] text-3xl mx-auto mb-3" />
                        <h2 className="text-[#5de6ff] text-3xl font-bold">92%</h2>
                        <p className="text-[#94a3b8] mt-2">Placement Rate</p>
                    </div>

                    <div className="bg-[rgba(18,33,49,0.7)] border border-[#273647] rounded-2xl p-6 hover:border-[#5de6ff] transition duration-300">
                        <FaStar className="text-[#5de6ff] text-3xl mx-auto mb-3" />
                        <h2 className="text-[#5de6ff] text-3xl font-bold">4.9/5</h2>
                        <p className="text-[#94a3b8] mt-2">Student Rating</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;