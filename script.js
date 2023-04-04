// Load google charts
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const data = google.visualization.arrayToDataTable([
    ["Day", "$", { role: "style" }],
    ["mon", 17.45, "#ec775f"],
    ["tue", 34.91, "#ec775f"],
    ["wed", 52.36, "#76b5bc"],
    ["thu", 31.07, "#ec775f"],
    ["fri", 23.39, "#ec775f"],
    ["sat", 43.28, "#ec775f"],
    ["sun", 25.48, "#ec775f"],
  ]);
  const options = {
    title: "Spending - Last 7 days",
    titleFontSize: "20",
    titleColor: "#382314",
    fontSize: "15",
    width: 500,
    height: 210,
    bar: { groupWidth: "80%" },
    legend: { position: "none" },
    backgroundColor: { fill: "transparent" },
    vAxis: { textPosition: "none" },
    gridLines: { count: 0 },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("col-chart")
  );
  chart.draw(data, options);
}
// ----------------------
