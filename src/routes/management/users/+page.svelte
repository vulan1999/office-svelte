<script>
  import { 
    Table, 
    TableHead, 
    TableHeadCell, 
    TableBody, 
    TableBodyRow,
    TableBodyCell,
    TableSearch
  } from 'flowbite-svelte';
  import { UserCircleSolid, UserGroupSolid } from 'flowbite-svelte-icons';
  export let data;

  let userSearchTerm = ""
  $:filterUsers = data.users.filter((user) => user.name.toLowerCase().indexOf(userSearchTerm.toLowerCase()) !== -1);
</script>

<TableSearch placeholder="Search by user" hoverable={true} bind:inputValue={userSearchTerm}>
  <TableHead>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Tên nhân viên</TableHeadCell>
    <TableHeadCell>Email</TableHeadCell>
    <TableHeadCell>Phòng ban</TableHeadCell>
    <TableHeadCell>Tên quản lý</TableHeadCell>
  </TableHead>
  <TableBody>
    {#each filterUsers as user, index}
      <TableBodyRow>
        <TableBodyCell>{index + 1}</TableBodyCell>
        <TableBodyCell>{user.name}</TableBodyCell>
        <TableBodyCell>{user.email}</TableBodyCell>
        <TableBodyCell>{user.unit.name}</TableBodyCell>
        <TableBodyCell>{user.manager.name}</TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</TableSearch>
