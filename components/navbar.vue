<template>
  <mdb-navbar expand="large" dark color="danger" class="nav">
    <mdb-navbar-brand>
      <nuxt-link to="/">
        Home
      </nuxt-link>
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle slot="toggle" tag="a" color="black" waves-fixed>
            People
          </mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>
              <nuxt-link to="/tom" class="navvy">Tom</nuxt-link>
            </mdb-dropdown-item>
            <mdb-dropdown-item>
              <nuxt-link to="/heather" class="navvy">Heather</nuxt-link>
            </mdb-dropdown-item>
            <mdb-dropdown-item>
              <nuxt-link to="/zeek" class="navvy">Zeek</nuxt-link>
            </mdb-dropdown-item>
            <mdb-dropdown-item>
              <nuxt-link to="/izzy" class="navvy">Izzy</nuxt-link>
            </mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-nav-item dark color="black">
          <nuxt-link to="/gallery" class="navvy">Gallery</nuxt-link>
        </mdb-nav-item>
        <mdb-nav-item dark color="black">
          <nuxt-link to="/video" class="navvy">Video</nuxt-link>
        </mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownItem,
  mdbDropdownMenu
} from 'mdbvue'
export default {
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbDropdown,
    mdbNavItem,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbDropdownMenu
  }
}
</script>

<style scoped>
.brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
.nav a {
  display: inline-block;
}
</style>
