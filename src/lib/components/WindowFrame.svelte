<script lang="ts">
  let rotating = $state<boolean>(false);
  let { onsurprise } = $props();
  let windowFrame: HTMLButtonElement;

  const triggerSurprise = () => {
    console.log('clicked to trigger surprise');
    // onsurprise?.({ rotating }); // Callback with the current state of 'rotating'
    onsurprise?.();
  };
</script>

<button
  bind:this={windowFrame}
  class="window-frame absolute left-1/2 top-8 z-10 h-[230px] w-[230px] -translate-x-1/2 rounded-full transition-transform duration-1000 hover:cursor-pointer md:fixed md:left-[65px] md:translate-x-0"
  class:rotating
  class:rotate-[360deg]={rotating}
  onmouseover={() => (rotating = true)}
  onfocus={() => (rotating = true)}
  onmouseout={() => (rotating = false)}
  onblur={() => (rotating = false)}
  aria-label="click for a surprise"
  onclick={triggerSurprise}
></button>

<style>
  .window-frame {
    background-image: linear-gradient(to right, #ff0066, #ff6600, #ffff00, #00ff00, #0000ff, #6600ff);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    mask-image: radial-gradient(circle at center 115px, transparent 113px, black 114px);
    -webkit-mask-image: radial-gradient(circle at center 115px, transparent 113px, black 114px);
  }
</style>
