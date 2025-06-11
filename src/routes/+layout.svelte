<!-- Global layout for all pages -->
<script lang="ts">
  import '../styles/app.css';
  import SidebarLeft from '$lib/components/layout/SidebarLeft.svelte';
  import HeroImage from '$lib/components/HeroImage.svelte';
  import WindowFrame from '$lib/components/WindowFrame.svelte';

  let { children } = $props();

  // Store a list of currently visible flying surprises:
  let surpriseEmojis = $state<Array<{ id: number; left: string; duration: number }>>([]);
  let surpriseId = 0; // Unique ID for each surprise

  // Callback from WindowFrame with the current state of 'rotating':
  // const handleSurprise = ({ rotating }: { rotating: boolean }) => {
  //   console.log('surprise from WindowFrame:', rotating);
  // };
  const handleSurprise = () => {
    // Called when the surprise button is clicked
    // console.log('🎉 Surprise triggered from WindowFrame!');
    // TODO: replace this random surprise with a proper one:

    // Create a new ID and random horizontal position (10-90%):
    const id = surpriseId++;
    const left = `${Math.random() * 80 + 10}%`;
    const duration = Math.random() * 2 + 3; // Random duration between 3 and 5 seconds

    // Add new surprise to the array → will be rendered via {#each}
    surpriseEmojis = [...surpriseEmojis, { id, left, duration }];

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
    {#each surpriseEmojis as surpriseEmoji (surpriseEmoji.id)}
      <div
        class="surprise"
        style="
        left: {surpriseEmoji.left};
        animation-duration: {surpriseEmoji.duration}s;
      "
      >
        🌸
      </div>
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
  .surprise {
    position: absolute;
    top: 100%;
    font-size: 2.5rem;
    animation:
      fly-up 1s ease-out forwards,
      hue-spin 1s linear forwards;
    text-shadow: 0 0 8px deeppink;
  }

  @keyframes fly-up {
    0% {
      transform: translateY(0) rotate(0deg);
      /* opacity: 0; */
    }
    20% {
      opacity: 1;
    }
    100% {
      transform: translateY(-110vh) rotate(720deg);
      /* opacity: 0; */
    }
  }

  @keyframes hue-spin {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
  footer div {
    color: rgb(71, 60, 53);
    background-color: rgba(245, 248, 240, 0.9);
    border-radius: 6px;
  }
</style>
