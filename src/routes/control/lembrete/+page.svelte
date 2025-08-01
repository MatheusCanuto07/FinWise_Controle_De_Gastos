<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>
<form method="POST" action="?/insert" class="max-w-md mx-auto p-6 bg-base-200 rounded-lg shadow-md space-y-4">
  <h1 class="text-xl font-semibold text-center">Cadastrar um novo lembrete</h1>
  <div class="form-control">
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

  <div class="form-control">
    <label for="pessoa" class="label">
      <span class="label-text">Pessoa</span>
    </label>
    <input 
      type="text" 
      id="pessoa" 
      name="pessoa"
      class="input input-bordered w-full" 
      required
    >
  </div>

  <div class="form-control">
    <label for="valor" class="label">
      <span class="label-text">Valor</span>
    </label>
    <input 
      type="text" 
      id="valor" 
      name="valor"
      class="input input-bordered w-full" 
      required
    >
  </div>
  <button class="btn w-full btn-success" type="submit">Enviar</button>
</form>