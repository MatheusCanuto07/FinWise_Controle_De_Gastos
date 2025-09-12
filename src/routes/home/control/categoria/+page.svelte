<script lang="ts">
  import type { PageData, ActionData } from './$types';
  let { data, form }: { data: PageData, form: ActionData } = $props();
  let categorias = data.categorias;
</script>

<form method="POST" action="?/insert" class="max-w-md mx-auto p-6 bg-base-200 rounded-lg shadow-md space-y-4">
  <h1 class="text-xl font-semibold text-center">Cadastrar nova categoria</h1>
  <div class="form-control w-full">
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
  </div>
  <button class="btn w-full btn-success" type="submit">Enviar</button>
  <div>
    <h2>Categorias cadastradas:</h2>
    {#each categorias as c}
      <p>{c.nome}</p>
    {/each}
  </div>
  
</form>