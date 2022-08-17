var xValues = ["12/mar", "13/mar", "14/mar", "15/mar", "16/mar"];
var yValues = [35, 5, 90, 14, 55];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display:false},
  }
});