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
                <li><router-link class="dropdown-item" to="/doctor/docs">Doctors List</router-link></li>
              </ul>
            </li>
            <!------>
            <li class="nav-item dropdown ms-4">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownReceptionists" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Receptionists
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownReceptionists">
                <li><router-link class="dropdown-item" to="#">Receptionists List</router-link></li>
              </ul>
            </li>
            <!-------->    
            <li class="nav-item dropdown ms-4">
              <router-link class="nav-link dropdown-toggle" to="#" id="navbarDropdownPatients" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Patients
              </router-link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownPatients">
                <li><router-link class="dropdown-item" href="#">Patients List</router-link></li>
                <li><router-link class="dropdown-item" href="#">Add a new Patient</router-link></li>  
              </ul>
            </li>
            <!------>
            <li class="nav-item dropdown ms-4">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownOwners" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Owners
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownOwners">
                <li><router-link class="dropdown-item" to="#">Action</router-link></li>
                <li><router-link class="dropdown-item" to="#">Another action</router-link></li>
                <li><hr class="dropdown-divider"></li>
                <li><router-link class="dropdown-item" to="#">Something else here</router-link></li>    
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