<template>
    <div class="container-lg">
        <div class="row py-4">
            <div class="col-12">
                <div class="page-title-box d-flex align-items-center justify-content-between">
                    <h4 class="mb-0 font-size-18">Dashboard</h4>
                    <div class="page-title-right">Welcome to your Dashboard</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-4">
                <div class="card overflow-hidden shadow-sm">
                    <div class="bg-dark">
                        <div class="row">
                            <div class="col-7">
                                <div class="text-light p-3">
                                    <h5 class="text-light">Welcome Back!</h5>
                                    <p>Patient's Name</p>
                                </div>
                            </div>
                            <!---<div class="col-5 align-self-end">
                                Add an image here
                            </div>-->
                        </div>
                    </div>
                    <div class="card-body pt-2">
                        <div class="row">
                            <div class="col-md-6">
                                <p class="font-size-15 text-truncate">Owner: </p>
                                <a href="" class="text-muted mb-0 text-truncate">Owner's name</a>
                            </div>
                            <div class="col-sm-8">
                                <div class="row pt-4">
                                    <div class="col-6">
                                        <p class="mb-0">Species:</p>
                                        <label class="text-muted mb-0">Dog</label>
                                    </div>
                                    <div class="col-6">
                                        <p class="mb-0">Age:</p>
                                        <label class="text-muted mb-0">4</label>                                      
                                    </div>
                                </div>
                                <div class="row pt-4">
                                    <div class="col-6">
                                        <p class="mb-0">Breed:</p>
                                        <label class="text-muted mb-0">Syberian Husky</label>
                                    </div>
                                    <div class="col-6">
                                        <p class="mb-0">Weight:</p>
                                        <label class="text-muted mb-0">20 Kg</label>                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mt-2 mb-2 shadow-sm">
                    <div class="card-body">
                        <p class="card-title mb-4 fw-bold">Monthly Expenses</p>
                        <div class="row">
                            <div class="col-sm-6"></div>
                            <div class="col-sm-6"></div>
                                
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-8">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <h6 class="text-muted">Total Appointments</h6>
                                <a class="h4" href="#">0</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <h6 class="text-muted">Tomorrow's Appointments</h6>
                                <a class="h4" href="#">4</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mt-4 mb-4">
                    <div class="card-body shadow-sm">
                        <h4 class="card-title">Medical Information</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card shadow-sm">
                        <div class="card-title mt-3 ms-3">
                            <h4>Recent Appointments</h4> 
                        </div>
                        <div class="card-body">
                            <Appointments/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
</template>

<script>
// import Personal from './Personal.vue'
// import BarChart from '../BarChart.vue'
import Appointments from './PatientAppointments.vue'

export default {
    components: {
        // Personal,
        // BarChart,
        Appointments
    }
}
</script>