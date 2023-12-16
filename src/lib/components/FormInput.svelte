<script>
  import {Label, Input } from 'flowbite-svelte'
  export let label;
  export let placeholder;
  export let type;
  export let inputId;
  export let icon;
  export let value;
</script>

<div class='mb-6'>
  <Label for={inputId} class='block mb-2'>{label}</Label>
  <Input id={inputId} type={type} placeholder={placeholder} value={value}>
    <svelte:component this={icon} slot="left" class="w-5 h-5 text-gray-500"/>
  </Input>
</div>
