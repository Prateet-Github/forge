<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import Navbar from "$lib/components/Navbar.svelte";

  let { data, children } = $props();

  console.log("Layout data:", data);
  console.log("User:", data.user);
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Navbar user={data.user} />

<main
  class="min-h-screen w-full flex justify-center items-center border rounded-2xl border-gray-800"
>
  {@render children()}
</main>
