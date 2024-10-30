import { motion } from 'framer-motion';

const CoffeeSankey = () => {
    const LineChart = '/images/sankey_coffee_with_labels_sharp.png';
    return (
        <motion.div
            style={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '50px',
                position: 'sticky',
                top: '100px',
            }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
            <div class="image-container">
                <img src={process.env.PUBLIC_URL + LineChart} style={{ zIndex: '-1' }}></img></div>

        </motion.div>
    )

}
export default CoffeeSankey;