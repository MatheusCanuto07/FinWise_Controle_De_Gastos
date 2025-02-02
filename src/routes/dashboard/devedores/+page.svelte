<script lang="ts">
	import CardMovimentacao from '$lib/components/CardMovimentacao.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

{#each data.listaDevedores as d}
  <CardMovimentacao 
    banco={d.banco ? d.banco : undefined} 
    formaPagamento={d.formaPagamento} 
    valor={d.valor}
    descricao={d.descricao ? d.descricao : undefined}
    data={d.data}
    imgProp={"devedor"}
    categoria={d.categoria}
  />
{/each}