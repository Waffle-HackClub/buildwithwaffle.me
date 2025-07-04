"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import projectsData from "../data/projects.json";

export default function Projects() {
  const heroRef = useRef(null);
  
  const featuredProject = projectsData.projectOfTheWeek;
  const recentProjects = projectsData.recentProjects.slice(0, 2);

  return (
    <section className="text-white py-12 px-6" ref={heroRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">🚀 Student Builds</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Raw, real projects built by students who stopped waiting for permission. 
            These aren't perfect — they're honest.
          </p>
        </div>

        {/* Project of the Week */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#7736F8] px-3 py-1 rounded-full text-sm font-semibold">Project of the Week</span>
            <span className="text-gray-400 text-sm">Featured Build</span>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
            {/* Project Image - Landscape on Left */}
            <div className="lg:w-96 flex-shrink-0">
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-800/50">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  width={384}
                  height={216}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {featuredProject.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-800/60 px-2 py-1 rounded-full text-xs text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Details - Content on Right */}
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2">{featuredProject.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">{featuredProject.description}</p>
              </div>

              {/* Builders Info */}
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/20">
                <p className="text-sm font-semibold text-white mb-4">Built by:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {featuredProject.builders.map((builder, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-800/40 backdrop-blur-sm rounded-lg p-3 border border-gray-700/20">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-gray-700 overflow-hidden border-2 border-gray-900">
                          <Image
                            src={builder.image}
                            alt={builder.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-semibold text-white text-sm md:text-base lg:text-lg">{builder.name}</span>
                      </div>
                      <div className="flex gap-2">
                        {builder.github && (
                          <a
                            href={builder.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            title={`${builder.name} GitHub`}
                          >
                            <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                          </a>
                        )}
                        {builder.linkedin && (
                          <a
                            href={builder.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#0077B5] transition-colors"
                            title={`${builder.name} LinkedIn`}
                          >
                            <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 hover:bg-gray-700/60 backdrop-blur-sm px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 text-base flex-1 justify-center border border-gray-700/30"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  View Code
                </a>
                {featuredProject.liveLink && (
                  <a
                    href={featuredProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#7736F8] hover:bg-[#7736F8]/80 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 text-base flex-1 justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="mb-10">
          <h3 className="text-xl font-bold mb-6 text-center">More Recent Builds</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {recentProjects.map((project, index) => (
              <div key={index} className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/20 hover:border-gray-600/40 transition-colors duration-200 flex flex-col"> 
                {/* Project Image */}
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-800/40 mb-3 border border-gray-700/20">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={169}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Info */}
                <div className="space-y-2 flex-grow">
                  <div>
                    <h4 className="text-md font-semibold mb-1 truncate">{project.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-800/50 backdrop-blur-sm px-2 py-0.5 rounded text-xs text-gray-300 border border-gray-700/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="mt-3 pt-3 border-t border-gray-700/20">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800/50 hover:bg-gray-700/60 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 text-base flex-1 justify-center border border-gray-700/30"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        View Code
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#7736F8] hover:bg-[#7736F8]/80 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 text-base flex-1 justify-center"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-gray-400">Built by:</p>
                  </div>
                  <div className="space-y-1">
                    {project.builders.map((builder, builderIndex) => (
                      <div key={builderIndex} className="flex items-center justify-between">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full bg-gray-700 overflow-hidden border border-gray-600">
                            <Image
                              src={builder.image}
                              alt={builder.name}
                              width={32}
                              height={32}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-xs md:text-sm lg:text-base font-medium text-gray-300">{builder.name}</span>
                        </div>
                        <div className="flex gap-1.5 md:gap-2">
                          {builder.github && (
                            <a
                              href={builder.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-white transition-colors"
                              title={`${builder.name} GitHub`}
                            >
                              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                              </svg>
                            </a>
                          )}
                          {builder.linkedin && (
                            <a
                              href={builder.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-[#0077B5] transition-colors"
                              title={`${builder.name} LinkedIn`}
                            >
                              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        

        {/* Check Out More */}
        <div className="text-center">
          <Link
            href="/Projects"
            className="inline-flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/60 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold transition-colors duration-200 border border-gray-700/30 hover:border-gray-600/50"
          >
            Check Out More Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
