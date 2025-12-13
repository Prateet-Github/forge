<script lang="ts">
  import { Plus, RefreshCcw, SendHorizonal } from "lucide-svelte";

  let selectedFile: File | null = null;

  function handleFile(e: Event) {
    const input = e.target as HTMLInputElement;
    selectedFile = input.files?.[0] ?? null;
  }
</script>

<section class="flex flex-col gap-6 max-w-3xl mx-auto px-4 py-12 sm:py-20">
  <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
    What do you want to create?
  </h1>

  <div class="border border-gray-700 rounded-2xl p-4 flex flex-col gap-6">
    <input
      type="text"
      placeholder="Ask v0 to build..."
      class="outline-none bg-transparent text-sm sm:text-base"
    />

    <div
      class="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between"
    >
      <div class="flex items-center gap-3">
        <!-- Hidden file input -->
        <input type="file" id="file" class="hidden" on:change={handleFile} />

        <!-- Upload trigger -->
        <label for="file" class="cursor-pointer">
          <Plus class="size-6 hover:opacity-80" />
        </label>

        <!-- File name -->
        {#if selectedFile}
          <span class="text-sm text-gray-400 truncate max-w-35 sm:max-w-xs">
            {selectedFile.name}
          </span>
        {/if}
      </div>

      <!-- Send button -->
      <button class="self-end sm:self-auto">
        <SendHorizonal class="size-5 hover:opacity-80 cursor-pointer" />
      </button>
    </div>
  </div>

  <div class="flex flex-wrap justify-center gap-2">
    <button
      class="py-1 px-3 text-sm text-gray-300 hover:text-white
             border border-gray-700 rounded-2xl cursor-pointer"
    >
      Contact Form
    </button>

    <button
      class="py-1 px-3 text-sm text-gray-300 hover:text-white
             border border-gray-700 rounded-2xl cursor-pointer"
    >
      Feedback
    </button>

    <button
      class="py-1 px-3 text-sm text-gray-300 hover:text-white
             border border-gray-700 rounded-2xl cursor-pointer"
    >
      Bug Report
    </button>

    <button
      class="py-1 px-3 text-sm text-gray-300 hover:text-white
             border border-gray-700 rounded-2xl cursor-pointer"
    >
      Feature Request
    </button>

    <button class="p-2">
      <RefreshCcw class="size-5 hover:opacity-80 cursor-pointer" />
    </button>
  </div>
</section>
