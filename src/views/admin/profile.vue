<template>
  <Navbar />
  <Topnav/>
    <div class="container-fluid">
    <Dash />
  </div>
  <footer>
  </footer>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Dash from '@/components/admin/AdminDash.vue'
import Topnav from '@/components/admin/AdminTopnav.vue'

export default {
    name: 'AdminProfile',
    components: {
        Navbar,
        Dash,
        Topnav
    }
}
</script>

<style>

</style>