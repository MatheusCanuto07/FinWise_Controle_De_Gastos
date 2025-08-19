<script lang="ts">
	import TransactionItem from '$lib/components/TransactionItem.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let {transacoes} = data;
</script>

<div class="mt-3">
	{#each transacoes as t}
		<TransactionItem 
      id={t.id}
			tipo={t.tipo}
			data={t.data}
			desc={t.desc}
			meio={t.meio}
			recorrencia={t.recorrencia}
			valor={t.valor}
		/>
	{/each}
</div>


