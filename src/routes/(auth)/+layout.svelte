<script>
  let { children } = $props();
</script>

<main class="min-h-screen flex items-center justify-center px-4">
  <div class="w-full max-w-md">
    {@render children()}
  </div>
</main>
