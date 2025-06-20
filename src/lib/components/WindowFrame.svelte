<script lang="ts">
  let rotating = $state<boolean>(false);
  let { onsurprise } = $props();
  let windowFrame: HTMLButtonElement;

  const triggerSurprise = () => {
    // onsurprise?.({ rotating }); // Callback with the current state of 'rotating'
    onsurprise?.();
  };
</script>

<button
  bind:this={windowFrame}
  class="window-frame absolute left-1/2 top-8 z-10 h-[230px] w-[230px] -translate-x-1/2 rounded-full transition-transform duration-1000 hover:cursor-pointer md:fixed md:left-[65px] md:translate-x-0"
  class:rotating
  class:hoverable:hover:rotate-[360deg]={rotating}
  onmouseover={() => (rotating = true)}
  onfocus={() => (rotating = true)}
  onmouseout={() => (rotating = false)}
  onblur={() => (rotating = false)}
  aria-label="click for a surprise"
  onclick={triggerSurprise}
></button>

<style>
  .window-frame {
    background-image: linear-gradient(
      to top,
      #ff0066,
      #ff0800 5%,
      #ff6600 10%,
      #ffea00 45%,
      #00b900 80%,
      #0040ff 95%,
      #6600ff 100%
    );
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    mask-image: radial-gradient(circle at center 115px, transparent 113px, black 114px);
    -webkit-mask-image: radial-gradient(circle at center 115px, transparent 113px, black 114px);
  }
</style>
