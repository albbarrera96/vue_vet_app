<template>
  <div class="container-fluid">
    <div class="row py-4">
        <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0 font-size-18">DOCTORS LIST</h4>
                <a class="page-title-right" href="/#/admin">Return to your Dashboard</a>
            </div>
        </div>
    </div>
    <div class="container-lg">
        <div class="card shadow-sm mt-4 mb-4">
          <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-light table-striped table-hover mt-2">
                        <thead>
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
  </div>
</template>

<script>
export default {
    data() {
        return {
            Doctors: [
                {
                    code: 'D101', id: '123456789', name: 'Doctor Mengueche', phoneNo: '555-12345', email: 'drmengueche@gmail.com'
                },
                {
                    code: 'D102', id: '123456789', name: 'Doctor Strange', phoneNo: '555-54321', email: 'drstrange@gmail.com'
                },
                {
                    code: 'D103', id: '123456789', name: 'Doctor Faustus', phoneNo: '555-55555', email: 'drfaustus@gmail.com'
                }                
            ],
            methods: {
                
            },
        }
    },

}
</script>

<style>

</style>