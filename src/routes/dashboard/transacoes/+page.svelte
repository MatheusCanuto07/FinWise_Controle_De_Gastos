<script lang="ts">
  import type { PageData } from './$types';
  import TransactionItem from "$lib/components/TransactionItem.svelte";
  let { data }: { data: PageData} = $props();
  let {transacoes} = data;
  function toggleDataValue(dTAnt : number) {
    dataTransacaoAnterior = dTAnt
  }
  let dataTransacaoAnterior : number;
</script>

<div class="space-y-3">
  {#each transacoes as t (t.id)}
    {#if dataTransacaoAnterior !== t.data}
      <div class="divider">{Intl.DateTimeFormat('pt-BR').format(t.data)}</div>
    {/if}
    {toggleDataValue(t.data)}
    <TransactionItem
            tipo={t.tipo}
            data="{t.data}"
            desc="{t.desc}"
            meio="{t.meio}"
            recorrencia="{t.recorrencia}"
            valor="{t.valor}"
    />
  {:else}
    <div class="text-center py-8 text-gray-500">
      Nenhuma transação encontrada
    </div>
  {/each}
</div>