//Declare SVG dimension variables
var width = 1250; 
var height = 625;
// Declare variable for the state circles
var circles;

// Declare variable for tootip


// Create the SVG in the chart div with the predefined dimensions 
var svg = d3.select('body')
    .append('svg')
    .attr('width', width + 'px')
    .attr('height', height + 'px');

var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// Import the data using d3 and create function to render the chart
d3.csv('data.csv').then(function(data){
    // console.log(data);

    // Create variables holding extents for smokes and age as X and Y
    xExtent=d3.extent(data, function(d){
        return parseFloat(d.smokes);
    })

    yExtent=d3.extent(data, function(d){
        return parseFloat(d.age);
    })

    // Create variables that take the extents and use scales to scale them up to the size of the chart area to avoid bunching
    xScale=d3.scaleLinear()
        .domain([xExtent[0],xExtent[1]])
        .range([50,1200])

    yScale=d3.scaleLinear()
        .domain([yExtent[1],yExtent[0]])
        .range([50,575])

    // Create the X and Y scales using the linear scales
    xAxis=d3.axisBottom(xScale);
    xAxisGroup=svg.append('g')
        .attr('id','xAxis')
        .attr('class', 'axis');
    xAxisGroup.call(xAxis)
        .attr('transform', 'translate(0,585)');

    yAxis=d3.axisLeft(yScale);
    yAxisGroup=svg.append('g')
        .attr('id','yAxis')
        .attr('class','axis');
    yAxisGroup.call(yAxis)
        .attr('transform','translate(40,0)');

    // Create the labels for the scales at the bottom and left
    svg.append("text")
        .attr('x',625)
        .attr('y', 615)
        .attr('fill', 'black')
        .attr('stroke','none')
        .attr('text-anchor', 'middle')
        .attr('font-size', '16')
        .text("% Population: Smokers");

    svg.append("text")
        .attr('x',-312)
        .attr('y', 14)
        .attr('fill', 'black')
        .attr('stroke','none')
        .attr('text-anchor', 'middle')
        .attr('font-size', '16')
        .attr('transform', 'rotate(-90)')
        .text("Ave Population Age");


    // Create the state circles using smokes as X and age as Y positions
    circles = svg.selectAll('.dot')
        .data(data)
        .enter()
        .append('circle')
        .attr('class', 'dot')
        .attr('cx',function(d){
            return xScale(d.smokes);
        })
        .attr('cy',function(d){
            return yScale(d.age);
        })
        .attr('r',10)
        .attr('fill','#89bdd3')

        .on("mouseover", function(event,d) {
            div.transition()
              .duration(200)
              .style("opacity", .9);
            div.html("SMOKERS: "+d.smokes + "<br/>" + "AGE: "+d.age)
              .style("left", (event.pageX) + "px")
              .style("top", (event.pageY - 28) + "px");
            })
        .on("mouseout", function(d) {
            div.transition()
                .duration(500)
                .style("opacity", 0);
        });

// 
    // Create the state labels within the state circles 
    states=svg.selectAll('.state')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'state')
        .attr('x',function(d){
            return xScale(d.smokes);
        })
        .attr('y',function(d){
            return yScale(d.age);
        })
        .attr('fill','#fff')
        .attr('stroke','none')
        .attr('text-anchor','middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size','10')
        .text(function(d){
            return d.abbr;
        })




});
 

