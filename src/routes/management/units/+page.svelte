<script>
  import {  
    TableHead, 
    TableHeadCell, 
    TableBody, 
    TableBodyRow,
    TableBodyCell,
    TableSearch
  } from 'flowbite-svelte';
  export let data;

  let unitSearchTerm = ""
  $:filterUnits = data.units.filter((unit) => unit.name.toLowerCase().indexOf(unitSearchTerm.toLowerCase()) !== -1);
</script>

<TableSearch placeholder="Tìm kiếm Đơn vị/ Phòng ban" hoverable={true} bind:inputValue={unitSearchTerm}>
  <TableHead>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Tên đơn vị/ phòng ban</TableHeadCell>
    <TableHeadCell>Tên đơn vị/ phòng ban trực thuộc</TableHeadCell>
  </TableHead>
  <TableBody>
    {#each filterUnits as unit, index}
      <TableBodyRow>
        <TableBodyCell>{index + 1}</TableBodyCell>
        <TableBodyCell>{unit.name}</TableBodyCell>
        <TableBodyCell>{unit.parentUnit === null ? "" : unit.parentUnit.name}</TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</TableSearch>


