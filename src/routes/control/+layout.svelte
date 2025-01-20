<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { PageData } from './$types';
	import { page } from '$app/state';

  function isActive(href: string){
    return page.url.pathname.startsWith(href);
  }

	let { data, children }: { data: PageData, children : Snippet } = $props();
</script>

<div role="tablist" class="tabs tabs-bordered">
  <a href="/control/comum" role="tab" class="tab" class:tab-active={isActive("/control/comum")}>Comum</a>
  <a href="/control/composta" role="tab" class="tab" class:tab-active={isActive("/control/composta")}>Composta</a>
</div>

{@render children()}

