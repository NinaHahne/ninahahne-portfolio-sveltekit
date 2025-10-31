<script lang="ts">
  import { goto } from '$app/navigation';
</script>

<nav
  class="sticky top-4 flex items-center justify-center text-dusty-brown md:fixed md:right-8 md:top-8 md:z-50 md:pb-4"
>
  <button
    onclick={() => goto('/')}
    class="flex items-center gap-1 rounded-md border border-dusty-brown bg-light-gray-80 px-2 py-1 text-xs font-bold transition-colors duration-200 hoverable:hover:bg-dusty-brown hoverable:hover:text-light-gray"
    aria-label="Back to Portfolio / Homepage"
  >
    <img src="/images/emojis/home_openmoji_E25E.svg" alt="Home icon" class="h-4 w-4" loading="lazy" decoding="async" />
    <span>Back to Portfolio</span>
  </button>
</nav>
