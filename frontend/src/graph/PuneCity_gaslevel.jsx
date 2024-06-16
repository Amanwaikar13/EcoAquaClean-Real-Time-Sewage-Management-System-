import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const PuneCity_gaslevel = () => {
  const graphRef = useRef();
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/pune-city');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data'); // Throw an error for non-OK responses
  //       }
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // Generate random time-based data points
  useEffect(() => {
    const interval = setInterval(() => {
      const newDataPoint = { time: new Date(), value: Math.random() * 10 }; // Random value between 0 and 100
      setData(prevData => [...prevData, newDataPoint]);
    }, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const containerWidth = graphRef.current.offsetWidth;
    const graphWidth = containerWidth * 0.8; // 80% of the container width

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = graphWidth - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(graphRef.current)
                  .append("svg")
                  .attr("width", graphWidth)
                  .attr("height", height + margin.top + margin.bottom)
                  .style("position", "absolute") // Fix position within its container
                  .style("left", "50%") // Center horizontally
                  .style("top", "50%") // Center vertically
                  .style("transform", "translate(-50%, -50%)") // Center the element
                  .append("g")
                  .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleTime()
                    .domain(d3.extent(data, d => d.time))
                    .range([0, width]);

    const yScale = d3.scaleLinear()
                    .domain([0, 10]) // Y-axis scale from 0 to 100 (initial)
                    .range([height, 0]);

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
        .attr("transform", `translate(0,${height})`)
        .call(xAxis);

    const yAxis = d3.axisLeft(yScale);
    svg.append("g")
        .call(yAxis);

    return () => {
      svg.selectAll("*").remove();
    };
  }, [data]);

  return <div ref={graphRef} style={{ width: '70%', position: 'absolute', top: 350, marginLeft:0 }}></div>;
};

export default PuneCity_gaslevel;
