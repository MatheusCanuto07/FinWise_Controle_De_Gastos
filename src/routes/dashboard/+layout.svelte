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
  
	let { saldo, totalEntradas, totalSaidas, total } = $derived(data);
  console.log(total[0].total)

</script>

<div>
	<div class="center flex flex-wrap justify-center">
		<h1 class="text-2xl font-bold">{'R$ ' + (total[0].total / 100).toLocaleString('pt-BR')}</h1>
		<h2 class="w-full text-center text-gray-800 opacity-50">{'Saldo: R$ ' + (saldo[0].saldo / 100).toLocaleString('pt-BR')}</h2>
	</div>
	<div class="flex flex-wrap">  
		<CardHomeDinheiro total={(totalEntradas[0].total / 100).toLocaleString('pt-BR')} tipo={'entrada'}/>
		<CardHomeDinheiro total={(totalSaidas[0].total / 100).toLocaleString('pt-BR')} tipo={'saida'}/>
	</div>

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
