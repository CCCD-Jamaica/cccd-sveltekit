<script>
  import { slide, fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import Icon from '@iconify/svelte';
  import { page } from '$app/stores';
  let isMenuOpen = false;
  let isDropdownOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
    isDropdownOpen = false;
  }

  $: path = $page.url.pathname;

  // Close menu and dropdown when clicking outside
  function handleClickOutside(event) {
    const menu = document.getElementById('menu');
    const dropdown = document.getElementById('dropdown');
    if (menu && !menu.contains(event.target) && isMenuOpen) {
      closeMenu();
    }
    if (dropdown && !dropdown.contains(event.target) && isDropdownOpen) {
      isDropdownOpen = false; // Close dropdown when clicking outside
    }
  }

  // Add event listener for clicks outside
  import { onMount } from 'svelte';
  import { beforeUpdate } from 'svelte';
  
  onMount(() => {
    document.addEventListener('click', handleClickOutside);
  });

  beforeUpdate(() => {
    document.removeEventListener('click', handleClickOutside);
  });
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
          <div class="relative" id="dropdown">
            <button on:click={toggleDropdown} type="button" class="text-base font-bold uppercase text-blue-900 hover:text-blue-950 hover:underline decoration-red-800 decoration-2 underline-offset-4 {path === '/education' ? 'text-red-800' : ''} whitespace-nowrap flex items-center gap-x-1" aria-expanded={isDropdownOpen}>
              EDUCATION
              <span class="sr-only">Open Education Dropdown</span>
              <svg class="size-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
              </svg>
            </button>
            {#if isDropdownOpen}
            <div class="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5" id="dropdown">
              <div class="p-4">
                <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                  <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <svg class="size-6 text-gray-600 group-hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <div class="flex-auto">
                    <a on:click={closeMenu} href="/education/" class="block font-semibold text-gray-900 uppercase">
                      Programmes Overview
                      <span class="absolute inset-0"></span>
                    </a>
                    <p class="mt-1 text-gray-600">Learn about CCCD's educational offerings</p>
                  </div>
                </div>
                <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                  <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <svg class="size-6 text-gray-600 group-hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                  </div>
                  <div class="flex-auto">
                    <a on:click={closeMenu} href="/education#student-life" class="block font-semibold text-gray-900">
                      CADE Programme
                      <span class="absolute inset-0"></span>
                    </a>
                    <p class="mt-1 text-gray-600">Learn more about the CADE Programme</p>
                  </div>
                </div>
                <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                  <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <svg class="size-6 text-gray-600 group-hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <div class="flex-auto">
                    <a on:click={closeMenu} href="/education#curriculum" class="block font-semibold text-gray-900">
                      Dormitories and Support
                      <span class="absolute inset-0"></span>
                    </a>
                    <p class="mt-1 text-gray-600">Explore how CCCD can provide a nurturing environment for Deaf students</p>
                  </div>
                </div>
              </div>
            </div>
            {/if}
          </div>
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
    <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black/5 w-full" id="menu" transition:slide={{ duration: 300, easing: quintOut }}>
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
