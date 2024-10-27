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
            style={{ position: 'sticky', top: '50px', color: currentStepIndex >= 7 ? 'brown' : 'rgb(82, 42, 8)' }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: .3 }}>
            #Production</motion.h1>
          <motion.span
            style={{ position: 'sticky', top: '85px', color: currentStepIndex >= 7 ? 'brown' : 'rgb(82, 42, 8)' }} // Change color based on the index
            initial={{ scale: 0 }}
            whileInView={{ scale: 1.2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            {currentStepIndex < 7 ? '( ACROSS THE WORLD 🌎 )' : '( COMPARISON )'}
          </motion.span>

          {currentStepIndex < 4 ? (
            <CoffeeProductionChoroplethSVG />
          ) : currentStepIndex < 7 ? (
            <TeaProductionChoroplethSVG />
          ) : currentStepIndex < 10 ? (
            <div style={{ display: 'flex', flexDirection: 'row', transform: 'scale(0.6)', gap: '4em', position: 'sticky', top: '100px' }}>
              <CoffeeProductionChoroplethSVG />
              <TeaProductionChoroplethSVG />
            </div>
          ) : currentStepIndex < 12 ? (
            <div className='two-items' style={{ position: 'sticky', top: '130px', color: 'brown' }} >
              <ComparisonProductionPieSVG />
              <ComparisonProductionStackedPercentageBarChartSVG />
            </div>
          ) : currentStepIndex < 13 ? (
            <CoffeeProductionLineChartSVG />
          ) : (
            <TeaProductionLineChartSVG />
          )


          }

          <Scrollama onStepEnter={onStepEnter} offset={0.6}>
            <Step data={1} key={1}>
              <div
                className='comment coffee'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 1 ? 1 : 0.2,
                  marginTop: '50px',
                  marginBottom: '500px',
                }}
              >
                <p>
                  This <b style={{ fontSize: '1.5em' }}>Choropleth map</b> shows the <b>total aggregated production of Coffee</b> by country from 1990 to 2019. <br /> (in Millions. Units in Tonnes)
                </p>
              </div>
            </Step>

            <Step data={2} key={2}>
              <div
                className='comment coffee'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 2 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>
                  From a quick glance, <b style={{ fontSize: '2em' }}>Brazil</b> stands as the dominant producer of coffee globally, <br></br> accounting for an impressive nearly <b style={{ fontSize: '2em' }}>40%</b> of the world's total coffee production.
                </p>
              </div>
            </Step>

            <Step data={4} key={4}>
              <div
                className='comment tea'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 4 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>
                  This <b style={{ fontSize: '1.5em' }}>Choropleth map</b> shows the <b>total aggregated production of Tea</b> by country from 1990 to 2019. <br /> (in Millions. Units in Tonnes)
                </p>
              </div>
            </Step>

            <Step data={5} key={5}>
              <div
                className='comment tea'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 5 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>
                  From a quick glance, <b style={{ fontSize: '2em' }}>China</b> and <b style={{ fontSize: '2em' }}>India</b> are the dominant producers.
                </p>
              </div>
            </Step>

            <Step data={7} key={7}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '70vw',
                marginTop: '50px',
                marginBottom: '400px',
              }}>
                <div
                  className='comment coffee'
                  style={{
                    zIndex: 999,
                    opacity: currentStepIndex === 7 ? 1 : 0.2,
                  }}
                >
                  <p>
                    <b style={{ fontSize: '1.1em', textDecoration: 'underline' }}>Top 5 Producers of Coffee:</b>
                    <ol>
                      <li><b>Brazil (75 Million Tonnes)</b></li>
                      <li>Vietnam (29 Million Tonnes)</li>
                      <li>Colombia (22 Million Tonnes)</li>
                      <li>Indonesia (15 Million Tonnes)</li>
                      <li>Ethiopia (9 Million Tonnes)</li>
                    </ol>
                  </p>
                </div>
                <div
                  className='comment tea'
                  style={{
                    zIndex: 999,
                    opacity: currentStepIndex === 7 ? 1 : 0.2,
                  }}
                >
                  <p>
                    <b style={{ fontSize: '1.1em', textDecoration: 'underline' }}>Top 5 Producers of Tea:</b>
                    <ol>
                      <li><b>China (159 Million Tonnes)</b></li>
                      <li><b>India (123 Million Tonnes)</b></li>
                      <li>Kenya (41 Million Tonnes)</li>
                      <li>Sri Lanka (37 Million Tonnes)</li>
                      <li>Turkey (30 Million Tonnes)</li>
                    </ol>
                  </p>
                </div>
              </div>
            </Step>
            <Step data={8} key={8}>
              <div
                className='comment comparison'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 8 ? 1 : 0.2,
                  marginBottom: '500px',
                  color: 'rgb(82, 42, 8)'
                }}
              >
                <p>
                  <h2>Interestingly,</h2> production of <b style={{ fontSize: '1.3em' }}>Tea</b> is concentrated in <b style={{ fontSize: '1.3em' }}>Eastern</b> countries, <br></br>while production of <b style={{ fontSize: '1.3em' }}>Coffee</b> is concentrated in <b style={{ fontSize: '1.3em' }}>Western Hemisphere</b> countries.
                </p>
              </div>
            </Step>
            <Step data={9} key={9}>
              <div
                className='comment comparison'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 9 ? 1 : 0.2,
                  marginBottom: '500px',
                  color: 'rgb(82, 42, 8)'
                }}
              >
                <p>
                  There is a noticeable <b style={{ fontSize: '1.3em' }}>difference in production volumes</b> as well.
                </p>
              </div>
            </Step>
            <Step data={10} key={10}>
              <div
                className='comment comparison position-left'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 10 ? 1 : 0.2,
                  marginBottom: '900px',
                  color: 'rgb(82, 42, 8)',
                  width: '400px',
                }}
              >
                <p><b>Other than in 1990,</b><br></br> Coffee production has consistently remained below tea production every year, <br></br>
                  with its share decreasing over time, but overall <b>maintaining a consistent 2:3 production ratio in favor of tea.</b></p>
              </div>
            </Step>
            <Step data={10} key={10}>
              <div
                className='comment comparison position-left'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 10 ? 1 : 0.2,
                  marginBottom: '900px',
                  color: 'rgb(82, 42, 8)',
                  width: '400px',
                }}
              >
                <p>The disparity in production volumes may be attributed to the differing cultivation challenges associated with coffee and tea.
                  Coffee beans require more specific growing conditions and meticulous care, while tea plants are generally more resilient and easier to cultivate. <br></br>
                  This fundamental difference in agricultural demands could explain why tea consistently outpaces coffee in overall production.</p>
              </div>
            </Step>
            <Step data={11} key={11}>
              <div
                className='comment comparison'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 11 ? 1 : 0.2,
                  marginBottom: '900px',
                  color: 'rgb(82, 42, 8)',
                  width: '400px',
                }}
              >
                <p>Despite their differences, both coffee and tea boast <b>rich histories of competition in their production.</b></p>
              </div>
            </Step>
            <Step data={12} key={12}>
              <div
                className='comment comparison'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 12 ? 1 : 0.2,
                  marginBottom: '900px',
                  color: 'rgb(82, 42, 8)',
                  width: '400px',
                }}
              >
                <p><b style={{ fontSize: '1.3em' }}>Vietnam</b> ranked 5th in coffee production in 1990 but swiftly gained momentum, experiencing a remarkable surge in output from 1998.<br></br>
                  <b style={{ fontSize: '1.3em' }}>It soared to 2nd place</b> and has maintained this rank with steady annual increases in production from then on.</p>
              </div>
            </Step>
            <Step data={13} key={13}>
              <div
                className='comment comparison'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 13 ? 1 : 0.2,
                  marginBottom: '900px',
                  color: 'rgb(82, 42, 8)',
                  width: '400px',
                }}
              >
                <p>Meanwhile, <b style={{ fontSize: '1.3em' }}>China</b> and <b style={{ fontSize: '1.3em' }}>India</b> were in close competition until 2004,
                  when China's production volume experienced a significant surge, allowing it to pull ahead of India. <br></br>This marked a pivotal shift, with both countries consistently standing out in production levels compared
                  to their peers – Kenya, Sri Lanka, and Turkey.</p>
              </div>
            </Step>
            <Step data={14} key={14}>
              <div
                className='comment question'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 14 ? 1 : 0.2,
                  marginBottom: '900px',
                  width: '400px',
                }}
              >
                <p><i>With a greater understanding of coffee and tea's global production setup,<br></br> <b style={{ fontSize: '1.2em' }}>how do coffee and tea travel from producer countries to the rest of the world?</b></i></p>
              </div>
            </Step>
          </Scrollama>
        </div>


        <div className="introduction-trade">
          <h1 className="introduction-trade-h1">#Trade</h1>
          <p>( IMPORTS, EXPORTS )</p>
        </div>

      </ReactLenis>
    </main>
  );
};

export default App;