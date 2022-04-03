<template>
  <Navbar />
  <TopNav/>
  <div class="container-lg">
    <DocList :AddNewDoctor = false />
  </div>
  
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import TopNav from '@/components/DocTopNav.vue'
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