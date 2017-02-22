<template>
<div class="header">
	{{title}}
</div>
</template>

<script type="text/javascript">
export default {
	props:["title"]
}
</script>
<style>
.header{
	background: #f29004;
	color: white;
	text-align: center;
	line-height: 50px;
}
</style>
