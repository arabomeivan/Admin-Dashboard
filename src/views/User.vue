<template>
    
    <!--Component Title-->
    <div class="row component_title">
        <div class="col-md-12">
          
<!--Form to validate fields-->
<form action="">


  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">First Name</label>
  <input type="text" class="form-control" id="firstname" placeholder="First Name">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Last Name</label>
  <input type="text" class="form-control" id="lastname" placeholder="Last Name">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email Addres</label>
  <input type="email" class="form-control" id="email" placeholder="Email Address">
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
  <input type="email" class="form-control" id="phonenumber" placeholder="Phone Number">
</div>

<div class=" mb-3">
  <label for="status">Department</label>
        <select class="form-select" aria-label="Default select example" id="department">
                      <option value="Human Resources">Human Resources</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Operations">Operations</option>
                      <option value="Accounting">Accounting</option>
          </select>
       
        </div>

<div class=" mb-3">
  <label for="status">Status</label>
        <select class="form-select" aria-label="Default select example" id="status">
                      <option value="Junior Staff ">Junior Staff</option>
                      <option value="Senior Staff">Senior Staff</option>
                      <option value="Head of Department">Head of Department</option>
          </select>
       
        </div>

</form>
        </div>
    </div>

</template>


<script>

</script>


<style scoped>
.component_title{
font-family: 'Gilroy';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
}



</style>