import React from 'react';

import './worldmap.styl'

export default class WorldMap extends React.Component {

  constructor() {
    super();
    this.state = {
      centered: undefined
    };
  }

  clickCountry() {
    //Takes country id, finds country data and passes to centerCountry
    const countryClickedData = this.state.geoData.reduce((all,country,index) => {
      if (country.id == d.id) {
        all = country;
        all.name = this.state.idbyname[d.id];
      }
      return all;
    },{});
    this.state.centerCountry(countryClickedData);
  }

  centerCountry(d) {

    if (!d.name) {d.name = this.state.idbyname[d.id];}

    var tempThis = this;
    var x, y, k;

    if (d && this.state.centered !== d) {
      var centroid = tempThis.state.path.centroid(d);
      x = centroid[0];
      y = centroid[1];
      k = 2;
      this.state.centered = d;
    } else {
      x = tempThis.state.width / 2;
      y = tempThis.state.height / 2;
      k = 1;
      this.state.centered = null;
    }

    this.state.g.selectAll("path")
      .classed("country-active", tempThis.state.centered && function(d) { return d === tempThis.state.centered; });

    this.state.g.transition()
      .duration(750)
      .attr("transform", "translate(" + tempThis.state.width / 2 + "," + tempThis.state.height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");

  }

  render() {
    return (
      <svg id="worldmap"/>
    );
  }


  componentDidMount() {

    const tempThis = this;
    this.state.mapEl = document.getElementById('worldmap');
    this.state.mapElRect = this.state.mapEl.getBoundingClientRect();
    this.state.svg = d3.select(this.state.mapEl),
    this.state.width = parseInt(this.state.mapElRect.width, 10),
    this.state.height = parseInt(this.state.mapElRect.height, 10);
    this.state.projection = d3.geo.mercator()
        .scale((this.state.width - 3) / (2 * Math.PI))
        .translate([this.state.width / 2, this.state.height / 1.2])
        .rotate([0,0]);
    this.state.path = d3.geo.path()
        .projection(this.state.projection);
    this.state.g = this.state.svg.append("g");
    this.state.idbyname = {};

    //Load countrynames
    d3.csv("dev/data/countrynames.csv",function(error, data){
      data.forEach(function(d){
        tempThis.state.idbyname[d.id] = d.name;
      });
    });
    
    // load and display the World
    d3.json("dev/data/world.json", function(error, topology) {
      tempThis.state.geoData = topojson.object(topology, topology.objects.countries).geometries;
      tempThis.state.g.selectAll("path")
        .data(tempThis.state.geoData)
        .enter()
          .append("path")
          .attr("c-id", (d) => d.id)
          .attr("d", tempThis.state.path)
          .on("click", tempThis.centerCountry.bind(tempThis));

    }); 
            
    // zoom and pan
    var zoom = d3.behavior.zoom()
      .on("zoom",function() {
        tempThis.state.g.attr("transform","translate("+ 
          d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        // tempThis.state.g.selectAll("circle")
        //   .attr("d", tempThis.state.path.projection(tempThis.state.projection));
        // tempThis.state.g.selectAll("path")  
        //   .attr("d", tempThis.state.path.projection(tempThis.state.projection)); 

      });

    this.state.svg.call(zoom);
  }

}
