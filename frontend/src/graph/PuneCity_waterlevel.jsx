import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const PuneCity_waterlevel = () => {
  const graphRef = useRef();
  const [data, setData] = useState([]);

  // Generate random time-based data points
  useEffect(() => {
    const interval = setInterval(() => {
      const newDataPoint = { time: new Date(), value: Math.random() * 10 }; // Random value between 0 and 10
      setData(prevData => [...prevData, newDataPoint]);
    }, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const containerWidth = graphRef.current.offsetWidth;
    const containerHeight = 400; // Fixed height for the container

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const graphWidth = containerWidth - margin.left - margin.right;
    const graphHeight = containerHeight - margin.top - margin.bottom;

    const svg = d3.select(graphRef.current)
                  .append("svg")
                  .attr("width", containerWidth)
                  .attr("height", containerHeight)
                  .style("position", "absolute") // Fix position within its container
                  .style("left", "50%") // Center horizontally
                  .style("top", "50%") // Center vertically
                  .style("transform", "translate(-50%, -50%)") // Center the element
                  .append("g")
                  .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleTime()
                    .domain(d3.extent(data, d => d.time))
                    .range([0, graphWidth]);

    const yScale = d3.scaleLinear()
                    .domain([0, 10]) // Y-axis scale from 0 to 10 (initial)
                    .range([graphHeight, 0]);

    const line = d3.line()
                  .x(d => xScale(d.time))
                  .y(d => yScale(d.value));

    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("stroke-width", 2)
        .attr("d", line);

    const xAxis = d3.axisBottom(xScale);
    svg.append("g")
        .attr("transform", `translate(0,${graphHeight})`)
        .call(xAxis);

    const yAxis = d3.axisLeft(yScale);
    svg.append("g")
        .call(yAxis);

    return () => {
      svg.selectAll("*").remove();
    };
  }, [data]);

  return <div ref={graphRef} style={{ width: '60%',top:800,position: 'absolute'}}></div>;
};

export default PuneCity_waterlevel;
