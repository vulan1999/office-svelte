<script>
  import { page } from '$app/stores';
  import "../app.pcss";
  import { 
    Sidebar, 
    SidebarGroup, 
    SidebarItem, 
    SidebarWrapper, 
    Navbar, 
    NavBrand, 
    NavHamburger, 
    Avatar, 
    Drawer,
    CloseButton
  } from 'flowbite-svelte'
  import { HomeSolid, UsersSolid } from 'flowbite-svelte-icons'
  $:activeUrl = $page.url.pathname;
  let sideBarUrls = [
    {
      label: "Home",
      href: "/",
      iconComponent: HomeSolid
    },
    {
      label: "Users",
      hred: "/users",
      iconComponent: UsersSolid
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

  const toggleDrawer = () => {
    drawerHidden = !drawerHidden;
  }

  let activeClass = 'flex items-center p-2 text-base font-bold text-primary-900 bg-primary-200 rounded-lg hover:bg-primary-100';
  let nonActiveClass = 'flex items-center p-2 text-base font-normal rounded-lg hover:bg-primary-100';
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
  divClass = "overflow-y-auto z-50 p-4 bg-gray-50"
>
  <div class="lg:hidden flex items-end">
    <CloseButton on:click={toggleDrawer} />
  </div>
  <Sidebar {activeUrl} {activeClass} {nonActiveClass} class="w-full">
    <SidebarWrapper>
      <SidebarGroup>
        {#each sideBarUrls as sideBarUrl}
        <SidebarItem label={sideBarUrl.label} href={sideBarUrl.href}>
          <svelte:fragment slot="icon">
            <svelte:component this={sideBarUrl.iconComponent} />
          </svelte:fragment>
        </SidebarItem>
        {/each}
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</Drawer>

<div class="flex px-4 mx-auto w-full">
  <main class="lg:ml-72 w-full mx-auto p-8">
    <slot></slot>
  </main>
</div>
