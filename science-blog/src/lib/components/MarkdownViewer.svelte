<script lang="ts">
  import MarkdownIt from 'markdown-it';
  import markdownItAnchor from 'markdown-it-anchor';
  import texmath from 'markdown-it-texmath';
  import katex from 'katex';
  import DOMPurify from 'isomorphic-dompurify';
  import 'katex/dist/katex.min.css'; // Import KaTeX CSS

  let { content } = $props();

  // Initialize Parser
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
  })
  .use(texmath, { engine: katex, delimiters: 'dollars' })
  .use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.headerLink() // Adds 🔗 icon next to headers
  });

  // Reactively render HTML when content changes
  let renderedHtml = $derived(DOMPurify.sanitize(md.render(content)));
</script>

<div class="markdown-body prose max-w-none">
  {@html renderedHtml}
</div>

<style>
  /* Simple styling for the markdown content */
  .markdown-body {
    font-family: sans-serif;
    line-height: 1.6;
    color: #333;
  }
  
  /* Target elements inside the HTML output globally */
  :global(.markdown-body h1) { border-bottom: 2px solid #eaeaea; padding-bottom: 0.3em; }
  :global(.markdown-body pre) { background: #f6f8fa; padding: 16px; border-radius: 6px; }
  :global(.markdown-body blockquote) { border-left: 4px solid #dfe2e5; padding-left: 1rem; color: #6a737d; }
    :global(.katex) { font-size: 1.1em; } 
</style>
