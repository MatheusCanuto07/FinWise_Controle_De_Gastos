<script lang="ts">
	interface Props {
    data: string;
    banco: string | null;
    tipo: string;
    valor: number;
    categoria: string;
    recorrencia: number | null;
    dataRecorrencia: number | null;
    descricao: string | null;
	}

	const { data, banco, tipo, valor, categoria, recorrencia, dataRecorrencia, descricao }: Props = $props();
</script>

<div class="flex justify-between w-full rounded-lg px-5 py-2 shadow-xl mb-3">
  <div class="flex">
    <div class="w-12 mr-3">
      <img class="rounded-md" src="https://logopng.com.br/logos/nubank-95.png" alt="">
    </div>
    <div>
      <h1>{banco} - 
        ito</h1>
      <h2>R$ 22,90</h2>
    </div>
  </div>
  <div>
    <h1>Lanche padaria</h1>
  </div>
</div>