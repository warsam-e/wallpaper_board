<script lang="ts">
  import type { IPicture } from "$lib";

  export let pic: IPicture;

  $: url = pic.url;
  $: type = pic.type;
</script>

<img src={url} data-type={type} alt="" />

<style lang="scss">
  img {
    max-width: 100%;
    width: 100%;
    border-radius: calc(1rem * 2);
    display: block;
    box-shadow: 0 0 0 1px rgba(#fff, 0.15);
  }
</style>
