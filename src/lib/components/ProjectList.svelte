<script lang="ts">
  import { fade } from 'svelte/transition';
  import SegmentTabs from '$lib/components/SegmentTabs.svelte';
  import { projects } from '$lib/data/projects';
  import type { Project } from '$lib/data/projects';

  // lokaler Tab-State
  let current = $state<'projects' | 'experiments'>('projects');

  // sichtbare Items ableiten
  const visible = $derived(projects.filter((p) => p.kind === (current === 'projects' ? 'project' : 'experiment')));
</script>

<section class="projects-section relative flex flex-col gap-4 md:pt-4">
  <!-- <div class="portfolio sticky top-4 rounded-md bg-light-gray-80 p-4">
    <h1 class="text-center text-3xl font-bold">PORTFOLIO</h1>
  </div> -->
  <div
    class="portfolio sticky top-4 z-10 flex flex-col items-center
         gap-2 rounded-md bg-light-gray-80
         "
  >
    <SegmentTabs bind:selected={current} />
  </div>
  {#each visible as project (project.id)}
    <div transition:fade={{ duration: 250 }} class="project flex flex-col gap-4 rounded-md bg-light-gray-80 p-4">
      <div class="wrapper flex flex-col gap-4 lg:flex-row">
        <div class="first-box text-center md:flex-1 md:text-left">
          <div class="img-box flex items-center justify-center overflow-hidden rounded-md border-2 border-dusty-brown">
            <img src={project.image} alt={`${project.title} preview`} class="w-full" />
          </div>
          <h3 class="mt-2 text-center">{project.title}</h3>
          {#if project.subtitle}
            <h4 class="text-center">{project.subtitle}</h4>
          {/if}
        </div>

        <hr class="h-px border-t border-solid border-stone md:hidden" />

        <div class="second-box md:flex-1">
          <div class="project-info">
            {#if project.features}
              <div class="features">
                <h5>Features</h5>
                <ul>
                  {#each project.features as feature}
                    <li>{feature}</li>
                  {/each}
                </ul>
              </div>
            {/if}

            <div class="technologies">
              <h5>Technologies</h5>
              <p>{project.technologies.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
      <hr class="h-px border-t border-solid border-stone" />
      <div class="project-links flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <a
          class="github flex gap-1 whitespace-nowrap font-bold transition-colors duration-300"
          href={project.githubUrl}
          target="_blank"
        >
          <img src="/images/emojis/github_openmoji_E045_mod.svg" alt="GitHub icon" class="inline-block h-6" />
          <span>View on GitHub</span>
        </a>
        {#if project.liveUrl}
          <a
            class="btn live flex items-center gap-1 whitespace-nowrap rounded-md border-2 border-stone px-2 py-1 font-bold transition-colors duration-300 hoverable:hover:bg-stone hoverable:hover:text-btn-text-active"
            href={project.liveUrl.href}
            target="_blank"
          >
            {#if project.liveUrl.iconBefore}
              <img src={project.liveUrl.iconBefore} alt="" class="h-6 w-6" aria-hidden="true" />
            {/if}
            <span>{project.liveUrl.label}</span>
            {#if project.liveUrl.iconAfter}
              <img src={project.liveUrl.iconAfter} alt="" class="h-6 w-6" aria-hidden="true" />
            {/if}
          </a>
        {/if}
      </div>
    </div>
  {/each}
</section>

<style>
  /* .portfolio,
  .project {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  } */

  /* .img-box img {
    max-width: 640px;
  } */

  h4 {
    color: #555;
  }

  .project-info {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-bottom: 1rem;
  }

  .features ul {
    padding-left: 1.2rem;
    list-style: disc;
  }

  .github:hover {
    color: #333;
  }

  @media (hover: hover) and (pointer: fine) {
    .img-box.effect {
      cursor: pointer;
      transition:
        transform 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out;
    }
    .btn.live {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    }

    .img-box.effect:hover {
      transform: translateY(-2px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    }

    .img-box.effect:active,
    .btn.live:active {
      transform: translateY(2px);
      box-shadow: none;
    }
  }
</style>
