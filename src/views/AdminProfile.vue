<template>
  <Navbar />
  <div class="container-fluid bg-light">
    <Dash />
  </div>
  
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Dash from '@/components/AdminDash.vue'

export default {
    name: 'AdminProfile',
    components: {
        Navbar,
        Dash
    }
}
</script>

<style>

</style>