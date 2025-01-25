<script lang="ts">
  import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
  let saldoAtual = data.saldoAtual[0];
</script>

<pre>
  {JSON.stringify(saldoAtual, null, 2)}
</pre>
