<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="success">
    <b-container>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name : 'home'}">Home</b-nav-item>
          <b-nav-item :to="{name : 'about'}">About</b-nav-item>
          <b-nav-item :to="{name : 'services'}">Services</b-nav-item>
          <b-nav-item :to="{name : 'fotos'}">Fotos</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
    </b-navbar>
    <b-container class="text-center">
    <router-view/>
    </b-container>
  </div>
</template>