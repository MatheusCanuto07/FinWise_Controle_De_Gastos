<script lang="ts">
  import type { PageData } from './$types';
  import ModalComponent from "$lib/components/ModalComponent.svelte";

  let initWithBalance = $state(false);
  
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
    <div class="flex items-center gap-2">
      <input 
          type="checkbox"
          bind:checked="{initWithBalance}"
          name="initWithBalance"
          id="initWithBalance"
          class="checkbox checkbox-primary"
      >
      <label for="initWithBalance" class="cursor-pointer">Iniciar o lembrete com saldo?</label>
    </div>
  </div>
  {#if initWithBalance}
    <div class="form-control">
      <label for="saldo" class="label">
        <span class="label-text">Saldo</span>
      </label>
      <input 
        type="text" 
        id="saldo" 
        name="saldo"
        class="input input-bordered w-full" 
        required
        readonly
      >
    </div>
  {/if}
  <ul class="bg-base-100 rounded-box shadow-md">
    <li class="pl-2 pt-2 pb-2 text-xs opacity-60 tracking-wide">Transações do lembrete</li>
    <li class="flex justify-between px-3 py-2">
      <div>
        <div>Churrasco - Saida</div>
        <div class="text-xs uppercase font-semibold opacity-60">R$100,00</div>
      </div>
      <div>
        <button class="btn btn-error rounded-sm">
          Apagar
        </button>
      </div>
    </li>
    <li class="flex justify-between px-3 py-2">
      <div>
        <div>Churrasco - Saida</div>
        <div class="text-xs uppercase font-semibold opacity-60">R$100,00</div>
      </div>
      <div>
        <button class="btn btn-error rounded-sm">
          Apagar
        </button>
      </div>
    </li>
    <div class="w-full flex justify-center pb-3">
      <button class="btn btn-success btn-wide">Nova</button>
    </div>
  </ul>
  <button class="btn w-full btn-success" type="submit">Enviar</button>
</form>
<!--{#snippet transactionLembrete()}-->
<!--  <h1>Teste</h1>-->
<!--  </snippet>-->
<!--&lt;!&ndash;<ModalComponent />&ndash;&gt;-->