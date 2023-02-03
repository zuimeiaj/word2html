<template>
  <div id="app">
    <div class="editor"></div>
    <div class="html">
      <div class="html-content" v-html="html"></div>
      <button class="download" @click="download">下载html</button>
    </div>
  </div>
</template>

<script>
import E from 'wangeditor';
import { saveAs } from 'file-saver';
import { generateTemplate } from './temp';
export default {
  name: 'App',
  components: {},
  data() {
    return {
      html: '',
    };
  },
  methods: {
    download() {
      let title = window.prompt('Html title');
      const buffer = Buffer.from(generateTemplate(title, this.html), 'utf8');
      saveAs(new Blob([buffer]), (title || 'untitle') + '.html');
    },
  },
  mounted() {
    const editor = new E('.editor');
    editor.config.onchange = (value) => {
      this.html = value;
      console.log(value);
    };
    editor.config.pasteTextHandle = (content) => {
      function cleanWordHtml(text) {
        text = text.replace(/<!--\[if gte mso [0-9]{1,2}\]>[\s\S]*?<!\[endif\]-->/gi, '');
        text = text.replace(/<!.+?>/gi, '');
        text = text.replace(/<style>[\s\S]*?mso[\s\S]*?<\/style>/gi, '');
        text = text.replace(/<spanyes.+[\n\r\s\S]*?.+?[\s\S]*?>/gi, '');
        text = text.replace(/<o:p>[\s\S]*?<\/o:p>/gi, '');
        return text;
      }
      return cleanWordHtml(content);
    };
    editor.create();
  },
};
</script>

<style>
.download {
  position: fixed;
  top: 10px;
  right: 10px;
}
body {
  padding: 0;
  margin: 0;
}
#app {
  height: 100vh;
  display: flex;
}
.editor {
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.html {
  flex: 1;
  padding: 15px;
}
.w-e-text-container {
  flex: 1;
}
</style>
