<script>
  export let showOnPx = 150;
  let hidden = true;

  function goTop() {
    document.body.scrollIntoView();
  }

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function handleOnScroll() {
    if (!scrollContainer()) {
      return;
    }

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  }
</script>

<style>
  .back-to-top {
    opacity: 1;
    transition: opacity 0.5s, visibility 0.5s;
    position: fixed;
    right: 20px;
    user-select: none;
    bottom: 20px;
  }

  .back-to-top.hidden {
    opacity: 0;
    visibility: hidden;
  }
</style>

<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top z-40" on:click={goTop} class:hidden>
  <div class="flex items-center justify-center text-center text-white bg-red-800 h-20 w-20 p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300 z-99">Back to top</div>
</div>
