<template>
    <div id="chart">
         <apexchart width="300" type="donut" :options="options" :series="series"></apexchart>
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
            options: {},
            series: [44, 55, 41, 17, 15]
         }
    }
}
</script>

