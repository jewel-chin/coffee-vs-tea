import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const CoffeeNetwork = () => {
    const json_filepath = '/cleaned_data/trade/coffee_network.json';
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

        // Clear previous elements before re-adding
        svg.selectAll("*").remove();

        // Define arrow marker
        svg.append("defs").selectAll("marker")
            .data(["arrow"]) // Arbitrary key to define marker
            .enter().append("marker")
            .attr("id", "arrow")
            .attr("viewBox", "0 0 10 10")
            .attr("refX", 60) // Position of the arrow head
            .attr("refY", 5)
            .attr("markerWidth", 10)
            .attr("markerHeight", 6)
            .attr("orient", "auto")
            .append("polygon")
            .attr("points", "0 0, 10 5, 0 10")
            .attr("fill", "black");

        // Fetch data from JSON
        fetch(json_filepath)
            .then((res) => res.json())
            .then((data) => {
                const nodes = data.nodes;
                const links = data.links;

                function findActualWeightById(id) {
                    const node = data.nodes.find(node => node.id === id);
                    if (node && Math.trunc(node.actual_weight / 1000) === 0) {
                        // negligible in million tonnes!
                        return node ? `${id}: ${Math.trunc(node.actual_weight)}k tonnes` : null;
                    }
                    return node ? `${id}: ${Math.trunc(node.actual_weight / 1000)} million tonnes` : null;
                }
                // Create link and node selections
                const linkSelection = svg.selectAll("line")
                    .data(links)
                    .enter()
                    .append("line")
                    .attr("stroke", "black")
                    .attr("stroke-width", 1)
                    .attr("marker-end", "url(#arrow)"); // Use the defined arrow marker

                const nodeSelection = svg.selectAll("circle")
                    .data(nodes)
                    .enter()
                    .append("circle")
                    .attr("r", (d) => d.size)
                    .attr("fill", (d) => d.color)
                    .attr('class', (d) => "circle-" + d.id + "-" + d.size)
                    .call(d3.drag()
                        .on("start", dragStart)
                        .on("drag", drag)
                        .on("end", dragEnd)
                    )
                    .on("mouseover", (e) => {
                        const target_class_name = e.target.className.baseVal;
                        const split_class_name = target_class_name.split("-");
                        const country = split_class_name[1];
                        tooltip_tag = findActualWeightById(country);
                        if (tooltip_tag !== null) {
                            tooltip_ref.current.innerHTML = tooltip_tag; // Corrected line
                            tooltip_ref.current.style.opacity = 1;
                            tooltip_ref.current.style.left = `${e.clientX}px`;
                            tooltip_ref.current.style.top = `${e.clientY}px`;
                        }
                        else {
                            console.warn(`Node with id ${country} not found.`);
                        }
                    })
                    .on('mouseleave', (e) => {
                        tooltip_ref.current.innerHTML = "";
                        if (tooltip_ref.current) {
                            tooltip_ref.current.style.opacity = 0;
                        }
                    })

                // Set up the force simulation
                const simulation = d3.forceSimulation(nodes)
                    .force("center", d3.forceCenter(width / 2, height / 2))
                    .force("charge", d3.forceManyBody().strength(-4)) // Adjust repulsion strength
                    .force("link", d3.forceLink().id((d) => d.id).links(links))
                    .force("collide", d3.forceCollide()) // Prevent nodes from getting too close

                    .on("tick", () => {
                        // Define boundaries
                        const xMax = width;
                        const yMax = height;

                        nodeSelection
                            .attr("cx", (d) => {
                                // Clamp x position
                                d.x = Math.max(d.size, Math.min(xMax - d.size, d.x));
                                return d.x;
                            })
                            .attr("cy", (d) => {
                                // Clamp y position
                                d.y = Math.max(d.size, Math.min(yMax - d.size, d.y));
                                return d.y;
                            }); linkSelection
                                .attr("x1", (d) => d.source.x)
                                .attr("y1", (d) => d.source.y)
                                .attr("x2", (d) => d.target.x)
                                .attr("y2", (d) => d.target.y);
                    });

                function dragStart(d) {
                    simulation.alphaTarget(0.3).restart();
                    d.fx = d.x;
                    d.fy = d.y;
                }

                function drag(event, d) {
                    d.fx = event.x * 1.2;
                    d.fy = event.y * 1.2;
                }

                function dragEnd(event, d) {
                    if (!event.active) simulation.alphaTarget(0);
                    d.fx = null;
                    d.fy = null;
                }

                // Reset function
                const resetSimulation = () => {
                    nodes.forEach((node) => {
                        node.x = Math.random() * width;
                        node.y = Math.random() * height;
                    });
                    simulation.nodes(nodes);
                    simulation.alpha(0.6).restart(); // Restart simulation
                };

                // Keydown event listener
                const handleKeyDown = (event) => {
                    if (event.key === "x" || event.key === "X") {
                        resetSimulation();
                    }
                };

                // Add keydown event listener
                window.addEventListener("keydown", handleKeyDown);

                return () =>{
                    window.removeEventListener("keydown", handleKeyDown);

                }
            });

    }, []);


    return (
        <div>
            <div class="tooltip" ref={tooltip_ref} style={{ position: "absolute", width: 'max-content', opacity: 0, backgroundColor: "white", border: "1px solid #333", borderRadius: "4px", height: "max-content", padding: '4px' }}>testingintginnt</div>
            <svg ref={svgRef}></svg>
        </div>
    )
};

export default CoffeeNetwork;
