module.exports = {
  siteName: 'Blog',
  siteDescription: 'Blog describing development process of Interview Frontend project.',
  siteUrl: 'https://blog.interviewfrontend.com',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
        }
      }
    },
    // {
    //   use: '@gridsome/plugin-google-analytics',
    //   options: {
    //     id: 'UA-72659574-10'
    //   }
    // },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {
      }
    }
  },
  templates: {
    Tag: '/tag/:id',
    Post: '/blog/:path',
  },
  transformers: {
    remark: {
      autolinkClassName: 'icon icon-link heading-anchor',
      externalLinksTarget: '_blank',
      externalLinksRel: ['noopener', ],
      anchorClassName: 'icon icon-link',
    }
  },
}