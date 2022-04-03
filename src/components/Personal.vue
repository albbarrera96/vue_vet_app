<template>
    <!--COLLAPSE?--->
    <div class="btn-group my-1" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-dark" data-bs-toggle="collapse" data-bs-target="#collapseDoctors">Doctors</button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="collapse" data-bs-target="#collapseReceptionists">Receptionists</button>
        <button type="button" class="btn btn-dark" data-bs-toggle="collapse" data-bs-target="#collapsePatients">Patients</button>
        <button type="button" class="btn btn-secondary">Owners</button>
    </div>
    <!--DOCTORS-->
    <div class="collapse" id="collapseDoctors">
        <div class="card shadow-sm">
            <div class="card-body">
                <Doctors :AddNewDoctor = false />
            </div>
        </div>
    </div>
    <!---Receptionists----->
    <div class="collapse" id="collapseReceptionists">
        <div class="card shadow-sm mt-2">
            <div class="card-body">
                <Receptionists :AddReceptionist = false />
            </div>
        </div>
    </div>
    <!--Patients--->
    <div class="collapse" id="collapsePatients">
        <div class="card shadow-sm mt-2">
            <div class="card-body">
                <Patients :AddNewPatient = false />
            </div>
        </div>
    </div>
<br>
</template>

<script>
import Receptionists from '../components/Receptionists.vue'
import Patients from '../components/Patients.vue'
import Doctors from '../components/Doctors.vue'

export default {
    components: {
        Receptionists,
        Patients,
        Doctors
    },
    data() {
        return {

        }
    },
}
</script>