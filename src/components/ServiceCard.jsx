import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import Tilt from "react-parallax-tilt"

export default function ServiceCard({service, index}) {
  return (
    <Tilt
    className="flex flex-col justify-center rounded-xl items-center xs:w-[250px] w-[80%] text-white transform-style-preserve-3d"
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.02}
  >
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    className=' w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 p-[2px] rounded-xl shadow-card'>
        <div className="flex gap-5 flex-col min-h-[250px] rounded-xl text-white justify-center items-center text-[20px] bg-gradient-to-t from-violet-950 to-black translate-z-60">
          <img src={service.icon} width={50} height={50} />
          <div className="text-center rounded-xl w-full px-7">{service.title}</div>
        </div>
    </motion.div>
    
  </Tilt>
  )
}
