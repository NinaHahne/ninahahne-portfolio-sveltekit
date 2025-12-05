<!-- Global layout for all pages -->
<script lang="ts">
  import '../styles/app.css';
  import { onMount, onDestroy } from 'svelte';
  import SidebarLeft from '$lib/components/layout/SidebarLeft.svelte';
  import HeroImage from '$lib/components/HeroImage.svelte';
  import WindowFrame from '$lib/components/WindowFrame.svelte';
  import WheelBanner from '$lib/components/WheelBanner.svelte';

  let { children } = $props();

  // Scroll-Effects:
  let scrollProgress = $state<number>(0);

  let spacerEl: HTMLElement;

  // Calculate scroll progress between 0 and 1

  // based on progress of spacer element:
  function getScrollProgress(): number {
    const spacerRect = spacerEl.getBoundingClientRect();
    const spacerHeight = spacerRect.height;
    const windowHeight = window.innerHeight;
    const spacerTop = Math.max(0, -spacerRect.top);
    return Math.min(1, spacerTop / (spacerHeight - windowHeight));
  }

  // based on progress of window:
  // function getScrollProgress(): number {
  //   const docHeight = document.documentElement.scrollHeight;
  //   const winHeight = window.innerHeight;
  //   const winScrollTop = window.scrollY;
  //   return Math.min(1, winScrollTop / (docHeight - winHeight));
  // }

  const updateScroll = () => {
    scrollProgress = getScrollProgress();
  };

  onMount(() => {
    window.addEventListener('scroll', updateScroll);
    updateScroll();
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  });

  // Store a list of currently visible flying surprises:
  let surpriseEmojis = $state<Array<{ id: number; left: string; duration: number; src: string }>>([]);
  let surpriseId = 0; // Unique ID for each surprise

  const emojiSources = [
    '/images/emojis/banana_openmoji_1F34C.svg',
    '/images/emojis/cherry-blossom_openmoji_1F338-mod.svg',
    '/images/emojis/green-apple_openmoji_1F34F.svg',
    '/images/emojis/tangerine_openmoji_1F34A.svg',
  ];

  // Callback from WindowFrame with the current state of 'rotated':
  // const handleSurprise = ({ rotated }: { rotated: boolean }) => {
  //   console.log('surprise from WindowFrame:', rotated);
  // };
  const handleSurprise = () => {
    // Called when the surprise button is clicked
    // console.log('🎉 Surprise triggered from WindowFrame!');

    // Create a new ID and random horizontal position (5-95%):
    const id = surpriseId++;
    const left = `${Math.random() * 90 + 5}%`;
    const duration = Math.random() * 2 + 3; // Random duration between 3 and 5 seconds
    const src = emojiSources[Math.floor(Math.random() * emojiSources.length)]; // Random emoji from the list

    // Add new surprise to the array → will be rendered via {#each}
    surpriseEmojis = [...surpriseEmojis, { id, left, duration, src }];

    // After the animation ends, remove the item from the array:
    setTimeout(() => {
      surpriseEmojis = surpriseEmojis.filter((u) => u.id !== id);
    }, duration * 1000);
  };
</script>

<svelte:head>
  <title>Nina Hahne | Portfolio</title>
  <meta property="og:title" content="Nina Hahne | Portfolio" />
  <meta
    name="description"
    content="Nina Hahne's Portfolio - Showcasing bootcamp apps, personal projects and experiments"
  />
  <meta property="og:image" content="/images/social-preview.jpg" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ninahahne.rocks" />
  <!-- Optional (für X, Discord, Threads etc.) -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="/images/social-preview.jpg" />
  <link rel="canonical" href="https://ninahahne.rocks" />
</svelte:head>

<div class="relative min-h-dvh">
  <!-- Optional scroll area -->
  <div bind:this={spacerEl} class="spacer absolute top-0 h-[calc(100lvh_+_500px)] w-full md:h-full"></div>
  <!-- <header class="fixed top-0 z-50 flex h-16 w-full justify-between bg-slate-100 p-4">
    <nav class="relative flex h-full items-center justify-center gap-4">
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header> -->

  <main class="relative mx-4 md:ml-[360px]">
    <section id="effects" class="pointer-events-none fixed left-0 top-0 h-lvh w-full overflow-hidden">
      {#each surpriseEmojis as e (e.id)}
        <img
          src={e.src}
          alt="emoji surprise"
          class="surprise-emoji pointer-events-none absolute top-full w-16"
          style="left: {e.left}; animation-duration: {e.duration}s;"
        />
      {/each}
    </section>
    <HeroImage />
    <SidebarLeft {scrollProgress} />
    <WindowFrame onsurprise={handleSurprise} />
    <!-- <div class="sticky top-4">
      <WheelBanner {scrollProgress} />
    </div> -->
    {@render children()}
  </main>

  <!-- <footer class="relative z-50 mx-4 mt-4 pb-4 text-xs sm:text-sm md:ml-[360px]">
    <div class="flex items-center rounded-md bg-light-gray-80 px-4 py-2 text-dusty-brown">
      <p class="flex-1 text-left">renderedWithCare</p>
      <img src="/images/emojis/turtle_openmoji_1F422.svg" alt="Turtle Icon" class="h-5 w-5 flex-none text-center" />
      <p class="flex-1 text-right">&copy; 2025 Nina Hahne</p>
    </div>
  </footer> -->

  <!-- <footer class="relative z-50 mx-4 mt-4 pb-4 text-xs sm:text-sm md:ml-[360px]">
    <div class="flex items-center rounded-md bg-light-gray-80 px-4 py-2 text-dusty-brown">
      <p class="flex-1 text-left">renderedWithCare</p>
      <img src="/images/emojis/turtle_openmoji_1F422.svg" alt="Turtle Icon" class="h-5 w-5 flex-none text-center" />
      <p class="flex-1 text-right">&copy; 2025 Nina Hahne</p>
    </div>

    <div class="mt-1 flex justify-center gap-4 text-[0.7rem] text-dusty-brown/70 underline">
      <a href="/imprint" class="hover:text-dusty-brown">Imprint</a>
      <a href="/privacy" class="hover:text-dusty-brown">Privacy</a>
    </div>
  </footer> -->

  <footer class="relative z-50 mx-4 mt-4 pb-4 text-xs sm:text-sm md:ml-[360px]">
    <div
      class="flex flex-wrap items-center justify-between gap-2 rounded-md bg-light-gray-80 px-4 py-2 text-dusty-brown"
    >
      <p class="flex-1 text-left">renderedWithCare</p>
      <img src="/images/emojis/turtle_openmoji_1F422.svg" alt="Turtle Icon" class="h-5 w-5 flex-none text-center" />
      <div class="flex flex-1 justify-end gap-3 text-xs">
        <a href="/imprint" class="hidden underline md:block">Imprint</a>
        <a href="/privacy" class="hidden underline md:block">Privacy</a>
        <span>&copy; 2025 Nina Hahne</span>
      </div>
    </div>
    <div class="mt-4 flex justify-center gap-4 text-[0.7rem] text-dusty-brown/70 underline md:hidden">
      <a href="/imprint" class="">Imprint</a>
      <a href="/privacy" class="">Privacy</a>
    </div>
  </footer>
</div>

<style>
  .surprise-emoji {
    animation:
      fly-up 1s ease-out forwards,
      rainbow-drop-shadow 1s ease-out forwards;
  }
</style>
