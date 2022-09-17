<template>

                <!--Top Header for Logo-->
                <div class="row Admindashboard">
                    
                    <div class="col-sm-6 group2">
                        <img src="" class="img-fluid group2" alt="not loading">
                    </div>

                        <div class="col-sm-6 dash">
                            <!--Title Dash-->
                        <a href="../App.vue">Dash</a>
                        </div>     
                </div>

                <!--End of the header on sidebar-->

             <!--Button to Shrink Side bar-->
   <button type="button" class="btn btn-light rounded-circle shrinkbtn bg-white"><i class="fa-solid fa-chevron-left"></i></button>
                
            
</template>
<script></script>

<style scoped>

    /** Style for top header Logo on sidebar*/

.Admindashboard
{
   
width: 140px;
height: 40px;
margin-left: 30px;
margin-top: 30px;
}
.group2
{
    width: 60px;
    height: 40px;
}

/**style for title dash */
.dash
{
width: 60px;
height: 29px;
align-self:center;
font-family: 'Gilroy';
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 29px;

color: #FFFFFF;
}
/**Styling button (for shrink sidebar */
.shrinkbtn
{
position: absolute;
width: 40px;
height: 40px;
margin-left: 228px;
top: 28px;
box-shadow: none;
}

.shrinkbtn:focus
{
    box-shadow: none;
}
.fa-solid
{
    color: #445BFF;
}
</style>