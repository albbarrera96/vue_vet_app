<template>
  <Navbar />
  <TopNav/>
  <Dash />
  
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import TopNav from '@/components/doctor/DocTopNav.vue'
import Dash from '@/components/doctor/DocDash.vue'

export default {
    name: 'DocProfile',
    components: {
        Navbar,
        TopNav,
        Dash
    }
}
</script>

<style>

</style>