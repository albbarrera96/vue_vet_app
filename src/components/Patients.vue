<template>
    <div v-if = "AddNewPatient = true">
        <p>Add New Patient</p>
    </div>
    <div class="table-responsive">
        <table class="table table-light table-striped table-hover mt-5">
            <thead>
                <h3>Patients</h3>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Owner's phone</th>
                    <th scope="col">Owner's Email</th>
                    <th scope="col">Details</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(Patient, index) in Patients" :key="index">
                    <td>{{Patient.code}}</td>
                    <td>{{Patient.name}}</td>
                    <td>{{Patient.owner}}</td>
                    <td>{{Patient.ownersPhone}}</td>
                    <td>{{Patient.ownersEmail}}</td>
                    <td>
                        <a href="#">View Details</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div> 
</template>

<script>
export default {
    props: {
        AddNewPatient: Boolean
    },
    components: {

    },
    data() {
        return {
            Patients: [
                {
                    code: 'PT101', name: 'McQuade', owner: 'Chuck Norris', ownersPhone: '123456789', ownersEmail: 'chucknorris@gmail.com'
                }
            ]
        }
    }
}    
</script>

<style>

</style>