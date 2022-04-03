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
        <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Add new doctor
        </button>
        <div class="collapse mt-4 mb-4" id="collapseExample">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card px-4 shadow-sm py-4">
                        <p class="h4">Basic Information</p>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row mb-2 mt-2">
                                    <div class="col-md-12 form-group">
                                        <label for="" class="control-label">First Name </label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="row mb-2 mt-2">
                                    <div class="col-md-12 form-group">
                                        <label for="" class="control-label">Last Name</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="row mb-2 mt-2">
                                    <div class="col-md-12 form-group">
                                        <label for="" class="control-label">Email</label>
                                        <input type="email" class="form-control">
                                    </div>
                                </div>
                                <div class="row mb-2 mt-2">
                                    <div class="col-md-12 form-group">
                                        <label for="" class="control-label">Title</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="row mb-2 mt-2">
                                    <div class="col-md-12 form-group">
                                        <label for="" class="control-label">Degree</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="row mb-2 mt-2">
                                    <div class="col-md-12 form-group">
                                        <label for="" class="control-label">Experience</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>                                                                                                                                                                
                            </div>
                            <div class="col-md-6">
                                <div class="row mb-2 mt-2">
                                    <div class="col-md-12 form-group">
                                        <label for="" class="control-label">Fees</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="row mb-2 mt-2">
                                    <label for="" class="control-label">Available Days</label>
                                    <div class="col-md-12 form-group">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                            <label class="form-check-label" for="inlineCheckbox1">Sun</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                            <label class="form-check-label" for="inlineCheckbox2">Mon</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                                            <label class="form-check-label" for="inlineCheckbox3">Tue</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                            <label class="form-check-label" for="inlineCheckbox1">Wed</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                                            <label class="form-check-label" for="inlineCheckbox2">Thu</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                                            <label class="form-check-label" for="inlineCheckbox3">Fri</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                                            <label class="form-check-label" for="inlineCheckbox3">Sat</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <label for="" class="control-label">Slots Time (In Minute)</label>
                                            <input type="time" class="form-control">
                                        </div>
                                        <div class="col-md-12">
                                            <p for="" class="control-label">Schedule</p>
                                            <label for="" class="control-label">From</label>
                                            <input type="time" class="form-control">
                                            <label for="" class="control-label">To</label>
                                            <input type="time" class="form-control">
                                        </div>
                                    </div>                                                                                                                       
                                </div>                               
                            </div>
                        </div>
                    </div>
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