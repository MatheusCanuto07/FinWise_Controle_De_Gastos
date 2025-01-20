<script lang="ts">
	import CardHomeDinheiro from '$lib/components/CardHomeDinheiro.svelte';
	import CardMovimentacao from '$lib/components/CardMovimentacao.svelte';
	import Tab from '$lib/components/Tab.svelte';
	import type { Snippet } from 'svelte';
  import type { PageData } from './$types';
  import { page } from '$app/state';

  function isActive(href: string){
    return page.url.pathname.startsWith(href);
  }

  let { data, children }: { data: PageData, children : Snippet } = $props();
</script>

<div>
  <div class="flex justify-center center flex-wrap">
    <h1 class="text-2xl font-bold">R$ 2123,00</h1>
    <h2 class="text-gray-800 opacity-50 w-full text-center">R$ 213,00</h2>
  </div>
  <div class="flex flex-wrap">
    <CardHomeDinheiro />
    <CardHomeDinheiro />
  </div>

  <div role="tablist" class="tabs tabs-bordered">
    <a href="/dashboard/entradas" role="tab" class="tab" class:tab-active={isActive("/dashboard/entradas")}>Entradas</a>
    <a href="/dashboard/saidas" role="tab" class="tab" class:tab-active={isActive("/dashboard/saidas")}>Saidas</a>
  </div>

  {@render children()}
</div>