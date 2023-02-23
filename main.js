

Vue.component('mainheader', {
    props: ['images'],
    template: `
    <div class="row align-items-center">
    <div class="col-10">
        <div class="m-3">
            <div class="text_header">Web Service Center</div>
            <div class="text_header_data"> Sunday 25 September</div>
        </div>
    </div>
    <div class="col-2  d-flex flex-row-reverse">
         <button class="btn"> <a href="#"> <img v-bind:src="images" alt="Прsимер"> </a> </button>
    </div>
    </div>
   `
})


Vue.component('header_lower', {
    props: ['images', 'icon'],
    template: `
    <div class="container-fluid  ">
    <div class="row align-items-start  ">
      <div class="col-6  col-sm-3 p-5 ">
      <img v-bind:src="icon" alt="Прsимер">
      </div>
      <div class=" col-6 col-sm-3  pt-5 ">
        <p class="fs-5"> Anna Gregoretti</p>
        <p class="fs-6"> Tesla Croup Gmbh-Germany</p>
      </div>
      <div class=" col-sm-6  d-flex flex-row-reverse  justify-content-evenly">
        <a href="#" class="block_size my-4 p-2 ">
          <div>
            <p class="block_up ">Resourses</p>
            <p class="block_down"> You can consult and download documents shared with you </p>
          </div>
        </a>
        <a href="#" class="block_size my-4 p-2  ">
          <div>
            <p class="block_up"> Support</p>
            <p class="block_down"> Open a ticket or comunicate with our technical staff</p>
          </div>
        </a>
      </div>
    </div>
  </div>
   `
})





new Vue({
    el: "#app",
    data: function () {
        return {
            images: "images/Vector.png",
            icon: "images/Ellipse 1.jpg",
        }
    }

});


