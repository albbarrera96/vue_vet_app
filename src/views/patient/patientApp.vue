<template>
    <Navbar />
    <TopNav />
    <div class="container-lg mt-4">
        <div class="card">
            <AppointmentList :AddNewAppointment = false />
        </div>
    </div>
</template>

<script>
import AppointmentList from '@/components/patient/PatientAppointments.vue'
import Navbar from '@/components/Navbar.vue'
import TopNav from '@/components/patient/PatientTopNav.vue'

export default {
    components: {
        Navbar,
        TopNav,
        AppointmentList
    }
}
</script>

<style>

</style>