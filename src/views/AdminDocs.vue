<template>
  <Navbar />
  <Topnav/>
    <div class="container-fluid">
      <Docs />
      <br>
      <br>
      <br>
      <br>
    </div>
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