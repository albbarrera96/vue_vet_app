<template>
  <div class="container-fluid">
    <div class="row py-4">
        <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0 font-size-18">Doctor List</h4>
                <a class="page-title-right" href="/#/admin">Return to your Dashboard</a>
            </div>
        </div>
    </div>
    <div class="container-lg">
        <div class="card shadow-sm">
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
                }
            ],
        }
    },

}
</script>

<style>

</style>