<template>


<!--Navbar-->
<Navbar/>

<!--Main container for holding the Sidebar component and content-->
<div class="container-fluid">
  <div class="row flex-nowrap">
  
  <!--Side Bar Component-->
  <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar fixed-top">
  
  <Sidebar/>
  </div>
  
  <!--Container to hold content and navbar-->
  <div class="col py-3 maincontent">
  
  
  
  <!--Content-->
  jkjk
  <div class="container content">
    <!--Router View and default content will be here-->
    <router-view/>
  </div>
  
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
.sidebar
{
width: 260px;
height: 700px;
left: 0px;
top: 0px;

background: #081A51;
}
.maincontent
{
  height:500px;
}


</style>
