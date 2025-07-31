<script lang="ts">
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
  
</script>

<form class="max-w-md mx-auto p-6 bg-base-200 rounded-lg shadow-md space-y-4">
  <h1 class="text-xl font-semibold text-center">Cadastrar um novo cartão</h1>
  <div class="form-control w-full">
    <div class="form-control">
      <label for="cartao" class="label">
        <span class="label-text">Cartão</span>
      </label>
      <input 
        type="text" 
        id="cartao" 
        name="cartao" 
        class="input input-bordered w-full" 
        required
      >
    </div>
  </div>
  <button class="btn w-full btn-success" type="submit">Enviar</button>
</form>
