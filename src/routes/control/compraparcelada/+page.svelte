<script lang="ts">
    
</script>

<form action="?/insert" method="POST" class="max-w-md mx-auto p-6 bg-base-200 rounded-lg shadow-md space-y-4">
    <h2 class="text-xl font-bold text-center">Cadastrar uma nova compra parcelada</h2>
    <div class="form-control">
        <label for="parcelas" class="label">
            <span class="label-text">Quantidade de parcelas</span>
        </label>
        <input
              type="number"
              id="parcelas"
              name="parcelas"
              class="input input-bordered w-full"
              required
        />
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
    <button type="submit" class="btn btn-primary w-full mt-4">Cadastrar Transação</button>
</form>