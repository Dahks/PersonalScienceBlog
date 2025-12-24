<script lang="ts">
  import CodeMirror from 'svelte-codemirror-editor';
  import { markdown } from '@codemirror/lang-markdown';
  import MarkdownViewer from '$lib/components/MarkdownViewer.svelte';

  // Initial default content
  let content = $state(`# Live Editor
Try typing here!

## Math Support
$$ x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} $$

1. List item one
2. List item two
`);
</script>

<div class="playground">
  <div class="pane editor-pane">
    <CodeMirror 
      bind:value={content} 
      lang={markdown()} 
      styles={{
        "&": { height: "100%", fontSize: "14px" }
      }}
    />
  </div>

  <div class="pane preview-pane">
    <MarkdownViewer {content} />
  </div>
</div>

<style>
  /* Use the full viewport height, minus the header usually (~60px) */
  /* We use 100vh here assuming you want a full app-like feel */
  .playground {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: calc(100vh - 80px); /* Adjust based on your header height */
    border-top: 1px solid #ddd;
  }

  .pane {
    overflow-y: auto; /* Allows independent scrolling */
    padding: 1rem;
  }

  .editor-pane {
    border-right: 1px solid #ddd;
    background: #f9f9f9;
    padding: 0; /* CodeMirror handles its own padding */
  }

  .preview-pane {
    background: white;
  }

  /* Mobile Responsive: Stack them vertically on small screens */
  @media (max-width: 768px) {
    .playground {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
</style>
