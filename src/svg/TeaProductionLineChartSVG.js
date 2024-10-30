import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/svg.css'
const TeaProductionLineChartSVG = () => {

  const LineChart = '/images/tea_yearly_production_line_chart.png';

  return (
    <motion.div
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: '60px',
      }}  
      initial={{ scale: 0 }}
      whileInView={{ scale: 0.8}}
      viewport={{ once: true }}
      transition={{ duration: 1 }}>
      <div class="image-container">
        <img src={process.env.PUBLIC_URL + LineChart} style={{ zIndex: '-2'}}></img>

      </div>
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
      <path stroke="black" d="M50 420h-6"/>
      <text x="-9" fill="black" dy=".32em" transform="translate(50 420)">2,000</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M50 340h-6"/>
      <text x="-9" fill="black" dy=".32em" transform="translate(50 340)">4,000</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M50 260h-6"/>
      <text x="-9" fill="black" dy=".32em" transform="translate(50 260)">6,000</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M50 180h-6"/>
      <text x="-9" fill="black" dy=".32em" transform="translate(50 180)">8,000</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M50 100h-6"/>
      <text x="-9" fill="black" dy=".32em" transform="translate(50 100)">10,000</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M50 20h-6"/>
      <text x="-9" fill="black" dy=".32em" transform="translate(50 20)">12,000</text>
    </g>
    <g class="tick">
      <path stroke="black" d="M50-60h-6"/>
      <text x="-9" fill="black" dy=".32em" transform="translate(50 -60)">14,000</text>
    </g>
  </g>
  <path fill="none" stroke="#1f77b4" stroke-width="2.5" d="m65 477.52 26.667-72.56 26.666-3.12L145 394.8l26.667 1.88 26.666.12 26.667-.92 26.667-3.52 26.666-8.92L305 381.6l26.667-1.24 26.666-3.2 26.667-7.6 26.667-4 26.666-11.6L465 336.64l26.667-16.2 26.666-23.84 26.667-16 26.667-17.64 26.666-15.8L625 217.04l26.667-28.92 26.666-23.4L705 134.96l26.667-31.52 26.666-6.24L785 71.6l26.667-26.2 26.666-29" class="line China"/>
  <circle cx="65" cy="477.52" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="91.667" cy="404.96" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="118.333" cy="401.84" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="145" cy="394.8" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="171.667" cy="396.68" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="198.333" cy="396.8" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="225" cy="395.88" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="251.667" cy="392.36" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="278.333" cy="383.44" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="305" cy="381.6" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="331.667" cy="380.36" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="358.333" cy="377.16" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="385" cy="369.56" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="411.667" cy="365.56" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="438.333" cy="353.96" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="465" cy="336.64" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="491.667" cy="320.44" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="518.333" cy="296.6" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="545" cy="280.6" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="571.667" cy="262.96" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="598.333" cy="247.16" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="625" cy="217.04" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="651.667" cy="188.12" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="678.333" cy="164.72" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="705" cy="134.96" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="731.667" cy="103.44" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="758.333" cy="97.2" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="785" cy="71.6" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="811.667" cy="45.4" r="3" fill="#1f77b4" class="circle China"/>
  <circle cx="838.333" cy="16.4" r="3" fill="#1f77b4" class="circle China"/>
  <path fill="none" stroke="#ff7f0e" stroke-width="2.5" d="m65 472.48 26.667-97.76 26.666-5.88L145 377.6l26.667-8.56 26.666-.16 26.667-.36 26.667-4.16 26.666-5.24L305 348l26.667 8.36 26.666-3.68 26.667-1.2 26.667 1.4 26.666-5.76L465 342.28l26.667-7.32 26.666-4.16L545 328.36l26.667 2.48 26.666-3.2L625 309.48l26.667-6.88 26.666-12.84 26.667.28 26.667-4.48 26.666-3.04L785 269.56l26.667-2.36 26.666-8.96" class="line India"/>
  <circle cx="65" cy="472.48" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="91.667" cy="374.72" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="118.333" cy="368.84" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="145" cy="377.6" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="171.667" cy="369.04" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="198.333" cy="368.88" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="225" cy="368.52" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="251.667" cy="364.36" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="278.333" cy="359.12" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="305" cy="348" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="331.667" cy="356.36" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="358.333" cy="352.68" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="385" cy="351.48" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="411.667" cy="352.88" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="438.333" cy="347.12" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="465" cy="342.28" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="491.667" cy="334.96" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="518.333" cy="330.8" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="545" cy="328.36" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="571.667" cy="330.84" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="598.333" cy="327.64" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="625" cy="309.48" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="651.667" cy="302.6" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="678.333" cy="289.76" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="705" cy="290.04" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="731.667" cy="285.56" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="758.333" cy="282.52" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="785" cy="269.56" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="811.667" cy="267.2" r="3" fill="#ff7f0e" class="circle India"/>
  <circle cx="838.333" cy="258.24" r="3" fill="#ff7f0e" class="circle India"/>
  <path fill="none" stroke="#2ca02c" d="m65 492.12 26.667-27.52 26.666 2.68 26.667-4 26.667.28 26.666-6.08 26.667-2.2 26.667 6.32 26.666-12.76L305 456.76l26.667 2.16 26.666-10.16L385 450.08l26.667-1.16 26.666-5.36 26.667-.68 26.667 3.12 26.666-10.28L545 439.88l26.667 5.48 26.666-14.76L625 434.28l26.667 1.48 26.666-10.96L705 422.6l26.667 8 26.666-12.88 26.667 5.8 26.667-9.24 26.666 5.92" class="line Kenya" opacity=".6"/>
  <circle cx="65" cy="492.12" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="91.667" cy="464.6" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="118.333" cy="467.28" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="145" cy="463.28" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="171.667" cy="463.56" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="198.333" cy="457.48" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="225" cy="455.28" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="251.667" cy="461.6" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="278.333" cy="448.84" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="305" cy="456.76" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="331.667" cy="458.92" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="358.333" cy="448.76" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="385" cy="450.08" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="411.667" cy="448.92" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="438.333" cy="443.56" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="465" cy="442.88" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="491.667" cy="446" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="518.333" cy="435.72" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="545" cy="439.88" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="571.667" cy="445.36" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="598.333" cy="430.6" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="625" cy="434.28" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="651.667" cy="435.76" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="678.333" cy="424.8" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="705" cy="422.6" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="731.667" cy="430.6" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="758.333" cy="417.72" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="785" cy="423.52" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="811.667" cy="414.28" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <circle cx="838.333" cy="420.2" r="3" fill="#2ca02c" class="circle Kenya" opacity=".3"/>
  <path fill="none" stroke="#d62728" d="m65 490.68 26.667-32.56 26.666 10.76 26.667-9.2 26.667-1.8 26.666-.64 26.667-2.2 26.667-3.2 26.666-.56 26.667-.64 26.667-3.84 26.666 1.88 26.667-2.6 26.667 1.2 26.666-.88L465 444.84l26.667 1.12 26.666.96L545 444.56l26.667 5 26.666-7.2 26.667.68 26.667-.44 26.666-1.76 26.667.36 26.667 1.04 26.666 6.88L785 446.48l26.667.68 26.666.64" class="line Sri Lanka" opacity=".6"/>
  <circle cx="65" cy="490.68" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="91.667" cy="458.12" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="118.333" cy="468.88" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="145" cy="459.68" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="171.667" cy="457.88" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="198.333" cy="457.24" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="225" cy="455.04" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="251.667" cy="451.84" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="278.333" cy="451.28" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="305" cy="450.64" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="331.667" cy="446.8" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="358.333" cy="448.68" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="385" cy="446.08" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="411.667" cy="447.28" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="438.333" cy="446.4" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="465" cy="444.84" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="491.667" cy="445.96" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="518.333" cy="446.92" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="545" cy="444.56" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="571.667" cy="449.56" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="598.333" cy="442.36" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="625" cy="443.04" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="651.667" cy="442.6" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="678.333" cy="440.84" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="705" cy="441.2" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="731.667" cy="442.24" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="758.333" cy="449.12" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="785" cy="446.48" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="811.667" cy="447.16" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <circle cx="838.333" cy="447.8" r="3" fill="#d62728" class="circle Sri Lanka" opacity=".3"/>
  <path fill="none" stroke="#9467bd" d="m65 495.08 26.667-22.4 26.666-1.64 26.667 5.8 26.667-3 26.666 5.24L225 476l26.667-6.08 26.666-9.08L305 456.16l26.667 13.52 26.666-2.68L385 468.32l26.667-3.08 26.666-9.44L465 452.32l26.667 2.84 26.666-.96L545 456l26.667-.12 26.666-8.12 26.667 3 26.667-.76 26.666 2.8L705 449.36l26.667-2.48 26.666-.88L785 448l26.667-7.24 26.666 2.96" class="line Türkiye" opacity=".6"/>
  <circle cx="65" cy="495.08" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="91.667" cy="472.68" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="118.333" cy="471.04" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="145" cy="476.84" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="171.667" cy="473.84" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="198.333" cy="479.08" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="225" cy="476" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="251.667" cy="469.92" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="278.333" cy="460.84" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="305" cy="456.16" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="331.667" cy="469.68" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="358.333" cy="467" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="385" cy="468.32" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="411.667" cy="465.24" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="438.333" cy="455.8" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="465" cy="452.32" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="491.667" cy="455.16" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="518.333" cy="454.2" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="545" cy="456" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="571.667" cy="455.88" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="598.333" cy="447.76" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="625" cy="450.76" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="651.667" cy="450" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="678.333" cy="452.8" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="705" cy="449.36" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="731.667" cy="446.88" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="758.333" cy="446" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="785" cy="448" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="811.667" cy="440.76" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="838.333" cy="443.72" r="3" fill="#9467bd" class="circle Türkiye" opacity=".3"/>
  <circle cx="190" cy="550" r="5" fill="#1f77b4"/>
  <text x="206" y="550" alignment-baseline="middle" font-size="1.1em">China</text>
  <circle cx="280" cy="550" r="5" fill="#ff7f0e"/>
  <text x="296" y="550" alignment-baseline="middle" font-size="1.1em">India</text>
  <circle cx="400" cy="550" r="5" fill="#2ca02c"/>
  <text x="416" y="550" alignment-baseline="middle" font-size="1.1em">Kenya</text>
  <circle cx="520" cy="550" r="5" fill="#d62728"/>
  <text x="536" y="550" alignment-baseline="middle" font-size="1.1em">Sri Lanka</text>
  <circle cx="640" cy="550" r="5" fill="#9467bd"/>
  <text x="656" y="550" alignment-baseline="middle" font-size="1.1em">Türkiye</text>
  <path stroke="gold" stroke-dasharray="5,5" stroke-width="5" d="M450 0v500"/>
</svg> */}

    </motion.div>
  )

}
export default TeaProductionLineChartSVG;