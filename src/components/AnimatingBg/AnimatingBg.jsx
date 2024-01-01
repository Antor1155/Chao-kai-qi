import { motion } from "framer-motion"

const AnimatingBg = () => {

    

    return (
        <motion.div
            style={{
                width: '50vw',
                height: '70vh',
                background: "rgba(201, 10, 30, 9)",
                position: 'absolute',
                zIndex: -1,
            }}
        >

        </motion.div>
    );
};

export default AnimatingBg;