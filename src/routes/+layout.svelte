<!-- Global layout for all pages -->
<script lang="ts">
  import '../styles/app.css';
  import SidebarLeft from '$lib/components/layout/SidebarLeft.svelte';
  import HeroImage from '$lib/components/HeroImage.svelte';
  import WindowFrame from '$lib/components/WindowFrame.svelte';

  let { children } = $props();

  // Store a list of currently visible flying surprises:
  let surpriseEmojis = $state<Array<{ id: number; left: string; duration: number; src: string }>>([]);
  let surpriseId = 0; // Unique ID for each surprise

  const emojiSources = [
    '/images/emojis/banana_openmoji_1F34C.svg',
    '/images/emojis/cherry-blossom_openmoji_1F338_mod.svg',
    '/images/emojis/green-apple_openmoji_1F34F.svg',
    '/images/emojis/tangerine_openmoji_1F34A.svg',
  ];

  // Callback from WindowFrame with the current state of 'rotating':
  // const handleSurprise = ({ rotating }: { rotating: boolean }) => {
  //   console.log('surprise from WindowFrame:', rotating);
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
</svelte:head>

<!-- <header class="fixed top-0 z-50 flex h-16 w-full justify-between bg-slate-100 p-4">
  <nav class="relative flex h-full items-center justify-center gap-4">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header> -->

<main class="relative md:ml-[360px]">
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
  <SidebarLeft />
  <WindowFrame onsurprise={handleSurprise} />
  {@render children()}
</main>

<footer
  class="relative z-50 mx-4 mt-4 pb-4 font-mono text-xs sm:text-sm md:fixed md:bottom-0 md:left-[360px] md:right-4 md:m-0"
>
  <div class="flex items-center px-4 py-2">
    <p class="flex-1 text-left">renderedWithCare</p>
    <img src="/images/emojis/turtle_openmoji_1F422.svg" alt="Turtle Icon" class="h-5 w-5 flex-none text-center" />
    <p class="flex-1 text-right">&copy; 2025 Nina Hahne</p>
  </div>
</footer>

<style>
  .surprise-emoji {
    animation:
      fly-up 1s ease-out forwards,
      rainbow-drop-shadow 1s ease-out forwards;
  }

  footer div {
    color: rgb(71, 60, 53);
    background-color: rgba(245, 248, 240, 0.9);
    border-radius: 6px;
  }
</style>
