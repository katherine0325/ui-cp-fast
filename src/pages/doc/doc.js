const marked = require('marked');

export default {
  name: 'Doc',
  metaInfo: {
    title: 'CPFast | 开发文档 | 快速开发Chrome插件，一个便捷插件框架',
    meta: [
      {
        name: 'description',
        content: '集成Vue3、Antd、TailwindCss、各种npm包即装即用 | Chrome插件便捷框架'
      },
      {
        name: 'keywords',
        content: 'Vue3, Antd, TailwindCss, npm包'
      }
    ]
  },
  data() {
    return {
      titles: ['开始', '弹出窗', '操作网页', '弹出窗与目标页面互动', '官网们'],
      articles: {},
      currentTitle: '开始',
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      const results = await Promise.all(this.titles.map(title => this.fetchMd(title)));
      const jsonRes = {};
      results.forEach(article => {
        jsonRes[article.title] = article.content;
      })
      this.articles = jsonRes;
    },
    goHome() {
      location.href = '/';
    },
    handleTitleChange(title) {
      this.currentTitle = title;
    },
    fetchMd(title) {
      return new Promise(resolve => {
        fetch(`./static/docs/${title}.md`)
          .then(response => response.text())
          .then(data => {
            const html = marked(data);
            resolve({ title, content: html });
          })
          .catch(error => console.error('Error fetching Markdown file:', error));
      })
    },
  }
}
