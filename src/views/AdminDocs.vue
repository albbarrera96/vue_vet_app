<template>
  <Navbar />
  <Topnav/>
    <div class="container-lg">
      <Docs :AddNewDoctor = true />
    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Docs from '@/components/Doctors.vue'
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