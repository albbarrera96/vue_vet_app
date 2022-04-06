<template>
    <div class="container-xl">
        <div class="container my-5 py-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="card overflow-hidden shadow-sm">
                            <div class="bg-dark">
                                <div class="row">
                                    <div class="col-7">
                                        <div class="card-title text-center text-light">
                                            <p class="h5 py-4">Welcome!</p>
                                            <p class="h6">With faded secondary text</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body pt-3">
                                <form class="py-4" v-on:submit.prevent>
                                    <div class="mb-2">
                                        <label for="exampleInputEmail1" class="form-label">User or Email</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="usuario">
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <div class="d-grid gap-2">
                                        <router-link to="/admin" type="submit" class="btn btn-dark" @click = login()>Submit</router-link>
                                    </div>
                                    <div class="col-lg-12 text-center">
                                        <div class="row mt-4">
                                            <div class="col-5 ms-2 mx-5">
                                                <label for="exampleInputEmail1" class="form-label">Log in as an Admin</label>
                                            </div>
                                            <div class="col">
                                                <router-link to="/admin" class="btn btn-dark">Log In</router-link>
                                            </div>  
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col-5 ms-2 mx-5">
                                                <label for="exampleInputEmail1" class="form-label">Log in as a Doctor</label>
                                            </div>
                                            <div class="col">
                                                <router-link to="/doctor" class="btn btn-dark">Log In</router-link>
                                            </div>  
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col-6 ms-2 mx-3">
                                                <label for="exampleInputEmail1" class="form-label">Log in as a Receptionist</label>
                                            </div>
                                            <div class="col">
                                                <router-link to="/receptionist" class="btn btn-dark">Log In</router-link>
                                            </div>  
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col-5 ms-2 mx-5">
                                                <label for="exampleInputEmail1" class="form-label">Log in as a Client</label>
                                            </div>
                                            <div class="col">
                                                <router-link to="/client" class="btn btn-dark">Log In</router-link>
                                            </div>  
                                        </div>                                                                                                                           
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'
export default {
    components: {
        axios
    },

    data() {
        return {
            usuario: "",
            password: "",
            error: false,
            errorMsg: ''
        }
    },
    methods: {
        login() {
            let json = {
                "usuario": this.usuario,
                "password": this.password,
            };
            axios.post('http://solodata.es/auth', json)
            .then( data =>{
                console.log(data)
            })
        }
    },
}
</script>