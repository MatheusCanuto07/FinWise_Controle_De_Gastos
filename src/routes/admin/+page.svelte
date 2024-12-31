<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<div>
  <div class="flex justify-around">
    <button>
      Adicionar produto
    </button>
    <button>
      Subir categoria
    </button>
  </div>
</div>