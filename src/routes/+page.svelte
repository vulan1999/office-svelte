<script>
  import { Alert } from 'flowbite-svelte';
  import prisma from '$lib/prisma'
  
  const main = async () => {
    const allUser = await prisma.user.findMany()
    console.log(allUser)
  }
</script>

<div>
  <Alert>
    <span class="font-medium">Info alert!</span>
    Change a few things up and try submitting again.
  </Alert>
</div>
