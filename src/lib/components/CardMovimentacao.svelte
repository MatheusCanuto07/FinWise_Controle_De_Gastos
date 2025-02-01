<script lang="ts">
	import ModalComponent from "./ModalComponent.svelte";

	interface Props {
    data: string ;
    banco?: string;
    tipo?: string;
    valor?: number;
    categoria?: string;
    recorrencia?: number;
    dataRecorrencia?: number;
    descricao?: string;
    formaPagamento? : string
	}

  function timeStampForDate(ts : Date){
    const dia = ts.getUTCDate();
    const mes = ts.getMonth() + 1;
    const ano = ts.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  // svelte-ignore non_reactive_update
  let dialog;

	const { data, banco, tipo, valor, categoria, recorrencia, dataRecorrencia, descricao, formaPagamento }: Props = $props();
</script>

<ModalComponent bind:this={dialog}>
  {#snippet children()}
    <h1>Descrição: {descricao}</h1>
  {/snippet}
</ModalComponent>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div onclick={dialog.abrirModal} class="flex justify-between w-full rounded-lg px-5 py-2 shadow-xl mb-3">
  <div class="flex">
    <div class="w-12 mr-3">
      <img class="rounded-md" src="https://logopng.com.br/logos/nubank-95.png" alt="">
    </div>
    <div>
      <h1>{banco} - {formaPagamento}</h1>
      <h2>{valor}</h2>
    </div>
  </div>
  <div>
    <h1>{categoria}</h1>
    <h1>{timeStampForDate(new Date(parseInt(data)))}</h1>
  </div>
</div>

