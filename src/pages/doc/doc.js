const marked = require('marked');

export default {
  name: 'Doc',
  data() {
    return {
      titles: ['开始', '弹出窗', '操作网页', '弹出窗与目标页面互动'],
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
