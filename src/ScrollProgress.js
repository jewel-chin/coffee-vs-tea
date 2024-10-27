import { motion, useScroll } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div style={{ scaleX: scrollYProgress, backgroundColor:'red' }} />  
  )
}