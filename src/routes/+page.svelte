<script lang="ts">
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
  
</script>

<!-- Cadastre seus cartões (Crédito, débito, vale refeição, etc)
Crie suas categorias (Coloque as categorias que as pessoas geralmente mais gastam)
Comece a cadastrar seus gastos
Veja relatorios por categoria ou por cartão no final do mês
Crie lembretes de transações (Gustavo me deve R$80,00) quando ele te pagar, transforme esse lembrete em uma transação -->


    <!-- Hero Section -->
    <section class="hero mb-10">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img src="/gifHero.gif" class="max-w-sm rounded-lg shadow-2xl" alt="App FinançasApp" />
            <div>
                <h1 class="text-5xl font-bold">Controle suas finanças de forma simples</h1>
                <p class="py-6">
                  Organize seus gastos, receitas e investimentos em um só lugar. Tome decisões financeiras inteligentes com relatórios detalhados e personalizados.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <button class="btn btn-accent btn-lg">
                      Começar a utilizar
                    </button>
                </div>
            </div>
        </div>
    </section>
    <hr>
    <!-- Cartões Section -->
    <section id="cartoes" class="py-20 px-4 md:px-8 lg:px-16 bg-base-100">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4">Cadastre seus cartões</h2>
            <p class="text-lg opacity-70 max-w-3xl mx-auto">
              Organize todos os seus <span class="font-bold">gastos em um único lugar</span>, cadastre seus cartões de crédito, débito, vale-refeição, alimentação e muito mais.
            </p>
        </div>
        
        <div class="flex flex-col lg:flex-row items-center justify-center gap-10">
            <div class="card w-full lg:w-96 bg-base-200 shadow-xl">
                <figure class="px-10 pt-10">
                    <div class="w-24 h-24 rounded-full bg-primary flex items-center justify-center">
                        <i class="fas fa-credit-card text-4xl text-white"></i>
                    </div>
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Cartões Múltiplos</h2>
                    <p>Adicione todos os seus cartões e acompanhe os gastos de cada um separadamente.</p>
                </div>
            </div>
            
            <div class="card w-full lg:w-96 bg-base-200 shadow-xl">
                <figure class="px-10 pt-10">
                    <div class="w-24 h-24 rounded-full bg-secondary flex items-center justify-center">
                        <i class="fas fa-money-bill-wave text-4xl text-white"></i>
                    </div>
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Vales e Benefícios</h2>
                    <p>Controle seus vales-refeição, alimentação e outros benefícios de forma integrada.</p>
                </div>
            </div>
            
            <div class="card w-full lg:w-96 bg-base-200 shadow-xl">
                <figure class="px-10 pt-10">
                    <div class="w-24 h-24 rounded-full bg-accent flex items-center justify-center">
                        <i class="fas fa-chart-pie text-4xl text-white"></i>
                    </div>
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Análise por Cartão</h2>
                    <p>Veja relatórios detalhados de gastos por cartão e identifique para onde vai seu dinheiro.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Categorias Section -->
    <section id="categorias" class="py-20 px-4 md:px-8 lg:px-16 bg-base-200">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4">Crie suas categorias</h2>
            <p class="text-lg opacity-70 max-w-3xl mx-auto">
              Organize seus gastos com categorias personalizadas ou use nossas sugestões baseadas nos gastos mais comuns.
            </p>
        </div>
        
        <div class="flex flex-wrap justify-center gap-6">
            <div class="stat bg-base-100 rounded-lg shadow">
                <div class="stat-figure text-primary">
                    <i class="fas fa-utensils text-3xl"></i>
                </div>
                <div class="stat-title">Alimentação</div>
                <div class="stat-value text-primary">27%</div>
                <div class="stat-desc">dos gastos mensais</div>
            </div>
            
            <div class="stat bg-base-100 rounded-lg shadow">
                <div class="stat-figure text-secondary">
                    <i class="fas fa-home text-3xl"></i>
                </div>
                <div class="stat-title">Moradia</div>
                <div class="stat-value text-secondary">35%</div>
                <div class="stat-desc">dos gastos mensais</div>
            </div>
            
            <div class="stat bg-base-100 rounded-lg shadow">
                <div class="stat-figure text-accent">
                    <i class="fas fa-car text-3xl"></i>
                </div>
                <div class="stat-title">Transporte</div>
                <div class="stat-value text-accent">15%</div>
                <div class="stat-desc">dos gastos mensais</div>
            </div>
            
            <div class="stat bg-base-100 rounded-lg shadow">
                <div class="stat-figure text-info">
                    <i class="fas fa-shopping-bag text-3xl"></i>
                </div>
                <div class="stat-title">Compras</div>
                <div class="stat-value text-info">12%</div>
                <div class="stat-desc">dos gastos mensais</div>
            </div>
            
            <div class="stat bg-base-100 rounded-lg shadow">
                <div class="stat-figure text-success">
                    <i class="fas fa-heartbeat text-3xl"></i>
                </div>
                <div class="stat-title">Saúde</div>
                <div class="stat-value text-success">8%</div>
                <div class="stat-desc">dos gastos mensais</div>
            </div>
            
            <div class="stat bg-base-100 rounded-lg shadow">
                <div class="stat-figure text-warning">
                    <i class="fas fa-gamepad text-3xl"></i>
                </div>
                <div class="stat-title">Entretenimento</div>
                <div class="stat-value text-warning">5%</div>
                <div class="stat-desc">dos gastos mensais</div>
            </div>
        </div>
        
        <div class="text-center mt-16">
            <button class="btn btn-primary btn-lg">Personalizar Categorias</button>
        </div>
    </section>

    <!-- Gastos Section -->
    <section id="gastos" class="py-20 px-4 md:px-8 lg:px-16 bg-base-100">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4">Comece a cadastrar seus gastos</h2>
            <p class="text-lg opacity-70 max-w-3xl mx-auto">Registre suas despesas de forma rápida e intuitiva, com opções de recorrência e lembretes.</p>
        </div>
        
        <div class="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div class="w-full lg:w-1/2">
                <img src="https://placehold.co/500x400/4a90e2/FFFFFF?text=Interface+de+Registro" alt="Registro de Gastos" class="rounded-lg shadow-2xl">
            </div>
            
            <div class="w-full lg:w-1/2">
                <div class="space-y-6">
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div class="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                                <i class="fas fa-bolt text-xl text-white"></i>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold">Registro Rápido</h3>
                            <p class="opacity-70">Adicione gastos em segundos com nossa interface otimizada.</p>
                        </div>
                    </div>
                    
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div class="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                                <i class="fas fa-camera text-xl text-white"></i>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold">Capture Notas Fiscais</h3>
                            <p class="opacity-70">Guarde comprovantes tirando foto diretamente pelo app.</p>
                        </div>
                    </div>
                    
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div class="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                                <i class="fas fa-sync text-xl text-white"></i>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold">Gastos Recorrentes</h3>
                            <p class="opacity-70">Configure despesas fixas para serem adicionadas automaticamente.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Relatórios Section -->
    <section id="relatorios" class="py-20 px-4 md:px-8 lg:px-16 bg-base-200">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4">Relatórios detalhados</h2>
            <p class="text-lg opacity-70 max-w-3xl mx-auto">Visualize relatórios por categoria ou por cartão no final do mês e entenda melhor seus padrões de gastos.</p>
        </div>
        
        <div class="tabs tabs-boxed justify-center mb-10">
            <a class="tab tab-active">Por Categoria</a> 
            <a class="tab">Por Cartão</a> 
            <a class="tab">Por Período</a>
        </div>
        
        <div class="flex flex-col lg:flex-row gap-10 items-center">
            <div class="w-full lg:w-1/2">
                <img src="https://placehold.co/500x400/4a90e2/FFFFFF?text=Gráficos+e+Relatórios" alt="Relatórios Financeiros" class="rounded-lg shadow-2xl">
            </div>
            
            <div class="w-full lg:w-1/2">
                <div class="overflow-x-auto">
                    <table class="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>Categoria</th>
                                <th>Valor Gasto</th>
                                <th>% do Orçamento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Alimentação</td>
                                <td>R$ 850,00</td>
                                <td>
                                    <div class="flex items-center">
                                        <div class="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                            <div class="bg-primary h-2.5 rounded-full" style="width: 75%"></div>
                                        </div>
                                        75%
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Transporte</td>
                                <td>R$ 320,00</td>
                                <td>
                                    <div class="flex items-center">
                                        <div class="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                            <div class="bg-secondary h-2.5 rounded-full" style="width: 45%"></div>
                                        </div>
                                        45%
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Lazer</td>
                                <td>R$ 210,00</td>
                                <td>
                                    <div class="flex items-center">
                                        <div class="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                            <div class="bg-accent h-2.5 rounded-full" style="width: 30%"></div>
                                        </div>
                                        30%
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Saúde</td>
                                <td>R$ 180,00</td>
                                <td>
                                    <div class="flex items-center">
                                        <div class="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                            <div class="bg-warning h-2.5 rounded-full" style="width: 25%"></div>
                                        </div>
                                        25%
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="mt-8 text-center">
                    <button class="btn btn-outline btn-primary">
                        <i class="fas fa-download mr-2"></i> Exportar Relatório
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Lembretes Section -->
    <section id="lembretes" class="py-20 px-4 md:px-8 lg:px-16 bg-base-100">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4">Lembretes de transações</h2>
            <p class="text-lg opacity-70 max-w-3xl mx-auto">Crie lembretes para recebimentos futuros e transforme-os em transações quando forem pagos.</p>
        </div>
        
        <div class="flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
            <div class="w-full lg:w-1/2">
                <img src="https://placehold.co/500x400/4a90e2/FFFFFF?text=Interface+de+Lembretes" alt="Lembretes Financeiros" class="rounded-lg shadow-2xl">
            </div>
            
            <div class="w-full lg:w-1/2">
                <div class="space-y-6">
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div class="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                                <i class="fas fa-bell text-xl text-white"></i>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold">Lembretes Personalizados</h3>
                            <p class="opacity-70">Crie alertas para recebimentos futuros, como "Gustavo me deve R$80,00".</p>
                        </div>
                    </div>
                    
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div class="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                                <i class="fas fa-exchange-alt text-xl text-white"></i>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold">Conversão em Transação</h3>
                            <p class="opacity-70">Quando receber o pagamento, transforme o lembrete em uma transação rapidamente.</p>
                        </div>
                    </div>
                    
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div class="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                                <i class="fas fa-history text-xl text-white"></i>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold">Histórico de Lembretes</h3>
                            <p class="opacity-70">Acompanhe todos os seus lembretes, tanto os pendentes quanto os já convertidos.</p>
                        </div>
                    </div>
                </div>
                
                <div class="mt-10 p-6 bg-base-200 rounded-lg">
                    <h4 class="text-lg font-semibold mb-4">Exemplo de uso:</h4>
                    <div class="flex items-start gap-3">
                        <div class="badge badge-primary badge-lg p-4">
                            <i class="fas fa-exclamation-circle mr-2"></i> Lembrete
                        </div>
                        <div>
                            <p class="font-medium">Gustavo me deve R$80,00</p>
                            <p class="text-sm opacity-70">Criado em: 15/08/2023 • Vencimento: 30/08/2023</p>
                        </div>
                    </div>
                    <div class="divider">→</div>
                    <div class="flex items-start gap-3">
                        <div class="badge badge-success badge-lg p-4">
                            <i class="fas fa-check-circle mr-2"></i> Recebido
                        </div>
                        <div>
                            <p class="font-medium">Entrada de R$80,00 de Gustavo</p>
                            <p class="text-sm opacity-70">Recebido em: 28/08/2023 • Categoria: Empréstimos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl font-bold mb-6">Comece a controlar suas finanças hoje</h2>
            <p class="text-xl mb-10">Baixe agora o FinançasApp e transforme sua relação com o dinheiro</p>
            
            <div class="flex flex-col sm:flex-row justify-center gap-6">
                <button class="btn btn-accent btn-lg">
                    <i class="fab fa-google-play mr-2"></i> Google Play
                </button>
                <button class="btn btn-light btn-lg">
                    <i class="fab fa-apple mr-2"></i> App Store
                </button>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer p-10 bg-neutral text-neutral-content">
        <div>
            <span class="footer-title">
                <i class="fas fa-wallet mr-2"></i> FinançasApp
            </span> 
            <a class="link link-hover">Sobre nós</a>
            <a class="link link-hover">Contato</a>
            <a class="link link-hover">Blog</a>
            <a class="link link-hover">Carreiras</a>
        </div> 
        <div>
            <span class="footer-title">Produto</span> 
            <a class="link link-hover">Recursos</a>
            <a class="link link-hover">Planos</a>
            <a class="link link-hover">Tutoriais</a>
            <a class="link link-hover">FAQ</a>
        </div> 
        <div>
            <span class="footer-title">Legal</span> 
            <a class="link link-hover">Termos de uso</a>
            <a class="link link-hover">Política de privacidade</a>
            <a class="link link-hover">Política de cookies</a>
        </div>
        <div>
            <span class="footer-title">Newsletter</span> 
            <div class="form-control w-80">
                <label class="label">
                    <span class="label-text text-neutral-content">Inscreva-se para receber nossas novidades</span>
                </label> 
                <div class="relative">
                    <input type="text" placeholder="seu@email.com" class="input input-bordered w-full pr-16 text-neutral" /> 
                    <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Inscrever</button>
                </div>
            </div>
        </div>
    </footer>

    <!-- <script>
        // Script simples para suavizar o scroll ao clicar nos links do menu
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    </script> -->
