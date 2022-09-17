<template>

<!--Navbar is outside structure since it is fixed to the top-->
<Navbar/>

<!--Holding Container for stucture for sidebar and content-->
<div class="class row groupcontainer">

  <!--Sidebar Container-->
  <div class="class col-sm-6 sidebarcontainer static-top">
<Sidebar/>
  </div>

  <!--Main Content-->
  <div class="class col-sm-6 maincontent">

    <!--content-->
    <div class="class container contentcontainer">
        ffjkjkj
      </div>

  </div>




  <!--End of Group Structure-->
</div>

</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'



  export default
  {
    components:{
    Sidebar,
    Navbar,
    Navbar
}
  }

</script>


<style scoped>

/**main holding container for sturcture of navbar and sidebar */
/**since the container is a row width is set to 1366px to not exceed mounted app width */
.groupcontainer
{
  width: 1348px;
}

/**Styling width and height of the sidebar container */
.sidebarcontainer
{

width: 260px;
height: 1064px;

background: #081A51;
}

/**placing content to be in middle */
.maincontent
{
    margin-top: 100px;
    width:80%;
    margin-left: auto;
    margin-right: auto;
}
.contentcontainer
{
  width: 78%;
}
</style>
