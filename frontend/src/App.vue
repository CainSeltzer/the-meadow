<template>
  <div>
   
    <nav id="navBar" class="navbar navbar-expand-lg p-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="">Deer Website</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a href="/about" class="nav-link">About</a>
            </li>
          </ul>
        </div>

      </div>
      <dark-mode-button />
      
    </nav>
    <h1>Bleat!</h1>
  <img alt="adorable deer eaing yummy cheezits" width="200" src="./assets/deer-eating-cheezits.gif">
    <main>
      <RouterView />
    </main>
  </div>


</template>

<script>
import DarkModeButton from "@/components/DarkModeButton.vue";
export default {
  components: { DarkModeButton },
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
