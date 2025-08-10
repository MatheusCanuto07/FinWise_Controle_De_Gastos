<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { PageData, LayoutData } from './$types';
    import { page } from '$app/state';
    import {filters} from './params.svelte';
    
    let pageActive = $state("transacoes");
    function isActive(href: string) {
        console.log(page.url.pathname, href);
        return page.url.pathname.startsWith(href);
    }
    
    let { data, children }: { data: LayoutData; children: Snippet } = $props();
    let {cartoesComSaldo} = data;
    
    filters.update({
      period : "lastWeek"
    })

    let selectedPeriod = $state('lastWeek');
    let period = $state(selectedPeriod);
    
    let mudaUrl = (() => {
      filters.update({
        period: selectedPeriod
      })
      period = selectedPeriod;
    })
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
	 href={"/dashboard/transacoes?" + period} 
	 role="tab"
	 class="tab"
     onclick={() => {
        pageActive = 'transacoes';
     }}
	 class:tab-active={pageActive == 'transacoes'}>
      Transações
    </a>
    <a
        href={"/dashboard/entradas?" + period}
        role="tab"
        class="tab"
        onclick={() => {
          pageActive = 'entradas';
        }}
        class:tab-active={pageActive == 'entradas'}>
      Entradas
    </a>
    <a
      href={"/dashboard/saidas?" + period} 
      role="tab"
      class="tab"
      onclick={() => {
        pageActive = 'saidas';
      }}
      class:tab-active={pageActive == 'saidas'}>
      Saidas
    </a>
    <a 
      href={"/dashboard/lembretes?" + period}
      role="tab"
      class="tab"
      onclick={() => {
        pageActive = 'lembretes';
      }}
      class:tab-active={pageActive == 'lembretes'}>
      Lembretes
    </a>
	</div>

    <select onchange={mudaUrl} class="select select-bordered w-full mt-2 mb-2" bind:value={selectedPeriod}>
        <option selected value="lastWeek">Última semana</option>
        <option value="lastMonth">Último mês</option>
        <option value="personalizadPeriod">Período personalizado</option>
    </select>
    
    {@render children()}
</div>
