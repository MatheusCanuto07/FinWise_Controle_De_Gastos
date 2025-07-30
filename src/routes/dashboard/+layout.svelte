<script lang="ts">
	import CardHomeDinheiro from '$lib/components/CardHomeDinheiro.svelte';
	import CardMovimentacao from '$lib/components/CardMovimentacao.svelte';
	import Tab from '$lib/components/Tab.svelte';
	import type { Snippet } from 'svelte';
	import type { PageData } from './$types';
	import { page } from '$app/state';
	import SelectPeriod from '$lib/components/SelectPeriod.svelte';

	function isActive(href: string) {
		return page.url.pathname.startsWith(href);
	}

  
	let { data, children }: { data: PageData; children: Snippet } = $props();
</script>

<div>
	<div role="tablist" class="tabs tabs-bordered">
		<a
			href="/dashboard/entradas"
			role="tab"
			class="tab"
			class:tab-active={isActive('/dashboard/entradas')}>Entradas</a
		>
		<a
			href="/dashboard/saidas"
			role="tab"
			class="tab"
			class:tab-active={isActive('/dashboard/saidas')}>Saidas</a
		>
    <a 
      href="/dashboard/dividas"
      role="tab"
      class="tab"
      class:tab-active={isActive('/dashboard/dividas')}
      >Dividas</a>
    <a 
      href="/dashboard/devedores"
      role="tab"
      class="tab"
      class:tab-active={isActive('/dashboard/devedores')}
      >Devedores</a>
	</div>

  <SelectPeriod />
  

	{@render children()}
</div>
