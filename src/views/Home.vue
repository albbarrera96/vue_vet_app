<template>
  <Navbar />
  <Bar />
  <Pie />
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Bar from '@/components/BarChart.vue'
import Pie from '@/components/PieChart.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Bar,
    Pie
  }

}
</script>
