<template>
    <Navbar />
    <TopNav />
    <div class="container-lg">
        <h3 class="mt-4 mb-4">Appointments</h3>
        <AppointmentList :AddNewAppointment = false />
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