import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const TeaNetwork = () => {
    const json_filepath = '/cleaned_data/trade/tea_network.json';
    const svgRef = useRef();
    var tooltip_ref = useRef(null);
    let tooltip_tag = "test";

    const width= window.innerWidth;
    const height= window.innerHeight;

    useEffect(() => {


        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", `0 0 ${width} ${height}`);

        svg.selectAll("*").remove(); // Clear previous elements

        // Define arrow marker
        svg.append("defs").selectAll("marker")
            .data(["arrow"])
            .enter().append("marker")
            .attr("id", "arrow")
            .attr("viewBox", "0 0 10 10")
            .attr("refX", 60)
            .attr("refY", 5)
            .attr("markerWidth", 10)
            .attr("markerHeight", 6)
            .attr("orient", "auto")
            .append("polygon")
            .attr("points", "0 0, 10 5, 0 10")
            .attr("fill", "black");

        fetch(process.env.PUBLIC_URL +json_filepath)
            .then((res) => res.json())
            .then((data) => {
                const nodes = data.nodes;
                const links = data.links;

                function findActualWeightById(id) {
                    const node = data.nodes.find(node => node.id === id);
                    if (node && Math.trunc(node.actual_weight / 1000) === 0) {
                        return `${id}: ${Math.trunc(node.actual_weight)}k tonnes`;
                    }
                    return node ? `${id}: ${Math.trunc(node.actual_weight / 1000)} million tonnes` : null;
                }

                const linkSelection = svg.selectAll("line")
                    .data(links)
                    .enter()
                    .append("line")
                    .attr("stroke", "black")
                    .attr("stroke-width", 1)
                    .attr("marker-end", "url(#arrow)");

                const nodeSelection = svg.selectAll("circle")
                    .data(nodes)
                    .enter()
                    .append("circle")
                    .attr("r", (d) => d.size)
                    .attr("fill", (d) => d.color)
                    .call(d3.drag()
                        .on("start", dragStart)
                        .on("drag", drag)
                        .on("end", dragEnd)
                    )
                    .on("mouseover", (e) => {
                        if (!tooltip_ref.current) return;
                        const target_class_name = e.target.className.baseVal;
                        const split_class_name = target_class_name.split("-");
                        const country = split_class_name[1];
                        tooltip_tag = findActualWeightById(country);
                        console.log(tooltip_tag)
                        if (tooltip_tag !== null) {
                            tooltip_ref.current.innerHTML = tooltip_tag;
                            tooltip_ref.current.style.opacity = 1;
                            tooltip_ref.current.style.left = `${e.clientX}px`;
                            tooltip_ref.current.style.top = `${e.clientY}px`;
                        }
                    })
                    .on('mouseleave', () => {
                        if (tooltip_ref.current) tooltip_ref.current.style.opacity = 0;
                    });

                const simulation = d3.forceSimulation(nodes)
                    .force("center", d3.forceCenter(width / 2, height / 2))
                    .force("charge", d3.forceManyBody().strength(-4))
                    .force("link", d3.forceLink().id(d => d.id).links(links))
                    .on("tick", () => {
                        const xMax = width;
                        const yMax = height;
                        nodeSelection
                            .attr("cx", (d) => d.x = Math.max(d.size, Math.min(xMax - d.size, d.x)))
                            .attr("cy", (d) => d.y = Math.max(d.size, Math.min(yMax - d.size, d.y)));
                        linkSelection
                            .attr("x1", d => d.source.x)
                            .attr("y1", d => d.source.y)
                            .attr("x2", d => d.target.x)
                            .attr("y2", d => d.target.y);
                    });

                function dragStart(d) {
                    simulation.alphaTarget(0.3).restart();
                    d.fx = d.x;
                    d.fy = d.y;
                }

                function drag(event, d) {
                    d.fx = event.x;
                    d.fy = event.y;
                }

                function dragEnd(event, d) {
                    if (!event.active) simulation.alphaTarget(0);
                    d.fx = null;
                    d.fy = null;
                }

                // Reset function
                const resetSimulation = () => {
                    nodes.forEach((node) => {
                        node.fx = null;
                        node.fy = null;
                        node.x = Math.random() * width;
                        node.y = Math.random() * height;
                    });
                    simulation.alpha(1).restart();
                };

                const handleKeyDown = (event) => {
                    if (event.key === "x" || event.key === "X") {
                        resetSimulation();
                    }
                };

                window.addEventListener("keydown", handleKeyDown);
                return () => {
                    window.removeEventListener("keydown", handleKeyDown);
                };
            });

        // return () => {
        //     window.removeEventListener("resize", handleResize);
        // };
    }, []);

    return (
        <div>
            <div className="tooltip" ref={tooltip_ref} style={{ position: "absolute", width: 'max-content', opacity: 0, backgroundColor: "white", border: "1px solid #333", borderRadius: "4px", padding: '4px' }}></div>
            <svg ref={svgRef}></svg>
        </div>
    )
};

export default TeaNetwork;
