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
import CoffeeSankey from './svg/CoffeeSankey';
import TeaSankey from './svg/TeaSankey';
import CoffeeNetwork from './svg/CoffeeNetwork';
import TeaNetwork from './svg/TeaNetwork';
function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const { scrollYProgress } = useScroll();

  return (
    <main>

      <ReactLenis root>
      <motion.div
        className="progress-bar"
        style={{
          scaleX: scrollYProgress,
          background:currentStepIndex >15?'mediumblue':'brown'
        }}
      />
        <div className="introduction">
          <div><h1 className="coffee-h1">Coffee</h1><h1 className='versus-h1'>&nbsp;or&nbsp;</h1><h1 class="tea-h1">Tea</h1><h1 className='versus-h1'>&nbsp;?</h1></div>
          <span>( Data Visualisation SC4024, by Jewel Chin )</span>
        </div>
        <div className="introduction-production">
          <h1 className="introduction-production-h1">#Production</h1>
        </div>

        <div className="introduction-production"

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
          ) : currentStepIndex <= 12 ? (
            <div className='two-items' style={{ position: 'sticky', top: '130px', color: 'brown' }} >
              <ComparisonProductionPieSVG />
              <ComparisonProductionStackedPercentageBarChartSVG />
            </div>
          ) : currentStepIndex == 13 ? (
            <CoffeeProductionLineChartSVG />
          ) : (
            <TeaProductionLineChartSVG />
          )


          }

          <Scrollama onStepEnter={onStepEnter} offset={0.5}>

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
                marginTop: '50px',
                marginBottom: '400px',
                textAlign:'center',
                width:'60vw'
              }}>
                <div
                  className='comment coffee'
                  style={{
                    zIndex: 999,
                    opacity: currentStepIndex === 7 ? 1 : 0.2,
                    width: '20vw'
                  }}
                >

                  <b style={{ fontSize: '1.1em', textDecoration: 'underline' }}>Top 5 Producers of Coffee:</b>
                  <ol>
                    <li><b>Brazil (75 Million Tonnes)</b></li>
                    <li>Vietnam (29 Million Tonnes)</li>
                    <li>Colombia (22 Million Tonnes)</li>
                    <li>Indonesia (15 Million Tonnes)</li>
                    <li>Ethiopia (9 Million Tonnes)</li>
                  </ol>
                </div>
                <div
                  className='comment tea'
                  style={{
                    zIndex: 999,
                    opacity: currentStepIndex === 7 ? 1 : 0.2,
                    width: '20vw'
                  }}
                >

                  <b style={{ fontSize: '1.1em', textDecoration: 'underline' }}>Top 5 Producers of Tea:</b>
                  <ol>
                    <li><b>China (159 Million Tonnes)</b></li>
                    <li><b>India (123 Million Tonnes)</b></li>
                    <li>Kenya (41 Million Tonnes)</li>
                    <li>Sri Lanka (37 Million Tonnes)</li>
                    <li>Turkey (30 Million Tonnes)</li>
                  </ol>
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

                <h2 style={{ textAlign: 'center' }}>Interestingly,</h2>
                <p>production of <b style={{ fontSize: '1.3em' }}>Tea</b> is concentrated in <b style={{ fontSize: '1.3em' }}>Eastern</b> countries, <br></br>while production of <b style={{ fontSize: '1.3em' }}>Coffee</b> is concentrated in <b style={{ fontSize: '1.3em' }}>Western Hemisphere</b> countries.
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
                className='comment comparison'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 10 ? 1 : 0.2,
                  marginBottom: '900px',
                  color: 'rgb(82, 42, 8)',
                }}
              >
                <p><b>Other than in 1990,</b><br></br> Coffee production has consistently remained below tea production every year, <br></br>
                  with its share decreasing over time, but overall <b>maintaining a consistent 2:3 production ratio in favor of tea.</b></p>
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
                }}
              >
                <p>The disparity in production volumes may be attributed to the differing cultivation challenges associated with coffee and tea.
                  Coffee beans require more specific growing conditions and meticulous care, while tea plants are generally more resilient and easier to cultivate. <br></br>
                  This fundamental difference in agricultural demands could explain why tea consistently outpaces coffee in overall production.</p>
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
                }}
              >
                <p>Despite their differences, both coffee and tea boast <b>rich histories of competition in their production.</b></p>
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
                <p>For Coffee,<br></br> <b style={{ fontSize: '1.3em' }}>Vietnam</b> ranked 5th in coffee production in 1990 but swiftly gained momentum, experiencing a remarkable surge in output from 1998.<br></br>
                  <b style={{ fontSize: '1.3em' }}>It soared to 2nd place</b> and has maintained this rank with steady annual increases in production from then on.</p>
              </div>
            </Step>
            <Step data={14} key={14}>
              <div
                className='comment comparison'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 14 ? 1 : 0.2,
                  marginBottom: '900px',
                  color: 'rgb(82, 42, 8)',
                  width: '400px',
                }}
              >
                <p>Meanwhile for Tea,<br></br> <b style={{ fontSize: '1.3em' }}>China</b> and <b style={{ fontSize: '1.3em' }}>India</b> were in close competition until 2004,
                  when China's production volume experienced a significant surge, allowing it to pull ahead of India. <br></br>This marked a pivotal shift, with both countries consistently standing out in production levels compared
                  to their peers – Kenya, Sri Lanka, and Turkey.</p>
              </div>
            </Step>
            <Step data={15} key={15}>
              <div
                className='comment question'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 15 ? 1 : 0.2,
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
          <p>( IMPORTS, EXPORTS, RE-EXPORTS )</p>
        </div>

        <div className="introduction-trade"
          style={{ height: 'max-content', position: 'relative' }}>

          <motion.h1
            style={{ position: 'sticky', top: '50px', color: currentStepIndex >= 7 ? 'mediumblue' : 'rgb(82, 42, 8)' }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: .3 }}>
            #Trade</motion.h1>
          <motion.span
            style={{ position: 'sticky', top: '85px', color: currentStepIndex >= 7 ? 'mediumblue' : 'rgb(82, 42, 8)' }} // Change color based on the index
            initial={{ scale: 0 }}
            whileInView={{ scale: 1.2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            {currentStepIndex > 13 && currentStepIndex < 23 ? '( CONNECTING COUNTRIES AROUND THE WORLD 🌎 )' : '( COMPARISON )'}

          </motion.span>
          {
            currentStepIndex > 14 && currentStepIndex <= 19 ? (
              <div style={{ position: 'sticky', top: '10px' }}>



                <ul className="comment comparison" style={{ listStyle: 'none', transform: 'scale(0.8)', position: 'absolute', left: 0, width:'max-content' }}>
                  <li><b style={{ textDecoration: 'underline' }}>Legend:</b></li>
                  <li><b style={{ color: '#59a14f' }}>Latin America and the Caribbean</b> </li>
                  <li><b style={{ color: '#e15759' }}>Eastern and South-Eastern Asia (excl. China)</b> </li>
                  <li><b style={{ color: '#4e79a7' }}>Europe</b> </li>
                  <li><b style={{ color: 'gold' }}>Sub-Saharan Africa</b> </li>
                  <li><b style={{ color: '#f28e2c' }}>Central and Southern Asia</b> </li>
                  <li><b style={{ color: 'purple' }}>Northern America</b> </li>
                  <li><b style={{ color: '#8c5c35' }}>Northern Africa and Western Asia</b> </li>
                  <li><b style={{ color: 'pink' }}>China</b> </li>
                  <li><b style={{ color: 'mediumturquoise' }}>Oceania (excl. Australia and New Zealand)</b> </li>
                  <li><b style={{ color: '#8ccf25' }}>Australia and New Zealand</b> </li>
                </ul>
                <CoffeeNetwork />

              </div>
            ) : currentStepIndex <= 22 ? (
              <div style={{ position: 'sticky', top: '10px' }}>

                <ul className="comment comparison" style={{ listStyle: 'none', transform: 'scale(0.8)', position: 'absolute', left: 0, width:'max-content' }}>
                  <li><b style={{ textDecoration: 'underline' }}>Legend:</b></li>
                  <li><b style={{ color: '#59a14f' }}>Latin America and the Caribbean</b> </li>
                  <li><b style={{ color: '#e15759' }}>Eastern and South-Eastern Asia (excl. China)</b> </li>
                  <li><b style={{ color: '#4e79a7' }}>Europe</b> </li>
                  <li><b style={{ color: 'gold' }}>Sub-Saharan Africa</b> </li>
                  <li><b style={{ color: '#f28e2c' }}>Central and Southern Asia</b> </li>
                  <li><b style={{ color: 'purple' }}>Northern America</b> </li>
                  <li><b style={{ color: '#8c5c35' }}>Northern Africa and Western Asia</b> </li>
                  <li><b style={{ color: 'pink' }}>China</b> </li>
                  <li><b style={{ color: 'mediumturquoise' }}>Oceania (excl. Australia and New Zealand)</b> </li>
                  <li><b style={{ color: '#8ccf25' }}>Australia and New Zealand</b> </li>
                </ul>
                <TeaNetwork />
              </div>
            ) : currentStepIndex <= 37 ? (
              <div className='two-items' style={{ position: 'sticky', top: '130px', color: 'brown' }} >
                <CoffeeSankey />
                <TeaSankey />
              </div>
            ) :
              <></>}

          <Scrollama onStepEnter={onStepEnter} offset={0.5}>

            <Step data={16} key={16}>
              <div
                className='comment coffee'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 16 ? 1 : 0.2,
                  marginTop: '-100px',
                  marginBottom: '500px',
                }}
              >
                <p>This <b style={{ fontSize: '1.5em' }}>Network Graph</b> shows the flow of <b>Coffee</b> across the world.
                  <br></br> The size of the nodes represent normalized trade volumes in tonnes. </p>
              </div>
            </Step>
            <Step data={17} key={17}>
              <div
                className='comment comparison'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 17 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>Feel free to explore it by dragging the nodes around! Press <b style={{ fontSize: '1.5em' }}>X</b> to reset the network graph's view.
                  <br></br> Did you find anything interesting?</p>

              </div>
            </Step>
            <Step data={18} key={18}>
              <div
                className='comment coffee'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 18 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>The global flow of coffee is extensive,
                  <br></br>featuring numerous clusters of varying sizes, with the largest cluster <br></br>centered around the <b>top 2 exporters, who are also the top producers – Brazil and Vietnam.</b></p>

              </div>
            </Step>
            <Step data={19} key={19}>
              <div
                className='comment coffee'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 19 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p> Another notable cluster, distinct from the largest mentioned above, involves
                  <br></br>several European countries linked with multiple Sub-Saharan African nations.</p>
              </div>
            </Step>

            <Step data={20} key={20}>
              <div
                className='comment tea'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 20 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>Here is <b>Tea</b>'s network graph. <br></br>The size of the nodes represent normalized trade volumes in tonnes.<br></br>Feel free to explore it by dragging the nodes around again!<br></br> Press <b style={{ fontSize: '1.5em' }}>X</b> to reset the network graph's view.
                  <br></br> Did you find anything interesting? </p>
              </div>
            </Step>
            <Step data={21} key={21}>
              <div
                className='comment tea'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 21 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>The global flow of Tea is pretty extensive, like Coffee.
                </p>
              </div>
            </Step>
            <Step data={22} key={22}>
              <div
                className='comment tea'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 22 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>However, unlike Coffee, where the clusters are more distinct and separate,<br></br><b>Tea</b> has
                  <b style={{ fontSize: '1.3em' }}> highly interconnected clusters,</b> and there seems to be more key players, from very different regions.
                </p>
              </div>
            </Step>

            <Step data={23} key={23}>
              <div
                className='comment comparison'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 23 ? 1 : 0.2,
                  marginBottom: '800px',
                }}
              >
                <p>To further understand our key players in Coffee and Tea,<br></br>
                  let's take a look at their <b style={{ fontSize: '1.4em' }}>Sankey Diagrams.</b>
                </p>
              </div>
            </Step>

            <Step data={24} key={24}>
              <div
                className='comment coffee  position-left'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 24 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>This <b style={{ fontSize: '1.4em' }}>Sankey diagram</b> illustrates the flow of <b>Coffee</b>,
                  <br></br> highlighting the <b style={{ fontSize: '1.4em' }}>top 9 Exporters and Importers</b> as of 2019.

                </p>
              </div>
            </Step>
            <Step data={25} key={25}>
              <div
                className='comment coffee position-left'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 25 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>
                  Remember our top producers of Coffee: Brazil, Vietnam, Colombia, Indonesia, Ethiopia?<br></br>
                  <b>All of them, except Ethiopia, are amongst the top exporters of Coffee, with similar ranking.</b>

                </p>
              </div>
            </Step>

            <Step data={26} key={26}>
              <div
                className='comment tea position-right'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 26 ? 1 : 0.2,
                  marginBottom: '500px',

                }}
              >
                <p>
                  Meanwhile, for <b>Tea</b>, the top producers are: China, India, Kenya, Sri Lanka, Turkey. <br></br>
                  <b>We see that China, Sri Lanka, Kenya and India are among the top exporters of tea.</b>

                </p>
              </div>
            </Step>
            <Step data={27} key={27}>
              <div
                className='comment tea position-right'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 27 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>
                  While the leading producers are also significant exporters, there’s something interesting and different here for <b>Tea</b>.

                </p>
              </div>
            </Step>

            <Step data={28} key={28}>
              <div
                className='comment tea position-right'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 28 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>
                  Despite China’s production dominance over India, and India ranking second in production,
                  <b> neither holds the top spot in exports.</b>
                </p>
              </div>
            </Step>
            <Step data={29} key={29}>
              <div
                className='comment tea position-right'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 29 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>
                  Instead, <b style={{ fontSize: '1.4em' }}>Kenya</b>, <b>a distant third in production, surpasses both in export volume.</b> <br></br>
                  This strong contrast indicates that
                  <b> China and India are absorbing much of their production domestically, emphasizing their high internal demand.</b>
                </p>
              </div>
            </Step>
            <Step data={30} key={30}>
              <div
                className='comment comparison'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 30 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>
                  <b>Another striking contrast lies in the structure of coffee and tea markets.</b><br></br>
                </p>
              </div>
            </Step>
            <Step data={31} key={31}>
              <div
                className='comment coffee'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 31 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>
                  Coffee imports are heavily concentrated among dominant players, with Europe (blue) and North America (purple) leading by wide margins, <br></br>
                  followed by smaller flows to Eastern and Southeastern Asia. <br></br>
                  <b>This creates a market where a few regions control the majority of coffee trade.</b>                </p>
              </div>
            </Step>
            <Step data={32} key={32}>
              <div
                className='comment tea'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 32 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>
                  <b>In comparison, the tea market shows a more balanced and diverse demand across multiple regions</b>,
                  <br></br> including Central and Southern Asia (orange), Europe (blue), North America (purple), and Northern Africa and Western Asia (brown).
                  <br></br> Here, no single region or country monopolizes the trade.
                  <br></br><b>Instead, the tea market operates on a more level playing field, <br></br>
                    reflecting a globally distributed demand that contrasts sharply with the concentrated powerhouses driving coffee imports.</b>
                </p>
              </div>
            </Step>

            <Step data={33} key={33}>
              <div
                className='comment comparison'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 33 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>
                  For countries with <b>dual power — holding positions as both top exporters and top importers,</b>
                </p>
              </div>
            </Step>

            <Step data={34} key={34}>
              <div
                className='comment coffee position-left'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 34 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>
                  <b style={{ fontSize: '1.4em' }}>Germany</b> stands out as the second-largest importer of coffee, re-exporting substantial volumes to other major importers.
                </p>
              </div>
            </Step>

            <Step data={35} key={35}>
              <div
                className='comment tea position-right'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 35 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>Meanwhile in the tea trade, <br></br>
                  <b style={{ fontSize: '1.4em' }}> Kenya</b> holds a similarly unique position as the top exporter while also importing from other leading exporters.
                </p>
              </div>
            </Step>

            <Step data={36} key={36}>
              <div
                className='comment tea position-right'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 36 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>Additionally, <b style={{ fontSize: '1.4em' }}>Kenya and the United Arab Emirates</b> occupy an intriguing dynamic, engaging in reciprocal trade where they import and export tea to one another.
                </p></div>
            </Step>
            <Step data={37} key={37}>
              <div
                className='comment comparison'
                style={{
                  zIndex: 999,
                  opacity: currentStepIndex === 37 ? 1 : 0.2,
                  marginBottom: '500px',
                }}
              >
                <p>
                  This dual role exemplifies the <b>complexity of trade flows within these countries</b>, reinforcing their strategic influence in both importing and exporting markets.
                </p>
              </div>
            </Step>
            </Scrollama>
            </div>
            <div className="introduction-trade">

              <h1>Thank you!</h1>
              <div style={{textAlign:'center'}}>
                <p> Datasets used: </p>
                <a href="https://www.kaggle.com/datasets/michals22/coffee-dataset" target="_blank">Coffee ICO dataset. Kaggle.</a> <br></br>
                <a href="https://www.kaggle.com/datasets/michals22/tea-fao-dataset" target="_blank">Tea FAO dataset. Kaggle.</a> <br></br>
                <a href="https://resourcetrade.earth" target="_blank">Resource trade data</a>
              </div>
              </div>
        
      </ReactLenis>
    </main>
  );
};

export default App;