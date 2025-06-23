<script lang="ts">
  let { scrollProgress = 0 } = $props();
  const panelCount = 12;
  const INITIAL_ROTATION = -29;
  const SPEED = 1;

  let wheelWrapper: HTMLElement;
  let wheelRotation = $state<number>(INITIAL_ROTATION);

  $effect(() => {
    wheelRotation = -360 * scrollProgress * SPEED + INITIAL_ROTATION; // Calculate rotation
  });
</script>

<section class="wheel-wrapper" bind:this={wheelWrapper} style={`--wheelRotation: ${wheelRotation}deg`}>
  <div class="wheel">
    <div class="banner">
      {#each Array.from({ length: panelCount }, (_, n) => n) as n}
        <div class="panel text-dusty-brown" style={`--n: ${n}`}></div>
      {/each}
    </div>
    <div class="screen"></div>
  </div>
</section>

<style>
  .wheel-wrapper {
    --width: 42px; /* muss auf Schriftgröße angepasst werden ?? bestimmt zusammen mit --transZ die Breite des Wheels */
    --transZ: 78px; /* bestimmt zusammen mit --width die Breite des Wheels & Abstand zwischen den Panels */
    --number: 12; /* number of panels */
    --number-float: 12;
    --wheelRotation: -29deg; /* wird in JS gesetzt */

    position: relative;
    height: 180px;
    display: grid;
    place-items: center;
    perspective: 500px;
    perspective-origin: 50% calc(50% - 90px);
    font-size: 52px;
    line-height: 1;
    font-weight: 800;
    margin-top: -1rem;
  }

  .wheel {
    position: relative;
    transform-style: preserve-3d;
  }

  .banner {
    display: flex;
    transform-style: preserve-3d;
    /* animation: rotate 20s infinite linear; */
    transition: transform 1.2s var(--ease-out-quart);
    transform: rotateY(var(--wheelRotation));
  }

  .panel {
    position: absolute;
    transform: translate(-50%, -50%) rotateY(var(--angle)) translateZ(var(--transZ));
    width: var(--width);
    font-size: inherit;
    height: 1em;
    overflow: hidden;
    /* Rainbow */
    /* color: hsl(var(--hue), 75%, 75%); */

    --hue: calc(360deg / var(--number) * var(--n));
    --angle: calc(360deg / var(--number) * var(--n));
  }
  .panel:nth-child(1) {
    --left: 0px;
  }
  .panel:nth-child(2) {
    --left: -42px;
  }
  .panel:nth-child(3) {
    --left: -84px;
  }
  .panel:nth-child(4) {
    --left: -126px;
  }
  .panel:nth-child(5) {
    --left: -168px;
  }
  .panel:nth-child(6) {
    --left: -210px;
  }
  .panel:nth-child(7) {
    --left: -252px;
  }
  .panel:nth-child(8) {
    --left: -294px;
  }
  .panel:nth-child(9) {
    --left: -336px;
  }
  .panel:nth-child(10) {
    --left: -378px;
  }
  .panel:nth-child(11) {
    --left: -420px;
  }
  .panel:nth-child(12) {
    --left: -462px;
  }

  .panel::before {
    position: absolute;
    content: 'HIRE ME NOW'; /* HIRE ME ★ HIRE ME ★  */
    /* left: calc(var(--width) * (var(--number-float) - 1 - var(--n)) * -1); */
    left: var(--left);
    width: max-content;
  }

  .screen {
    /* trennt vertikal den vorderen Teil vom Rad vom hinteren */
    /* display: none; */
    position: absolute;
    top: 0;
    width: 180px;
    height: 180px;
    /* background-color: rgba(245, 248, 240, 0.85); */
    background-image: radial-gradient(circle at center, var(--color-light-gray-80) 20%, transparent 60%);
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
</style>
