// import { useState } from "react";
// import React from "react";
// import "./App.css";
// // import Data from "./Data"

// function App() {

//   const [selectedBrand, setSelectedBrand] = useState("");
//   const [filteredMobiles, setFilteredMobiles] = useState([]);
//   const [allMobiles] = useState([
//     {
//       id: 1,
//       name: "Infinix Note 40 Pro",
//       description: "Infinix Note 40 Pro in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/Infinix/InfinixNote40Pro-b.jpg",
//     },

//     {
//       id: 2,
//       name: "Xiaomi Poco C65",
//       description: "Xiaomi Poco C65 in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/Xiaomi/XiaomiPocoC65-b.jpg",
//     },

//     {
//       id: 3,
//       name: "Honor X7b",
//       description: "Honor X7b in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/Honor/HonorX7b-b.jpg",
//     },

//     {
//       id: 4,
//       name: "Dcode Bold 3 Pro",
//       description: "Dcode Bold 3 Pro in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/Dcode/DcodeBold3Pro-b.jpg",
//     },

//     {
//       id: 5,
//       name: "Samsung Galaxy S24",
//       description: "Samsung Galaxy S24 in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyS24-b.jpg",
//     },
//     {
//       id: 6,
//       name: "Xiaomi Redmi A3",
//       description: "Xiaomi Redmi A3 in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/Xiaomi/XiaomiRedmiA3-b.jpg",
//     },
//     {
//       id: 7,
//       name: "ZTE Blade A54",
//       description: "ZTE Blade A54 in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/ZTE/ZTEBladeA54-b.jpg",
//     },
//     {
//       id: 8,
//       name: "itel A05s",
//       description: "itel A05s in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/itel/itelA05s-b.jpg",
//     },
//     {
//       id: 9,
//       name: "Vivo V30",
//       description: "Vivo V30 in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/Vivo/VivoV30-b.jpg",
//     },
//     {
//       id: 10,
//       name: "Oppo Reno 11F",
//       description: "Oppo Reno 11F in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/Oppo/OppoReno11F-b.jpg",
      
//     },
//     {
//       id: 1,
//       name: "Infinix Note 40 Pro",
//       description: "Infinix Note 40 Pro in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/Infinix/InfinixNote40Pro-b.jpg",
//     },

//     {
//       id: 2,
//       name: "Xiaomi Poco C65",
//       description: "Xiaomi Poco C65 in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/Xiaomi/XiaomiPocoC65-b.jpg",
//     },

//     {
//       id: 3,
//       name: "Honor X7b",
//       description: "Honor X7b in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/Honor/HonorX7b-b.jpg",
//     },

//     {
//       id: 4,
//       name: "Dcode Bold 3 Pro",
//       description: "Dcode Bold 3 Pro in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/Dcode/DcodeBold3Pro-b.jpg",
//     },

//     {
//       id: 5,
//       name: "Samsung Galaxy S24",
//       description: "Samsung Galaxy S24 in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyS24-b.jpg",
//     },
//     {
//       id: 6,
//       name: "Xiaomi Redmi A3",
//       description: "Xiaomi Redmi A3 in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/Xiaomi/XiaomiRedmiA3-b.jpg",
//     },
//     {
//       id: 7,
//       name: "ZTE Blade A54",
//       description: "ZTE Blade A54 in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/ZTE/ZTEBladeA54-b.jpg",
//     },
//     {
//       id: 8,
//       name: "itel A05s",
//       description: "itel A05s in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/itel/itelA05s-b.jpg",
//     },
//     {
//       id: 9,
//       name: "Vivo V30",
//       description: "Vivo V30 in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/Vivo/VivoV30-b.jpg",
//     },
//     {
//       id: 10,
//       name: "Oppo Reno 11F",
//       description: "Oppo Reno 11F in Pakistan",
//       ImgUrl: "https://www.whatmobile.com.pk/admin/images/Oppo/OppoReno11F-b.jpg",
      
//     },   
//   ]);
 
 


//   const handleBrandSelect = (event) => {
//     const selectedBrand = event.target.value;
//     setSelectedBrand(selectedBrand);

//     if (selectedBrand === "") {
//       setFilteredMobiles(allMobiles);
//     } else {
//       const filteredMobiles = allMobiles.filter(
//         (mobile) => mobile.brand === selectedBrand
//       );
//       setFilteredMobiles(filteredMobiles);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Mobiles</h2>
//       <div className="divinput">
//         <select
//           className="form-select"
//           onChange={handleBrandSelect}
//           aria-label="Default select example"
//         >
//            <option value="">Select Mobiles</option>
//            <option value="IPhone">IPhone</option>
//   <option value="Sumsung">Sumsung</option>
//   <option value="Red-Magic">Red-Magic</option>
//   <option value="Redme">Redme</option>
//   <option value="Realme">Realme</option>
//   <option value="Vivo">Vivo</option>
//   <option value="Infinix">Infinix</option>
//   <option value="Itel">Itel</option>
//   <option value="Dcode">Dcode</option>
//   <option value="Xiaomi">Xiaomi</option>
//   <option value="Honor">Honor</option>
//   <option value="Oppo">Oppo</option>
//   <option value="Motrolla">Motrolla</option>
//   <option value="Google-pixel">Google-pixel</option>
//   <option value="Rog">Rog</option>
//   <option value="Techno">Techno</option>
//   <option value="ZTE">ZTE</option>
//         </select>
//       </div>

//       <div className="row">
//         {filteredMobiles.map((mobile) => (
//           <div key={mobile.id} className="col-md-4 mb-3">
//             <div className="card">
//               <img src={mobile.ImgUrl} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title">{mobile.name}</h5>
//                 <p className="card-text">{mobile.description}</p>
//                 <a href="#" className="btn btn-primary">
//                   Add to Cart
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
 
// }

// export default App;
