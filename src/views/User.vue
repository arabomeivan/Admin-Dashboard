<template>
    
    <!--Component Title-->
    <div class="row" id="add_userform">
        <div class="col-md-12">
          
<!--Form to validate fields-->
<form @submit.prevent="validate" class="row g-3">


  <div class="col-md-6">
  <label for="exampleFormControlInput1" class="form-label">First Name</label><span class="mandatory">*</span>
  <input type="text" class="form-control" id="firstname" placeholder="First Name" v-model="firstname">
  <div v-show="firstnamevisbility" id="errormessage">{{errormessage}}</div>

</div>

<div class="col-md-6">
  <label for="exampleFormControlInput1" class="form-label">Last Name</label><span class="mandatory">*</span>
  <input type="text" class="form-control" id="lastname" placeholder="Last Name" v-model="lastname">
  <div v-show="lastnamevisbility" id="errormessage">{{errormessage}}</div>
  
</div>

<div class="col-md-6">
  <label for="exampleFormControlInput1" class="form-label">Email Addres</label><span class="mandatory">*</span>
  <input type="text" class="form-control" id="email" placeholder="Email Address" v-model="email">
  <div v-show="emailvisbility" id="errormessage">{{errormessage}}</div>
  
</div>

<div class="col-md-6">
  <label for="exampleFormControlInput1" class="form-label">Phone Number</label><span class="mandatory">*</span>
  <input type="text" class="form-control" id="phonenumber" placeholder="Phone Number" v-model="phone">
  <div v-show="phonevisbility" id="errormessage">{{errormessage}}</div>
  
</div>

<div class=" mb-3">
  <label for="status">Department</label><span class="mandatory">*</span>
        <select class="form-select" aria-label="Default select example" id="department">
                      <option value="Human Resources">Human Resources</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Operations">Operations</option>
                      <option value="Accounting">Accounting</option>
          </select>
       
        </div>

<div class=" mb-3">
  <label for="status">Status</label><span class="mandatory">*</span>
        <select class="form-select" aria-label="Default select example" id="status">
                      <option value="Junior Staff ">Junior Staff</option>
                      <option value="Senior Staff">Senior Staff</option>
                      <option value="Head of Department">Head of Department</option>
          </select>
       
        </div>

        <div class="col-12">
          
    <button class="btn btn-primary" id="add_user">Add User</button>
  </div>

</form>
        </div>
    </div>

</template>


<script>

export default
{

  data() {
    return {
      firstname:'',
      lastname:'',
      email:'',
      phone:'',
      firstnamevisbility: false,
      lastnamevisbility:false,
      emailvisbility:false,
      phonevisbility:false,
      errormessage: 'Field is Compulsory',
      border_color_firstname: '#1C1F37',
      border_color_lastname: '#1C1F37',
      border_color_email: '#1C1F37',
      border_color_phone: '#1C1F37'

    }
  },

  methods:
  {
    //vaidate if fields are empty
    validate()
    {
      if(this.firstname == '')
      {
        this.firstnamevisbility = true
        this.border_color_firstname = 'red'
      }
      else
      {
        this.firstnamevisbility =  false
        this.border_color_firstname = '#1C1F37'
      }

      if(this.lastname == '')
      {
        this.lastnamevisbility = true
        this.border_color_lastname = 'red'
      }
      else
      {
        this.lastnamevisbility =  false
        this.border_color_lastname = '#1C1F37'
      }

      if(this.email == '')
      {
        this.emailvisbility = true
        this.border_color_email = 'red'
      }
      else
      {
        this.emailvisbility =  false
        this.border_color_email = '#1C1F37'
      }

      if(this.phone == '')
      {
        this.phonevisbility = true
        this.border_color_phone = 'red'
      }
      
      else
      {
        this.phonevisbility =  false
        this.border_color_phone = '#1C1F37'
      }
    }
  }

 


}
</script>


<style scoped>
#add_userform
{
width:70%;
margin-left: auto;
margin-right:auto;


font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 39px;
}

#errormessage
{
  font-size: small;
  color: red;
}
.mandatory
{
  color: red;
}
#firstname
{
  width:60%;
  border-color: v-bind(border_color_firstname);
}

#lastname
{
  width:60%;
  border-color: v-bind(border_color_lastname);
}
#email
{
  width:60%;
  border-color: v-bind(border_color_email);
}
#phonenumber
{
  width:60%;
  border-color: v-bind(border_color_phone);
}
.form-select
{
  width:65%;
  border-color:  #1C1F37;
}
#add_user
{
   background-color: #1C1F37;
   border-color: #1C1F37;
   box-shadow: none;
}

/**Responsiveness for mobile phones */

@media screen and (max-width: 480px) 
{


  #add_userform
{
font-size: 15px;
width:auto;

}

#firstname, 
#lastname, 
#email,
#phonenumber
{
  width:100%;
  
}

.form-select
{
  width: 122%;
}
}

</style>