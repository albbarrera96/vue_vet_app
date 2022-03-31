<template>
  <Navbar />
  <Bar />
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Bar from '@/components/BarChart.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Bar
  }

}
</script>
