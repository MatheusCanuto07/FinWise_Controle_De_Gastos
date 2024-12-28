<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { draggable, droppable, type DragDropState } from '@thisux/sveltednd';

  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
	interface Item {
		id: string;
		name: string;
	}

	let container1 = $state<Item[]>([
		{ id: 'a', name: 'A' },
		{ id: 'b', name: 'B' }
	]);

	let container2 = $state<Item[]>([
		{ id: 'c', name: 'C' },
		{ id: 'd', name: 'D' }
	]);

	function handleDrop(state: DragDropState<Item>) {
		const { sourceContainer, targetContainer, draggedItem } = state;

		if (sourceContainer === 'container1') {
			container1 = container1.filter((i) => i.id !== draggedItem.id);
			container2 = [...container2, draggedItem];
		} else {
      // Vai deixar todos os itens passar, menos o que vc não quer
			container2 = container2.filter((i) => i.id !== draggedItem.id);
      // Container um tem todos os elementos, menos o que vc não quer
			container1 = [...container1, draggedItem];
		}
	}

  console.log(data.products);
  console.log(data.teste);
</script>

<div class="flex flex-wrap">
	<div 
  class="w-4/12 bg-slate-200 flex flex-wrap gap-5 "
  use:droppable={{ container: 'container1', callbacks: { onDrop: handleDrop} }}>
		{#each container1 as item}
      <div 
      class="ml-10"
      use:draggable={{ container: 'container1', dragData: item }}>
        <Card title={item.id} description={item.name}/>
      </div>
		{/each}
	</div>

	<div 
  class="w-8/12 bg-slate-500 flex gap-5 h-svh py-5"
  use:droppable={{ container: 'container2', callbacks: { onDrop: handleDrop } }}>
  <div class="mockup-phone h-full w-1/3">
    <div class="camera"></div>
    <div class="display pt-8">
      <h1>Destaques</h1>
      <div class="flex gap-4">
        {#each container2 as item}
          <div 
          class="first:ml-4"
          use:draggable={{ container: 'container2', dragData: item }}>
            <Card title={item.id} description={item.name}/> 
          </div>
        {/each}
      </div>
    </div>
  </div>
	</div>
</div>