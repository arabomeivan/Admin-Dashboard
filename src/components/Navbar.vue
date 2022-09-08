<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
  
   
   <!--Navabar Title-->
      <a class="navbar-brand" href="#">Dashboard</a>
      
      <form class="d-flex">
        
        <!--Search button-->
        <button type="button" class="btn btn-light searchbtn"><i class="fa-solid fa-magnifying-glass"></i></button>

        <!--Notificaion Button-->
        <button type="button" class="btn btn-light notificationbtn"><i class="fa-regular fa-bell"></i></button>

        
        <!--profile picture-->
        <div class="rounded-circle profileimage">

        </div>
       

        <!--profile name-->
        <div class="row profilename">
          <div class="col-sm-12">
            Ivan Arabome
          </div>
        </div>
        
      </form>
    </div>

</nav>
</template>


<style scoped>

  /**Style for search button, notification and profileimage */
.searchbtn, .notificationbtn, .profileimage
{
  border-radius: 100%;
  width: 40px;
  height: 40px;
  margin: 5px;
  align-self: center ;
}

.shrinkbtn
{
position: absolute;
width: 40px;
height: 40px;
left: 240px;
top: 24px;

}
.profileimage
{
  background:url(../assets/Profileimg.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
}
.profilename
{
  width: auto;
  height: 20px;
  margin:3px;
  align-self: center;
}
.navbar-brand
{
  
font-family: 'Gilroy';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: #1C1F37;
}


/**End of styling for navbar components */
</style>