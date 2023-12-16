<script>
  import {
    TableHead,
    TableHeadCell,
    TableBody,
    TableBodyRow,
    TableBodyCell,
    TableSearch,
    Pagination,
    Breadcrumb,
    BreadcrumbItem
  } from 'flowbite-svelte';
  import {UserEditSolid} from 'flowbite-svelte-icons'
  import { page } from '$app/stores';
  export let data;

  let userSearchTerm = ""
  $:filterUsers = data.users.filter((user) => user.name.toLowerCase().indexOf(userSearchTerm.toLowerCase()) !== -1);
  let pages = [
    {name: 1, href: '/management/users?page=1'},
    {name: 2, href: '/management/users?page=2'},
    {name: 3, href: '/management/users?page=3'},
    {name: 4, href: '/management/users?page=4'},
    {name: 5, href: '/management/users?page=5'},
    {name: 6, href: '/management/users?page=6'},
  ]
  $: activeUrl = $page.url.searchParams.get('page') ?? '1';
  $: {
    pages.forEach((page) => {
      let splitUrl = page.href.split('?');
      let queryString = splitUrl.slice(1).join('?');
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get('page');
      if (hrefValue === activeUrl) {
        page.active = true;
      } else {
        page.active = false;
      }
    });
    pages = pages;
  }

  const previous = () => {
    if(activeUrl != '1'){
      let previousPage = Number(activeUrl) - 1;
      location.href = `/management/users?page=${previousPage}`
    }
  };
  const next = () => {
    if(Number(activeUrl) !== pages.lenght){
      let nextPage = Number(activeUrl) + 1
      location.href = `/management/users?page=${nextPage}`
    }
  };
</script>

<Breadcrumb aria-label="Solid background breadcrumb example" solid>
  <BreadcrumbItem href="/" home>Trang chủ</BreadcrumbItem>
  <BreadcrumbItem href="/management/users">Danh sách người dùng</BreadcrumbItem>
</Breadcrumb>

<TableSearch placeholder="Tìm kiếm theo tên người dùng" hoverable={true} bind:inputValue={userSearchTerm}>
  <TableHead>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Tên nhân viên</TableHeadCell>
    <TableHeadCell>Email</TableHeadCell>
    <TableHeadCell>Đơn vị/ Phòng ban</TableHeadCell>
    <TableHeadCell>Tên quản lý</TableHeadCell>
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

<Pagination 
  {pages} 
  large 
  ulClass="flex justify-center -space-x-px items-center mt-4"
  activeClass = "text-white border border-gray-300 bg-primary-500 hover:bg-primary-300 hover:text-white"
  on:previous={previous}
  on:next={next}
/>
