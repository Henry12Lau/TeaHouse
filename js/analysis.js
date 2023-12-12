window.onload = function () {
  ageRange();
  teaYear();
  teaChart();
  teaOutput();
  document.querySelector('#ageChart > div > a').innerHTML = ''
  document.querySelector('#teaChart > div > a').innerHTML = ''
  document.querySelector('#outputChart > div > a').innerHTML = ''
  document.querySelector('#salesChart > div > a').innerHTML = ''
}

function ageRange() {
  // let ageChart = new CanvasJS.Chart("ageChart", {
  //   animationEnabled: true,
  //   title: {
  //     text: "",
  //     horizontalAlign: "left"
  //   },
  //   data: [{
  //     type: "doughnut",
  //     startAngle: 60,
  //     //innerRadius: 60,
  //     indexLabelFontSize: 17,
  //     indexLabel: "{label} - #percent%",
  //     toolTipContent: "<b>{label}:</b> {y} (#percent%)",
  //     dataPoints: [{
  //         y: 20,
  //         label: "18-24"
  //       },
  //       {
  //         y: 30,
  //         label: "25-34"
  //       },
  //       {
  //         y: 25,
  //         label: "35-44"
  //       },
  //       {
  //         y: 15,
  //         label: "45-54"
  //       },
  //       {
  //         y: 10,
  //         label: "55＋"
  //       },
  //     ]
  //   }]
  // });
  let ageChart = new CanvasJS.Chart("ageChart", {
    animationEnabled: true,
    theme: "theme2",
    legend: {
      fontSize: 14
    },
    toolTip: {
      borderThickness: 0,
      content: "<span style='\"'color: {color};'\"'>{name}</span> (#percent%)",
      cornerRadius: 0
    },
    data: [
      {       
        indexLabelFontColor: "#676464",
        indexLabelFontSize: 14,
        legendMarkerType: "square",
        legendText: "{indexLabel}",
        showInLegend: true,
        startAngle:  90,
        type: "pie",
        dataPoints: [
          {  y: 41000, name:"18-24", indexLabel: "18-24", legendText: "18-24", exploded: true },
          {  y: 18000, name:"25-34", indexLabel: "25-34", legendText: "25-34" },
          {  y: 24000, name:"35-44", indexLabel: "35-44", legendText: "35-44", color: "#8064a1" },
          {  y: 17000, name:"45-54", indexLabel: "45-54", legendText: "45-54" },
          {  y: 17000, name:"55+", indexLabel: "55+", legendText: "55+" }
        ]
      }
    ]
  });
  
  ageChart.render();
}

function teaYear() {
  let chart = new CanvasJS.Chart("salesChart", {
    animationEnabled: true,
    title: {
      text: "",
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
      dataPoints: [{
          x: new Date(2013, 0),
          y: 3394000
        },
        {
          x: new Date(2014, 0),
          y: 3872000
        },
        {
          x: new Date(2015, 0),
          y: 4140000
        },
        {
          x: new Date(2016, 0),
          y: 4989000
        },
        {
          x: new Date(2017, 0),
          y: 5820000
        },
        {
          x: new Date(2018, 0),
          y: 5909000
        },
        {
          x: new Date(2019, 0),
          y: 5840000
        },
        {
          x: new Date(2020, 0),
          y: 5396000
        },
        {
          x: new Date(2021, 0),
          y: 5613000
        },
        {
          x: new Date(2022, 0),
          y: 6821000
        },
        {
          x: new Date(2023, 0),
          y: 7289000
        }
      ]
    }]
  });
  chart.render();
}

function teaChart() {
  let teaChart = new CanvasJS.Chart("teaChart", {
    animationEnabled: true,
    title: {
      text: "",
      horizontalAlign: "left"
    },
    data: [{
      type: "doughnut",
      startAngle: 60,
      //innerRadius: 60,
      indexLabelFontSize: 17,
      indexLabel: "{label} - #percent%",
      toolTipContent: "<b>{label}:</b> {y} (#percent%)",
      dataPoints: [{
          y: 35,
          label: "Green Tea"
        },
        {
          y: 25,
          label: "Black Tea"
        },
        {
          y: 20,
          label: "Herbal Tea"
        },
        {
          y: 15,
          label: "Oolong Tea"
        },
        {
          y: 5,
          label: "White Tea"
        },
      ]
    }]
  });
  teaChart.render();
}

function teaOutput() {
  var chart = new CanvasJS.Chart("outputChart", {
    animationEnabled: true,
    title: {
      text: "",
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
        ]
      }
    },
    data: [{
      type: "bar",
      toolTipContent: "<img src=\"https://canvasjs.com/wp-content/uploads/images/gallery/javascript-column-bar-charts/\"{url}\"\" style=\"width:40px; height:20px;\"> <b>{label}</b><br>Budget: ${y}bn<br>{gdp}% of GDP",
      dataPoints: [{
          label: "United Arab Emirates",
          y: 22.8,
          gdp: 5.7,
          url: "uae.png"
        },
        {
          label: "Japan",
          y: 46.1,
          gdp: 1.0,
          url: "japan.png"
        },
        {
          label: "United Kingdom",
          y: 48.3,
          gdp: 1.9,
          url: "uk.png"
        },
        {
          label: "India",
          y: 55.9,
          gdp: 2.5,
          url: "india.png"
        },
        {
          label: "China",
          y: 215.7,
          gdp: 1.9,
          url: "china.png"
        },
      ]
    }]
  });
  chart.render();
}