import React from 'react';
import './Line.css';
import NumberCounter from 'number-counter';
import { useInView } from '../../UseInWiew'; // Import your custom hook
import {motion} from 'framer-motion'
const Line = () => {
  const { ref, inView } = useInView();
    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{type:'tween   '}}
        
        ref={ref} className='Line'>
             
            <motion.div
             initial={{ opacity: 0,y:-200 }}
             animate={{ opacity: inView ? 1 : 0,y:0 }} // Animate opacity based on whether the component is in view
             transition={{ duration: 4.5, }}
             ref={ref}
            className='statistics'>
                
                <div className='statosos stat-1' >
                    
                    <span className='statosos-s'>
                    {inView ? <NumberCounter end={12} start={0} delay="2" /> : 0}
                        <span className='statosos-s'>+</span>
                    </span>
                    <div className='linosos'></div>
                    <span className='statosos-st'>vytvořených stránek</span>
                </div>
                <div className='statosos stat-2'>
                   
                    <span className='statosos-s' >
                    {inView ? <NumberCounter end={10} start={0} delay="2" /> : 0}
                        <span className='statosos-s'>+</span>
                    </span>
                    <div className='linosos'></div>
                    <span className='statosos-st'>vytvořených e-shopů</span>
                </div>
                <div className='statosos stat-3'>
                    
                    <span className='statosos-s'>
                    {inView ? <NumberCounter end={5} start={0} delay="2" /> : 0}
                        <span className='statosos-s'>+</span>
                    </span>
                    <div className='linosos'></div>
                    <span className='statosos-st'>správa instagramů</span>
                </div>
                <div className='statosos stat-4'>
                
                    <span className='statosos-s'>
                    {inView ? <NumberCounter end={14} start={0} delay="2" /> : 0}  
                        <span className='statosos-s'>+</span>
                    </span>
                    <div className='linosos'></div>
                    <span className='statosos-st'>spokojených klientů</span>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Line