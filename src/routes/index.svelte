<script>
	import inferno01ru from '$lib/data/inferno-01-ru.json';
</script>

<svelte:head><title>Dante - Divinia Comedia</title></svelte:head>

<h1 class="font-extrabold text-3xl mb-10">Книга 1: Ад</h1>

<h2 class="font-bold text-2xl mb-6">Песня {inferno01ru.canto}</h2>

<div class="text-base md:text-lg">
	{#each inferno01ru.content as line (line.id)}
		<p class={line.id % 3 === 0 ? 'mb-6' : ''}><span class="text-gray-300 absolute -ml-10 unselectable">{line.id} </span>{line.text}</p>
	{/each}
</div>
