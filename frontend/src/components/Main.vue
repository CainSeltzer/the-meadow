<template>



  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Heya, welcome to my page. I'm pretty dope and
      stuff.
    </p>
    <p>
      If you wanna hit me up, I'm on my mobile. Throws it back, preferably, on
      Tuesdays if you need me.<br />
    </p>
    <h3>About me</h3>
    <ul>
      <li>
        I'm really chill and all that good good.
      </li>
      <li>
        I'm also super rad
      </li>
    </ul>
    <h3>Stuff I'm working on</h3>
    <ul>
      <li>
        <a href="/project1" target="_blank" rel="noopener">First Project</a>
      </li>
      <li>
        <a href="/project2" target="_blank" rel="noopener">Second Project</a>
      </li>
    </ul>
    <h3>Contact Information</h3>
    <ul>
      <li>
        <a href="" target="_blank" rel="noopener"
          >Email me!</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
