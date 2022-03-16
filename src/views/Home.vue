<template>
  <div class="home">
    <h1 class="font-caveat-brush">HelloWorld</h1>
    <div class="buttons">
      <button class="button is-primary">Primary</button>
      <button class="button is-secondary">Secondary</button>
      <button class="button is-link">Link</button>
      <button class="button is-orange">Orange</button>
    </div>

    <div class="buttons">
      <button class="button is-info">Info</button>
      <button class="button is-success">Success</button>
      <button class="button is-warning">Warning</button>
      <button class="button is-danger">Danger</button>
    </div>

    <br>
    <br>
    result: {{result}}
  </div>
</template>

<script>
import comicService from '../services/comic.service';

export default {
  name: 'Home',
  data() {
    return {
      result: {},
    };
  },
  components: {},
  mounted() {
    comicService
      .getLastComic()
      .then((response) => {
        console.log('response', response);
        this.result = response;
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  },
};
</script>
