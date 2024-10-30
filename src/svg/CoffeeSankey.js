import { motion } from 'framer-motion';

const CoffeeSankey = () => {
    const LineChart = '/images/sankey_coffee_with_labels_sharp.png';
    return (
        <motion.div
            style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'sticky',
                marginRight: '10px',
                marginLeft:'50px'
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
export default CoffeeSankey;