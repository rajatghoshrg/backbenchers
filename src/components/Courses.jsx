import React from "react";
import { FaGraduationCap, FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import courses from "../data/courses";

const Courses = () => {
  return (
    <section className="bg-[#051424] text-white py-24 px-6 md:px-16 lg:px-24">

      {/* Heading */}
      <div className="text-center mb-14">
        <span className="text-[#5de6ff] text-sm uppercase tracking-wider">
          Programs Offered
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Semester-Based
          <span className="text-[#5de6ff]"> Programs</span>
        </h2>

        <p className="text-[#94a3b8] mt-4 max-w-2xl mx-auto">
          Comprehensive semester guidance for college students.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-[rgba(18,33,49,0.7)]
            border border-[#273647]
            rounded-3xl p-7
            hover:border-[#5de6ff]
            hover:-translate-y-2
            transition-all duration-300"
          >
            <div className="h-48 rounded-2xl overflow-hidden mb-5">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <h3 className="text-2xl font-bold">
              {course.title}
            </h3>

            <div className="mt-6 space-y-3">

              <div className="flex justify-between">
                <span className="text-[#94a3b8]">
                  Semesters
                </span>

                <span>
                  {course.semesters}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#94a3b8]">
                  Fee
                </span>

                <span className="text-[#5de6ff] font-semibold">
                  {course.fee}
                </span>
              </div>

            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#0d1c2d] border border-[#273647]">
              <p className="text-sm text-[#94a3b8]">
                ✓ 50% before semester starts
              </p>

              <p className="text-sm text-[#94a3b8] mt-2">
                ✓ Remaining 50% during semester
              </p>
            </div>

            <div className="mt-7">
              <a
                href="/pdfs/fees-structure.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  text="View Fee Structure"
                  icon={<FaArrowRight />}
                />
              </a>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Courses;