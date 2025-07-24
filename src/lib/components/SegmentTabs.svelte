<script lang="ts">
  let { selected = $bindable<'projects' | 'experiments'>('projects') } = $props();
</script>

<div class="bg-light-gray-60 flex w-fit gap-2 rounded-full p-1">
  <button
    class="rounded-full px-4 py-1 text-sm font-semibold"
    class:bg-slate-900={selected === 'projects'}
    class:text-white={selected === 'projects'}
    onclick={() => (selected = 'projects')}>Projects</button
  >

  <button
    class="rounded-full px-4 py-1 text-sm font-semibold"
    class:bg-slate-900={selected === 'experiments'}
    class:text-white={selected === 'experiments'}
    onclick={() => (selected = 'experiments')}>Experiments</button
  >
</div>
