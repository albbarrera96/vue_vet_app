<template>
  <Navbar />
  <TopNav/>
    <div class="container-lg">
        <div class="page-title-box d-flex align-items-center justify-content-between mt-4">
          <h4 class="mb-0 font-size-18">DOCTORS LIST</h4>
          <a class="page-title-right link-dark" href="/#/patient">Return to your Dashboard</a>
        </div>
      <DocList :AddNewDoctor = false />
    </div>
  
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import TopNav from '@/components/patient/PatientTopNav.vue'
import DocList from '@/components/Doctors.vue'

export default {
    name: 'DocProfile',
    components: {
        Navbar,
        TopNav,
        DocList
    }
}
</script>

<style>

</style>