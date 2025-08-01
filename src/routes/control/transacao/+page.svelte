<script lang="ts">
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
  let categorias = data.categorias;
  let cartoes = data.cartoes;
  
  
  
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
</script>

<form action="?/insert" class="max-w-md mx-auto p-6 bg-base-200 rounded-lg shadow-md space-y-4">
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
    <select id="idCategoria" name="idCategoria" class="select select-bordered w-full" required>
      <option value="" disabled selected>Selecione</option>
      {#each categorias as c}
         <option value="{c.id}">{c.nome}</option>
      {/each}
    </select>
  </div>

  <div class="form-control">
    <label for="idCartao" class="label">
      <span class="label-text">Cartão</span>
    </label>
    <select id="idCartao" name="idCartao" class="select select-bordered w-full" required>
      <option value="" disabled selected>Selecione</option>
      {#each cartoes as c}
        <option value="{c.id}">{c.nome + " - " + c.tipo}</option>
      {/each}
    </select>
  </div>

  <div class="form-control">
    <label for="meio" class="label">
      <span class="label-text">Meio de Pagamento</span>
    </label>
    <select id="meio" name="meio" class="select select-bordered w-full" required>
      <option value="" disabled selected>Selecione</option>
      <option value="credito">Crédito</option>
      <option value="debito">Débito</option>
    </select>
  </div>

  <div class="form-control">
    <label for="recorrencia" class="label">
      <span class="label-text">Recorrência</span>
    </label>
    <div class="flex items-center gap-2">
      <input 
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
      <label for="tempoRecorrencia" class="label">
        <span class="label-text">Quantas vezes essa transação vai acontecer</span>
      </label>
      <div class="flex items-center gap-2">
        <input 
          type="number" 
          id="tempoRecorrencia" 
          name="tempoRecorrencia" 
          class="input input-bordered w-full">
      </div>
    </div>

    <div class="form-control">
      <label for="tipoRecorrencia" class="label">
        <span class="label-text">Tipo de recorrencia</span>
      </label>
      <div class="flex items-center gap-2">
        <select id="tipoRecorrencia" name="tipoRecorrencia" class="select select-bordered w-full" required>
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
      <label for="diaOcorrencia" class="label">
        <span class="label-text">Dia da ocorrência</span>
      </label>
      <div class="flex items-center gap-2">
        <input 
          type="number" 
          id="diaOcorrencia" 
          name="diaOcorrencia" 
          class="input input-bordered w-full">
      </div>
    </div>
  {/if}
  <button type="submit" class="btn btn-primary w-full mt-4">Cadastrar Transação</button>
</form>
