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
          <a href="../MohamedBchir_Resume.pdf"
           download="MohamedBchir_Resume.pdf"
           className=" mt-6">
            <button className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-900 py-1 pl-6 pr-14 font-medium text-neutral-50">
              <span className="z-10 pr-2">Download Resume</span>
              <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-gradient-to-r from-violet-400 to-purple-300 transition-[width] group-hover:w-[calc(100%-8px)]">
                <div className="mr-3.5 flex items-center justify-center"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-50">
                  <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                  </path>
                </svg>
                </div>
              </div>
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
