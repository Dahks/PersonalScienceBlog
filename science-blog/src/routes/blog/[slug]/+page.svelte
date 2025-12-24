<script lang="ts">
  import MarkdownViewer from '$lib/components/MarkdownViewer.svelte';
  
  let { data } = $props();
  
  // Helper to extract headers for the Sidebar
  function getHeaders(md: string) {
    const headers: { level: number; text: string; id: string }[] = [];
    const regex = /^(#{1,3})\s+(.*)$/gm;
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

<div class="layout">
  <article>
    <h1>{data.post.title}</h1>
    <MarkdownViewer content={data.post.content} />
  </article>

  <aside>
    <h3>On this page</h3>
    <ul>
      {#each toc as header}
        <li style="padding-left: {(header.level - 1) * 1}rem">
          <a href="#{header.id}">{header.text}</a>
        </li>
      {/each}
    </ul>
  </aside>
</div>

<style>
  .layout {
    display: grid;
    grid-template-columns: 1fr 250px;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  aside {
    position: sticky;
    top: 2rem;
    height: fit-content;
    border-left: 1px solid #eee;
    padding-left: 1rem;
  }
  
  ul { list-style: none; padding: 0; }
  li { margin-bottom: 0.5rem; }
  a { text-decoration: none; color: #666; font-size: 0.9rem; }
  a:hover { color: #000; }

  @media (max-width: 768px) {
    .layout { grid-template-columns: 1fr; }
    aside { display: none; } /* Hide TOC on mobile */
  }
</style>
