<template>
  <div>
    <nav
      class="container navbar navbar-expand-md navbar-light"
      style="background-color: #fff"
    >
      <g-link class="navbar-brand" to="/">
        <span class="logo">
          <span>IF</span>
        </span>
        <h2>
          <span>{{ $static.metadata.siteName }}</span>
          <span>interview frontend</span>
        </h2>
      </g-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <g-link class="nav-link" to="/about/">About</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link" to="/blog/">Blog</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link" to="/contribute/">Contribute</g-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://interviewfrontend.com"
              >Interview Frontend</a
            >
          </li>
        </ul>
      </div>
    </nav>

    <main role="main">
      <div class="container">
        <slot />
        <hr />
      </div>
    </main>

    <footer class="container">
      <div class="row">
        <div class="col-md-4">
          <g-link class="nav-link" to="/about/">About</g-link>
          <g-link class="nav-link" to="/blog/">Blog</g-link>
          <g-link class="nav-link" to="/contribute/">Contribute</g-link>
          <a class="nav-link" href="https://interviewfrontend.com"
            >Interview Frontend</a
          >
        </div>
        <div class="col-md-4">
          <!-- tags -->
        </div>
        <div class="col-md-4">
          <!-- social -->
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
@import url("https://fonts.googleapis.com/css2?family=Arapey&family=Raleway:wght@800&display=swap");

h1,
h3 {
  font-family: "Arapey", serif;
  font-weight: bold;
}

h3 a {
  color: inherit;
  text-decoration: none;
}

h1.display-3 {
  font-weight: 800;
}

.date {
  font-size: 12px;
  color: #6c757d;
}

.btn-outline-primary {
  border-color: #1473e6;
  color: #1473e6;
}

.btn-outline-primary:hover {
  background-color: #1473e6;
}

h2 {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  color: #1473e6;
  margin: 0;
  text-transform: uppercase;
  display: inline-block;
  font-weight: bold;
}

h2 span {
  display: block;
}

.navbar-brand {
  margin-right: 3rem;
}

.logo {
  display: inline-block;
  margin-right: 10px;
}

.logo span {
  font-family: "Raleway", sans-serif;
  color: white;
  background-color: #1473e6;
  font-size: 36px;
  padding: 0 5px;
  display: inline-block;
  line-height: normal;
}

footer .nav-link {
  color: rgba(0, 0, 0, 0.55);
  padding: 0;
}

footer .nav-link:hover {
  color: rgba(0, 0, 0, 0.7);
}

footer {
  margin-bottom: 1rem;
}

.container {
  padding: 0;
}

.blog-content {
  margin: 4rem 0;
}

.markdown-body img {
  display: block;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid lightgray;
  max-width: 700px;
}

.markdown-body ul {
  list-style: none;
}

.markdown-body code {
  color: #d63384;
}
</style>
