<script lang="ts">
	import CardMovimentacao from '$lib/components/CardMovimentacao.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="mt-3">
	{#each data.transacoesDoUltimoMes as t}
		<CardMovimentacao 
      banco={t.banco ? t.banco : undefined} 
      formaPagamento={t.formaPagamento} 
      valor={t.valor}
      descricao={t.descricao ? t.descricao : undefined}
      data={t.data}
    />
	{/each}
</div>


