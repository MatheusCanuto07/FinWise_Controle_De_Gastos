<script lang="ts">
	interface Props {
		tabContent: {
			title: string;
			content: string;
			checked: boolean;
		}[];
	}

	const { tabContent }: Props = $props();
</script>

<div role="tablist" class="tabs tabs-bordered grid-cols-2 mt-3">
	{#each tabContent as t, index}
		<input
			checked={t.checked ? 'checked' : ''}
			type="radio"
			name={'my_tabs_1'}
			role="tab"
			class="tab text-lg font-semibold"
			aria-label={t.title}
		/>
		<div role="tabpanel" class="tab-content p-10">{t.content}</div>
	{/each}
	<!-- <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 1" />
  <div role="tabpanel" class="tab-content p-10">Tab content 1</div>

  <input
    type="radio"
    name="my_tabs_1"
    role="tab"
    class="tab"
    aria-label="Tab 2"
    checked="checked" />
  <div role="tabpanel" class="tab-content p-10">Tab content 2</div>

  <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 3" />
  <div role="tabpanel" class="tab-content p-10">Tab content 3</div> -->
</div>
