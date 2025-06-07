<!-- Global layout for all pages -->
<script lang="ts">
  import '../styles/app.css';

  let { children } = $props();
</script>

<svelte:head>
  <title>Figures SvelteKit Starter</title>
</svelte:head>

<header class="fixed top-0 z-50 flex h-16 w-full justify-between bg-slate-100 p-4">
  <nav class="relative flex h-full items-center justify-center gap-4">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>

<main>
  {@render children()}
</main>

<footer></footer>
