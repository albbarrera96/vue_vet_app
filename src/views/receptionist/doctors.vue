<template>
  <Navbar />
  <TopNav/>
  <div class="container-lg">
        <div class="page-title-box d-flex align-items-center justify-content-between mt-4">
          <h4 class="mb-0 font-size-18">DOCTORS LIST</h4>
          <router-link class="page-title-right link-dark" to="/receptionist">Return to your Dashboard</router-link>
        </div>
    <DocList :AddNewDoctor = false />
  </div>
  
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import TopNav from '@/components/receptionist/ReceptTopNav.vue'
import DocList from '@/components/Doctors.vue'

export default {
    name: 'ReceptDocs',
    components: {
        Navbar,
        TopNav,
        DocList
    }
}
</script>

<style>

</style>