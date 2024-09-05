<template>
  <div>
    <nav class="navbar navbar-expand-lg p-3" style="background-color: #d8e3e0;">
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
    </nav>
  </div>

  <h1>Bleat!</h1>
  <img alt="adorable deer eaing yummy cheezits" width="200" src="./assets/deer-eating-cheezits.gif">
  <main>
    <RouterView />
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
