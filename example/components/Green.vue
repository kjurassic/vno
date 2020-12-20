<template>
  <div id="green">
    <h1>Mikey</h1>
    <a href="https://imgbb.com/"
      ><img src="https://i.ibb.co/Lz6jw4b/mikey.png" alt="mikey" border="0"
    /></a>
    <p>
      Mikey is a certified Sommolier. That means he knows a lot more about wine
      &nbsp;than you do. Also Sake.
    </p>
  </div>
</template>

<script>
import LilGreen from './LilGreen';

export default {
  name: 'green',
  data() {
    return {
      color: 'green',
    };
  },
  components: {
    LilOrange,
  },
};
</script>

<style>
#green {
  background-color: chartreuse;
}
</style>
