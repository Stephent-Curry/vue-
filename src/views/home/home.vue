<template>
	<div class="home">
		这里是VUE模版 你只需要配置一下rem就可以了 祝您工作顺利 发生纠纷或说过话
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ components: {} })
export default class Home extends Vue {
	private msg!: string;
}
</script>

<style>
.home {
}
</style>
