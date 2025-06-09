<!-- Global layout for all pages -->
<script lang="ts">
  import '../styles/app.css';
  import SidebarLeft from '$lib/components/layout/SidebarLeft.svelte';
  import HeroImage from '$lib/components/HeroImage.svelte';
  import WindowFrame from '$lib/components/WindowFrame.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <title>Nina Hahne | Portfolio</title>
</svelte:head>

<!-- <header class="fixed top-0 z-50 flex h-16 w-full justify-between bg-slate-100 p-4">
  <nav class="relative flex h-full items-center justify-center gap-4">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header> -->

<main class="relative md:ml-[360px]">
  <HeroImage />
  <SidebarLeft />
  <WindowFrame />
  {@render children()}
</main>

<footer
  class="relative z-50 mx-4 mt-4 pb-4 font-mono text-xs sm:text-sm md:fixed md:bottom-0 md:left-[360px] md:right-4 md:m-0"
>
  <div class="flex items-center px-4 py-2">
    <p class="flex-1 text-left">renderedWithCare</p>
    <img src="/images/turtle_openmoji_1F422.svg" alt="Turtle Icon" class="h-5 w-5 flex-none text-center" />
    <p class="flex-1 text-right">&copy; 2025 Nina Hahne</p>
  </div>
</footer>

<style>
  footer div {
    color: rgb(71, 60, 53);
    background-color: rgba(245, 248, 240, 0.9);
    border-radius: 6px;
  }
</style>
