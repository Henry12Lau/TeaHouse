window.onload = function () {
  ageRange();
  teaYear();
  teaChart();
  teaOutput();
  }

  function ageRange() {
    let ageChart = new CanvasJS.Chart("ageChart", {
      animationEnabled: true,
      title:{
        text: "Age Range",
        horizontalAlign: "left"
      },
      data: [{
        type: "doughnut",
        startAngle: 60,
        //innerRadius: 60,
        indexLabelFontSize: 17,
        indexLabel: "{label} - #percent%",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
          { y: 20, label: "18-24" },
          { y: 30, label: "25-34" },
          { y: 25, label: "35-44" },
          { y: 15, label: "45-54"},
          { y: 10, label: "55＋"},
        ]
      }]
    });
    ageChart.render();
  }

  function teaYear() {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,  
      title:{
        text: "Tea Sales of Global by Year",
        horizontalAlign: "left"
      },
      axisY: {
        title: "Units Sold",
        valueFormatString: "#0,,.",
        suffix: "mt",
        stripLines: [{
          value: 3366500,
          label: "Average"
        }]
      },
      data: [{
        yValueFormatString: "#,### Units",
        xValueFormatString: "YYYY",
        type: "spline",
        dataPoints: [
          {x: new Date(2013, 0), y: 3394000},
          {x: new Date(2014, 0), y: 3872000},
          {x: new Date(2015, 0), y: 4140000},
          {x: new Date(2016, 0), y: 4989000},
          {x: new Date(2017, 0), y: 5820000},
          {x: new Date(2018, 0), y: 5909000},
          {x: new Date(2019, 0), y: 5840000},
          {x: new Date(2020, 0), y: 5396000},
          {x: new Date(2021, 0), y: 5613000},
          {x: new Date(2022, 0), y: 6821000},
          {x: new Date(2023, 0), y: 7289000}
        ]
      }]
    });
    chart.render();
  }

  function teaChart() {
    let teaChart = new CanvasJS.Chart("teaChart", {
      animationEnabled: true,
      title:{
        text: "Tea Preferences",
        horizontalAlign: "left"
      },
      data: [{
        type: "doughnut",
        startAngle: 60,
        //innerRadius: 60,
        indexLabelFontSize: 17,
        indexLabel: "{label} - #percent%",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
          { y: 35, label: "Green Tea" },
          { y: 25, label: "Black Tea" },
          { y: 20, label: "Herbal Tea" },
          { y: 15, label: "Oolong Tea"},
          { y: 5, label: "White Tea"},
        ]
      }]
    });
    teaChart.render();
  }

  function teaOutput() {
    var chart = new CanvasJS.Chart("teaOutput", {
      animationEnabled: true,
      title: {
        text: "Tea GDP of Countries: 2023",
        horizontalAlign: "left"
      },
      axisX: {
        interval: 1
      },
      axisY: {
        title: "Expenses in Billion Dollars",
        includeZero: true,
        scaleBreaks: {
          type: "wavy",
          customBreaks: [{
            startValue: 80,
            endValue: 210
            },
            {
              startValue: 230,
              endValue: 600
            }
        ]}
      },
      data: [{
        type: "bar",
        toolTipContent: "<img src=\"https://canvasjs.com/wp-content/uploads/images/gallery/javascript-column-bar-charts/\"{url}\"\" style=\"width:40px; height:20px;\"> <b>{label}</b><br>Budget: ${y}bn<br>{gdp}% of GDP",
        dataPoints: [
          { label: "United Arab Emirates", y: 22.8, gdp: 5.7, url: "uae.png" },
          { label: "Japan", y: 46.1, gdp: 1.0, url: "japan.png" },
          { label: "United Kingdom", y: 48.3, gdp: 1.9, url: "uk.png" },
          { label: "India", y: 55.9, gdp: 2.5, url: "india.png" },
          { label: "China", y: 215.7, gdp: 1.9, url: "china.png" },
        ]
      }]
    });
    chart.render();
  }

  