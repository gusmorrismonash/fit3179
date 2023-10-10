        // var spec2 = "js/stacked_bar_chart.vg.json";
var spec1 = "bubblechart.json"
var spec2 = "map.json"


vegaEmbed('#plot1', spec1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#map1', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

