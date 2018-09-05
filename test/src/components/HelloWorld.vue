<template>
   <div class="bodyContainer">
      <b-card-group deck style="height: 100%;width: 100%;background-color: rgb(231, 249, 255);">
         <div v-if="!leftMenuOpened" class="leftMenuCloseDiv">
            <div class="triangle_border_right" @click="handleMenuSwitch"></div>
         </div>
         <div v-else class="leftMenuOpenDiv">
            <div style="width:95%;display: inline-flex">
               <LeftFloat/>
            </div>
            <div style="width:5%;display: inline-flex">
               <div class="triangle_border_right" @click="handleMenuSwitch"></div>
            </div>
         </div>
         <div :class="rightContainerClass">
            <div class="container-fluid">
               <router-view></router-view>
            </div>
         </div>
      </b-card-group>     
   </div>
</template>

<script>
import LeftFloat from "@/components/LeftFloatComponent";

export default {
  name: 'HelloWorld',
  components: {LeftFloat},
  data () {
    return {
      rightContainerClass: 'rightContainerWhileLeftMenuOpen',
      leftMenuOpened: true,
    }
  },
  methods: {
    handleMenuSwitch(){
      this.leftMenuOpened=!this.leftMenuOpened;
      if(this.leftMenuOpened){
        this.rightContainerClass='rightContainerWhileLeftMenuOpen';
      }else{
        this.rightContainerClass='rightContainerWhileLeftMenuClose'
      }
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
