const cityName = document.getElementById("cityName");
const submitBtn  = document.getElementById("submitBtn");
const cityname = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector('.mid_layer')

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;

  if(cityVal===""){
    city_name.innerText = `Plz write the name before search`;
    datahide.classList.add('data_hide');
  }
  else{
      try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=3c09686d15b074949c6b698404fb068b`
        const response = await fetch(url);
        const data = await response.json();    
        // console.log(data);
        const arrData = [data];
        temp_real_val.innerText = arrData[0].main.temp;
        // temp_status.innerText = arrData[0].weather[0].main;
        cityname.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;

        // temp imoji icon...........
        const tempMood = arrData[0].weather[0].main;
        // console.log(tempMood);
        
        if(tempMood == 'Clear'){
                temp_status.innerHTML= "<i class='fas fa-sun' style= 'color: #eccc68'></i>";
        } else if(tempMood == 'Clouds'){
            temp_status.innerHTML= "<i class='fas fa-cloud' style= 'color: #f1f2f6'></i>";
        }else if(tempMood == 'Rain'){
            temp_status.innerHTML= "<i class='fa fa-cloud-showers-heavy' style= 'color: #a4b0be'></i>";
        }else{
            temp_status.innerHTML= "<i class='fas fa-sun' style= 'color: #eccc68'></i>";
        }

        datahide.classList.remove('data_hide');
    }
      catch{
        city_name.innerText = `Plz enter the city Name Properly`;
        datahide.classList.add('data_hide');
    }
  }


}


submitBtn.addEventListener('click',getInfo);