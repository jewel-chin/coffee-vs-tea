import { motion } from 'framer-motion';

const TeaSankey = () => {
    const LineChart = '/images/sankey_tea_with_labels_sharp.png';
    return (
        <motion.div
            style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'sticky',
                marginLeft: '10px',
                marginRight:'50px'
            }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
            <div class="image-container">
            <motion.img
                    src={process.env.PUBLIC_URL + LineChart}
                    whileHover={{ scale: 1.1 }} 
                    transition={{ duration: 0.5 }}
                /></div>
        </motion.div>
    )

}
export default TeaSankey;