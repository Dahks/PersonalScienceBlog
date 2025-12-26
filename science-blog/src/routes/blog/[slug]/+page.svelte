<script lang="ts">
  import MarkdownViewer from '$lib/components/MarkdownViewer.svelte';
  
  let { data } = $props();
  
  // Extract headers for the Sidebar
  function getHeaders(md: string) {
    const headers: { 
      level: number; 
      text: string;
      id: string
    }[] = [];

    const regex = /^(#{1,3})\s+(.*)$/gm; // search for headers
    let match;
    while ((match = regex.exec(md)) !== null) {
      const level = match[1].length;
      const text = match[2];

      // Create a simplified ID (matches what markdown-it-anchor does usually)
      const id = text.toLowerCase().replace(/[^\w]+/g, '-');
      headers.push({ level, text, id });
    }
    return headers;
  }

  let toc = $derived(getHeaders(data.post.content));
</script>

<div class="grid md:grid-cols-[250px_1fr] gap-3 max-w-6xl mx-auto items-start">
  <aside class="sticky top-1/2 -translate-y-1/2 mt-4 h-fit sm:hidden md:block">
    <h3 class="font-semibold">Table of contents:</h3>
    <ul class="ml-1 pl-2 border-l-3 mt-1">
      {#each toc as header}
        <li 
          style="padding-left: {(header.level - 1) * 1}rem"
          class="no-underline text-[#666] text-[0.9rem] hover:text-black transition-colors"
        >
          <a href="#{header.id}">{header.text}</a>
        </li>
      {/each}
    </ul>
  </aside>
  <article>
    <h1>{data.post.title}</h1>
    <MarkdownViewer content={data.post.content} />
  </article>
</div>

