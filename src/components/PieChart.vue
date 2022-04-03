<template>
    <div id="chart">
         <apexchart width="320" type="donut" :options="chartOptions" :series="series" :labels="labels"></apexchart>
      </div>
</template>

<script>

import VueApexCharts from "vue3-apexcharts"

export default {
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            series: [44, 55, 41, 17, 15],
            chartOptions: {
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                
            },
         }
    }
}
</script>

