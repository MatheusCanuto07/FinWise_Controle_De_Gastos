<script lang="ts">
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
  
</script>

<form class="max-w-md mx-auto p-6 bg-base-200 rounded-lg shadow-md space-y-4">
  <h2 class="text-xl font-bold text-center">Cadastrar uma nova transação</h2>

  <div class="form-control">
    <label for="valor" class="label">
      <span class="label-text">Valor</span>
    </label>
    <input 
      type="number" 
      id="valor" 
      name="valor" 
      class="input input-bordered w-full" 
      required
    >
  </div>

  <div class="form-control">
    <label for="data" class="label">
      <span class="label-text">Data</span>
    </label>
    <input 
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
      <option value="1">Alimentação</option>
      <option value="2">Transporte</option>
    </select>
  </div>

  <div class="form-control">
    <label for="idCartao" class="label">
      <span class="label-text">Cartão</span>
    </label>
    <select id="idCartao" name="idCartao" class="select select-bordered w-full" required>
      <option value="" disabled selected>Selecione</option>
      <option value="1">Cartão Principal</option>
      <option value="2">Cartão Crédito</option>
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
    <label for="tipo" class="label">
      <span class="label-text">Tipo</span>
    </label>
    <select id="tipo" name="tipo" class="select select-bordered w-full" required>
      <option value="" disabled selected>Selecione</option>
      <option value="entrada">Entrada</option>
      <option value="saida">Saída</option>
    </select>
  </div>

  <div class="form-control">
    <label for="recorrencia" class="label">
      <span class="label-text">Recorrência</span>
    </label>
    <div class="flex items-center gap-2">
      <input 
        type="checkbox" 
        id="recorrencia" 
        name="recorrencia" 
        class="checkbox checkbox-primary"
      >
      <label for="recorrencia" class="cursor-pointer">Esta transação é recorrente?</label>
    </div>
  </div>

  <button type="submit" class="btn btn-primary w-full mt-4">Cadastrar Transação</button>
</form>
