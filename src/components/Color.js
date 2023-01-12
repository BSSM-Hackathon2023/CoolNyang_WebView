import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Color = () => {
    const canvasRef = useRef(null);
    const data = [10.2, 6.3, 5.8, 2.5, 8.7, 7.5, 9.8];
    const colors = [
        "#ff9800",
        "#ffa726",
        "#ffb74d",
        "#ffcc80",
        "#ffe0b2",
        "#fff3e0",]

    useEffect(() => {
        const canvas = d3.select(canvasRef.current);
        const svg = canvas.append('svg').attr('width', 350).attr('height', 300).attr('transform', 'translate(0, 0)')

        const arcGenerator = d3.arc().innerRadius(65).outerRadius(92);
        const pieGenerator = d3.pie();

        const color = d3.scaleOrdinal([
            "#ff9800",
            "#ffa726",
            "#ffb74d",
            "#ffcc80",
            "#ffe0b2",
            "#fff3e0",
        ]);

        const g = svg.append('g').attr('transform', 'translate(110, 150)');
        g.selectAll('path')
            .data(pieGenerator(data))
            .enter()
            .append('path')
            .attr("fill", 'transparent')
            .attr('d', arcGenerator)
            .transition()
            .duration(2000)
            .attr("fill", (d, i) => color(i))

        const A = data.sort(function (a, b) {
            if (a > b) return 1;
            if (a === b) return 0;
            if (a < b) return -1;
        })
        A.reverse().forEach((data, index) => {
            svg.append('text')
                .attr('x', 230)
                .attr('y', (index + 1) * 29 + 50)
                .text(`${String(colors[index]).toUpperCase()} - ${data}h`)
                .style('font-weight', '700')
                .style('font-size', '11px')
                .transition()
                .duration(2000)
                .style('fill', colors[index])
        });
    }, [])

    return (
        <div ref={canvasRef}></div>
    );
};

export default Color;