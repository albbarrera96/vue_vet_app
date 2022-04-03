<template>
  <Navbar />
  <TopNav/>
  <Dash />
  
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import TopNav from '@/components/DocTopNav.vue'
import Dash from '@/components/DocDash.vue'

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