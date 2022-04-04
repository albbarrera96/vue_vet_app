<template>
  <div class="card">
    <apexchart
      width="400"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>

import VueApexCharts from "vue3-apexcharts"

export default {
    components: {
        apexchart: VueApexCharts,
    },
  data: function() {
    return {
      Appointments: 99,
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 100, 115, 120, 150],
        },
      ],
    };
  },
}
</script>