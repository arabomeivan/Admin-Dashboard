<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid" id="navcontent">
    <!--Left side of content-->
    Dashboard


    <!--Right side of content-->
      <form class="d-flex rightcontent">
        <button type="button" class="btn btn-light rounded-circle"><i class="fa-solid fa-magnifying-glass"></i></button>
        <button type="button" class="btn btn-light rounded-circle"><i class="fa-regular fa-bell"></i></button>
        <img src="../assets/Profileimg.jpeg" alt="can't load profile picture" class="img-fluid rounded-circle" id="profilepicture">
         

         <!--Profile Name-->
         <div class="row" id="profilename">
          <div class="col-md-12">
            Ivan Arabome
          </div>
         </div>
         

        <div class="dropdown">
          <img src="../assets/bx_bx-chevron-down.png" alt="can't load dropdown" class="img-fluid" id="dropdownMenuButton1"  data-bs-toggle="dropdown" aria-expanded="false">
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Log out</a></li>
  </ul>
</div>
      </form>
    </div>
</nav>
</template>


<style scoped>
  /**styling navbar */
.navbar
{
  height: 90px;
  position:fixed;
  width: 82%;
}

/**Giving dashboard a style */
#navcontent
{
  font-family: 'Gilroy';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
/* identical to box height */


color: #1C1F37;
}

#profilepicture
{
  margin-left: 16px;
  width: 40px;
  height: 40px;
}

/**search button and notification button */
.btn
{
  margin-left: 16px;
  width: 40px;
  height: 40px;
}

/**proflilename */
#profilename
{
  align-self: center;
  margin-left: 16px;
  width: auto;
  height: 19px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

color: #000000;
}


/**Style for dropdown menu */
.dropdown
{
  width:24px;
  height:24px;
  margin-left: 16px;
}

/**drop down icon */
#dropdownMenuButton1
{
  width: 24px;
  height: 24px;
}
/**dropdown menu placing it to display better */
.dropdown-menu.show
{
  margin-top:10px;
  margin-left: -120px;
}
</style>