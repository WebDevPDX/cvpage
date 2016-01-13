// Wait for the DOM to load everything, just to be safe
$(document).ready(function() {

	var height = $(window).innerHeight()

	$('.handle').click(function(){
		$('nav ul').toggleClass('showing');
	});

	$('.overlayContainer').css({'height' : height});

	$('.overlayButton').click(function(){

		$('body, html').scroll().animate({
			scrollTop : height - 58
		},1500);
	});

	// Create our graph from the data table and specify a container to put the graph in
   createGraph('#data-table', '.chart');

    // Here be graphs
   function createGraph(data, container) {

      // Declare some common variables and container elements
		var bars = [];
		var figureContainer = $('<div id="figure"></div>');
		var graphContainer = $('<div class="graph"></div>');
		var barContainer = $('<div class="bars"></div>');
		var data = $(data);
		var container = $(container);
		var chartData;
		var chartYMax;
		var columnGroups;

		// Timer variables
		var barTimer;
		var graphTimer;

      // Create the table data object
      var tableData = {
        // Get numerical data from table cells
		chartData: function() {
			var chartData = [];
			data.find('tbody td').each(function() {
				chartData.push($(this).text());
			});
			return chartData;
		},
		// Get heading data from table caption
		chartHeading: function() {
			var chartHeading = data.find('caption').text();
			return chartHeading;
		},
		// Get legend data from table body
		chartLegend: function() {
			var chartLegend = [];
			// Find th elements in table body - that will tell us what items go in the main legend
			data.find('tbody th').each(function() {
				chartLegend.push($(this).text());
			});
			return chartLegend;
		},
		// Get highest value for y-axis scale
		chartYMax: function() {
		  …
		},
		// Get y-axis data from table cells
		yLegend: function() {
		  …
		},
		// Get x-axis data from table header
		xLegend: function() {
		  …
		},
		// Sort data into groups based on number of columns
		columnGroups: function() {
			var columnGroups = [];
			// Get number of columns from first row of table body
			var columns = data.find('tbody tr:eq(0) td').length;
			for (var i = 0; i < columns; i++) {
			columnGroups[i] = [];
			data.find('tbody tr').each(function() {
			 columnGroups[i].push($(this).find('td').eq(i).text());
			});
		}
	}

      // Useful variables to access table data
      …

      // Construct the graph
      …

      // Set the individual heights of bars
      function displayGraph(bars) {
         …
      }

      // Reset the graph's settings and prepare for display
      function resetGraph() {
         …
         displayGraph(bars);
      }

      // Helper functions
      …

      // Finally, display the graph via reset function
      resetGraph();
   }

}); //closing doc.ready


















// // requestAnimationFrame Shim
// (function() {
//   var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
//                             window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
//  							window.requestAnimationFrame = requestAnimationFrame;})();
 

// $.each(itSkills, function(key, value){
// 	console.log(key);
// 	console.log(value);
// 	var canvas = document.getElementById('it');
// 	console.log(canvas);
// 	var context = canvas.getContext('2d');
// 	var x = canvas.width / 10;
// 	var y = canvas.height / 2;
// 	var radius = 65;
// 	var endPercent = value;
// 	var curPerc = 0;
// 	var counterClockwise = false;
// 	var circ = Math.PI * 2;
// 	var quart = Math.PI / 2;

// 	context.lineWidth = 8;
// 	context.shadowBlur = 5;
// 	context.shadowColor = '#888';

// 	function animate(current) {
// 		// context.clearRect(0, 0, canvas.width, canvas.height);
// 		context.beginPath();
// 		context.strokeStyle = '#AF1B1B';
// 		context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
// 		context.stroke();
// 		curPerc++;
// 		if (curPerc < endPercent) {
// 			requestAnimationFrame(function () {
// 				animate(curPerc / 100)
// 			});
// 		}

// 	}

// animate;

// x ++;
	
// });


//http://provide.smashingmagazine.com/graph_tut_files/ex_03.html