<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
   
      <a class="navbar-brand" href="#">Dashboard</a>
      
      <form class="d-flex">
        <button type="button" class="btn btn-light searchbtn"><i class="fa-solid fa-magnifying-glass"></i></button>
        <button type="button" class="btn btn-light notificationbtn"><i class="fa-regular fa-bell"></i></button>
        <img src="" class="img-fluid profileimage" alt="...">
        <div class="row">
          <div class="col-sm-12">
            Ivan Arabome
          </div>
        </div>
        
      </form>
    </div>

</nav>
</template>


<style scoped>
.searchbtn, .notificationbtn, .profileimage
{
  border-radius: 100%;
  width: 40px;
  height: 40px;
  margin: 5px;
}
</style>