import { motion } from 'framer-motion'
import React from 'react'

const animations = {
    initial:{opacity:1},
    animate:{opacity:[0.8,1]},
    exit:{opacity:1}
}

const Animation = ({children}:{children:any}) => {
    return (
        <motion.div variants={animations} 
            initial="initial" 
            animate="animate" 
            exit="exit"
            transition={{ ease: [0.43, 0.13, 0.23, 0.96], duration: 0.5 }}
            >
            {children}
            
        </motion.div>
    )
}
export default Animation;
