<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import '../app.css';
  let { children } = $props();
</script>

<Nav />

<div class="px-8">
  {@render children()}
</div>
