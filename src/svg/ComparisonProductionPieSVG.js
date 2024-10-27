import { motion } from 'framer-motion';

const ComparisonProductionPieSVG = () => {

    return (
        <motion.div
            style={{ position: 'relative', marginTop: '130px' }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div
                style={{
                    position: 'absolute',
                    right: '250px',
                    bottom: '450px',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#FAf9f6',
                    borderRadius: '20px',
                    padding: '10px',
                    zIndex: 1, // Ensure legend is on top
                }}
            >
                <span>☕ : Coffee, 226,000 Mt*</span>
                <span>🍵 : Tea, 480,000 Mt*</span>
                <span style={{ fontSize: '0.8em' }}>
                    <i>* Mt: Million Tonnes</i>
                </span>
            </div>

            <svg width="960" height="600" style={{ transform: 'scale(0.4)' }}>
                <path fill="#522A08" d="M128.843 428.351A300 300 0 0 1 400 0v300Z" className="arc coffee 225734.82" />
                <path fill="#768731" d="M400 0a300 300 0 1 1-271.157 428.351L400 300Z" className="arc tea 478888.619" />
                <text x="30%" y="30%" textAnchor="middle" alignmentBaseline="middle" fontSize="80">
                    ☕
                </text>
                <text x="50%" y="60%" textAnchor="right" alignmentBaseline="middle" fontSize="80">
                    🍵
                </text>
            </svg>

            <h4 style={{ textAlign: 'center', marginTop: '0px', position: 'relative', bottom: '130px',transform:'scale(0.95)' }}>Pie Chart of Coffee and Tea's Production Volumes</h4>
        </motion.div>

    )
}
export default ComparisonProductionPieSVG;