<script lang="ts">
  let { selected = $bindable<'projects' | 'experiments'>('projects') } = $props();
</script>

<div class="bg-light-gray-60 flex w-full flex-wrap items-center justify-center gap-4 p-4 xl:gap-8">
  <div class="order-2 flex-1 text-left md:order-none xl:text-right">
    <button
      class="relative rounded-md border-2 border-dusty-brown px-4 py-1 text-sm font-semibold text-dusty-brown transition-colors duration-300 hoverable:hover:bg-dusty-brown hoverable:hover:text-light-gray"
      class:bg-dusty-brown={selected === 'projects'}
      class:text-light-gray={selected === 'projects'}
      onclick={() => (selected = 'projects')}
    >
      <span>Projects</span>
      <!-- TODO: indicator -->
      <!-- <div class="absolute inset-x-0 -bottom-2 m-auto size-1 rounded-[50%] bg-dusty-brown"></div> -->
    </button>
  </div>

  <h1 class="order-1 w-full text-center text-3xl font-bold md:order-none md:w-auto md:text-left">PORTFOLIO</h1>

  <div class="order-3 flex-1 text-right md:order-none xl:text-left">
    <button
      class="relative rounded-md border-2 border-dusty-brown px-4 py-1 text-sm font-semibold text-dusty-brown transition-colors duration-300 hoverable:hover:bg-dusty-brown hoverable:hover:text-light-gray"
      class:bg-dusty-brown={selected === 'experiments'}
      class:text-light-gray={selected === 'experiments'}
      onclick={() => (selected = 'experiments')}
    >
      <span>Experiments</span>
    </button>
  </div>
</div>
