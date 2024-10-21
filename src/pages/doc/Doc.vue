<template>
  <div style="display: flex;background-color: #212121;color: #CFCFCF;min-height: 800px;">
    <div style="width: 250px;padding: 30px;">
      <div style="font-size: 30px;margin-bottom: 30px;cursor: pointer;" @click="goHome">
        <img src="../../assets/logo.png" style="width: 40px;margin-right: -6px;" />
        CPFast
      </div>
      <p v-for="title in titles" :key="title" @click="handleTitleChange(title)">
        <a style="color: #fff;">{{ title }}</a>
      </p>
    </div>
    <div style="flex: 1;padding: 50px;background-color: #0F0F0F;">
      <div v-html="articles[currentTitle]" style="color: #CFCFCF;"></div>
    </div>
  </div>
</template>

<script src="./doc.js"></script>
<style scoped src="./doc.css"></style>
