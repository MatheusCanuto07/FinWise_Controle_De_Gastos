<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { PageData, LayoutData } from './$types';
	import { page } from '$app/state';
	import { filters } from './params.svelte';

	let pageActive = $state('transacoes');
	function isActive(href: string) {
		console.log(page.url.pathname, href);
		return page.url.pathname.startsWith(href);
	}

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
	let { cartoesComSaldo } = data;

	filters.update({
		period: 'lastWeek',
    cardId: '0'
	});

	let selectedPeriod = $state('lastWeek');
	// svelte-ignore state_referenced_locally
	let period = $state(selectedPeriod);

	let mudaUrl = () => {
		filters.update({
			period: selectedPeriod
		});
		period = selectedPeriod;
	};

	async function changeCard(id: number, nome : string) {
    selectCard = nome;
    filters.update({
      period: selectedPeriod,
      cardId: id.toString(),
    });
    
	}

  let selectCard = $state('todos')
</script>

<div>
	<div class="flex w-full justify-center gap-4">
		<div class="carousel rounded-box">
			<div class="carousel-item">
				<button 
          onclick={() => {
            changeCard(0, 'todos');
          }} 
          class={`${selectCard == 'todos' ? "border-4 border-indigo-600" : ""} card ml-3 bg-base-200 w-48`}>
					<div class="card-body p-4">
						<h3 class="font-semibold ">Todas as transações</h3>
						<p class="text-3xl font-bold">
							<span class="text-sm font-light">saldo: </span> {(0 / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
						</p>
					</div>
				</button>
			</div>
			{#each cartoesComSaldo as c}
				<div class="carousel-item">
					<button onclick={() => { 
              changeCard(c.id, c.nome); 
            }} 
            class={`${selectCard == c.nome ? "border-4 border-indigo-600" : ""} card ml-3 w-48 bg-base-200`}>
						<div class="card-body p-4">
							<h3 class="font-semibold text-start">{c.nome}</h3>
							<p class="text-3xl font-bold text-start">
								<span class="text-sm font-light">saldo: </span>{(c.saldo / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
							</p>
						</div>
					</button>
				</div>
			{/each}
		</div>
	</div>

	<div role="tablist" class="tabs tabs-bordered">
		<a
			href={'/dashboard/transacoes?' + period}
			role="tab"
			class="tab"
			onclick={() => {
				pageActive = 'transacoes';
			}}
			class:tab-active={pageActive == 'transacoes'}
		>
			Transações
		</a>
		<a
			href={'/dashboard/entradas?' + period}
			role="tab"
			class="tab"
			onclick={() => {
				pageActive = 'entradas';
			}}
			class:tab-active={pageActive == 'entradas'}
		>
			Entradas
		</a>
		<a
			href={'/dashboard/saidas?' + period}
			role="tab"
			class="tab"
			onclick={() => {
				pageActive = 'saidas';
			}}
			class:tab-active={pageActive == 'saidas'}
		>
			Saidas
		</a>
		<a
			href={'/dashboard/lembretes?' + period}
			role="tab"
			class="tab"
			onclick={() => {
				pageActive = 'lembretes';
			}}
			class:tab-active={pageActive == 'lembretes'}
		>
			Lembretes
		</a>
	</div>

	<select
		onchange={mudaUrl}
		class="select select-bordered mb-2 mt-2 w-full"
		bind:value={selectedPeriod}
	>
		<option selected value="lastWeek">Última semana</option>
		<option value="lastMonth">Último mês</option>
		<option value="personalizadPeriod">Período personalizado</option>
	</select>

	{@render children()}
</div>
