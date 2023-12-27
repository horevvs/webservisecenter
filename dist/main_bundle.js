Vue.component("mainheader",{props:["images"],data:function(){return{visible:!1}},template:'\n  <div class="row">\n      <div class="col-10">\n          <div class="m-3">\n              <div class="text_header">Web Service Center</div>\n              <div class="text_header_data"> Sunday 25 September</div>\n          </div>\n      </div>\n      <div class="col-2 pt-2 d-flex justify-content-end  px-4">\n          <button v-on:click="visible=!visible"> <a href="#"> <img v-bind:src="images" alt="Пример"> </a> </button>\n      </div>\n\n      \x3c!-- в данной  верстке обображаеться фильтр который открываеться при нажатии на кнопку--\x3e\n\n      <div v-if=visible class="container-fluid">\n      <div class="row z-3 position-absolute px-4 mt-3">\n          <div class=" bg-warning text-center">\n              Filters header will be threre0\n          </div>\n        </div>\n      </div>\n  </div>\n '}),Vue.component("header_lower",{props:["images","icon"],template:'\n    <div class="fluid">\n    <div class="row ">\n      <div class="col-6 col-sm-3 p-5">\n      <img v-bind:src="icon" alt="image not found">\n      </div>\n      <div class="col-6 col-sm-3 pt-5 d-flex  flex-column">\n        <div class="fs-5"> Anna Gregoretti</div>\n        <div class="fs-5 mt-2"> Tesla Croup Gmbh-Germany</div>\n      </div>\n      <div class="col-sm-6 d-flex flex-row-reverse justify-content-around">\n        <a href="resourses.html#/foo" class="block_size my-4 p-2">\n          <div>\n            <p class="block_up"> Resourses </p>\n            <p class="block_down"> You can consult and download documents shared with you </p>\n          </div>\n        </a>\n        <a href="support.html" class="block_size my-4 p-2">\n          <div>\n            <p class="block_up"> Support</p>\n            <p class="block_down"> Open a ticket or comunicate with our technical staff</p>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n   '}),Vue.component("ticket",{props:["request","waitingfor","inwork"],template:'\n      <div class="row justify-content-center">\n\n      <div class="col-6 col-md-2 d-flex flex-column  text-center">\n        <div class=" ticket mt-3">Ticket overview </div>\n        <img class=" ticket mt-3 px-3" src="images/circle.png" alt="image not found">\n      </div>\n\n      <div class="col-12 col-md-10">\n        <div class="d-flex justify-content-center justify-content-md-start">\n          <div> <img class="mt-4" src="images/Vector2.svg" alt="no image" alt=""> </div>\n          <div class= "total mt-4 ps-3"> <span> 2022 Total request</span>\n            <p> {{request}}</p>\n          </div>\n        </div>\n        <hr class="w-50">\n\n        <div class="d-flex px-md-1 px-5  ticket flex-column flex-md-row">\n     \n        <div> <input type="checkbox" class="form-check-input" id="exampleCheck1"> \n          <span>In work</span>\n          <div>{{inwork}}</div>\n        </div>\n  \n        <div class=\'px-md-2\' >\n          <input type="checkbox" class="form-check-input" id="exampleCheck2">\n          <span>Waiting for your answer</span>\n          <div>{{waitingfor}}</div>\n        </div>\n\n      </div>\n  \n      <div class="d-flex ticket px-md-1 px-5  ">\n        <input type="checkbox" class="form-check-input  " id="exampleCheck3">\n        <div class="px-1 "> Solved</div>\n      </div>\n\n    </div>\n     '}),Vue.component("support",{props:["icon"],template:'\n  <div>\n  <div class="fluid">\n      <div class="row ">\n          <div class="col-6 col-sm-3 p-5">\n              <img v-bind:src="icon" alt="image not found">\n          </div>\n          <div class="col-6 col-sm-3 pt-5 d-flex  flex-column   ">\n              <div class="fs-3"> Support</div>\n\n          </div>\n          <div class="col-sm-6 d-flex flex-row-reverse justify-content-around">\n              <a href="resourses.html#/foo" class="block_size my-4 p-2">\n                  <div>\n                      <p class="block_up ">Resourses</p>\n                      <p class="block_down"> You can consult and download documents shared with you </p>\n                  </div>\n              </a>\n              <a href="main.html" class="block_size my-4 p-2">\n                  <div>\n                      <p class="block_up"> Home</p>\n                      <p class="block_down"> Returno to dashboard page</p>\n                  </div>\n              </a>\n          </div>\n      </div>\n  </div>\n\n  <form>\n      <div class="form-row mt-3  d-flex flex-column  flex-md-row ">\n          <div class="col-12 col-md-9 px-4 ">\n              <label for="inputEmail4">Ticket title</label>\n              <input type="text" class="form-control inputs">\n          </div>\n          <div class="col-12 col-md-3 px-4">\n              <label for="inputEmail4">Type</label>\n              <select class="form-control  inputs">\n                  <option>Technical</option>\n                  <option>Commercial</option>\n              </select>\n          </div>\n      </div>\n\n      <div class="col px-4 mt-4 description">\n          <label >Description</label>\n          <textarea class="form-control inputs" id="exampleFormControlTextarea1" rows="6"></textarea>\n      </div>\n\n      <div class="form-row mt-3  d-flex flex-column  flex-md-row ">\n          <div class="col-12 col-md-9 px-4 mt-3 ">\n              <button class="form-control text-center text-md-start  btn px-3">Select file</button>\n          </div>\n\n          <div class="col-12 col-md-3 px-4 mt-3">\n              <button class="form-control btn "> Send</button>\n          </div>\n      </div>\n  </form>\n</div>\n '}),Vue.component("resourses",{props:["icon"],template:'\n  <div>\n  <div class="fluid">\n      <div class="row ">\n          <div class="col-6 col-sm-3 p-5">\n              <img v-bind:src="icon"   alt="image not found">\n          </div>\n          <div class="col-6 col-sm-3 pt-5 d-flex  flex-column   ">\n              <div class="fs-3"> Resourses</div>\n          </div>\n          <div class="col-sm-6 d-flex flex-row-reverse justify-content-around">\n              <a href="support.html" class="block_size my-4 p-2">\n                  <div>\n                      <p class="block_up ">Support</p>\n                      <p class="block_down"> You can consult and download documents shared with you </p>\n                  </div>\n              </a>\n              <a href="main.html" class="block_size my-4 p-2">\n                  <div>\n                      <p class="block_up"> Home</p>\n                      <p class="block_down"> Returno to dashboard page</p>\n                  </div>\n              </a>\n          </div>\n      </div>\n  </div>\n</div>\n '}),Vue.component("ticketlist",{props:["images"],data:function(){return{visible:!1}},template:'\n  <div class="row">\n    <div class="d-flex px-5 mt-4">\n        <div class="col-10  ticketlist ">Ticket List</div>\n        <div class="col-2  text-end"> <button class=" " v-on:click="visible=!visible"> Show filters<> </button> </div>\n    </div>\n\n    <div class="table-responsive">\n    <table class="table ">\n\n        <thead class="text-center">\n            <tr class="px-3">\n                <th scope="col"> Status</th>\n                <th scope="col"> Creation date</th>\n                <th scope="col"> Last up-grade</th>\n                <th scope="col"> Ticket title</th>\n                <th scope="col"> Reference person</th>\n            </tr>\n        </thead>\n\n        <tbody class="text-center">\n            <tr class="text-center">\n                <th scope="col"> Answered</th>\n                <th scope="col"> 12/07/22</th>\n                <th scope="col"> 14/09/22 </th>\n                <th scope="col"> Crash in sales manager </th>\n                <th scope="col"> Anna Gregoretti</th>\n            </tr>\n        </tbody>\n        <tbody class="text-center">\n            <tr class="text-center">\n            <th scope="col"> Open</th>\n            <th scope="col"> 20/09/22</th>\n            <th scope="col"> 20/09/22 </th>\n            <th scope="col"> Warehouse map error </th>\n            <th scope="col"> Valerio comaz</th>\n            </tr>\n        </tbody>\n       \n    </table>\n</div>\n\n\n\n    <div v-if=visible class="container-fluid filters">\n    <div class="row ">\n\n        <div class="col-md-2 mt-3 text-center fs-3">Filters</div>\n        <div class="col-md-10  d-flex justify-content-center">\n\n            <div class=" d-flex flex-column flex-md-row ">\n                <div  class=" px-3 py-3 bg-light-subtle  my-md-3">\n                    \n                    <div> Тип</div>\n                    <select class=" fs-6 filters " name="" id="">\n                        <option value="">Куплено (ВТ)</option>\n                        <option value="">Продано (ВТ)</option>\n                        <option value="">Статус (ВТ)</option>\n                    </select>\n\n                </div>\n                <div class="px-3 py-3  bg-light-subtle my-md-3">\n                    <div> Диапазон дат</div>\n                    <input class=" filters" type="date" id="start" name="trip-start" value="2018-01-01"  min="2018-01-01"\n                        max="2022-12-31">\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n   \n</div>\n</div>'}),new Vue({el:"#app"});