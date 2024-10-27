import React, { useState, useEffect, useRef } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { ReactLenis } from 'lenis/react';
import { motion, useScroll } from 'framer-motion';
import './styles/App.css';
import CoffeeProductionLineChartSVG from './svg/CoffeeProductionLineChartSVG';
import CoffeeProductionChoroplethSVG from "./svg/CoffeeProductionChoroplethSVG";
import TeaProductionChoroplethSVG from './svg/TeaProductionChoroplethSVG';
import TeaProductionLineChartSVG from './svg/TeaProductionLineChartSVG';
import ComparisonProductionPieSVG from './svg/ComparisonProductionPieSVG';
import ComparisonProductionStackedPercentageBarChartSVG from './svg/ComparisonProductionStackedPercentageBarChartSVG';

function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentStepIndexSecond, setCurrentStepIndexSecond] = useState(0);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };
  const onStepEnterSecond = ({ data }) => {
    setCurrentStepIndexSecond(data);
  };

  const { scrollYProgress } = useScroll();

  return (
    <main>

      <ReactLenis root>
        <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />

        <div className="introduction">
          <div><h1 className="coffee-h1">Coffee</h1><h1 className='versus-h1'>&nbsp;vs&nbsp;</h1><h1 class="tea-h1">Tea</h1></div>
          <span>( Data Visualisation SC4024 )</span>
        </div>
        <div className="introduction-production">
          <h1 className="introduction-production-h1">#Production</h1>
        </div>

        <div className="introduction-production coffee"

          style={{ height: 'max-content', position: 'relative' }}>

          <motion.h1
            style={{ position: 'sticky', top: '50px' }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: .3 }}>
            #Production</motion.h1>
          <motion.span
            style={{ position: 'sticky', top: '85px' }}

            initial={{ scale: 0 }}
            whileInView={{ scale: 1.2 }}
            viewport={{ once: true }}
            transition={{ duration: .3 }}>
            ( of Coffee )</motion.span>
          <CoffeeProductionChoroplethSVG />

          <Scrollama onStepEnter={onStepEnter} offset={0.6} >
            <Step data={1} key={1}>
              <div
                className='comment coffee'
                style={{
                  position: 'absolute',
                  zIndex: 999,
                  opacity: currentStepIndex === 1 ? 1 : 0.2,
                  top: '50vh',
                }}><p>This <b style={{ fontSize: '1.5em' }}>Choropleth map</b> shows the <b>total aggregated
                  production of coffee</b> by country from 1990 to 2019. <br></br> (in Millions. Units in Tonnes) </p></div>
            </Step>
            <Step data={2} key={2}>
              <div
                className='comment coffee'
                style={{
                  zIndex: 999,

                  opacity: currentStepIndex === 2 ? 1 : 0.2,
                  top: '50vh',
                  marginBlock: '300px'

                }}>
                <p> <b style={{ fontSize: '2em' }}>Brazil</b> is the dominant producer, accounting for almost 40% of the world’s coffee production.</p></div>
            </Step>
            <Step data={3} key={3}>
              <div
                className='comment coffee'

                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 3 ? 1 : 0.2,
                  marginTop: '300px',
                  marginBottom: '500px',
                  backgroundColor: 'rgba(250, 249, 246,1.0)'
                }}>

                <h4 style={{ color: 'black', textAlign: 'center' }}>Yearly Production of Coffee by Top 5 Countries in the World (in Tonnes)</h4>
                <CoffeeProductionLineChartSVG></CoffeeProductionLineChartSVG>
              </div>
            </Step>
          </Scrollama>
        </div>
        <div className="introduction-production tea"

          style={{ height: 'max-content', position: 'relative' }}>

          <motion.h1
            style={{ position: 'sticky', top: '50px' }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: .3 }}>
            #Production</motion.h1>
          <motion.span
            style={{ position: 'sticky', top: '85px' }}

            initial={{ scale: 0 }}
            whileInView={{ scale: 1.2 }}
            viewport={{ once: true }}
            transition={{ duration: .3 }}>
            ( of Tea )</motion.span>
          <TeaProductionChoroplethSVG />

          <Scrollama onStepEnter={onStepEnter} offset={0.6} >
            <Step data={1} key={1}>
              <div
                className='comment tea'
                style={{
                  position: 'absolute',
                  zIndex: 999,
                  opacity: currentStepIndex === 1 ? 1 : 0.2,
                  top: '50vh',
                }}><p>This <b style={{ fontSize: '1.5em' }}>Choropleth map</b> shows the <b>total aggregated
                  production of Tea</b> by country from 1990 to 2019. <br></br> (in Millions. Units in Tonnes) </p></div>
            </Step>
            <Step data={2} key={2}>
              <div
                className='comment tea'
                style={{
                  zIndex: 999,

                  opacity: currentStepIndex === 2 ? 1 : 0.2,
                  top: '50vh',
                  marginBlock: '300px'

                }}>
                <p> <b style={{ fontSize: '2em' }}>China</b> and <b style={{ fontSize: '2em' }}>India</b> are the dominant producers.</p></div>
            </Step>
            <Step data={3} key={3}>
              <div
                className='comment tea'

                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 3 ? 1 : 0.2,
                  marginTop: '300px',
                  marginBottom: '500px',
                  backgroundColor: 'rgba(250, 249, 246,1.0)'
                }}>

                <h4 style={{ color: 'black', textAlign: 'center' }}>Yearly Production of Tea by Top 5 Countries in the World (in Tonnes)</h4>
                <TeaProductionLineChartSVG></TeaProductionLineChartSVG>
              </div>
            </Step>
          </Scrollama>

          {/*              <div
                className='comment tea'

                style={{
                  zIndex: 999,
                  opacity: currentStepIndexSecond === 1 ? 1 : 0.2,
                  marginTop: '300px',
                  marginBottom: '500px'
                }}>
                <p>Interesting finding: <b>Tea</b> is primarily associated with <b>Eastern</b> countries, while <b>Coffee production</b> is concentrated in <b>Western Hemisphere</b> countries.</p>
              </div> */}
        </div>
        <div className="introduction-production comparison"
          style={{ height: 'max-content', position: 'relative' }}>

          <motion.h1

            style={{ position: 'sticky', top: '50px', color: 'brown' }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: .3 }}>
            #Production</motion.h1>
          <motion.span
            style={{ position: 'sticky', top: '85px', color: 'brown' }}

            initial={{ scale: 0 }}
            whileInView={{ scale: 1.2 }}
            viewport={{ once: true }}
            transition={{ duration: .3 }}>
            ( Comparison between Coffee and Tea )</motion.span>

          <div className='two-items' style={{ position: 'sticky', top: '130px', color: 'brown' }} >
            <ComparisonProductionPieSVG />
            <ComparisonProductionStackedPercentageBarChartSVG />
          </div>

          <Scrollama onStepEnter={onStepEnterSecond} offset={0.6}>

            <Step data={1} key={1} >
              <motion.div
                className='comment comparison position-left'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndexSecond === 1 ? 1 : 0.2,
                  marginTop: '300px',
                  marginBottom: '500px',
                  width:'550px'
                }}>
                <p style={{ color: 'brown' }}><b style={{ color: 'black' }}>Other than in 1990, with Coffee's impressive domination in production relative to tea</b>, <br></br> Coffee production has consistently remained below tea production every year, <br></br>
                  with its share decreasing over time, but overall <b>maintaining a consistent 2:3 production ratio in favor of tea.</b></p>
              </motion.div>
            </Step>
            <Step Step={2} key={2} >
              <div
                className='comment tea'

                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 2 ? 1 : 0.2,
                  marginBlock: '300px'
                }}>
                <p></p>
              </div>
            </Step>

          </Scrollama>
        </div>
        {/* # Trade */}
        <div className="introduction-trade">
          <h1 className="introduction-trade-h1">#Trade</h1>
          <p>( IMPORTS, EXPORTS, RE-EXPORTS. Are top producers also the top exporters? Who are the top importers?)</p>
        </div>
        
        </ReactLenis>
    </main>
  );
};

export default App;