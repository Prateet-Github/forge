<script lang="ts">
  import { Plus, RefreshCcw, SendHorizonal, Sparkles, Zap, Code2, Layout } from "lucide-svelte";

  export let data;

  let selectedFile: File | null = null;
  let prompt = "";

  const quickActions = [
    { label: "Contact Form", icon: Layout },
    { label: "Dashboard", icon: Layout },
    { label: "Landing Page", icon: Code2 },
    { label: "API Endpoint", icon: Zap },
  ];

  const examples = [
    "Build a todo app with drag and drop",
    "Create a pricing page with 3 tiers",
    "Make a weather dashboard with charts",
    "Design a blog post editor",
  ];

  function handleFile(e: Event) {
    const input = e.target as HTMLInputElement;
    selectedFile = input.files?.[0] ?? null;
  }

  function shuffleExamples() {
    // Shuffle logic here
  }
</script>

<section class="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-12">
  <div class="max-w-4xl w-full space-y-8">
    <!-- Hero Section -->
    <div class="text-center space-y-4">
      <div class="text-sm text-gray-500 mb-4">
        Code. Deploy. Repeat.
      </div>
      
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        What do you want to build?
      </h1>
      
      <p class="text-gray-400 text-lg max-w-2xl mx-auto">
        Describe your idea and watch Forge bring it to life with code, design, and functionality.
      </p>
    </div>

    <!-- Main Input Card -->
    <div class="relative group">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
      <div class="relative border border-gray-700 bg-black rounded-2xl p-6 space-y-4">
        <textarea
          bind:value={prompt}
          placeholder="Describe what you want to create... (e.g., 'Build a contact form with email validation')"
          class="w-full h-32 outline-none bg-transparent text-base resize-none placeholder:text-gray-500"
        ></textarea>

        <div class="flex items-center justify-between pt-2 border-t border-gray-800">
          <div class="flex items-center gap-3">
            <input type="file" id="file" class="hidden" on:change={handleFile} />

            <label 
              for="file" 
              class="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-900 cursor-pointer transition-all"
            >
              <Plus class="size-4" />
              <span class="text-sm">Attach</span>
            </label>

            {#if selectedFile}
              <div class="flex items-center gap-2 px-3 py-2 bg-gray-900 rounded-lg border border-gray-700">
                <span class="text-sm text-gray-300 truncate max-w-xs">
                  {selectedFile.name}
                </span>
                <button 
                  on:click={() => selectedFile = null}
                  class="text-gray-500 hover:text-white"
                >
                  ×
                </button>
              </div>
            {/if}
          </div>

          <button 
            class="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!prompt.trim()}
          >
            <span class="text-sm">Generate</span>
            <SendHorizonal class="size-4" />
          </button>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="space-y-3">
      <div class="flex items-center justify-between">
        <h2 class="text-sm font-medium text-gray-400">Quick Start</h2>
        <button 
          on:click={shuffleExamples}
          class="p-1.5 hover:bg-gray-900 rounded-lg transition-colors"
        >
          <RefreshCcw class="size-4 text-gray-500 hover:text-gray-300" />
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {#each quickActions as action}
          <button
            class="group flex items-center gap-3 p-4 border border-gray-800 hover:border-gray-700 bg-gray-950 hover:bg-gray-900 rounded-xl transition-all text-left"
          >
            <div class="p-2 bg-gray-900 group-hover:bg-gray-800 rounded-lg transition-colors">
              <svelte:component this={action.icon} class="size-5 text-gray-400 group-hover:text-white" />
            </div>
            <span class="text-sm text-gray-300 group-hover:text-white transition-colors">
              {action.label}
            </span>
          </button>
        {/each}
      </div>
    </div>

    <!-- Example Prompts -->
    <div class="space-y-3">
      <h2 class="text-sm font-medium text-gray-400">Try these examples</h2>
      <div class="flex flex-wrap gap-2">
        {#each examples as example}
          <button
            on:click={() => prompt = example}
            class="px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-800 hover:border-gray-600 bg-gray-950 hover:bg-gray-900 rounded-full transition-all"
          >
            {example}
          </button>
        {/each}
      </div>
    </div>

    <!-- Stats or Features -->
    <div class="grid grid-cols-3 gap-4 pt-8 border-t border-gray-900">
      <div class="text-center">
        <div class="text-2xl font-bold text-white mb-1">10K+</div>
        <div class="text-xs text-gray-500">Projects Created</div>
      </div>
      <div class="text-center">
        <div class="text-2xl font-bold text-white mb-1">99%</div>
        <div class="text-xs text-gray-500">Success Rate</div>
      </div>
      <div class="text-center">
        <div class="text-2xl font-bold text-white mb-1">24/7</div>
        <div class="text-xs text-gray-500">Available</div>
      </div>
    </div>
  </div>
</section>