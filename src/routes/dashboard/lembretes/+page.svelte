<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<form action="?/insert" method="POST" class="max-w-md mx-auto p-6 bg-base-200 rounded-lg shadow-md space-y-4">
    <h2 class="text-xl font-bold text-center">Cadastrar um novo lembrete</h2>
    <div class="form-control">
        <label for="nome">Nome Lembrete</label>
        <input 
                type="text"
        name="nome"
        id="nome"
        class="input input-bordered w-full"
                placeholder="Cobrar Gustavo"
        required
        >
    </div>
    <div class="form-control">
        <label for="valor" class="label">
            <span class="label-text">Valor</span>
        </label>
        <input
           type="number"
           id="valor"
           name="valor"
           class="input input-bordered w-full"
           inputmode="decimal"
           required
        />
    </div>
    <div class="form-control">
        <label for="Tipo" class="label">
            <span class="label-text">Tipo</span>
            <select id="tipo" name="tipo" class="select select-bordered w-full" required>
                <option value="" disabled selected>Selecione</option>
                <option value="entrada">Entrada</option>
                <option value="saida">Saida</option>
            </select>
        </label>
    </div>
</form>