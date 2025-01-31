<script lang="ts">
  import { enhance } from '$app/forms';
  import type { PageData } from './$types';
  
  let defaultDate = $state(new Date().toISOString().split('T')[0]);
  let { data }: { data: PageData } = $props();

</script>

<form method="POST" action="/control/comum?/create"
use:enhance={({
  action,
  cancel,
  controller,
  formData,
  formElement,
  submitter,
}) => {
  const valorText = formData.get("valorText");
  const tipoText = formData.get("tipoText");
  const categoriaText = formData.get("categoriaText");
  const descText = formData.get("descText");
  const dataText = formData.get("dataText");  

  return async () => {
    formElement.reset();
  };
}}>
<div class="mt-2">
  <label for="">Valor</label>
  <input id="valorText" name="valorText" placeholder="R$00,00" class="input input-bordered w-full max-w-xs">
</div>
<div class="mt-2">
  <label for="">Tipo</label>
  <select name="tipoText" id="tipoText" class="select select-bordered w-full max-w-xs">
    <option selected value="saida">Saida</option>
    <option value="entrada">Entrada</option>
  </select>
</div>
<div>
  <label for="">Categoria</label>
  <input name="categoriaText" id="categoriaText" type="text" class="input input-bordered w-full max-w-xs">
</div>
<div>
  <label for="">Descrição</label>
  <input name="descText" id="descText" type="text" class="input input-bordered w-full max-w-xs h-40">
</div>
<div>
  <label for="">Data</label>
  <input bind:value={defaultDate} name="dataText" id="dataText" type="date" class="input input-bordered w-full max-w-xs">
</div>
<div class="w-full flex justify-end mt-3">
  <button class="btn btn-success w-28 ">Enviar</button>
</div>
</form>