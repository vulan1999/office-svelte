<script>
  import { page } from '$app/stores';
  import "../app.pcss";
  import { 
    Sidebar, 
    SidebarGroup, 
    SidebarItem, 
    SidebarWrapper,
    SidebarDropdownWrapper,
    SidebarDropdownItem,
    Navbar, 
    NavBrand, 
    NavHamburger, 
    Avatar, 
    Drawer,
    CloseButton
  } from 'flowbite-svelte'
  import { HomeSolid, GridSolid, UsersSolid, UserGroupSolid } from 'flowbite-svelte-icons';
  import { onMount } from 'svelte';
  
  $:activeUrl = $page.url.pathname;
  let sideBarUrls = [
    {
      label: "Home",
      href: "/",
      items: [],
      iconComponent: HomeSolid
    },
    {
      label: "Managements",
      href: "/management",
      items: [
        {
          label: "Users",
          href: "/management/users",
          iconComponent: UsersSolid
        },
        {
          label: "Units",
          href: "/management/units",
          iconComponent: UserGroupSolid
        }
      ],
      iconComponent: GridSolid
    }
  ]
  let width;
  let drawerHidden = false;
  $:if(width >= 1024){
    drawerHidden = false;
  }
  else{
    drawerHidden = true;
  }

  onMount(()=>{
    if(width >= 1024){
      drawerHidden = false;
    }
    else{
      drawerHidden = true;
    }
  });

  const toggleDrawer = () => {
    drawerHidden = !drawerHidden;
  }

  let activeClass = 'flex items-center p-2 text-base font-bold text-white bg-primary-500 rounded-lg hover:bg-primary-100 hover:text-black';
  let activeDropdownItemClass = "flex items-center p-2 pl-11 text-base font-bold text-white bg-primary-500 rounded-lg hover:bg-primary-100"
  let nonActiveClass = 'flex items-center p-2 text-base font-normal rounded-lg hover:bg-primary-200 hover:text-white';
</script>

<svelte:window bind:innerWidth={width} />
<header class='border-b sticky top-0 z-40 mx-auto'>
  <Navbar>
    <NavHamburger 
      onClick={toggleDrawer} 
    />
    <NavBrand>
      <img src="/images/opes.png" class="h-6 sm:h-9" alt="logo"/>
      <span class="self-center text-xl font-semibold pl-4 whitespace-nowrap">Office</span>
    </NavBrand>
    <Avatar border />
  </Navbar>
</header>

<Drawer 
  transitionType="fly" 
  bind:hidden={drawerHidden} 
  backdrop={false}
  leftOffset="top-15 left-0 h-screen w-full lg:w-80"
  activateClickOutside={false}
  divClass = "overflow-y-auto z-50 p-2 bg-gray-50 border-r"
>
  <div class="lg:hidden flex items-end">
    <CloseButton on:click={toggleDrawer} />
  </div>
  <Sidebar {activeUrl} {activeClass} {nonActiveClass} class="w-full">
    <SidebarWrapper>
      <SidebarGroup>
        {#each sideBarUrls as sideBarUrl}
          {#if sideBarUrl.items.length === 0}
            <SidebarItem label={sideBarUrl.label} href={sideBarUrl.href}>
              <svelte:fragment slot="icon">
                <svelte:component this={sideBarUrl.iconComponent} />
              </svelte:fragment>
            </SidebarItem>
          {:else}
            <SidebarDropdownWrapper label={sideBarUrl.label}>
              <svelte:fragment slot="icon">
                <svelte:component this={sideBarUrl.iconComponent} />
              </svelte:fragment>
              {#each sideBarUrl.items as item}
                <SidebarDropdownItem 
                  label={item.label} 
                  href={item.href} 
                  activeClass={activeDropdownItemClass} 
                  active={item.href === $page.url.pathname} 
                />
              {/each}  
            </SidebarDropdownWrapper>
          {/if}
        {/each}
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</Drawer>

<div class="flex px-4 mx-auto w-full">
  <main class="lg:ml-80 w-full mx-auto p-8">
    <slot></slot>
  </main>
</div>
