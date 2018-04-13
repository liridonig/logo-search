/*if (document.getElementById('chart8') instanceof Object)
{*/
/*2 variant*/
if (document.getElementById('chart8') instanceof Object)
{greenChart('chart8');}

function greenChart (ChartID){
  
 Chart.defaults.global.animationEasing      = 'easeInOutQuad';
Chart.defaults.global.responsive             = true;
Chart.defaults.global.scaleOverride          = true;
Chart.defaults.global.scaleShowLabels        = true;
Chart.defaults.global.scaleSteps             = 5;
Chart.defaults.global.scaleStepWidth         = 50;
Chart.defaults.global.scaleStartValue        = 0;
Chart.defaults.global.tooltipFontFamily      = 'Open Sans';
Chart.defaults.global.tooltipFillColor       = '#FFFFFF';
Chart.defaults.global.tooltipFontColor       = '#6E6E6E';
Chart.defaults.global.tooltipCaretSize       = 0;
Chart.defaults.global.maintainAspectRatio    = true;
  
Chart.defaults.Line.scaleShowVerticalLines   = false;
Chart.defaults.Line.scaleShowHorizontalLines = true;
Chart.defaults.Line.scaleGridLineColor       = '#000';
Chart.defaults.Line.scaleLineColor           = '#000';
Chart.defaults.Line.bezierCurve = false;

var chart  = document.getElementById(ChartID).getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 750);

var data  = {
    labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ],
  
    datasets: [
        {
          label: 'Custom Label Name',
          fillColor: gradient,
          strokeColor: '#f99d1b',
          pointColor: '#f99d1b',
          pointStrokeColor: '#f99d1b',
          pointHighlightFill: '#000',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: [75, 155, 165, 170, 195, 150, 200, 130, 120, 180, 136, 160]
        }
    ]
};

//gradient.addColorStop(0, 'rgba(1,168,243, 0.7)');
//gradient.addColorStop(0.5, 'rgba(206,84,42, 0.25)');
//gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
    
var chart = new Chart(chart).Line(data);
}
/*greenChart('chart8');*/

