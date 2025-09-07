// src/hooks.server.ts
import { auth } from '$lib/auth'; // ajuste o caminho se necessário
import { svelteKitHandler } from 'better-auth/svelte-kit';
import { building } from '$app/environment';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	try {
		const session = await auth.api.getSession({
			headers: event.request.headers
		});

		event.locals.session = session?.session || null;
		event.locals.user = session?.user || null;

		const publicRoutes = ['/login', '/cadastro', '/esqueceusenha', '/logout', '/api/auth', '/'];
		const isPublicRoute = publicRoutes.includes(event.url.pathname);

		if (!isPublicRoute && !event.locals.user) {
			throw redirect(303, '/login');
		}

		return svelteKitHandler({ event, resolve, auth, building });
	} catch (err) {
    throw redirect(303, '/login');
		// return svelteKitHandler({ event, resolve, auth, building });
	}
};
