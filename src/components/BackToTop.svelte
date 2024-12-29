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

  function handleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      goTop();
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

<div 
  role="button" 
  tabindex="0" 
  aria-label="Back to Top Circle Button" 
  class="back-to-top z-40" 
  on:click={goTop}
  on:keydown={handleKeydown}
  class:hidden
>
  <div role="button" aria-label="Back to Top" class="flex items-center justify-center text-center text-white bg-red-800 h-14 w-14 p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300 z-99">
    <svg role="img" aria-label="Back to Top" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </div>
</div>
