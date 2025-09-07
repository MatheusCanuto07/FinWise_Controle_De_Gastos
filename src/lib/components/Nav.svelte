<script lang="ts">
  interface Props {
		userName: string | undefined;
	}

	let { userName }: Props = $props();
</script>

<div class="navbar bg-base-300">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="/dashboard">Controle de finanças</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      {#if userName}
        <li><a href="/control">Control</a></li>
        <li><a href="/profile">Olá, {userName}</a></li>
        <li><a href="/logout">Sair</a></li>
        {:else}
          <li><a href="/login">Login</a></li>
          <li><a href="/cadastro">Cadastro</a></li>
      {/if}
    </ul>
  </div>
</div>