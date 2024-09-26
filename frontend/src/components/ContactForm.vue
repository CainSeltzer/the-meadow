<template>
  <div class="container">
    <div class="card">
      <div class="card-header d-flex align-items-center justify-content-center deer-header">
        <div class="col-12">
          <br/>
          <h2 class="mb-4 display-5 text-center">Contact me</h2>
          <p class="mb-4 text-center">
            The best way to contact me is to use my contact form below or directly via email/LinkedIn (see footer).
            <br />
            Please fill out all of the required fields and I'll get back to you as soon as possible!
          </p>
          <!--<hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle">-->
        </div>
      </div>
      <div class="card-body deer-body d-flex align-items-center justify-content-center">
        <div class="col-12 col-lg-9">
          <form id="contact-form" action="https://formspree.io/f/mblrnrqq" method="POST">
            <div class="row gy-4 gy-xl-5 p-4 p-xl-5 ">
              <div class="col-12">
                <label for="fullname" class="form-label">Full Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="fullname" name="fullname" value="" required>
              </div>
              <div class="col-12 col-md-6">
                <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                <div class="input-group">
                  <span class="input-group-text">
                    <font-awesome-icon :icon="['fas', 'envelope']" />
                  </span>
                  <input type="email" class="form-control" id="email" name="email" value="" required>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <label for="phone" class="form-label">Phone Number</label>
                <div class="input-group">
                  <span class="input-group-text">
                    <font-awesome-icon :icon="['fas', 'phone']" />
                  </span>
                  <input type="tel" class="form-control" id="phone" name="phone" value="">
                </div>
              </div>
              <div class="col-12">
                <label for="message" class="form-label">Message <span class="text-danger">*</span></label>
                <textarea class="form-control" id="message" name="message" rows="3" required></textarea>
              </div>
              <div class="col-12">
                <div class="d-grid">
                  <button class="btn deer-important btn-lg" id="contact-form-button">Submit</button>
                  <p class="d-flex align-items-center justify-content-center" id="contact-form-status"></p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
window.addEventListener("DOMContentLoaded", (event) => {
  console.log(event)
  var form = document.getElementById("contact-form");
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("contact-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Thanks for your message, I'll try to respond as soon as I'm able!";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! There was a problem submitting your contact request. Please try reaching out through email or one of the other contact methods listed in the footer of this site."
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your your contact request. Please try reaching out through email or one of the other contact methods listed in the footer of this site.<br/>".concat(error);
    });
  }
  form.addEventListener("submit", handleSubmit);
});

export default {

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>