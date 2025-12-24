<script lang="ts">
  import { posts } from '$lib/data/posts';
</script>


<div class="max-w-3xl mx-auto px-4 py-12 font-serif text-gray-900">
  {#each posts as post}
    <article class="mb-16 border-b border-gray-200 pb-12 last:border-0">
      
      <header class="mb-6">
        <h2 class="font-sans font-black text-3xl leading-tight tracking-tight mb-2">
          <a href="/blog/{post.slug}" class="hover:underline decoration-red-700 decoration-4 underline-offset-4">
            {post.title}
          </a>
        </h2>
        
        <div class="flex items-center text-xs font-sans font-bold text-gray-500 uppercase tracking-widest">
          <span>Dec 24, 2025</span>
          <span class="mx-2 text-gray-300">/</span>
          <span>Cory Doctorow (Sim)</span>
        </div>
      </header>

      {#if post.thumbnail}
        <a href="/blog/{post.slug}" class="block mb-6 group">
          <img 
            src={post.thumbnail} 
            alt={post.title} 
            class="w-full h-64 object-cover border-2 border-black group-hover:contrast-125 transition-all"
          />
        </a>
      {/if}

      <div class="text-lg leading-relaxed text-gray-800 mb-4">
        <p>{post.description}</p>
      </div>

      <footer>
        <a href="/blog/{post.slug}" class="inline-block font-sans font-bold text-red-700 hover:bg-red-700 hover:text-white px-1 -ml-1 transition-colors">
          Continue reading <span class="sr-only">{post.title}</span> &rarr;
        </a>
      </footer>

    </article>
  {/each}
</div>
