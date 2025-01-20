<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<form action="post">
  <input type="text" placeholder="R$00,00">
</form>