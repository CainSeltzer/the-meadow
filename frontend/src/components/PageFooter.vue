<template>
  <main>
    <!--  Footer Section-->
    <div id="footer" class="section">
      <footer class="text-center fixed-bottom" v-if="!isMobile()">
        <div class="card border-0">
          <div class="card-text row justify-content-md-center">
            <div class="col-md-auto">
              Copyright <font-awesome-icon :icon="['fas', 'copyright']" /> {{ new Date().getFullYear() }} Lucas Kearns
            </div>
            <div class="col-lg-4">a</div>
            <div class="col-md-auto">
              <a href="https://github.com/CainSeltzer"><font-awesome-icon :icon="['fab', 'github']" /></a>
            </div>
            <div class="col-md-auto">
              <a href="https://www.linkedin.com/in/lucaskearns/"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
            </div>
            <div class="col-md-auto">
              <a href="mailto:lucasrkearns@gmail.com"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
            </div>
          </div>
        </div>
      </footer>
      <footer class="text-center" v-else>
        <div class="card border-0">
          <div class="card-text row justify-content-md-center ">
            <div class="col-md-auto">
              Copyright <font-awesome-icon :icon="['fas', 'copyright']" /> {{ new Date().getFullYear() }} Lucas Kearns
            </div>
            <div class="col-md-auto"></div>
            <div class="col-md-auto"></div>
            <div class="col-md-auto"></div>
            <div class="col-md-auto"></div>
            <div class="col-md-auto">
              <a href="https://github.com/CainSeltzer"><font-awesome-icon :icon="['fab', 'github']" /></a>
            </div>
            <div class="col-md-auto">
              <a href="https://www.linkedin.com/in/lucaskearns/"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
            </div>
            <div class="col-md-auto">
              <a href="mailto:lucasrkearns@gmail.com"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </main>
</template>

<script>
export default {
  route: {
  },
  methods: {
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      }
      return false;
    },
  },
  data() {
    return {
    };
  },
};
</script>