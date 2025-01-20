<script lang="ts">
  import type { PageData } from './$types';
  let selectedTipoMovimentacao = $state();

  let { data }: { data: PageData } = $props();
</script>

<form action="">
  <div>
    <label for="">Banco</label>
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
  </div>
  <div>
    <label for="">Tipo de operação</label>
    <select bind:value={selectedTipoMovimentacao} class="select w-full max-w-xs">
      <option disabled selected>Tipo movimentação</option>
      <option value="credit">Crédito</option>
      <option value="debito">Débito</option>
      <option value="Pdivida">Pagamento dívida</option>
      <option value="Edivida">Entrada dívida amigo</option>
      <option value="compraParcelada">Compra parcelada</option>
    </select>
  </div>
  {#if selectedTipoMovimentacao == "Edivida"}
    <div>
      <label for="">Nome do amigo</label>
      <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs">
    </div>
  {/if}
  <div>
    <label for="">Data</label>
    <input type="date" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
  </div>
  <div class="">
    <label for="">Valor</label>
    <input type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
  </div>
  <div>
    <label for="">Categoria</label>
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs">
  </div>
  <div>
    <label for="">Forma de pagamento</label>
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs">
  </div>
  <div>
    <label for="">Observações</label>
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs">
  </div>
  <div class="flex justify-end mt-3">
    <button type="submit" class="btn btn-success">Enviar</button>
  </div>
</form>