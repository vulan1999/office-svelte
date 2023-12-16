<script>
  import {Label, Select } from 'flowbite-svelte';
  export let label;
  export let selected;
  export let options = [];
</script>

<Label>
  {label}
  <Select class='mt-2' items={options} bind:value={selected} />
</Label>

