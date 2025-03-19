import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"
export default function ProjectCard({ project, index }) {
    return (
        <div
            className=" flex justify-center items-center overflow-hidden w-[300px] h-auto text-white rounded-2xl transform-style-preserve-3d"
        >
            <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)} className=" w-full h-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 p-[2px] rounded-2xl shadow-card">
                <div className="max-w-sm h-full flex flex-col items-center rounded-2xl shadow-lg bg-gradient-to-t from-violet-950 to-black translate-z-60">
                    <img className="w-[95%] h-[200px] rounded-lg mt-2" src={project.image} alt="Sunset in the mountains" />
                    <div className=" px-4 pt-3">
                        <div className="font-bold text-xl mb-2">{project.name}</div>
                        <p className="text-secondary text-sm">
                            {project.description}
                        </p>
                    </div>
                    <div className=" w-full flex justify-start gap-2 mt-2 px-4">
                        {/* Repo Button */}
                        <a
                            href={project.source_code_link}
                            className={project.hasDemo ? "w-1/2" : "w-full"} // Adjust width based on hasDemo
                        >
                            <button
                                type="button"
                                className="py-2 px-4 w-full flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    fill="currentColor"
                                    className="mr-2"
                                    viewBox="0 0 1792 1792"
                                >
                                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                                </svg>
                                Repo
                            </button>
                        </a>
                        {/* Demo Button (only if hasDemo is true) */}
                        {project.hasDemo && (
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-1/2"
                            >
                                <button
                                    type="button"
                                    className="py-2 px-4 w-full flex justify-center items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="mr-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                                    </svg>
                                    Demo
                                </button>
                            </a>
                        )}
                    </div>
                    <div className="px-4 py-4 flex flex-wrap justify-center gap-1">
                        {project.tags.map((tag, key) => (
                            <span key={key} className={`bg-gray-200  rounded-full text-xs px-3 py-1 font-semibold ${tag.color}`}>#{tag.name}</span>
                        ))}
                    </div>
                </div></motion.div>
        </div>

    )
}
