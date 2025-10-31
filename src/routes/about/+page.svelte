<!-- Example About page -->

<script lang="ts">
  let team = [
    { name: 'Bob', role: 'Designer' },
    { name: 'Alice', role: 'Developer' },
    { name: 'Charlie', role: 'Project Manager' },
  ];
</script>

<svelte:head>
  <title>About Us | SvelteKit Starter</title>
</svelte:head>

<section class="relative flex min-h-[100dvh] flex-col items-center gap-4 pt-24">
  <h1>Welcome to the about page! This is an example of a nested route.</h1>

  <h2>Our Team</h2>
  <ul>
    {#each team as member}
      <li><strong>{member.name}</strong> – {member.role}</li>
    {/each}
  </ul>
</section>
