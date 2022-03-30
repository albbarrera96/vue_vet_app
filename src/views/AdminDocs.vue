<template>
  <Navbar />
  <Topnav/>
    <div class="container-fluid bg-light">
    <Docs />
  </div>
  <footer>
    <div class="container-fluid bg-light">
      <p></p>
    </div>  
  </footer>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Docs from '@/components/AdminDocs.vue'
import Topnav from '@/components/AdminTopnav.vue'

export default {
    name: 'AdminDocs',
    components: {
        Navbar,
        Docs,
        Topnav
    }
}
</script>

<style>

</style>