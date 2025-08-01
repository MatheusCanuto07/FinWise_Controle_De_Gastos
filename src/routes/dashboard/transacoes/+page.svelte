<script lang="ts">
  import type { PageData } from './$types';
  let { data }: { data: PageData} = $props(); 
  let {transactions} = data;
</script>

<div class="space-y-3">
  {#each transactions as t (t.id)}
    <div class="flex justify-between items-center p-3 bg-base-100 rounded-lg shadow-sm hover:bg-base-200 transition-colors">
      <div class="flex items-center gap-3">
        {#if t.tipo === 'receita'}
          <div class="text-green-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
        {:else}
          <div class="text-red-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        {/if}
        <div>
          <p class="font-medium">{t.meio}</p>
          <p class="text-sm text-gray-500">{new Date(t.data).toLocaleDateString()}</p>
          {#if t.recorrencia !== 'nenhuma'}
            <span class="badge badge-xs">{t.recorrencia}</span>
          {/if}
        </div>
      </div>
      <div class="text-right">
        <p class:font-bold={t.tipo === 'receita'} class:text-green-500={t.tipo === 'receita'} class:text-red-500={t.tipo === 'despesa'}>
          {t.tipo === 'receita' ? '+' : '-'} {t.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
      </div>
    </div>
  {:else}
    <div class="text-center py-8 text-gray-500">
      Nenhuma transação encontrada
    </div>
  {/each}
</div>