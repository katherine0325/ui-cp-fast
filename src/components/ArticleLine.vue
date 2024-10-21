<template>
  <div class="article-line">
    <div class="number">{{number}}</div>
    <div class="title">{{title}}</div>
    <div class="date">{{date}}</div>
  </div>
</template>

<script>
export default {
  name: 'ArticleLine',
  props: ['number', 'title', 'date'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-line {
  padding: 30px 15px;
  border-bottom: 1px solid #f5f5f5;
  display: grid;
  grid-template-columns: 50px auto 100px;
  align-items: center;
}
.number {
  flex-basis: 80px;
  text-align: center;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-weight: 700;
  color: rgba(11, 96, 119, 0.52);
  font-size: 17px;
}
.title {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: #444;
  font-size: 16px;
}
.date {
  font-size: 13px;
  font-weight: 500;
  color: #87878a;
  line-height: 1.2;
}
</style>
