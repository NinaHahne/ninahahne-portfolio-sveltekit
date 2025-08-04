<script lang="ts">
  import WheelBanner from '$lib/components/WheelBanner.svelte';
  let { scrollProgress = 0 } = $props();
</script>

<section
  class="left-sidebar relative left-0 top-0 flex min-h-screen w-full flex-col justify-between py-4 md:fixed md:h-lvh md:w-[360px] md:p-4"
>
  <div class="sidebar h-full flex-grow-[1] md:overflow-auto">
    <div class="profile-info">
      <div class="window"></div>
      <h1 class="name">NINA HAHNE</h1>
      <h2 class="desc text-stone">Frontend Engineer</h2>
      <!-- <hr> -->
      <h2 class="desc text-stone">Web Developer</h2>
      <span class="flex items-center justify-center gap-0.5 text-dusty-brown">
        <img src="/images/emojis/pin_openmoji_E242_mod.svg" alt="location pin icon" class="inline-block h-6" />
        <span>Berlin, Germany</span>
      </span>
    </div>
    <WheelBanner {scrollProgress} />
    <div class="contact">
      <a href="mailto:nina.marie.hahne@gmail.com" class="flex items-center gap-1">
        <img src="/images/emojis/envelope_openmoji_2709.svg" alt="email icon" />
        <span>nina.marie.hahne@gmail.com</span>
      </a>
      <a href="https://www.linkedin.com/in/ninahahne/" target="_blank" class="flex items-center gap-1">
        <img src="/images/emojis/linkedin_openmoji_E046.svg" alt="LinkedIn icon" />
        <span>linkedin.com/in/ninahahne</span>
      </a>
      <a href="https://github.com/NinaHahne" target="_blank" class="flex items-center gap-1">
        <img src="/images/emojis/github_openmoji_E045_mod.svg" alt="GitHub icon" />
        <span>github.com/ninahahne</span>
      </a>
      <a href="https://ninahahne.rocks" class="flex items-center gap-1">
        <img src="/images/emojis/globe_openmoji_1F310.svg" alt="globe icon" />
        <span>ninahahne.rocks</span>
      </a>
    </div>
  </div>
</section>

<style>
  .sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: rgba(245, 248, 240, 1); */
    background-image: linear-gradient(to bottom, var(--color-light-gray) 265px, var(--color-light-gray-80) 500px);
    width: 100%;
    height: 100%;
    border-radius: 6px;
    padding: 12px;
  }

  /* Profilbild-Fenster als Maske */
  .left-sidebar .sidebar {
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    mask-image: radial-gradient(circle at center 126px, transparent 109px, black 110px);
    -webkit-mask-image: radial-gradient(circle at center 126px, transparent 109px, black 110px);
  }

  /* Platzhalter für das Profilbild-Loch */
  .window {
    position: relative;
    align-self: center;
    width: 220px;
    height: 220px;
  }

  .profile-info {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px;
  }

  .profile-info .name {
    font-size: 30px;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .profile-info h2 {
    font-size: 24px;
    text-align: center;
  }

  .profile-info span {
    margin: 5px 0px;
  }

  .contact {
    position: relative;
    z-index: 1;
  }

  .contact a,
  .profile-info span {
    margin-top: 5px;
  }

  .contact a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .contact img {
    display: inline-block;
    height: 24px;
  }
</style>
