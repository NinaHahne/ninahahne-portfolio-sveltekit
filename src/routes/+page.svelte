<!-- Homepage -->

<script lang="ts">
  import ProjectList from '$lib/components/ProjectList.svelte';

  let current = $state<'projects' | 'experiments'>('projects');
</script>

<svelte:head>
  <title>Nina Hahne | Portfolio</title>
</svelte:head>

<!-- <section class="relative mb-4 flex flex-col items-center justify-center gap-4 text-center md:min-h-[100dvh]">
  <div class="box max-w-2xl rounded-md bg-light-gray-80 p-5">
    <h1 class="text-4xl font-bold">This site is a work in progress</h1>
    <img src="/images/emojis/crane_openmoji_1F3D7.svg" alt="crane icon" class="inline-block h-12" />
    <img src="/images/emojis/barrier_openmoji_1F6A7.svg" alt="barrier icon" class="inline-block h-12" />
    <p class="text-lg text-gray-700">
      I’m currently rebuilding my portfolio with SvelteKit & TailwindCSS.
      <br />
      Come back soon for projects, code experiments, and poetic pixels.
    </p>
    <p class="mt-2 text-sm text-gray-600">
      In the meantime, you can find me on
      <a href="https://github.com/NinaHahne" target="_blank" class="underline">GitHub</a>,
      <a href="https://www.linkedin.com/in/ninahahne/" target="_blank" class="underline">LinkedIn</a> or
      <a href="https://ninahahne.rocks" target="_blank" class="underline">ninahahne.rocks</a>.
    </p>
  </div>
</section> -->

<ProjectList />

<style>
  .box {
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
  }
</style>
