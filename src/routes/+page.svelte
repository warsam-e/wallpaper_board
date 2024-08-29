<script lang="ts">
  import { random_pic, wait, type IPicture } from "$lib";
  import { onMount } from "svelte";

  let pictures: Array<IPicture> = [];

  //   let columns: Array<IPicture[]> = [];
  $: columns = Array(4)
    .fill(0)
    .map((_, i) => pictures.filter((_, j) => j % 4 === i));

  async function init() {
    for (let i = 0; i < 10; i++) {
      let pics = Array.from({ length: 10 }, random_pic);
      pictures = [...pictures, ...pics];
      await wait(500);
    }
  }

  onMount(init);
</script>

<div class="board">
  {#each columns as column}
    <section>
      {#each column as { url, type }}
        <img src={url} data-type={type} alt="" />
      {/each}
    </section>
  {/each}
</div>

<style lang="scss">
  .board {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: dense;
    gap: 2rem;
    > section {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;

      > img {
        max-width: 100%;
        border-radius: calc(1rem * 2);
        display: block;
      }
    }
  }
</style>
