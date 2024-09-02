import { motion, useInView, useAnimation, inView } from "framer-motion"
import { useRef, useEffect } from "react"
export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible")
      slideControls.start("visible")
    }
  }, [isInView])
  return (
    <section className=" relative w-full h-screen flex justify-center items-center mx-auto bg-gradient-to-t from-black to-transparent">
      <div ref={ref} className={` relative w-fit flex flex-row items-center justify-center overflow-hidden gap-5`}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col justify-center mb-[100px] sm:mb-0 items-center h-fit w-fit">
          <h1 className=" font-black text-white lg:text-[70px] sm:text-[70px] xs:text-[50px] text-[45px] lg:leading-[98px] text-center">Hello, I'm <span className="bg-gradient-to-r from-violet-500 to-purple-300 bg-clip-text text-transparent">Mohamed</span></h1>
          <p className={`$text-[#dfd9ff] text-center font-medium lg:text-[20px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] w-[50%]`}>
            I'm a Full-Stack Developer design and create websites and applications for various platforms
          </p>
          <a href="#about">
            <button className=" mt-6 cursor-pointer font-semibold overflow-hidden relative z-100 rounded-md border-2 border-violet-500 group px-8 py-2">
              <span className=" flex items-center gap-2 relative z-10 text-violet-400 group-hover:text-white text-xl duration-500">Read More About Me <svg
                className="w-5 h-5"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg></span>

              <span className="absolute w-full h-full bg-violet-500 -left-44 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
              <span className="absolute w-full h-full bg-violet-500 -right-44 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>

            </button>
          </a>
        </motion.div>
      </div>

      <div className=" absolute xs:bottom-3 bottom-16 w-full flex justify-center items-center">
        <a href="#about">
          <div className=" w-[35px] h-[64px] rounded-full border-2 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [3, 22, 3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="border-t-[20px] border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent"
            />
          </div>
        </a>
      </div>
    </section>
  )
}
