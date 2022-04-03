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
                                    <p>Admin Dashboard</p>
                                </div>
                            </div>
                            <!---<div class="col-5 align-self-end">
                                Add an image here
                            </div>-->
                        </div>
                    </div>
                    <div class="card-body pt-2">
                        <div class="row">
                            <div class="col-sm-4">
                                <p class="font-size-15 text-truncate">Admin Profile</p>
                                <p class="text-muted mb-0 text-truncate">Admin Dash</p>
                            </div>
                            <div class="col-sm-8">
                                <div class="row pt-4">
                                    <div class="col-6">
                                        <p class="mb-0">##</p>
                                        <label class="text-muted mb-0">Doctors</label>
                                    </div>
                                    <div class="col-6">
                                        <p class="mb-0">##</p>
                                        <label class="text-muted mb-0">Patients</label>                                      
                                    </div>
                                </div>
                                <div class="row pt-4">
                                    <div class="col-6">
                                        <p class="mb-0">##</p>
                                        <label class="text-muted mb-0">Receptionists</label>
                                    </div>
                                    <div class="col-6">
                                        <p class="mb-0">##</p>
                                        <label class="text-muted mb-0">Owners</label>                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mt-2 mb-2 shadow-sm">
                    <div class="card-body">
                        <p class="card-title mb-2">Monthly Earning</p>
                        <div class="row">
                            <div class="col-sm-6">
                                <h3>$0</h3>
                                <label class="text-muted mb-0">Patients</label>
                            </div>
                            <div class="col-sm-6">

                            </div>
                            <Pie/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-8">
                <div class="row">
                    <div class="col-md-4 mb-2">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <h6 class="text-muted">Total Appointments</h6>
                                <h4>4</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <h6 class="text-muted">Today's Earning</h6>
                                <h4>{{todayEarning}}$</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <h6 class="text-muted">Revenues</h6>
                                <h4>{{revenues}}$</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <h6 class="text-muted">Today's Appointments</h6>
                                <h4>7</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <h6 class="text-muted">Tomorrow's Appointments</h6>
                                <h4>3</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <h6 class="text-muted">Upcoming Appointments</h6>
                                <h4>20</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mt-4 shadow-sm">
                    <div class="card-body">
                        <h4 clas="card-title">Charts card...</h4>
                        <h5 class="text-muted mb-4">Record</h5>
                        <div class="text-center">
                            <Chart/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <Personal />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Personal from './Personal.vue'
import Chart from './BarChart.vue'
import Pie from './PieChart.vue'

export default {
    components: {
        Personal,
        Chart,
        Pie
    },
    data() {
        return {
            todayEarning: 20,
            revenues: 40
        }
    },
}
</script>