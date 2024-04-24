import React from 'react'
import { useState } from 'react'
import '../App.css'

function Mobiles(props) {
    const [selectedBrand, setSelectedBrand] = useState("");
    const [filteredMobiles, setFilteredMobiles] = useState([
      {
        id: 1,
        name: "Infinix Note 40 Pro",
        description: "Infinix Note 40 Pro in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/Infinix/InfinixNote40Pro-b.jpg",
        brand: "Infinix",
      },
      {
        id: 2,
        name: "Xiaomi Poco C65",
        brand: "Xiaomi",
        description: "Xiaomi Poco C65 in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/Xiaomi/XiaomiPocoC65-b.jpg",
      },
  
      {
        id: 3,
        name: "Honor X7b",
        brand: "Honor",
        description: "Honor X7b in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/Honor/HonorX7b-b.jpg",
      },
  
      {
        id: 4,
        name: "Dcode Bold 3 Pro",
        brand: "Dcode",
        description: "Dcode Bold 3 Pro in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/Dcode/DcodeBold3Pro-b.jpg",
      },
  
      {
        id: 5,
        brand: "Samsung",
        name: "Samsung Galaxy S24",
        description: "Samsung Galaxy S24 in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyS24-b.jpg",
      },
      {
        id: 6,
        name: "Redmi A3",
        brand: "Redmi",
        description: "Xiaomi Redmi A3 in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/Xiaomi/XiaomiRedmiA3-b.jpg",
      },
      {
        id: 7,
        name: "ZTE Blade A54",
        brand: "ZTE",
        description: "ZTE Blade A54 in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/ZTE/ZTEBladeA54-b.jpg",
      },
      {
        id: 8,
        name: "itel A05s",
        brand: "itel",
        description: "itel A05s in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/itel/itelA05s-b.jpg",
      },
      {
        id: 9,
        name: "Vivo V30",
        brand: "Vivo",
        description: "Vivo V30 in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/Vivo/VivoV30-b.jpg",
      },
      {
        id: 10,
        name: "Oppo Reno 11F",
        brand: "Oppo",
        description: "Oppo Reno 11F in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/Oppo/OppoReno11F-b.jpg",
        
      },
      
    ]);
  
    const allMobiles = [
      {
        id: 1,
        name: "Infinix Note 40 Pro",
        description: "Infinix Note 40 Pro in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/Infinix/InfinixNote40Pro-b.jpg",
        brand: "Infinix",
      },
      {
        id: 2,
        name: "Xiaomi Poco C65",
        brand: "Xiaomi",
        description: "Xiaomi Poco C65 in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/Xiaomi/XiaomiPocoC65-b.jpg",
      },
  
      {
        id: 3,
        name: "Honor X7b",
        brand: "Honor",
        description: "Honor X7b in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/Honor/HonorX7b-b.jpg",
      },
  
      {
        id: 4,
        name: "Dcode Bold 3 Pro",
        brand: "Dcode",
        description: "Dcode Bold 3 Pro in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/Dcode/DcodeBold3Pro-b.jpg",
      },
  
      {
        id: 5,
        brand: "Samsung",
        name: "Samsung Galaxy S24",
        description: "Samsung Galaxy S24 in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyS24-b.jpg",
      },
      {
        id: 6,
        name: "Redmi A3",
        brand: "Redmi",
        description: "Xiaomi Redmi A3 in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/Xiaomi/XiaomiRedmiA3-b.jpg",
      },
      {
        id: 7,
        name: "ZTE Blade A54",
        brand: "ZTE",
        description: "ZTE Blade A54 in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/ZTE/ZTEBladeA54-b.jpg",
      },
      {
        id: 8,
        name: "itel A05s",
        brand: "itel",
        description: "itel A05s in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/itel/itelA05s-b.jpg",
      },
      {
        id: 9,
        name: "Vivo V30",
        brand: "Vivo",
        description: "Vivo V30 in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/Vivo/VivoV30-b.jpg",
      },
      {
        id: 10,
        name: "Oppo Reno 11F",
        brand: "Oppo",
        description: "Oppo Reno 11F in Pakistan",
        ImgUrl: "https://www.whatmobile.com.pk/admin/images/Oppo/OppoReno11F-b.jpg",
        
      },
      // Add more mobiles here...
    ];
  
    const handleBrandSelect = (event) => {
      const selectedBrand = event.target.value;
      setSelectedBrand(selectedBrand);
  
      if (selectedBrand === "") {
        setFilteredMobiles(allMobiles);
      } else {
        const filteredMobiles = allMobiles.filter(
          (mobile) => mobile.brand === selectedBrand
        );
        setFilteredMobiles(filteredMobiles);
      }
    };
  
    return (
  
  //     if (selectedBrand === "") {
  //       setFilteredMobiles(allMobiles);
  //     } else {
  //       const filteredMobiles = allMobiles.filter(
  //         (mobile) => mobile.brand === selectedBrand
  //       );
  //       setFilteredMobiles(filteredMobiles);
  //     }
  //   };
  
      <div className="container">
        <h2>{props.name}</h2>
        <div className="divinput">
          <select
            className="form-select"
            onChange={handleBrandSelect}
            aria-label="Default select example"
            value={selectedBrand}
          >
            <option value="">All Mobiles</option>
            <option value="Infinix">Infinix</option>
            <option value="IPhone">IPhone</option>
            <option value="Samsung">Samsung</option>
            <option value="Red-Magic">Red-Magic</option>
            <option value="Redmi">Redmi</option>
            <option value="Realme">Realme</option>
            <option value="Vivo">Vivo</option>
            
            <option value="Itel">Itel</option>
            <option value="Dcode">Dcode</option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Honor">Honor</option>
            <option value="Oppo">Oppo</option>
            <option value="Motrolla">Motrolla</option>
            <option value="Google-pixel">Google-pixel</option>
            <option value="Rog">Rog</option>
            <option value="Techno">Techno</option>
            <option value="ZTE">ZTE</option>
          </select>
        </div>
  
        <div className="row">
          {filteredMobiles.map((mobile) => (
            <div key={mobile.id} className="col-md-4 mb-3">
              <div className="card">
                <img src={mobile.ImgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{mobile.name}</h5>
                  <p className="card-text">{mobile.description}</p>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  

export default Mobiles