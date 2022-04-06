<template>
  <Navbar />
  <TopNav/>
  <Dash />
  
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import TopNav from '@/components/receptionist/ReceptTopNav.vue'
import Dash from '@/components/receptionist/ReceptDash.vue'

export default {
    name: 'ReceptProfile',
    components: {
        Navbar,
        TopNav,
        Dash
    }
}
</script>

<style>

</style>