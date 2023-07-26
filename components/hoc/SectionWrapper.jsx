import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => 
    function HOC() {
        return (
            <div>
                <nav id={idName}>
                    &nbsp;
                </nav>
                <Component />
            </div>    
        ) 
    }

    

export default SectionWrapper