<script lang="ts">
	import { draggable } from "@thisux/sveltednd";

  interface Props{
    title: string,
    description: string,
  }

  let {title, description, item} : Props = $props();  
</script>

<div 
class="rounded-md w-32 bg-slate-200 shadow-lg">
  <img class="rounded-t-md" src="hamburger.png" alt="Hamburguer">
  <div class="p-3">
    <h1 class="text-2xl">{title}</h1>
    <p>{description}</p>
  </div>
</div>