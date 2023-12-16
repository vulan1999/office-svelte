<script>
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  import { EnvelopeSolid, UserCircleSolid } from 'flowbite-svelte-icons'
  import FormInput from '$lib/components/FormInput.svelte'
  import FormSelect from '$lib/components/FormSelect.svelte'
  export let data;
  let unitsList = [];
  data.units.forEach(element => {
    unitsList.push({
      value: element.id, name: element.name
    })
  });
</script>

<Breadcrumb aria-label="Solid background breadcrumb example" solid>
  <BreadcrumbItem href="/" home>Trang chủ</BreadcrumbItem>
  <BreadcrumbItem href="/management/users">Danh sách người dùng</BreadcrumbItem>
  <BreadcrumbItem>{data.user.name}</BreadcrumbItem>
</Breadcrumb>

<div class="mt-4">
  <FormInput 
    label = "Tên nhân viê"
    placeholder = "Nhập tên nhân viên"
    type = "text"
    inputId = "name"
    icon = {UserCircleSolid}
    value = {data.user.name}
  />

  <FormInput 
    label = "Email"
    placeholder = "Nhập email nhân viên"
    type = "email"
    inputId = "email"
    icon = {EnvelopeSolid}
    value = {data.user.email}
  />

  <FormSelect 
    label = "Đơn vị/ Phòng ban"
    selected = {data.user.unit.id}
    options = {unitsList}
  />
</div>
