<template>


<div class="row groupcontainer">
    <!--Sidebar Container-->
  <div class="col-md-6 sidebarcontainer">
    <Sidebar/>
  </div>

<!--Partition holding navbar and content-->
  <div class="col-md-6 mainpartition">

  <!--Navbar-->
  <Navbar/>

<!--content-->
<div class="class container maincontent">
        <p>ffjkjkj</p>
        <p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p>
        <p>ffjkjkj</p><p>ffjkjkj</p>
          <p>ffjkjkj</p>
          <p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p>
          <p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p>
          <p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p>
          <p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p>
          <p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p>
          <p>ffjkjkj</p><p>ffjkjkj</p>
          <p>ffjkjkj</p>
          <p>ffjkjkj</p>
          <p>ffjkjkj</p><p>ffjkjkj</p><p>ffjkjkj</p>
          <p>ffjkjkj</p>

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

.groupcontainer
{
  width: 1349px;
}

/**Styling width and height of the sidebar container */
.sidebarcontainer
{
position:fixed;
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
.mainpartition
{
  width: 82%;
  margin-left: 248px;
}

</style>
