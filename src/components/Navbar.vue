<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div class="container-fluid">
      <!--Navabar Title-->
      <a class="navbar-brand" href="#">Dashboard</a>

      <form class="d-flex">
        <!--Search button-->
        <button type="button" class="btn btn-light searchbtn">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>

        <!--Notificaion Button-->
        <button type="button" class="btn btn-light notificationbtn">
          <i class="fa-regular fa-bell"></i>
        </button>

        <!--profile picture-->
        <img
          src="../assets/Profileimg.jpeg"
          alt="not loading"
          class="rounded-circle profileimg"
          width="40px"
          height="40px" />


        <!--profile name-->
        <div class="row profilename">
          <div class="col-sm-12">Ivan Arabome</div>
        </div>
      </form>
    </div>
  </nav>
</template>


<style scoped>
/**Style for search button, notification and profileimage */
.searchbtn, .notificationbtn {
  border-radius: 100%;
  width: 40px;
  height: 40px;
  margin: 5px;
  align-self: center;
}

.shrinkbtn {
  position: absolute;
  width: 40px;
  height: 40px;
  left: 240px;
  top: 24px;
}

/**Profile image */
.profileimg {
  margin: 5px;
  align-self: center;
  
}
.profilename {
  width: auto;
  height: 20px;
  margin: 3px;
  align-self: center;
}
.navbar-brand {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #1c1f37;
}

/**End of styling for navbar components */
</style>