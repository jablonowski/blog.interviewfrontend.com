<template>

  <Layout>
  <div class="blog-content">
    <h1>Blog posts</h1>
    <article v-for="post in $page.posts.edges" :key="post.id" >
      <h3><g-link :to="post.node.path" rel="bookmark">{{ post.node.title }}</g-link></h3>
      <p class="date"><time :datetime="post.node.date">{{ post.node.date }}</time></p>

      <p>{{ post.node.summary }}</p>
    </article>

    <!-- <h3>Pagination</h3>
    <Pager :info="$page.posts.pageInfo"/> -->
  </div>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 10, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        path
      }
    }
  }
}
</page-query>
<style scoped>

</style>
<script>
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  },
  metaInfo: {
    title: 'View my blog posts'
  },
}
</script>