export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  content: string; // The raw markdown
}

export const posts: BlogPost[] = [
  {
    slug: 'first-discovery',
    title: 'The First Discovery',
    description: 'An analysis of our initial findings in the lab.',
    thumbnail: 'https://placehold.co/600x400',
    content:
`# Introduction
Welcome to the *future* of science. Here is a formula:

  $$E = mc^2$$

## The Data
We found some interesting things.

  1. Item A
2. Item B

# Analysis
Here is a list of our calculations.

  ## Complex Math
When we integrate over the curve:
  $$ \\int_{0}^{\\infty} x^2 dx $$

### Subsection
This is a deep dive.`
  },
  {
    slug: 'interactive-test',
    title: 'Testing Macros',
    description: 'Trying out custom rendering capabilities.',
    thumbnail: 'https://placehold.co/600x400/orange/white',
    content: `# Interactive Elements
We need to render a custom graph here later.

# Conclusion
It works.`
  }
];

// Helper to simulate a DB fetch
export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
