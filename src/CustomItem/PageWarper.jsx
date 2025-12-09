import { motion } from 'framer-motion';
import React from 'react';


const PageWarper = ({children}) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: -40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.98 }}
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }}
      >
        {children}
      </motion.div>
    );
};

export default PageWarper;