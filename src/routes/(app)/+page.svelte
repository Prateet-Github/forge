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
    "Make a Navbar for a Developer Portfolio"
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
          placeholder="Describe what you want to create... "
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
            class="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-900 cursor-pointer transition-all"
            disabled={!prompt.trim()}
          >
            <span class="text-sm">Generate</span>
            <SendHorizonal class="size-4" />
          </button>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="flex flex-wrap justify-center gap-2">
      <button
        on:click={() => prompt = "Build a contact form with validation"}
        class="py-1 px-3 text-sm text-gray-300 hover:text-white border border-gray-700 rounded-2xl cursor-pointer transition-colors"
      >
        Contact Form
      </button>

      <button
        on:click={() => prompt = "Create a feedback form"}
        class="py-1 px-3 text-sm text-gray-300 hover:text-white border border-gray-700 rounded-2xl cursor-pointer transition-colors"
      >
        Feedback
      </button>

      <button
        on:click={() => prompt = "Design a bug report form"}
        class="py-1 px-3 text-sm text-gray-300 hover:text-white border border-gray-700 rounded-2xl cursor-pointer transition-colors"
      >
        Bug Report
      </button>

      <button
        on:click={() => prompt = "Make a feature request form"}
        class="py-1 px-3 text-sm text-gray-300 hover:text-white border border-gray-700 rounded-2xl cursor-pointer transition-colors"
      >
        Feature Request
      </button>

      <button 
        on:click={shuffleExamples}
        class="p-2"
      >
        <RefreshCcw class="size-5 hover:opacity-80 cursor-pointer" />
      </button>
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
