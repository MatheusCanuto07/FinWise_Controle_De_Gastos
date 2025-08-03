<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { PageData } from './$types';
	import { page } from '$app/state';
  let { data, children }: { data: PageData; children: Snippet } = $props();


	function isActive(href: string) {
		return page.url.pathname.startsWith(href);
	}
</script>

<div role="tablist" class="tabs tabs-bordered">
	<a
		href="/control/transacao"
		role="tab"
		class="tab"
		class:tab-active={isActive('/control/transacao')}>Transacao</a>
	<a
	  href="/control/compraparcelada"
	  role="tab"
	  class="tab"
	  class:tab-active={isActive('/control/compraparcelada')}>Compra Parcelada</a>
	<a
		href="/control/categoria"
		role="tab"
		class="tab"
		class:tab-active={isActive('/control/categoria')}>Categoria</a>
    <a 
      href="/control/cartao"
      role="tab"
      class="tab"
      class:tab-active={isActive('/control/cartao')}>Cartão</a>
</div>

{@render children()}