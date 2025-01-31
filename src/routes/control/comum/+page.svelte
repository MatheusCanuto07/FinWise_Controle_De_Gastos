<script lang="ts">
  import { enhance } from '$app/forms';
  import type { PageData } from './$types';
  
  let defaultDate = $state(new Date().toISOString().split('T')[0]);
  let form : HTMLFormElement | undefined = $state(undefined)

  let { data }: { data: PageData } = $props();

</script>

<form bind:this={form} method="POST" action="/control/comum?/create"
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

  <label class="form-control w-full">
    <div class="label">
      <span class="label-text">Valor</span>
    </div>
    <input type="text" placeholder="R$00,00" class="input input-bordered w-full" name="valorText" id="valorText"/>
  </label>

  <label class="form-control w-full">
    <div class="label">
      <span class="label-text">Tipo</span>
    </div>
    <select name="tipoText" id="tipoText" class="select select-bordered w-full">
      <option selected value="saida">Saida</option>
      <option value="entrada">Entrada</option>
    </select>
  </label>

  <label class="form-control w-full">
    <div class="label">
      <span class="label-text">Categoria</span>
    </div>
    <input name="categoriaText" id="categoriaText" type="text" class="input input-bordered w-full">
  </label>
    
  <label class="form-control w-full">
    <div class="label">
      <span class="label-text">Descrição</span>
    </div>
    <input name="descText" id="descText" type="text" class="input input-bordered w-full h-40">
  </label>

  <label class="form-control w-full">
    <div class="label">
      <span class="label-text">Data</span>
    </div>
    <input bind:value={defaultDate} name="dataText" id="dataText" type="date" class="input input-bordered w-full">
  </label>

  <div class="w-full flex justify-end mt-3">
    <button onclick={() => form?.reset()} class="btn btn-warning w-28 mr-2">Limpar</button>
    <a class="btn btn-primary" href="intent://#Intent;package=com.samsung.android.spay;end;">Abrir App</a>
    <button class="btn btn-success w-28 ">Enviar</button>
  </div>

</form>