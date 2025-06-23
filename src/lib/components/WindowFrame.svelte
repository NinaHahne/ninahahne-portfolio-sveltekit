<script lang="ts">
  let rotated = $state<boolean>(false);
  let { onsurprise } = $props();
  let windowFrame: HTMLButtonElement;

  const triggerSurprise = () => {
    // onsurprise?.({ rotated }); // Callback with the current state of 'rotated'
    onsurprise?.();
  };
</script>

<button
  tabindex="0"
  bind:this={windowFrame}
  class="group absolute left-1/2 top-8 z-10 h-[230px] w-[230px] -translate-x-1/2 rounded-full text-transparent focus-visible:outline-offset-[4px] hoverable:text-stone hoverable:hover:text-transparent md:fixed md:left-[65px] md:translate-x-0"
  aria-label="click for a surprise"
  onclick={triggerSurprise}
>
  <!-- <div class="pointer-events-none relative h-full w-full bg-current transition-colors duration-300"></div> -->
  <div
    class="window-frame pointer-events-none relative h-full w-full rounded-full bg-rainbow-gradient-curved transition-transform duration-300 group-active:scale-[1.02]"
  ></div>
  <!-- 
    class:rotated
    class:hoverable:hover:rotate-[360deg]={rotated}
    onmouseover={() => (rotated = true)}
    onmouseout={() => (rotated = false)}
    onmousedown={() => (rotated = true)}
    onmouseup={() => (rotated = false)}
    onfocus={() => (rotated = true)}
    onblur={() => (rotated = false)} -->
</button>

<style>
  .window-frame {
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    mask-image: radial-gradient(circle at center 115px, transparent 113px, black 114px);
    -webkit-mask-image: radial-gradient(circle at center 115px, transparent 113px, black 114px);
  }
</style>
