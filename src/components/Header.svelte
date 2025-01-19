<script>
  import { slide, fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import Icon from '@iconify/svelte';
  import { page } from '$app/stores';
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }

  $: path = $page.url.pathname;
</script>

<div class="fixed top-0 left-0 right-0 bg-white z-50 w-full">
  <div class="bg-red-800 text-white text-center py-1">
    <p class="text-sm font-semibold uppercase">REACH, TEACH, and NURTURE THE DEAF</p>
  </div>
  <div class="pointer-events-none absolute inset-0 z-30 shadow-md" aria-hidden="true"></div>
  <div class="relative z-20">
    <div class="mx-auto flex max-w-[90rem] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <div class="-my-2 -mr-2 md:hidden">
        <button on:click={toggleMenu} type="button" class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-red-700 focus:outline-hidden focus:ring-inset">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">OPEN MENU</span>
          <svg class="size-7" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden md:flex md:flex-1 md:items-center md:justify-between">
        <nav class="flex space-x-4 lg:space-x-6">
          <a href="/" class="text-base font-bold uppercase text-blue-900 hover:text-blue-950 {path === '/' ? 'text-red-800' : ''} whitespace-nowrap" aria-label="Home">
            <Icon icon="material-symbols:church" aria-label="Church" width="24" height="24" />
            <span class="sr-only">Home</span>
          </a>
          <a href="about" class="text-base font-bold uppercase text-blue-900 hover:text-blue-950 hover:underline decoration-red-800 decoration-2 underline-offset-4 {path === '/about' ? 'text-red-800' : ''} whitespace-nowrap">ABOUT</a>
          <a href="education" class="text-base font-bold uppercase text-blue-900 hover:text-blue-950 hover:underline decoration-red-800 decoration-2 underline-offset-4 {path === '/education' ? 'text-red-800' : ''} whitespace-nowrap">EDUCATION</a>
          <a href="stories" class="text-base font-bold uppercase text-blue-900 hover:text-blue-950 hover:underline decoration-red-800 decoration-2 underline-offset-4 {path === '/stories' ? 'text-red-800' : ''} whitespace-nowrap">STORIES</a>
          <a href="get-involved" class="text-base font-bold uppercase text-blue-900 hover:text-blue-950 hover:underline decoration-red-800 decoration-2 underline-offset-4 {path === '/get-involved' ? 'text-red-800' : ''} whitespace-nowrap">GET INVOLVED</a>
          <a href="fundraising" class="text-base font-bold uppercase text-blue-900 hover:text-blue-950 hover:underline decoration-red-800 decoration-2 underline-offset-4 {path === '/fundraising' ? 'text-red-800' : ''} whitespace-nowrap">FUNDRAISING</a>
          <a href="resources" class="text-base font-bold uppercase text-blue-900 hover:text-blue-950 hover:underline decoration-red-800 decoration-2 underline-offset-4 {path === '/resources' ? 'text-red-800' : ''} whitespace-nowrap">RESOURCES</a>
          <a href="contact" class="text-base font-bold uppercase text-blue-900 hover:text-blue-950 hover:underline decoration-red-800 decoration-2 underline-offset-4 {path === '/contact' ? 'text-red-800' : ''} whitespace-nowrap">CONTACT</a>
        </nav>
        <div class="flex items-center md:ml-12">
          <a href="/get-involved#missionary" class="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-red-900 px-6 py-2 text-base font-bold uppercase text-white shadow-md hover:bg-red-950 whitespace-nowrap">
            <Icon icon="mdi:cross" class="mr-2 text-xl font-bold" />
            SUPPORT OUR MISSION
          </a>
        </div>
      </div>
    </div>
  </div>

  {#if isMenuOpen}
  <div class="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden" transition:fade={{ duration: 200 }}>
    <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black/5 w-full" transition:slide={{ duration: 300, easing: quintOut }}>
      <div class="px-5 pt-5 pb-6 sm:pb-8">
        <div class="flex items-center justify-end">
          <div class="-mr-2">
            <button on:click={toggleMenu} type="button" class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-red-700 focus:outline-hidden focus:ring-inset">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">CLOSE MENU</span>
              <svg class="size-7" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="mt-6">
          <nav class="grid gap-y-4">
            <a href="/" on:click={closeMenu} class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
              <span class="text-base font-bold uppercase text-blue-900 hover:text-blue-950">HOME</span>
            </a>
            <a href="about" on:click={closeMenu} class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
              <span class="text-base font-bold uppercase text-blue-900 hover:text-blue-950">ABOUT</span>
            </a>
            <a href="education" on:click={closeMenu} class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
              <span class="text-base font-bold uppercase text-blue-900 hover:text-blue-950">EDUCATION</span>
            </a>
            <a href="stories" on:click={closeMenu} class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
              <span class="text-base font-bold uppercase text-blue-900 hover:text-blue-950">STORIES</span>
            </a>
            <a href="get-involved" on:click={closeMenu} class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
              <span class="text-base font-bold uppercase text-blue-900 hover:text-blue-950">GET INVOLVED</span>
            </a>
            <a href="fundraising" on:click={closeMenu} class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
              <span class="text-base font-bold uppercase text-blue-900 hover:text-blue-950">FUNDRAISING</span>
            </a>
            <a href="resources" on:click={closeMenu} class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
              <span class="text-base font-bold uppercase text-blue-900 hover:text-blue-950">RESOURCES</span>
            </a>
            <a href="contact" on:click={closeMenu} class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
              <span class="text-base font-bold uppercase text-blue-900 hover:text-blue-950">CONTACT</span>
            </a>
          </nav>
        </div>
      </div>
      <div class="px-5 py-6">
        <div class="mt-6">
          <a href="/get-involved#missionary" on:click={closeMenu} class="flex w-full items-center justify-center rounded-md border border-transparent bg-red-900 px-6 py-2 text-base font-bold uppercase text-white shadow-md hover:bg-red-950">
            <Icon icon="mdi:cross" class="mr-2 text-xl font-bold" />
            SUPPORT OUR MISSION
          </a>
        </div>
        <div class="mt-6 flex justify-center">
          <img 
            src="https://res.cloudinary.com/shinkirin/image/upload/v1722901294/cccd_wordpress/cropped-cccdLogo-drupal.webp"
            alt="CCCD Logo"
            class="w-36 h-36"
          />
        </div>
      </div>
    </div>
  </div>
  {/if}
</div>
