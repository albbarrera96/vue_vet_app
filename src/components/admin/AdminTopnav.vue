<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid ms-5">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown ms-4">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownDoctors" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Doctors
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownDoctors">
                <li><router-link class="dropdown-item" to="/admin/docs">Doctors List</router-link></li>
                <li><router-link class="dropdown-item" to="/admin/docs">Add new doctor</router-link></li>
              </ul>
            </li>
            <!------>
            <li class="nav-item dropdown ms-4">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownReceptionists" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Receptionists
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownReceptionists">
                <li><router-link class="dropdown-item" to="#">Receptionists List</router-link></li>
                <li><router-link class="dropdown-item" to="#">Add new Receptionist</router-link></li>
              </ul>
            </li>
            <!-------->    
            <li class="nav-item dropdown ms-4">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPatients" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Patients
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownPatients">
                <li><router-link class="dropdown-item" to="#">Patients</router-link></li>
                <li><router-link class="dropdown-item" to="#">Add New Patient</router-link></li> 
              </ul>
            </li>
            <!------>
            <li class="nav-item dropdown ms-4">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownOwners" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Owners
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownOwners">
                <li><a class="dropdown-item" href="#">Pet Owners List</a></li>
                <li><a class="dropdown-item" href="#">Add Pet Owner</a></li>
              </ul>
            </li>
            <!------>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
    
}
</script>