<script>
  import { CldImage } from 'svelte-cloudinary';
  import { slide, fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import Icon from '@iconify/svelte';
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<header class="bg-gold-50 pb-4 border-b-2 border-red-800">
  <div class="bg-red-800 text-white mx-auto flex max-w-7xl items-center justify-center xl:rounded-b-lg" aria-label="Global">
    <h1 class="text-white uppercase font-bold p-2">Reach, Teach, and Nurture the Deaf</h1>
  </div>
  <div class="hidden lg:flex justify-center py-4">
    <div class="-m-1.5 p-1.5">
      <span class="sr-only"><abbr title="Caribbean Christian Center for the Deaf">CCCD</abbr> Jamaica</span>
      <CldImage 
        class="border-2 border-blue-600 rounded-md" 
        src="v1722901294/cccd_wordpress/cropped-cccdLogo-drupal.webp" 
        alt="CCCD Jamaica logo" 
        width="150"
        height="150"
      />
    </div>
  </div>
  <div class="mx-auto flex max-w-7xl items-center justify-between lg:py-4 lg:px-8">
    <nav role="navigation" class="hidden lg:flex sm:gap-x-2 md:gap-x-6 lg:gap-x-12">
      <ul class="flex sm:gap-x-2 md:gap-x-6 lg:gap-x-12">
        <li>
          <a href="/" aria-label="Homepage" class="hover:text-red-800">
            <Icon icon="material-symbols:church" aria-label="Church" width="24" height="24" />
          </a>
        </li>
        <li>
          <a href="about" class="text-md font-semibold leading-6 text-gray-900 hover:text-red-800">About</a>
        </li>
        <li>
          <a href="education" class="text-md font-semibold leading-6 text-gray-900 hover:text-red-800">Education</a>
        </li>
        <li>
          <a href="stories" class="text-md font-semibold leading-6 text-gray-900 hover:text-red-800">Stories</a>
        </li>
        <li>
          <a href="get-involved" class="text-md font-semibold leading-6 text-gray-900 hover:text-red-800">Get Involved</a>
        </li>
        <li>
          <a href="fundraising" class="text-md font-semibold leading-6 text-gray-900 hover:text-red-800">Fundraising</a>
        </li>
        <li>
          <a href="resources" class="text-md font-semibold leading-6 text-gray-900 hover:text-red-800">Resources</a>
        </li>
        <li>
          <a href="contact" class="text-md font-semibold leading-6 text-gray-900 hover:text-red-800">Contact</a>
        </li>
        <!-- Add Search and icon later -->
      </ul>
    </nav>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="/get-involved#missionary" class="flex items-center text-md font-semibold leading-6 text-white bg-red-800 hover:bg-red-700 px-4 py-2 rounded-md transition duration-300">
        <Icon icon="mdi:cross" class="mr-2 text-2xl font-bold" />
        Support Our Mission
      </a>
    </div>
  </div>  
  <!-- Mobile menu, show/hide based on menu open state. -->
  <div class="lg:hidden flex items-center justify-between p-4">
    <a href="/" class="-m-1.5 p-1.5">
      <span class="sr-only"><abbr title="Caribbean Christian Center for the Deaf">CCCD</abbr> Jamaica</span>
      <CldImage  
        class="border-2 border-blue-600 rounded-md" 
        src="v1722901294/cccd_wordpress/cropped-cccdLogo-drupal.webp" 
        alt="CCCD Jamaica logo" 
        width="100"
        height="100"
      />
    </a>
    <button on:click={toggleMenu} type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
      <span class="sr-only">Open main menu</span>
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </div>
  {#if isMenuOpen}
    <div class="lg:hidden" role="dialog" aria-modal="true" transition:fade={{ duration: 300 }}>
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-30"><button on:click={toggleMenu} type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button></div>
      <div class="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" transition:slide={{ duration: 300, easing: quintOut }}>
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only"><abbr title="">CCCD</abbr> Jamaica</span>
            <CldImage  
              class="border-2 border-blue-600 rounded-md" 
              src="v1722901294/cccd_wordpress/cropped-cccdLogo-drupal.webp" 
              alt="CCCD Jamaica logo" 
              width="100"
              height="100"
            />
          </a>
          <button on:click={toggleMenu} type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a href="/" on:click={closeMenu} class="-mx-3  rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center">
                <Icon icon="material-symbols:church" width="24" height="24" class="mr-2" />
              </a>
              <a href="about" on:click={closeMenu} class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</a>
              <a href="education" on:click={closeMenu} class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Education</a>
              <a href="stories" on:click={closeMenu} class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Stories</a>
              <a href="get-involved" on:click={closeMenu} class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Get Involved</a>
              <a href="fundraising" on:click={closeMenu} class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Fundraising</a>
              <a href="resources" on:click={closeMenu} class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Resources</a>
              <a href="contact" on:click={closeMenu} class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact</a>
              <!-- Add Search and icon later -->
            </div>
            <div class="py-6">
              <a href="/get-involved#missionary" on:click={closeMenu} class="-mx-3 flex items-center justify-center rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-red-600 hover:bg-red-700 transition duration-300">
                <Icon icon="mdi:cross" class="mr-2 text-2xl font-bold" />
                Support Our Mission
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>
