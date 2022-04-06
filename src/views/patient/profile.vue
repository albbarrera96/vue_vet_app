<template>
  <Navbar />
  <TopNav />
    <div class="container-fluid">
    <Dash />
  </div>
  <footer>
  </footer>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Dash from '@/components/patient/PatientDash.vue'
import TopNav from '@/components/patient/PatientTopnav.vue'

export default {
    name: 'PatientProfile',
    components: {
        Navbar,
        Dash,
        TopNav
    }
}
</script>

<style>

</style>