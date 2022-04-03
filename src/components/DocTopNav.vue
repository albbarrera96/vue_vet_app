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
                <li><a class="dropdown-item" href="/#/admin/docs">Doctors List</a></li>
              </ul>
            </li>
            <!------>
            <li class="nav-item dropdown ms-4">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownReceptionists" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Receptionists
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownReceptionists">
                <li><a class="dropdown-item" href="#">Receptionists List</a></li>
              </ul>
            </li>
            <!-------->    
            <li class="nav-item dropdown ms-4">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPatients" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Patients
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownPatients">
                <li><a class="dropdown-item" href="#">Patients List</a></li>
                <li><a class="dropdown-item" href="#">Add a new Patient</a></li>  
              </ul>
            </li>
            <!------>
            <li class="nav-item dropdown ms-4">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownOwners" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Owners
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownOwners">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>    
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