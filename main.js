

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


// function createPie(container, chartData, config = {}) {
//     const svgns = "http://www.w3.org/2000/svg";
//     const offsetRatio = {
//       top: 0.25,
//       right: 0,
//       left: 0.5,
//       bottom: -0.25,
//     }
  
//     const strokeWidth = config.strokeWidth || 5;
//     const radiusValue = config.radius || 100;
//     const radius = radiusValue - strokeWidth / 2;
//     const fullSize = 2 * radiusValue;
  
//     // длина окружности 
//     const length = 2 * Math.PI * radius; 
  
//     // смещение начальной точки
//     let startPoint = config.start in offsetRatio ? config.start : 'top';
//     const chartOffset = length * offsetRatio[startPoint];
  
//     // расчетные данные для построения секторов
//     const sectors = [];
//     chartData.forEach((sectorData, sectorIndex) => {
//       // Длина сектора
//       const width = length * sectorData.value / 100;
//       // Смещение сектора от начальной точки
//       let offset = chartOffset;
  
//       if (sectorIndex > 0) {
//         let prevSector = sectors[sectorIndex - 1];
//         offset = prevSector.offset - prevSector.width;
//       }
  
//       sectors.push({
//         ...sectorData,
//         width,
//         offset,
//       })
//     });
  
//     const svg = createSvgElement('svg', {
//       'viewBox': `0 0 ${fullSize} ${fullSize}`,
//       'fill': 'none',
//       'width': fullSize,
//       'height': fullSize,
//     });
  
//     sectors.forEach(sector => {
//       const circle = createSvgElement('circle', {
//         cx: radius + strokeWidth / 2,
//         cy: radius + strokeWidth / 2,
//         r: radius,
//         'stroke-dasharray': `${sector.width} ${length - sector.width}`,
//         'stroke-dashoffset': sector.offset,
//         'stroke': sector.color,
//         'stroke-width': strokeWidth
//       })
  
//       svg.appendChild(circle);
//     })
  
//     container.appendChild(svg);
  
//     function createSvgElement(elementName, attrs = {}) {
//       const el = document.createElementNS(svgns, elementName);
//       Object.entries(attrs).forEach(([attrName, attrValue]) => {
//         el.setAttributeNS(null, attrName, attrValue)
//       });
//       return el;
//     }
//   }
  
  
//   // разделение на сектора (в процентах)
//   const data = [
//     {
//       value: 30,
//       color: 'red'
//     },
//     {
//       value: 20,
//       color: 'blue'
//     },
//     {
//       value: 15,
//       color: 'orange'
//     },
//     {
//       value: 35,
//       color: 'green'
//     }
//   ];
  
//   createPie(document.getElementById('app'), data, {
//     strokeWidth: 20,
//     radius: 100,
//     start: 'top' // top|left|right|bottom
//   });


