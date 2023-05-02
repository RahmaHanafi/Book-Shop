<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary col-12 mb-5">
      <div class="container">
        <a class="navbar-brand" href="#">Book </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3 mx-auto">
            <li class="nav-item">
              <router-link :to="`/`" class="text-decoration-none"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="`/newBook`" class="text-decoration-none"
                >Add new book</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navBarComponent",
};
</script>

<style scoped></style>
