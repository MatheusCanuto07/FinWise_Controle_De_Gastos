import { auth } from '$lib/auth';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({request, url}) => {
  const session = await auth.api.getSession({
    headers: request.headers
  });
  
  const publicRoutes = ['/login', '/cadastro', '/esqueceusenha', '/logout', '/api/auth', '/'];
  const isPublicRoute = publicRoutes.includes(url.pathname);

  if (!session && !isPublicRoute) {
    throw redirect(303, '/login');
  }

  const routasNaoPermitidasLogado = ['/login', '/cadastro', '/esqueceusenha']
  const rotaPermitidaLogado = routasNaoPermitidasLogado.includes(url.pathname);
  if(session && rotaPermitidaLogado){
    throw redirect(303, 'dashboard');
  }

  return {};
}) satisfies LayoutServerLoad;