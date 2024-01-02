<script>
  import {
    TableSearch,
    TableHead,
    TableHeadCell,
    TableBody,
    TableBodyRow,
    TableBodyCell
  } from 'flowbite-svelte';

  export let columns;
</script>

<TableSearch placeholder="Tìm kiếm theo tên người dùng" hoverable={true} bind:inputValue={userSearchTerm}>
  <TableHead>
    {#each columns as column}
    <TableHeadCell>{column.name}</TableHeadCell>
    {/each}
  </TableHead>
  <TableBody>
    {#each filterUsers as user, index}
      <TableBodyRow>
        <TableBodyCell>{index + 1}</TableBodyCell>
        <TableBodyCell>{user.name}</TableBodyCell>
        <TableBodyCell>{user.email}</TableBodyCell>
        <TableBodyCell>{user.unit ? user.unit.name : ""}</TableBodyCell>
        <TableBodyCell>{user.manager ? user.manager.name : ""}</TableBodyCell>
        <TableBodyCell>
          <a href={`./users/${user.id}`}>
            <UserEditSolid />
          </a>
        </TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</TableSearch>

