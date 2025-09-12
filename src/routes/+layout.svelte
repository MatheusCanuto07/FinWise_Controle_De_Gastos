<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
  import { Menu } from 'lucide-svelte';
	import '../app.css';
	let { children } = $props();
	import { authClient } from '$lib/auth-client';
	// retorna uma store (não o valor diretamente)
	const session = authClient.useSession();
	let userName = $state($session.data?.user.name);
</script>

{#if !$session.data?.user.name}
	<Nav />
	{@render children()}
{:else}
	<div class="drawer">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content">
			<div class="flex w-full justify-between bg-slate-400 py-3 pl-3">
				<label for="my-drawer" class="btn btn-primary drawer-button"><Menu /></label>
				<div class="self-center mr-5">
					{userName}
					<a class="link" href="/logout">Sair</a>
				</div>
			</div>

			{@render children()}
		</div>
		<div class="drawer-side">
			<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
			<ul class="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
        <h1 class="text-2xl">FinWise</h1>
				<li>
					<details open>
						<summary>Transações</summary>
						<ul>
							<li><a href="/dashboard">Listar Todas</a></li>
							<li><a href="/control">Cadastrar Nova</a></li>
							<li><a>Importar</a></li>
						</ul>
					</details>
				</li>
        <li>
          <a href="/lembretes">Lembretes</a>
        </li>
				<li>
					<details>
						<summary>Categorias</summary>
						<ul>
							<li><a>Visualizar</a></li>
							<li><a>Gerenciar</a></li>
						</ul>
					</details>
				</li>

				<!-- Seção de Relatórios -->
				<li>
					<details>
						<summary>Relatórios</summary>
						<ul>
							<li><a>Resumo Mensal</a></li>
							<li><a>Por Categoria</a></li>
							<li><a>Fluxo de Caixa</a></li>
						</ul>
					</details>
				</li>

				<!-- Seção de Administração -->
				<li>
					<details>
						<summary>Administração</summary>
						<ul>
							<li><a>Usuários</a></li>
							<li><a>Configurações</a></li>
						</ul>
					</details>
				</li>

				<!-- Divisor -->
				<div class="divider my-2"></div>

				<!-- Ações secundárias -->
				<li><a>Perfil</a></li>
				<li><a>Ajuda</a></li>
				<li><a>Sair</a></li>
			</ul>
		</div>
	</div>
{/if}
