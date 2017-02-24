<template>
	<div :class="['btn', 'btn-clr-' + color, 'btn-sz-' + size]">
		<text class="btn-val">{{value}}</text>
	</div>
</template>
<style scoped>
.btn{
    height: 95px;
    margin-top: 50px;
    border-width: 0px;
    border-radius: 10px;
    flex-direction:row;
    justify-content:center;
    align-items:center;
}
.btn-clr-orange{
	background-color: #F50;
}
.btn-clr-red{
	background-color: #F00;
}
.btn-sz-small{
	width: 200px;
}
.btn-sz-middle{
	width: 400px;
}
.btn-sz-large{
    width: 650px;
}
.btn-val{
	color: #FFF;
	font-size: 45px;
}
</style>
<script>
	module.exports = {
		props: {
			color: { default: 'orange' },
			size: { default: 'large' },
			value: { default: '' }
		}
	}
</script>