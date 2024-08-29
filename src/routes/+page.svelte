<script lang="ts">
  import { random_pic, shuffle, type IPicture } from "$lib";
  import PostCard from "$lib/comp/PostCard.svelte";
  import { onMount } from "svelte";

  let pictures: Array<IPicture> = [];

  $: columns = Array(4)
    .fill(0)
    .map((_, i) => pictures.filter((_, j) => j % 4 === i));

  async function init() {
    let all: Array<IPicture> = Array.from({ length: 200 }, random_pic);
    shuffle(all);
    pictures = all;
  }

  onMount(init);
</script>

<div class="board">
  {#each columns as column}
    <section>
      {#each column as pic}
        <PostCard {pic} />
      {/each}
    </section>
  {/each}
</div>

<style lang="scss">
  .board {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    > section {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }
</style>
