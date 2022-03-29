<template>
  <Navbar />
  <div class="container-fluid bg-light">
    <Dash />
  </div>
  
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Dash from '@/components/DocDash.vue'

export default {
    name: 'DocProfile',
    components: {
        Navbar,
        Dash
    }
}
</script>

<style>

</style>