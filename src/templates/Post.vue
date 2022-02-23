<template>

  <Layout>
    <article class="blog-content">
      <h1>{{ $page.post.title }} </h1>

      <p class="date">{{ $page.post.date }}</p>

      <div class="markdown-body mb-8" id="article-area" v-html="$page.post.content" />


      <div>
        <g-link
            v-for="tag in $page.post.tags"
            :to="tag.path"
            :key="tag.id">
          #{{ tag.title }}
        </g-link>
      </div>
    </article>

  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    tags {
      title
      path
    }
  }
}
</page-query>
<style scoped>
</style>
<script>
  export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>