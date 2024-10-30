import { motion } from 'framer-motion';

const CoffeeProductionLineChartSVG = () => {
  const LineChart = '/images/coffee_yearly_production_line_chart.png';

  return (
    <motion.div
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: '60px',
      }}  
      initial={{scale: 0}}
      whileInView={{scale: 0.8}}   
      viewport={{ once: true }}                
      transition={{ duration: 1}}>
        <div class="image-container">
<img src={process.env.PUBLIC_URL + LineChart} style={{zIndex:'-1'}}></img></div>
{/* <svg width="960" height="600" id="coffee-production-line-chart">
  <g fill="none" font-family="sans-serif" font-size="10" text-anchor="middle">
    <path stroke="black" d="M50 506v-6h800v6" class="domain"/>
    <g class="tick">
      <path stroke="black" d="M63.333 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(63.333 500)">1990</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M90 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(90 500)">1991</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M116.667 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(116.667 500)">1992</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M143.333 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(143.333 500)">1993</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M170 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(170 500)">1994</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M196.667 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(196.667 500)">1995</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M223.333 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(223.333 500)">1996</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M250 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(250 500)">1997</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M276.667 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(276.667 500)">1998</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M303.333 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(303.333 500)">1999</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M330 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(330 500)">2000</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M356.667 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(356.667 500)">2001</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M383.333 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(383.333 500)">2002</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M410 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(410 500)">2003</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M436.667 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(436.667 500)">2004</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M463.333 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(463.333 500)">2005</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M490 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(490 500)">2006</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M516.667 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(516.667 500)">2007</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M543.333 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(543.333 500)">2008</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M570 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(570 500)">2009</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M596.667 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(596.667 500)">2010</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M623.333 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(623.333 500)">2011</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M650 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(650 500)">2012</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M676.667 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(676.667 500)">2013</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M703.333 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(703.333 500)">2014</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M730 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(730 500)">2015</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M756.667 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(756.667 500)">2016</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M783.333 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(783.333 500)">2017</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M810 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(810 500)">2018</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M836.667 500v6"/>
      <text y="9" fill="black" dy=".71em" transform="translate(836.667 500)">2019</text>
    </g>
  </g>
  <g fill="none" font-family="sans-serif" font-size="10" text-anchor="end">
    <path stroke="black" d="M44 500h6v-600h-6" class="domain"/>
    <g class="tick">
      <path stroke="black" d="M50 500h-6"/>
      <text x="-9" fill="black" dy=".32em" transform="translate(50 500)">0</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M50 438.776h-6"/>
      <text x="-9" fill="black" dy=".32em" transform="translate(50 438.776)">500</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M50 377.551h-6"/>
      <text x="-9" fill="black" dy=".32em" transform="translate(50 377.551)">1,000</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M50 316.327h-6"/>
      <text x="-9" fill="black" dy=".32em" transform="translate(50 316.327)">1,500</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M50 255.102h-6"/>
      <text x="-9" fill="black" dy=".32em" transform="translate(50 255.102)">2,000</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M50 193.878h-6"/>
      <text x="-9" fill="black" dy=".32em" transform="translate(50 193.878)">2,500</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M50 132.653h-6"/>
      <text x="-9" fill="black" dy=".32em" transform="translate(50 132.653)">3,000</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M50 71.429h-6"/>
      <text x="-9" fill="black" dy=".32em" transform="translate(50 71.429)">3,500</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M50 10.204h-6"/>
      <text x="-9" fill="black" dy=".32em" transform="translate(50 10.204)">4,000</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M50-51.02h-6"/>
      <text x="-9" fill="black" dy=".32em" transform="translate(50 -51.02)">4,500</text>
    </g>
  </g>
  <path fill="none" stroke="#1f77b4" stroke-width="3" d="m65 299.551 26.667-.122 26.666-53.633L145 293.061l26.667-.245 26.666 74.449L225 285.469l26.667 22.409 26.666-78L305 150.408l26.667 119.51 26.666-.367L385 144.776l26.667 143.142 26.666-76.53L465 258.041l26.667-113.878 26.666 69.919L545 121.755l26.667 55.102 26.666-84.122L625 142.939l26.667-50.082 26.666 5.388L705 108.408l26.667 3.184 26.666-28.776L785 112.571l26.667-91.102 26.666 50.817" class="line Brazil"/>
  <circle cx="65" cy="299.551" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="91.667" cy="299.429" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="118.333" cy="245.796" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="145" cy="293.061" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="171.667" cy="292.816" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="198.333" cy="367.265" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="225" cy="285.469" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="251.667" cy="307.878" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="278.333" cy="229.878" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="305" cy="150.408" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="331.667" cy="269.918" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="358.333" cy="269.551" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="385" cy="144.776" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="411.667" cy="287.918" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="438.333" cy="211.388" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="465" cy="258.041" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="491.667" cy="144.163" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="518.333" cy="214.082" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="545" cy="121.755" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="571.667" cy="176.857" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="598.333" cy="92.735" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="625" cy="142.939" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="651.667" cy="92.857" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="678.333" cy="98.245" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="705" cy="108.408" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="731.667" cy="111.592" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="758.333" cy="82.816" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="785" cy="112.571" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="811.667" cy="21.469" r="4" fill="#1f77b4" class="circle Brazil"/>
  <circle cx="838.333" cy="72.286" r="4" fill="#1f77b4" class="circle Brazil"/>
  <path fill="none" stroke="#ff7f0e" stroke-width="3" d="m65 490.327 26.667-.858 26.666-6.612 26.667-5.02 26.667-4.531 26.666-2.449L225 457.755l26.667-9.061 26.666-.49L305 414.531l26.667-23.511 26.666 12.735L385 415.02l26.667-27.673 26.666 7.102L465 398.245l26.667-40.286 26.666 21.551L545 364.571l26.667 4.409 26.666-15.919L625 305.306l26.667 22.776 26.666-30.98L705 299.918l26.667-28.285 26.666 24L785 254.367l26.667 23.143 26.666-1.469" class="line Viet Nam"/>
  <circle cx="65" cy="490.327" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="91.667" cy="489.469" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="118.333" cy="482.857" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="145" cy="477.837" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="171.667" cy="473.306" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="198.333" cy="470.857" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="225" cy="457.755" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="251.667" cy="448.694" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="278.333" cy="448.204" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="305" cy="414.531" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="331.667" cy="391.02" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="358.333" cy="403.755" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="385" cy="415.02" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="411.667" cy="387.347" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="438.333" cy="394.449" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="465" cy="398.245" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="491.667" cy="357.959" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="518.333" cy="379.51" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="545" cy="364.571" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="571.667" cy="368.98" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="598.333" cy="353.061" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="625" cy="305.306" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="651.667" cy="328.082" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="678.333" cy="297.102" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="705" cy="299.918" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="731.667" cy="271.633" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="758.333" cy="295.633" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="785" cy="254.367" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="811.667" cy="277.51" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <circle cx="838.333" cy="276.041" r="4" fill="#ff7f0e" class="circle Viet Nam"/>
  <path fill="none" stroke="#2ca02c" d="m65 394.204 26.667-26.326 26.666 22.285L145 416.122l26.667-11.387 26.666.245L225 420.776l26.667-9.796 26.666 9.183L305 430.082l26.667-7.347 26.666-10.531L385 413.918l26.667 4.898L438.333 416 465 412.204l26.667-1.592 26.666-2.571L545 436.327l26.667 4.163 26.666-3.061L625 443.796l26.667-16.776 26.666-16.04L705 402.041l26.667-5.021 26.666-4.53 26.667 6 26.667-.368 26.666-1.714" class="line Colombia" opacity=".6"/>
  <circle cx="65" cy="394.204" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="91.667" cy="367.878" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="118.333" cy="390.163" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="145" cy="416.122" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="171.667" cy="404.735" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="198.333" cy="404.98" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="225" cy="420.776" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="251.667" cy="410.98" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="278.333" cy="420.163" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="305" cy="430.082" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="331.667" cy="422.735" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="358.333" cy="412.204" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="385" cy="413.918" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="411.667" cy="418.816" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="438.333" cy="416" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="465" cy="412.204" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="491.667" cy="410.612" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="518.333" cy="408.041" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="545" cy="436.327" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="571.667" cy="440.49" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="598.333" cy="437.429" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="625" cy="443.796" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="651.667" cy="427.02" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="678.333" cy="410.98" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="705" cy="402.041" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="731.667" cy="397.02" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="758.333" cy="392.49" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="785" cy="398.49" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="811.667" cy="398.122" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <circle cx="838.333" cy="396.408" r="3" fill="#2ca02c" class="circle Colombia" opacity=".3"/>
  <path fill="none" stroke="#d62728" d="m65 445.388 26.667-7.837 26.666 21.551L145 450.408l26.667 10.163 26.666 5.878L225 439.633l26.667 4.408 26.666 2.326L305 451.878l26.667-3.184 26.666 1.102 26.667.735 26.667 2.449 26.666-8.327 26.667-12 26.667 12.367 26.666-2.204L545 429.347l26.667-12.98 26.666 16.531L625 449.429 651.667 404l26.666 1.224L705 419.551l26.667-12 26.666 7.714L785 420.286l26.667 9.061L838.333 416" class="line Indonesia" opacity=".6"/>
  <circle cx="65" cy="445.388" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="91.667" cy="437.551" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="118.333" cy="459.102" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="145" cy="450.408" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="171.667" cy="460.571" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="198.333" cy="466.449" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="225" cy="439.633" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="251.667" cy="444.041" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="278.333" cy="446.367" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="305" cy="451.878" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="331.667" cy="448.694" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="358.333" cy="449.796" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="385" cy="450.531" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="411.667" cy="452.98" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="438.333" cy="444.653" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="465" cy="432.653" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="491.667" cy="445.02" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="518.333" cy="442.816" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="545" cy="429.347" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="571.667" cy="416.367" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="598.333" cy="432.898" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="625" cy="449.429" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="651.667" cy="404" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="678.333" cy="405.224" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="705" cy="419.551" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="731.667" cy="407.551" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="758.333" cy="415.265" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="785" cy="420.286" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="811.667" cy="429.347" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <circle cx="838.333" cy="416" r="3" fill="#d62728" class="circle Indonesia" opacity=".3"/>
  <path fill="none" stroke="#9467bd" d="m65 478.571 26.667-.122 26.666 8.082L145 478.204l26.667 1.469 26.666-2.938L225 475.02l26.667 2.572 26.666.857L305 472.204l26.667 4.898 26.666-6.857 26.667-.367 26.667-2.205 26.666-6L465 464.857l26.667-5.633 26.666-3.061 26.667 7.47 26.667-13.837 26.666 9.306L625 458.49l26.667-3.551 26.666-.857 26.667-.98 26.667-.98 26.666-4.653L785 446l26.667-1.224L838.333 446" class="line Ethiopia" opacity=".6"/>
  <circle cx="65" cy="478.571" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="91.667" cy="478.449" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="118.333" cy="486.531" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="145" cy="478.204" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="171.667" cy="479.673" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="198.333" cy="476.735" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="225" cy="475.02" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="251.667" cy="477.592" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="278.333" cy="478.449" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="305" cy="472.204" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="331.667" cy="477.102" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="358.333" cy="470.245" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="385" cy="469.878" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="411.667" cy="467.673" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="438.333" cy="461.673" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="465" cy="464.857" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="491.667" cy="459.224" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="518.333" cy="456.163" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="545" cy="463.633" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="571.667" cy="449.796" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="598.333" cy="459.102" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="625" cy="458.49" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="651.667" cy="454.939" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="678.333" cy="454.082" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="705" cy="453.102" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="731.667" cy="452.122" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="758.333" cy="447.469" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="785" cy="446" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="811.667" cy="444.776" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="838.333" cy="446" r="3" fill="#9467bd" class="circle Ethiopia" opacity=".3"/>
  <circle cx="190" cy="550" r="5" fill="#1f77b4"/>
  <text x="206" y="550" alignment-baseline="middle" font-size="1.1em">Brazil</text>
  <circle cx="280" cy="550" r="5" fill="#ff7f0e"/>
  <text x="296" y="550" alignment-baseline="middle" font-size="1.1em">Viet Nam</text>
  <circle cx="400" cy="550" r="5" fill="#2ca02c"/>
  <text x="416" y="550" alignment-baseline="middle" font-size="1.1em">Colombia</text>
  <circle cx="520" cy="550" r="5" fill="#d62728"/>
  <text x="536" y="550" alignment-baseline="middle" font-size="1.1em">Indonesia</text>
  <circle cx="640" cy="550" r="5" fill="#9467bd"/>
  <text x="656" y="550" alignment-baseline="middle" font-size="1.1em">Ethiopia</text>
  <path stroke="gold" stroke-dasharray="5,5" stroke-width="5" d="M278.333 0v500"/>
</svg> */}

    </motion.div>
  )

}
export default CoffeeProductionLineChartSVG;