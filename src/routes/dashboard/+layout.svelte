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
  <div class="w-full flex justify-center gap-4">
    <div class="card bg-base-200 w-64">
      <div class="card-body p-4">
        <h3 class="font-semibold">Saldo Disponível</h3>
        <p class="text-3xl font-bold">R$ 4.850,75</p>
        <select class="select select-bordered select-sm w-full mb-2 mt-2">
          <option selected>Cartão Principal</option>
          <option>Cartão de Crédito</option>
          <option>Conta Poupança</option>
        </select>
      </div>
    </div>
    <div class="card bg-base-200 w-64">
      <div class="card-body p-4">
        <h3 class="font-semibold">Gastos previstos</h3>
        <p class="text-3xl font-bold">R$ 4.850,75</p>
        <select class="select select-bordered select-sm w-full mb-2 mt-2">
          <option selected>Cartão Principal</option>
          <option>Cartão de Crédito</option>
          <option>Conta Poupança</option>
        </select>
      </div>
    </div>
    <div class="card bg-base-200 w-64">
      <div class="card-body p-4">
        <h3 class="font-semibold">Cartão de crédito</h3>
        <p class="text-3xl font-bold">R$ 4.850,75</p>
        <select class="select select-bordered select-sm w-full mb-2 mt-2">
          <option selected>Cartão Principal</option>
          <option>Cartão de Crédito</option>
          <option>Conta Poupança</option>
        </select>
      </div>
    </div>
    <div class="card bg-base-200 w-64">
      <div class="card-body p-4">
        <h3 class="font-semibold">Vale refeição</h3>
        <p class="text-3xl font-bold">R$ 4.850,75</p>
        <select class="select select-bordered select-sm w-full mb-2 mt-2">
          <option selected>Cartão Principal</option>
          <option>Cartão de Crédito</option>
          <option>Conta Poupança</option>
        </select>
      </div>
    </div>
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
