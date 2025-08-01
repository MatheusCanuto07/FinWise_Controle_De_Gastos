<script lang="ts">
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
  let cartoes = data.cartoes
</script>

<form method="POST" action="?/insert" class="max-w-md mx-auto p-6 bg-base-200 rounded-lg shadow-md space-y-4">
  <h1 class="text-xl font-semibold text-center">Cadastrar um novo cartão</h1>
  <div class="form-control w-full">
    <label for="nome" class="label">
      <span class="label-text">Nome</span>
    </label>
    <input 
      type="text" 
      id="nome" 
      name="nome" 
      class="input input-bordered w-full" 
      required
    >
  </div>
  <div class="form-control w-full">
    <label for="tipo" class="label">
      <span class="label-text">Tipo</span>
    </label>
    <select id="tipo" name="tipo" class="select select-bordered w-full" required>
      <option value="0" selected>(Nenhum)</option>
      <option value="1">Crédito</option>
      <option value="2">Débito</option>
      <option value="3">Vale Refeição</option>
      <option value="4">Loja de roupa</option>
    </select>
  </div>
  <div class="form-control w-full">
    <label for="diaVencimento" class="label">
      <span class="label-text">Dia vencimento</span>
    </label>
    <input 
      type="number"
      id="diaVencimento"
      name="diaVencimento"
      class="input input-bordered w-full"
      required
      >
  </div>
  <button class="btn w-full btn-success" type="submit">Enviar</button>
  <div>
    <h3>Cartões cadastrados:</h3>
    {#each cartoes as c}
      <p>{c.nome}</p>
    {/each}
  </div>
</form>
