<script lang="ts">
  import type { PageData } from './$types';
  import { getTipoCartao } from '$lib/utils/functions';
  let { data }: { data: PageData } = $props();
  // let categorias = data.categorias;
  // let cartoes = data.cartoes;
   
  function validaValor(){
    const moneyRegex = /^\d+(?:[.,]\d{0,2})?$/;
    if (!moneyRegex.test(valor)) {
      valor = valor.slice(0, -1);
    }
  }
  
  var agora = new Date();
  var mes = ("0" + (agora.getMonth() + 1)).slice(-2);
  var dia = ("0" + agora.getDate()).slice(-2);
  var dataHoje = agora.getFullYear()+"-"+(mes)+"-"+(dia);
  let valor = $state("0");
  let date = $state(dataHoje);
  let recorrencia = $state(false);
  let tipoRecorrencia = $state("");
  let quantRecorrencia = $state(0);
  let tipo = $state();
  let selectedCartao = $state();
</script>

<form action="?/insert" method="POST" class="max-w-md mx-auto p-6 bg-base-200 rounded-lg shadow-md space-y-4">
  <h2 class="text-xl font-bold text-center">Cadastrar uma nova transação</h2>
  <div class="form-control">
    <label for="valor" class="label">
      <span class="label-text">Valor</span>
    </label>
    <input
      value={valor}
      oninput={validaValor}
      type="number"
      id="valor"
      name="valor"
      class="input input-bordered w-full"
      inputmode="decimal"
      required
    />
  </div>

  <div class="form-control">
    <label for="data" class="label">
      <span class="label-text">Data</span>
    </label>
    <input 
      value={date}
      type="date" 
      id="data" 
      name="data" 
      class="input input-bordered w-full" 
      required
    >
  </div>

  <div class="form-control">
    <label for="idCategoria" class="label">
      <span class="label-text">Categoria</span>
    </label>
    <input type="hidden" name="tipo" value={tipo}>
    <select id="idCategoria" name="idCategoria" class="select select-bordered w-full" required>
      <option value="" disabled selected>Selecione</option>
      <!--{#each categorias as c}-->
      <!--   <option value="{c.id}">{c.nome}</option>-->
      <!--{/each}-->
    </select>
  </div>

  <div class="form-control">
    <label for="idCartao" class="label">
      <span class="label-text">Cartão</span>
    </label>
    <select 
      bind:value={selectedCartao}
      id="idCartao"
      name="idCartao"
      class="select select-bordered w-full"
      required>
      <option value="" disabled selected>Selecione</option>
      <!--{#each cartoes as c}-->
      <!--  <option value="{c.id}">{c.nome + " - " + getTipoCartao(c.tipo)}</option>-->
      <!--{/each}-->
    </select>
  </div>

  <div class="form-control">
    <div class="flex items-center gap-2">
      <input 
        bind:checked={recorrencia}
        value={recorrencia}
        type="checkbox" 
        id="recorrencia" 
        name="recorrencia" 
        class="checkbox checkbox-primary">
      <label for="recorrencia" class="cursor-pointer">Esta transação é recorrente?</label>
    </div>
  </div>
  {#if recorrencia}
    <div class="form-control">
      <label for="tipoRecorrencia" class="label">
        <span class="label-text">Tipo de recorrencia</span>
      </label>
      <div class="flex items-center gap-2">
        <select bind:value={tipoRecorrencia} id="tipoRecorrencia" name="tipoRecorrencia" class="select select-bordered w-full" required>
          <option value="" disabled selected>Selecione</option>
          <option value="dUteis">Dias úteis</option>
          <option value="diaria">Diária</option>
          <option value="semanal">Semanal</option>
          <option value="mensal">Mensal</option>
          <option value="anual">Anual</option>
        </select>
      </div>
    </div>
    <div class="form-control">
      <label for="quantOcorrencia" class="label">
        <span class="label-text">Quantas vezes essa transação vai acontecer</span>
      </label>
      <div class="flex items-center gap-2">
        <input
          type="number"
          id="quantOcorrencia"
          name="quantOcorrencia"
          class="input input-bordered w-full"
          bind:value={quantRecorrencia}>
      </div>
    </div>
    {#if tipoRecorrencia == "dUteis"}
      <p>Vão ser criadas {quantRecorrencia} transacoes em dias úteis</p>
    {/if}
    {#if tipoRecorrencia == "diaria"}
      <p>Vão ser criadas {quantRecorrencia} transações em dias corridos contando hoje</p>
    {/if}
    {#if tipoRecorrencia == "semanal"}
      <label for="diaOcorrenciaSemanal">Selecione o dia da semana</label>
      <select name="diaOcorrenciaSemanal" id="diaOcorrenciaSemanal" class="select select-bordered w-full" required>
        <option value="" disabled selected>Selecione</option>
        <option value="domingo">Domingo</option>
        <option value="segunda">Segunda-feira</option>
        <option value="terca">Terça-feira</option>
        <option value="quarta">Quarta-feira</option>
        <option value="quinta">Quinta-feira</option>
        <option value="sexta">Sexta-feira</option>
        <option value="sabado">Sabado</option>
      </select>
    {/if}
    {#if tipoRecorrencia == "mensal"}
      <label for="diaOcorrenciaMes">Selecione o dia do mês</label>
<!--      todo: Tratar esse limite de data no back-end-->
      <input type="number" name="diaOcorrenciaMes" id="diaOcorrenciaMes" placeholder="Selecione o dia mes" min="0" max="31"/>
    {/if}
    {#if tipoRecorrencia == "anual"}
      <label for="diaOcorrenciaAno">Selecione o dia do ano</label>
      <input type="date" name="diaOcorrenciaAno" id="diaOcorrenciaAno" placeholder="Selecione o dia do ano" />
    {/if}
  {/if}
  <button type="submit" class="btn btn-primary w-full mt-4">Cadastrar Transação</button>
</form>
