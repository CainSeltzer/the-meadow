<template>
  <div>
    <nav id="navBar" class="navbar navbar-expand-lg p-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="">
          <font-awesome-icon :icon="['fas', 'gears']" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>

            <!--
            <li class="nav-item">
              <a href="/about" class="nav-link active">About</a>
            </li>
            <li class="nav-item">
              <a href="/projects" class="nav-link active">Projects</a>
            </li>
            -->

          </ul>
        </div>
      </div>
      <dark-mode-button />

    </nav>
  </div>
  <div class="row justify-content-md-center g-0">
    <div id="siteWarning" class="card border-warning bg-warning mb-3 col-sm-4" style="margin: 2%;">
      <div class="card-body" style="color: black;">
        <font-awesome-icon :icon="['fas', 'triangle-exclamation']" /> Please be aware that this site is still a work in
        progress project.<br />Some features are likely not yet
        available or fully functional!
      </div>
    </div>
  </div>


  <main>
    <RouterView />
  </main>
  <br/>
  <br/>
  <br/>
  <PageFooter />
</template>

<script>
import DarkModeButton from "@/components/DarkModeButton.vue";
import PageFooter from "@/components/PageFooter.vue";
export default {
  components: { DarkModeButton, PageFooter },
};

</script>

<style lang="scss">
@import "./scss/custom.scss";
</style>

<style>
/* Define styles for the default root window element */
:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;

}
</style>
