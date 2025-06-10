<script>
</script>

<section class="left-sidebar relative left-0 top-0 w-full p-4 md:fixed md:h-full md:min-h-[650px] md:w-[360px]">
  <div class="sidebar">
    <div class="profile-info">
      <div class="window"></div>
      <h1 class="name">NINA HAHNE</h1>
      <h2 class="desc">Frontend Engineer</h2>
      <!-- <hr> -->
      <h2 class="desc">Web Developer</h2>
      <span><i class="fas fa-map-marker-alt mr-2" data-fa-transform="grow-3"></i>Berlin, Germany</span>
    </div>
    <section class="wheel-wrapper">
      <div class="wheel">
        <div class="banner">
          <div class="panel" style="--n: 0"></div>
          <div class="panel" style="--n: 1"></div>
          <div class="panel" style="--n: 2"></div>
          <div class="panel" style="--n: 3"></div>
          <div class="panel" style="--n: 4"></div>
          <div class="panel" style="--n: 5"></div>
          <div class="panel" style="--n: 6"></div>
          <div class="panel" style="--n: 7"></div>
          <div class="panel" style="--n: 8"></div>
          <div class="panel" style="--n: 9"></div>
          <div class="panel" style="--n: 10"></div>
          <div class="panel" style="--n: 11"></div>
          <!-- <div class="panel" style="--n: 12;"></div> -->
        </div>
        <div class="screen"></div>
      </div>
    </section>
    <div class="contact">
      <a href="mailto:nina.marie.hahne@gmail.com">
        <img src="/images/emojis/envelope_openmoji_2709.svg" alt="Email" />
        <span>nina.marie.hahne@gmail.com</span>
      </a>
      <a href="https://www.linkedin.com/in/ninahahne/" target="_blank">
        <img src="/images/emojis/linkedin_openmoji_E046.svg" alt="LinkedIn" />
        <span>linkedin.com/in/ninahahne</span>
      </a>
      <a href="https://github.com/NinaHahne" target="_blank">
        <img src="/images/emojis/github_openmoji_E045.svg" alt="GitHub" />
        <span>github.com/ninahahne</span>
      </a>
      <a href="https://ninahahne.rocks">
        <img src="/images/emojis/globe_openmoji_1F310.svg" alt="ninahahne.rocks" />
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
    background-color: rgba(245, 248, 240, 1);
    width: 100%;
    height: 100%;
    border-radius: 6px;
    padding: 12px;
  }

  /* Profilbild-Fenster als Maske */
  .left-sidebar .sidebar {
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    mask-image: radial-gradient(circle at center 131px, transparent 114px, black 115px);
    -webkit-mask-image: radial-gradient(circle at center 131px, transparent 114px, black 115px);
  }

  /* Platzhalter für das Profilbild-Loch */
  .window {
    position: relative;
    align-self: center;
    width: 230px;
    height: 230px;
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
    color: rgb(96, 92, 91);
    font-size: 24px;
    text-align: center;
  }

  .profile-info span {
    display: block;
    margin: 5px 0px;
    color: rgb(71, 60, 53);
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
    gap: 5px;
  }

  .contact img {
    display: inline-block;
    width: 24px;
    height: 24px;
  }
</style>
