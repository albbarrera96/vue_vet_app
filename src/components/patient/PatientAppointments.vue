<template>
  <div class="table-responsive">
        <table class="table table-light table-striped table-hover mt-3">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Owner's phone</th>
                    <th scope="col">Owner's Email</th>
                    <th scope="col">Date</th>
                    <th Scope="col">Time</th>
                    <th scope="col">Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01</td>
                    <td>McQuade</td>
                    <td>Chuck Norris</td>
                    <td>555-12345</td>
                    <td>chucknorris@gmail.com</td>
                    <td>06-04-2022</td>
                    <td>09:00-10:00</td>
                    <td>
                        <a href="#" class="btn btn-dark btn-sm">View Details</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-if = "AddNewAppointment === true">
        <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            New Appointment
        </button>
    </div>     
</template>

<script>
export default {
    props: {
        AddNewAppointment: Boolean
    }

}
</script>