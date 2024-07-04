<template>
  <nav class="navbar navbar-dark navbar-expand-sm bg-transparent fixed-top">
    <div class="container">
      <a href="/" class="navbar-brand fw-bolder" style="font-size: 34px;">
        <i class="fas fa-blog"></i> &nbsp; <b>RAR</b>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link to="/HeroSection" class="nav-link active"> Home </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="" class="nav-link active"> Short Course </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="" class="nav-link active"> Experience </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/MyHeader" class="nav-link active"> About </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/ContactSection" class="nav-link active"> Contact </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
useHead({
  script: [ { src: '/assets/navbar.js' } ]
})
</script>
