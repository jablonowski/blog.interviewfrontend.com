<template>
  <Layout>
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Hi!</h1>
          <p>This is a blog that document development process of my side project. Each post coresponds with a commit on github to make it easy to follow and let you understand every single step. Nevertheless if something looks difficult or unclear - feel free to ask! It's educational project so i'm always happy to help you :)</p>
          <p>Let's have some fun and learn VUE + Firebase together!</p>
          <p>If you want to play around with the project in current stage - visit interviewfrontend.com by clicking button below.</p>
          <p><a class="btn btn-outline-primary btn-lg" href="https://interviewfrontend.com" role="button">Interview Frontend</a></p>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div v-for="post in $page.posts.edges" :key="post.id" class="col-md-4">
            <hr>
            <h3>{{ post.node.title }}</h3>
            <p class="date">{{ post.node.date }}</p>
            <p>{{ post.node.summary }}</p>
            <p><g-link class="btn btn-outline-secondary" :to="post.node.path" role="button">View details &raquo;</g-link></p>
          </div>
        </div>


      </div>
  </Layout>
</template>

<style scoped>
  .jumbotron {
    margin: 4rem 0;
  }
</style>

<static-query>
	query {
		metadata {
			siteName
		}
	}
</static-query>

<page-query>
	query {
		posts: allPost {
			edges {
				node {
					id 
					title 
					path 
          summary
					date(format: "MMMM D, YYYY")
				} 
			} 
		} 
	}
</page-query>