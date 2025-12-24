<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
      
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="app flex flex-col h-screen justify-between">
  
  <header >
    <Navbar />
  </header>

  <main class="mb-auto">
    {@render children()}
  </main>

  <Footer />
  
</div>

