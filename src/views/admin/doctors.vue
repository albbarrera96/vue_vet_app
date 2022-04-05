<template>
  <Navbar />
  <Topnav/>
    <div class="container-lg">
            <div class="page-title-box d-flex align-items-center justify-content-between mt-4">
                <h4 class="mb-0 font-size-18">DOCTORS LIST</h4>
                <a class="page-title-right link-dark" href="/#/admin">Return to your Dashboard</a>
            </div>      
      <Docs :AddNewDoctor = true />
    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Docs from '@/components/Doctors.vue'
import Topnav from '@/components/admin/AdminTopnav.vue'

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