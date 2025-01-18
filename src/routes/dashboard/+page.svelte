<script lang="ts">
	import CardHomeDinheiro from '$lib/components/CardHomeDinheiro.svelte';
	import CardMovimentacao from '$lib/components/CardMovimentacao.svelte';
	import Tab from '$lib/components/Tab.svelte';
  import type { PageData } from './$types';

  const tabContent = [
    {
      title : "Entradas",
      content : "Entradas",
      checked : true
    },
    {
      title : "Saídas",
      content : "Saídas",
      checked : false
    },
  ]

  let { data }: { data: PageData } = $props();
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
  <Tab {tabContent}/>
  <CardMovimentacao />
</div>