import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const CoffeeNetwork = () => {
  const svgRef = useRef();
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const nodes = [
    { color: "red", size: 5 },
    { color: "orange", size: 10 },
    { color: "yellow", size: 15 },
    { color: "green", size: 20 },
    { color: "blue", size: 25 },
    { color: "purple", size: 30 },
  ];

  const links = [
    { source: "red", target: "orange" },
    { source: "orange", target: "yellow" },
    { source: "yellow", target: "green" },
    { source: "green", target: "blue" },
    { source: "blue", target: "purple" },
    { source: "purple", target: "red" },
    { source: "green", target: "red" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    const svg = d3.select(svgRef.current)
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
      .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`);

    const linkSelection = svg.selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "black")
      .attr("stroke-width", 1);

    const nodeSelection = svg.selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", (d) => d.size)
      .attr("fill", (d) => d.color)
      .attr("cx", dimensions.width / 2) // Center the nodes horizontally
      .attr("cy", dimensions.height / 2) // Center the nodes vertically      
      .call(
        d3.drag()
          .on("start", dragStart)
          .on("drag", drag)
          .on("end", dragEnd)
      )
      ;

    const simulation = d3.forceSimulation(nodes)
      .force("center", d3.forceCenter(dimensions.width / 2, dimensions.height / 2))
      .force("charge", d3.forceManyBody())
      .force(
        "link",
        d3.forceLink(links)
          .id((d) => d.color)
          .distance((d) => 5 * (d.source.size + d.target.size))
      )
      .on("tick", () => {
        nodeSelection.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
        linkSelection
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);
      });

    function dragStart(event, d) {
      simulation.alphaTarget(0.5).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function drag(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragEnd(event, d) {
      simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    // Update simulation center on resize
    simulation.force("center", d3.forceCenter(dimensions.width / 2, dimensions.height / 2));

    return () => {
      window.removeEventListener("resize", handleResize);
      simulation.stop();
    };
  }, [dimensions]);

  return <svg ref={svgRef}></svg>;
};

export default CoffeeNetwork;
