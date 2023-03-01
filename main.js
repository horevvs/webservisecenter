


Vue.component('mainheader', {
  props: ['images'],
  data: function () {
    return {
      visible: false
    }
  },
  template: `
  <div class="row">
      <div class="col-10">
          <div class="m-3">
              <div class="text_header">Web Service Center</div>
              <div class="text_header_data"> Sunday 25 September</div>
          </div>
      </div>
      <div class="col-2 pt-2 d-flex justify-content-end ">
          <button v-on:click="visible=!visible" > <a href="#"> <img v-bind:src="images" alt="Пример"> </a> </button>
      </div>

      <!-- в данной  верстке обображаеться фильтр которые открываеться при нажатии на кнопку-->
      <div v-if=visible class="container-fluid">
      <div class="row z-3 position-absolute px-4 mt-3">
          <div class=" bg-warning text-center">
              Filters header will be threre
          </div>
        </div>
      </div>


  </div>
 `
})

Vue.component('header_lower', {
  props: ['images', 'icon'],
  template: `
    <div class="fluid">
    <div class="row ">
      <div class="col-6 col-sm-3 p-5">
      <img v-bind:src="icon" alt="image not found">
      </div>
      <div class="col-6 col-sm-3 pt-5 d-flex  flex-column   ">
        <div class="fs-5"> Anna Gregoretti</div>
        <div class="fs-5 mt-2"> Tesla Croup Gmbh-Germany</div>
      </div>
      <div class="col-sm-6 d-flex flex-row-reverse justify-content-around">
        <a href="#" class="block_size my-4 p-2">
          <div>
            <p class="block_up ">Resourses</p>
            <p class="block_down"> You can consult and download documents shared with you </p>
          </div>
        </a>
        <a href="support.html" class="block_size my-4 p-2">
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


Vue.component('ticket', {
  props: ['request', 'waitingfor', 'inwork'],
  template: `
      <div class="row justify-content-center">
      <div class="col-6 col-md-2 d-flex flex-column  text-center">
        <div class=" ticket mt-3">Ticket overview </div>
        <img class=" ticket mt-3 px-3" src="images/circle.png" alt="image not found">
      </div>
      <div class="col-12 col-md-10    ">
        <div class="d-flex justify-content-center justify-content-md-start">
          <div> <img class="mt-4" src="images/Vector2.svg" alt="no image" alt=""> </div>
          <div class=" total mt-4  ps-3 "> <span> 2022 Total request</span>
            <p> {{request}}</p>
          </div>
        </div>
        <hr class="w-100">
        <div class="d-flex ticket justify-content-center justify-content-md-start">
          <div>   <input type="checkbox" class="form-check-input" id="exampleCheck1"> <span>In work</span>
            <div class="px-3">{{inwork}}</div>
          </div>
          <div class="px-4 ">
          <input type="checkbox" class="form-check-input" id="exampleCheck2"> 
          <span>Waiting for your answer</span>
            <div class="px-3">{{ waitingfor}}</div>
          </div>
        </div>
        <div class="d-flex ticket justify-content-center justify-content-md-start">
                  <input type="checkbox" class="form-check-input" id="exampleCheck3">
          <div class='px-2 '> Solved</div>
        </div>
      </div>
    </div>
     `
})


Vue.component('support', {
  props: ['icon'],
  template: `
  <div>
  <div class="fluid">
      <div class="row ">
          <div class="col-6 col-sm-3 p-5">
              <img v-bind:src="icon" alt="image not found">
          </div>
          <div class="col-6 col-sm-3 pt-5 d-flex  flex-column   ">
              <div class="fs-3"> Support</div>

          </div>
          <div class="col-sm-6 d-flex flex-row-reverse justify-content-around">
              <a href="#" class="block_size my-4 p-2">
                  <div>
                      <p class="block_up ">Resourses</p>
                      <p class="block_down"> You can consult and download documents shared with you </p>
                  </div>
              </a>
              <a href="main.html" class="block_size my-4 p-2">
                  <div>
                      <p class="block_up"> Home</p>
                      <p class="block_down"> Returno to dashboard page</p>
                  </div>
              </a>
          </div>
      </div>
  </div>

  <form>
      <div class="form-row mt-3  d-flex flex-column  flex-md-row ">
          <div class="col-12 col-md-9 px-4 ">
              <label for="inputEmail4">Ticket title</label>
              <input type="text" class="form-control inputs">
          </div>
          <div class="col-12 col-md-3 px-4">
              <label for="inputEmail4">Type</label>
              <select class="form-control  inputs">
                  <option>Technical</option>
                  <option>Commercial</option>
              </select>
          </div>
      </div>

      <div class="col px-4 mt-4 description">
          <label >Description</label>
          <textarea class="form-control inputs" id="exampleFormControlTextarea1" rows="6"></textarea>
      </div>

      <div class="form-row mt-3  d-flex flex-column  flex-md-row ">
          <div class="col-12 col-md-9 px-4 mt-3 ">
              <button class="form-control text-center text-md-start  btn px-3">Select file</button>
          </div>

          <div class="col-12 col-md-3 px-4 mt-3">
              <button class="form-control btn "> Send</button>
          </div>
      </div>
  </form>
</div>
 `
})


Vue.component('ticketlist', {
  props: ['images'],
  data: function () {
    return {
      visible: false
    }
  },


  template: `
  <div class="row">
    <div class="d-flex px-5 mt-4">
        <div class="col-10  ticketlist ">Ticket List</div>
        <div class="col-2  text-end"> <button class=" " v-on:click="visible=!visible"  >Show filters<></button> </div>
    </div>


    <table class="table">
    <thead class="text-center">
        <tr class="px-3">    
        <th scope="col"> Status</th>
        <th scope="col"> Creation date</th>
        <th scope="col"> Last up-grade</th>
        <th scope="col"> Ticket title</th>
        <th scope="col">  Reference person</th>
      </tr>
    </thead>

    <tbody class="text-center">
      <tr class="text-center">
      <th scope="col"> 1</th>
      <th scope="col"> 2</th>
      <th scope="col"> 3 </th>
      <th scope="col"> 4 </th>
      <th scope="col"> 5 </th>
      </tr>
    </tbody>
    <tbody class="text-center">
    <tr class="text-center">
    <th scope="col"> 1</th>
    <th scope="col"> 2</th>
    <th scope="col"> 3 </th>
    <th scope="col"> 4 </th>
    <th scope="col"> 5 </th>
    </tr>
  </tbody>



  </table>



    <div v-if=visible class="container-fluid filters  ">
    <div class="row ">

        <div class="col-md-2 mt-3 text-center fs-3">Filters</div>
        <div class="col-md-10  d-flex justify-content-center">

            <div class=" d-flex flex-column flex-md-row ">
                <div  class=" px-3 py-3 bg-light-subtle  my-md-3">
                    
                    <div> Тип</div>
                    <select class=" fs-6 filters " name="" id="">
                        <option value="">Куплено (ВТ)</option>
                        <option value="">Продано (ВТ)</option>
                        <option value="">Статус (ВТ)</option>
                    </select>

                </div>
                <div class="px-3 py-3  bg-light-subtle my-md-3">
                    <div> Диапазон дат</div>
                    <input class=" filters" type="date" id="start" name="trip-start" value="2018-01-01"  min="2018-01-01"
                        max="2022-12-31">
                </div>

            </div>
        </div>
    </div>
</div>
   
</div>
</div>`,
})



new Vue({
  el: "#app",
});





{/* <div class="d-flex mt-3  flex-column flex-md-row text ">
        <div class="col-md px-5">
            Status
        </div>
        <div class="col-md  px-5">
            Creation date
        </div>
        <div class="col-md  px-5">
            Last up-grade
        </div>
        <div class="col-md  px-5">
            Ticket title
        </div>
        <div class="col-md  px-5">
            Reference person
        </div>
    </div> */}