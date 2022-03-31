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
                <div class="table-responsive">
                    <table class="table table-light table-striped table-hover mt-5">
                        <thead>
                            <h3>Doctors</h3>
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
                            <tr v-for="(Doctor, index) in Doctors" :key="index">
                                <td>{{Doctor.code}}</td>
                                <td>{{Doctor.id}}</td>
                                <td>{{Doctor.name}}</td>
                                <td>{{Doctor.phoneNo}}</td>
                                <td>{{Doctor.email}}</td>
                                <td>
                                    <a href="#">View Details</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


    <!---Receptionists----->
    <div class="collapse" id="collapseReceptionists">
        <div class="card shadow-sm mt-2">
            <div class="card-body">
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
            </div>
        </div>
    </div>

    <!--Patients--->
    <div class="collapse" id="collapsePatients">
        <div class="card shadow-sm mt-2">
            <div class="card-body">
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
            </div>
        </div>
    </div>
<br>
</template>

<script>
export default {
    data() {
        return {
            Doctors: [
                {
                    code: 'D101', id: '123456789', name: 'Doctor Mengueche', phoneNo: '555-12345', email: 'drmengueche@gmail.com'
                }
            ],
            Receptionists: [
                {
                    code: 'S101', id: '123456789', name: 'Jane Doe', phoneNo: '555-54321', email: 'Janedoe@gmail.com'
                }
            ],
            Patients: [
                {
                    code: 'PT101', name: 'McQuade', owner: 'Chuck Norris', ownersPhone: '123456789', ownersEmail: 'chucknorris@gmail.com'
                }
            ]
        }
    },
}
</script>