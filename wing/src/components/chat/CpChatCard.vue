<template>
    <div>
        <cp-chat-top-user-detail-bar class="chat-top-bar"></cp-chat-top-user-detail-bar>
        <cp-chat-pot-paner @showFunc="showFunc" ref="potREF" :chtr="chatter"></cp-chat-pot-paner>
        <eos-func-go-down v-if="func" class="upper-go-down" @down="goDown"></eos-func-go-down>
    </div>
</template>

<script>
import EosFuncGoDown from '../../eos/func/EosFuncGoDown.vue'
import CpChatTopUserDetailBar from './bar/CpChatTopUserDetailBar.vue'
import CpChatPotPaner from './inner/R/CpChatPotPaner.vue'
export default {
  components: { CpChatPotPaner, CpChatTopUserDetailBar, EosFuncGoDown },
  props: [ 'chatter' ],
  data() {
    return {
      func: false
    }
  },
  watch: {
    func(n) {
      n ? setTimeout(e => this.func = false, 4800) : undefined
    }
  },
  mounted() {

  },  
  methods: {
    goDown() {
      this.$refs.potREF.down()
      this.func = false
    },
    showFunc() {
      this.func = true 
    }
  }
}
</script>

<style lang="sass">
.upper-go-down
  animation: upper_go_down .121s ease-in-out

@keyframes upper_go_down 
  0%
    transform: translateY(24px) scale(0.618)
  100%
    transform: translateY(0px) scale(1)
</style>