<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { PageData, LayoutData } from './$types';
    import { page } from '$app/state';
    import SelectPeriod from '$lib/components/SelectPeriod.svelte';
    
    function isActive(href: string) {
        return page.url.pathname.startsWith(href);
    }
    
    let { data, children }: { data: LayoutData; children: Snippet } = $props();
    let {cartoesComSaldo} = data;
</script>

<div>
  <div class="w-full flex justify-center gap-4">
      <div class="carousel rounded-box">
          <div class="carousel-item">
              <div class="card bg-base-200 w-64 ml-3">
                  <div class="card-body p-4">
                      <h3 class="font-semibold">Saldo Total Disponível</h3>
                      <p class="text-3xl font-bold">{(0 / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                  </div>
              </div>
          </div>
          {#each cartoesComSaldo as c}
              <div class="carousel-item">
                  <div class="card bg-base-200 w-64 ml-3">
                      <div class="card-body p-4">
                          <h3 class="font-semibold">{c.nome}</h3>
                          <p class="text-3xl font-bold">{(c.saldo / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                      </div>
                  </div>
              </div>
            {/each}
      </div>
  </div>

	<div role="tablist" class="tabs tabs-bordered">
		<a
			href="/dashboard/transacoes"
			role="tab"
			class="tab"
			class:tab-active={isActive('/dashboard/transacoes')}>
      Transações
    </a>
    <a
			href="/dashboard/entradas"
			role="tab"
			class="tab"
			class:tab-active={isActive('/dashboard/entradas')}>
      Entradas
    </a>
		<a
			href="/dashboard/saidas"
			role="tab"
			class="tab"
			class:tab-active={isActive('/dashboard/saidas')}>
      Saidas
    </a>
    <a 
      href="/dashboard/lembretes"
      role="tab"
      class="tab"
      class:tab-active={isActive('/dashboard/lembretes')}>
      Lembretes
    </a>
	</div>

  <SelectPeriod />
  
	{@render children()}
</div>
