<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import Navbar from "$lib/components/Navbar.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Navbar></Navbar>
<main
  class="min-h-screen w-full flex justify-center items-center border rounded-2xl border-gray-800"
>
  {@render children()}
</main>
