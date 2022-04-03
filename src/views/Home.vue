<template>
  <Navbar />
  <div class="container-lg">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-5 text-center text-md-start">
        <h1>
          <br>
          <div class="display-2">Mensitooo!</div>
          <div class="display-5 text-muted"> Acabo de hacer una landing page para mi App</div>
        </h1>
        <p class="lead my-4 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <a href="#/login" class="btn btn-secondary btn-lg">Click Here</a>
      </div>
      <div class="col-md-5 text-center d-none d-md-block">
        <br>
        <img src="https://pbs.twimg.com/profile_images/1266864675360309249/GQIakxpX_400x400.jpg" class="img-fluid" alt="">
      </div>
    </div>
  </div>
  <!--Prices-->
  <section id="#pricing" class="bg-light mt-5">
    <div class="container-lg py-4">
      <div class="text-center">
        <h2>Planes de pago</h2>
        <p class="lead text-muted">Revisa nuestros planes</p>
      </div>
      <div class="row my-5 align-items-center justify-content-center">
        <div class="col-8 col-lg-4 col-xl-3">
          <div class="card border mb-3">
            <div class="card-body text-center py-4">
              <h3 class="card-title">Starter Plan</h3>
              <p class="display-5">$59.99</p>
              <p class="card-subtitle">Lorem ipsum dolor sit.</p>
              <p class="card-subtitle">Lorem ipsum dolor sit.</p>
              <a href="#pricing" class="btn btn-dark btn-lg mt-3">Buy Now!</a>
              <br>
            </div>
          </div>
        </div>
        <!--CARD-->
        <div class="col-8 col-lg-4 col-xl-3">
          <div class="card bg-dark text-light mb-3">
            <div class="card-body text-center py-4">
              <h3 class="card-title">Premium Plan</h3>
              <p class="display-5">$99.99</p>
              <p class="card-subtitle">Lorem ipsum dolor sit.</p>
              <p class="card-subtitle">Lorem ipsum dolor sit.</p>
              <a href="#pricing" class="btn btn-light btn-lg mt-3">Buy Now!</a>
              <br>
            </div>
          </div>
        </div>
        <!--CARD-->
        <div class="col-8 col-lg-4 col-xl-3">
          <div class="card border mb-3">
            <div class="card-body text-center py-4">
              <h3 class="card-title">Starter Plan</h3>
              <p class="display-5">$79.99</p>
              <p class="card-subtitle">Lorem ipsum dolor sit.</p>
              <p class="card-subtitle">Lorem ipsum dolor sit.</p>
              <a href="#pricing" class="btn btn-dark btn-lg mt-3">Buy Now!</a>
              <br>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>      
      <!-----PRODUCT INFO----->
      <div class="container-md">
        <div class="text-center py-4">
          <h3>About the product</h3>
          <p class="text-muted">All the info you need</p>
          <img src="data:image/png;base64,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" class="img-fluid" alt="">
        </div>
        <!--ACCORDION-->
        <div class="accordion mb-4" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
  }

}
</script>
