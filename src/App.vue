<template>

<!--Main container for holding the navbar component and sidebar(Dashboard)-->
<div class="row flex-nowrap">


<!--Side Bar Component-->
<div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
<Sidebar/>
</div>

<!--Container to hold content and navbar-->
<div class="col py-3">

<!--Navbar-->
<Navbar/>

<!--Content-->

<div class="Container content">
  <!--Router View and default content will be here-->
  <router-view/>
</div>

</div>

</div>

</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'


  export default
  {
    components:{
    Sidebar,
    Navbar
  }
  }

</script>


<style scoped>
.content
{
  width: 50%;
  margin-bottom: 200%;
}
</style>
