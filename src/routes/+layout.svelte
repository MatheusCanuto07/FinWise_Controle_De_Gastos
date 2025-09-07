<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import '../app.css';
  let { children } = $props();
  import { authClient } from "$lib/auth-client"; 
  // retorna uma store (não o valor diretamente)
  const session = authClient.useSession(); 
</script>

<Nav userName={$session.data?.user.name}/>

{@render children()}

