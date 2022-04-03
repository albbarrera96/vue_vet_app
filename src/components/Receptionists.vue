<template>
    <div class="table-responsive">
        <table class="table table-light table-striped table-hover mt-5">
            <thead>
                <h3>Receptionists</h3>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Contact No</th>
                        <th scope="col">Email</th>
                        <th scope="col">Details</th>
                    </tr>
            </thead>
            <tbody>
                <tr v-for="(Receptionist, index) in Receptionists" :key="index">
                    <td>{{Receptionist.code}}</td>
                    <td>{{Receptionist.id}}</td>
                    <td>{{Receptionist.name}}</td>
                    <td>{{Receptionist.phoneNo}}</td>
                    <td>{{Receptionist.email}}</td>
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
        AddReceptionist: Boolean,
    },
    data() {
        return {
            Receptionists: [
                {
                    code: 'S101', id: '123456789', name: 'Jane Doe', phoneNo: '555-54321', email: 'Janedoe@gmail.com'
                }
            ],            
        }
    },

}
</script>

<style>

</style>