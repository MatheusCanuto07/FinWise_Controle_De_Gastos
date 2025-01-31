<script lang="ts">
	import CardMovimentacao from '$lib/components/CardMovimentacao.svelte';
  import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

</script>

<div class="mt-3">
  {#each data.transacoesDoUltimoMes as t}
    <h1>Pimba master 2018</h1>
  {/each}

</div>
<pre>
  {JSON.stringify(data, null, 2)}
</pre>
