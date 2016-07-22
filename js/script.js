
 $(document).ready(function(){
   var ctx = document.getElementById("mycanvas").getContext("2d");
   var myDoughnutChart = {
       type: 'doughnut',
       data:  {
              labels: [
                  "MOBILE",
                  "IPAD",
                  "DESKTOP"
              ],
              datasets: [
                  {
                      data: [49, 35, 16],
                      backgroundColor: [
                          "#34495e",
                          "#2ecc71",
                          "#3498db"
                      ],
                      hoverBackgroundColor: [
                          "#34495e",
                          "#2ecc71",
                          "#3498db"
                      ]
                  }]
          },
       options: {
         responsive: true
       }
   };
   var newChart = new Chart(ctx,myDoughnutChart);
});
