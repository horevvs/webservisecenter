

Vue.component('mainheader', {
    template: `
    <div class="row align-items-center">
    <div class="col-10">
        <div class="m-3">
            <div class="text_header">Web Service Center</div>
            <div class="text_header_data"> Sunday 25 September</div>
        </div>
    </div>
    <div class="col-2  d-flex flex-row-reverse ">
        <button class="btn"><a href="#">  <img src="images/Vector.png" alt="Прsимер"></a> </button>
    </div>
    </div>
   `
})

new Vue({
    el: "#app",
    data: {
        image: "images/Vector.png"
    }

});
