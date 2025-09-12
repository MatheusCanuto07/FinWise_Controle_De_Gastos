<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

{#snippet navItems()}
  <li><a href="#categorias">Categorias</a></li>
  <li><a href="#cadastro">Cadastrar Gastos</a></li>
  <li><a href="#relatorios">Relatórios</a></li>
  <li><a href="#lembretes">Lembretes</a></li>
  <li><a href="/login">Login</a></li>
  <li><a href="/cadastro">Cadastro</a></li>
{/snippet}

<div class="bg-gray-900">
	<!-- Hero Section -->
	<section
		class="hero min-h-screen"
		style="background-image: url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1911&q=80');"
	>
		<div class="hero-overlay bg-gray-900 bg-opacity-70"></div>
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-4xl">
				<h1 class="mb-5 text-5xl font-bold">Controle seus gastos de forma inteligente</h1>
				<p class="mb-5">
					Organize suas finanças, categorize seus gastos e nunca mais perca o controle do seu
					dinheiro.
				</p>
				<button class="btn btn-primary btn-lg">Experimente Grátis</button>
			</div>
		</div>
	</section>

	<!-- Categorias Section -->
	<section id="categorias" class="bg-gray-800 px-8 py-16">
		<div class="container mx-auto">
			<h2 class="mb-12 text-center text-4xl font-bold text-purple-400">Crie suas categorias</h2>
			<p class="mb-12 text-center text-xl">
				Organize seus gastos nas categorias que as pessoas mais utilizam
			</p>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
				<!-- Categoria 1 -->
				<div class="card bg-base-100 shadow-xl">
					<figure class="px-10 pt-10">
						<div class="flex h-16 w-16 items-center justify-center rounded-full bg-red-500">
							<i class="fas fa-utensils text-2xl"></i>
						</div>
					</figure>
					<div class="card-body items-center text-center">
						<h2 class="card-title">Alimentação</h2>
						<p>Restaurantes, supermercado, delivery</p>
					</div>
				</div>

				<!-- Categoria 2 -->
				<div class="card bg-base-100 shadow-xl">
					<figure class="px-10 pt-10">
						<div class="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
							<i class="fas fa-home text-2xl"></i>
						</div>
					</figure>
					<div class="card-body items-center text-center">
						<h2 class="card-title">Moradia</h2>
						<p>Aluguel, condomínio, contas de casa</p>
					</div>
				</div>

				<!-- Categoria 3 -->
				<div class="card bg-base-100 shadow-xl">
					<figure class="px-10 pt-10">
						<div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
							<i class="fas fa-car text-2xl"></i>
						</div>
					</figure>
					<div class="card-body items-center text-center">
						<h2 class="card-title">Transporte</h2>
						<p>Combustível, Uber, táxi, manutenção</p>
					</div>
				</div>

				<!-- Categoria 4 -->
				<div class="card bg-base-100 shadow-xl">
					<figure class="px-10 pt-10">
						<div class="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500">
							<i class="fas fa-shirt text-2xl"></i>
						</div>
					</figure>
					<div class="card-body items-center text-center">
						<h2 class="card-title">Vestuário</h2>
						<p>Roupas, calçados, acessórios</p>
					</div>
				</div>
			</div>

			<div class="mt-12 text-center">
				<button class="btn btn-outline btn-primary">Ver todas as categorias</button>
			</div>
		</div>
	</section>

	<!-- Cadastro Section -->
	<section id="cadastro" class="bg-gray-900 px-8 py-16">
		<div class="container mx-auto">
			<h2 class="mb-12 text-center text-4xl font-bold text-purple-400">
				Comece a cadastrar seus gastos
			</h2>

			<div class="flex flex-col items-center justify-between gap-8 md:flex-row">
				<div class="flex-1">
					<img
						src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
						alt="Cadastro de gastos"
						class="rounded-lg shadow-xl"
					/>
				</div>

				<div class="flex-1">
					<div class="space-y-6">
						<div class="flex items-start">
							<div class="mr-4 rounded-full bg-purple-500 p-3">
								<i class="fas fa-1 text-white"></i>
							</div>
							<div>
								<h3 class="text-xl font-semibold text-primary ">Registro rápido</h3>
								<p class="text-base-100">Cadastre gastos em segundos com nossa interface otimizada</p>
							</div>
						</div>

						<div class="flex items-start">
							<div class="mr-4 rounded-full bg-purple-500 p-3">
								<i class="fas fa-2 text-white"></i>
							</div>
							<div>
								<h3 class="text-xl font-semibold text-primary">Multiplataforma</h3>
								<p class="text-base-100">Acesse de qualquer dispositivo, a qualquer momento</p>
							</div>
						</div>

						<div class="flex items-start">
							<div class="mr-4 rounded-full bg-purple-500 p-3">
								<i class="fas fa-3 text-white"></i>
							</div>
							<div>
								<h3 class="text-xl font-semibold text-primary">Lembretes inteligentes</h3>
								<p class="text-base-100">Receba notificações para não esquecer de registrar</p>
							</div>
						</div>
					</div>

					<div class="mt-8">
						<button class="btn btn-primary w-full">Cadastrar Primeiro Gasto</button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Relatórios Section -->
	<section id="relatorios" class="bg-gray-800 px-8 py-16">
		<div class="container mx-auto">
			<h2 class="mb-12 text-center text-4xl font-bold text-purple-400">Relatórios detalhados</h2>
			<p class="mb-12 text-center text-xl">
				Visualize seus gastos por categoria ou por cartão no final do mês
			</p>

			<div class="flex flex-col items-center gap-8 lg:flex-row">
				<div class="flex-1 rounded-xl bg-base-100 p-6 shadow-xl">
					<h3 class="mb-4 text-2xl font-semibold">Gastos por Categoria</h3>
					<div class="space-y-4">
						<div>
							<div class="mb-1 flex justify-between">
								<span>Alimentação</span>
								<span>R$ 850,00</span>
							</div>
							<progress class="progress progress-error w-full" value="45" max="100"></progress>
						</div>

						<div>
							<div class="mb-1 flex justify-between">
								<span>Transporte</span>
								<span>R$ 420,00</span>
							</div>
							<progress class="progress progress-info w-full" value="22" max="100"></progress>
						</div>

						<div>
							<div class="mb-1 flex justify-between">
								<span>Moradia</span>
								<span>R$ 1200,00</span>
							</div>
							<progress class="progress progress-warning w-full" value="63" max="100"></progress>
						</div>

						<div>
							<div class="mb-1 flex justify-between">
								<span>Lazer</span>
								<span>R$ 300,00</span>
							</div>
							<progress class="progress progress-success w-full" value="16" max="100"></progress>
						</div>
					</div>
				</div>

				<div class="flex-1 rounded-xl bg-base-100 p-6 shadow-xl">
					<h3 class="mb-4 text-2xl font-semibold">Gastos por Cartão</h3>
					<div class="overflow-x-auto">
						<table class="table w-full">
							<thead>
								<tr>
									<th>Cartão</th>
									<th>Valor Gasto</th>
									<th>Limite</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Nubank</td>
									<td>R$ 1.250,00</td>
									<td>R$ 3.000,00</td>
								</tr>
								<tr>
									<td>Itaú</td>
									<td>R$ 890,00</td>
									<td>R$ 5.000,00</td>
								</tr>
								<tr>
									<td>Santander</td>
									<td>R$ 420,00</td>
									<td>R$ 2.500,00</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<div class="mt-12 text-center">
				<button class="btn btn-primary">Gerar Relatório Completo</button>
			</div>
		</div>
	</section>

	<!-- Lembretes Section -->
	<section id="lembretes" class="bg-gray-900 px-8 py-16">
		<div class="container mx-auto">
			<h2 class="mb-12 text-center text-4xl font-bold text-purple-400">Lembretes de transações</h2>

			<div class="flex flex-col items-center gap-8 md:flex-row">
				<div class="flex-1">
					<div class="mockup-phone border-primary">
						<div class="camera"></div>
						<div class="display">
							<div class="artboard artboard-demo phone-1 bg-gray-800 p-4">
								<h3 class="mb-4 text-lg font-semibold">Lembretes Pendentes</h3>

								<div class="space-y-4">
									<div class="rounded-lg bg-gray-700 p-3">
										<div class="flex items-center justify-between">
											<div>
												<p class="font-semibold">Gustavo</p>
												<p class="text-sm">Te deve R$ 80,00</p>
											</div>
											<button class="btn btn-success btn-sm">
												<i class="fas fa-check"></i>
											</button>
										</div>
									</div>

									<div class="rounded-lg bg-gray-700 p-3">
										<div class="flex items-center justify-between">
											<div>
												<p class="font-semibold">Aluguel</p>
												<p class="text-sm">Vence em 5 dias - R$ 1.200,00</p>
											</div>
											<button class="btn btn-success btn-sm">
												<i class="fas fa-check"></i>
											</button>
										</div>
									</div>

									<div class="rounded-lg bg-gray-700 p-3">
										<div class="flex items-center justify-between">
											<div>
												<p class="font-semibold">Conta de Luz</p>
												<p class="text-sm">Vence amanhã - R$ 150,00</p>
											</div>
											<button class="btn btn-success btn-sm">
												<i class="fas fa-check"></i>
											</button>
										</div>
									</div>
								</div>

								<div class="mt-6">
									<button class="btn btn-primary btn-block">
										<i class="fas fa-plus mr-2"></i> Novo Lembrete
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="flex-1 space-y-6">
					<h3 class="text-2xl font-semibold">Transforme lembretes em transações</h3>

					<p>Quando alguém te pagar, transforme o lembrete em uma transação rapidamente.</p>

					<div class="space-y-4">
						<div class="flex items-start">
							<div class="mr-4 mt-1 rounded-full bg-purple-500 p-2">
								<i class="fas fa-check-circle text-white"></i>
							</div>
							<div>
								<h4 class="text-lg font-semibold">Registre valores a receber</h4>
								<p>Crie lembretes para não esquecer de cobrar</p>
							</div>
						</div>

						<div class="flex items-start">
							<div class="mr-4 mt-1 rounded-full bg-purple-500 p-2">
								<i class="fas fa-sync-alt text-white"></i>
							</div>
							<div>
								<h4 class="text-lg font-semibold">Transforme em transação</h4>
								<p>Quando receber, converta com um clique</p>
							</div>
						</div>

						<div class="flex items-start">
							<div class="mr-4 mt-1 rounded-full bg-purple-500 p-2">
								<i class="fas fa-chart-line text-white"></i>
							</div>
							<div>
								<h4 class="text-lg font-semibold">Mantenha o histórico</h4>
								<p>Todos os seus recebimentos organizados</p>
							</div>
						</div>
					</div>

					<button class="btn btn-primary mt-4">Criar Lembrete</button>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="footer footer-center rounded bg-base-200 p-10 text-base-content">
		<div class="grid grid-flow-col gap-4">
			<a href="#categorias" class="link-hover link">Categorias</a>
			<a href="#cadastro" class="link-hover link">Cadastrar Gastos</a>
			<a href="#relatorios" class="link-hover link">Relatórios</a>
			<a href="#lembretes" class="link-hover link">Lembretes</a>
		</div>
		<div>
			<div class="grid grid-flow-col gap-4">
				<a><i class="fab fa-twitter text-2xl"></i></a>
				<a><i class="fab fa-instagram text-2xl"></i></a>
				<a><i class="fab fa-facebook text-2xl"></i></a>
			</div>
		</div>
		<div>
			<p>Copyright © {(new Date()).getFullYear()} - Todos os direitos reservados para Matheus Canuto</p>
		</div>
	</footer>
</div>
