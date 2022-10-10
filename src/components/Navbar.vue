<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid" id="navcontent">

     <!--LEFT SIDE OF THE NAVBAR CONTENT-->
  
  <!--Button to shrink Side bar-->
  <button type="button" class="btn btn-light rounded-circle" id="minimizesidebar" @click="controlsidebar"><i class="fa-solid fa-chevron-left" v-show="iconvisbility_left"></i>
    <i class="fa-solid fa-chevron-right" v-show="iconvisbility_right"></i>
  </button>


    <div class="row navbartitle">
      <div class="col-md-12">
        {{ pageName }}
      </div>
    </div>
    


    <!--Right side of content-->
      <form class="d-flex rightcontent">
        <input type="text" class="form-control" id="searchbox" placeholder="Search" v-model="email" v-show="showsearchbox">
        <button type="button" class="btn btn-light rounded-circle" @click="show_hide_searchbox"><i class="fa-solid fa-magnifying-glass"></i></button>
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




/**Script tag */
<script>


export default
{
  data() {
    return {
       
      showsearchbox:false,
      sidebarshown:true,
      iconvisbility_left: true,
      iconvisbility_right: false

    }
  },
  computed: {
    
    pageName() {
      if (this.$route.path == '/user') {
        return 'Create User';
      }
      if (this.$route.path == '/charts') {
        return 'Dashboard';
      }
      if (this.$route.path == '/inventory') {
        return 'View Inventory';
      }
      if (this.$route.path == '/request') {
        return 'View Requests';
      }
      if (this.$route.path == '/view_users') {
        return 'View Users';
      }
      if (this.$route.path == '/equipments') {
        return 'View Equipments';
      }

     
      return '';
    },

    navbar_width()
  {
    return this.$store.state.navbar.width
  },
  
  mainpartitionwidth()
  {
    return this.$store.state.mainpartition.width
  },

  mainpartitionmargin()
  {
    return this.$store.state.mainpartition.margin_left 
  }
  }
  ,

   methods:
   {

    //sidebar visibility is true by default if it is true it becomes false
    //if it is false it becomes true
    controlsidebar()
    {
      
       
        
          if(this.sidebarshown == true)
          {
            
             this.$store.dispatch("remove_full_width")
             this.sidebarshown = false
             this.iconvisbility_left = false
             this.iconvisbility_right = true
          }
          else
          {
            this.$store.dispatch("make_full_width")
            this.sidebarshown = true
            this.iconvisbility_left = true
            this.iconvisbility_right = false
          }

    },

    show_hide_searchbox()
    {
      this.showsearchbox = !this.showsearchbox
    }
   }
   
}


</script>

<style scoped>
  /**styling navbar */

.navbartitle
{
  margin-right: 150px;
}
.navbar
{
  height: 90px;
  position:fixed;
  width: v-bind(navbar_width);
}
#minimizesidebar
{
  margin-left: -40px;
}
#searchbox
{
  border-color:  #1C1F37;
  box-shadow: none;
}
.btn:focus
{
  box-shadow: none;
}
/**Giving dashboard a style */
#navcontent
{
  font-family: 'Montserrat', sans-serif;
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
  width: 70%;
  height: 19px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

color: #000000;
}


/**Style for dropdown menu */
.dropdown
{
  width:44px;
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


/**Responsiveness for mobile phones */
@media screen and (max-width: 480px) 
{
  .navbar
  {
    width:283px;
  }

.navbartitle
{
  display: none;
}
.d-flex
{
  margin-left: -10px;
  margin-top: -10px;
}

#minimizesidebar{
    margin-top: -20px;
}
#profilename
{
  display: none;
}
}
</style>