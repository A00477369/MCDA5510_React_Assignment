import React , {useState, useEffect}from 'react';
import '../style/MyTown.css';
import halifax from '../images/halifaxImage2.png';
import cold from '../images/cold.png';
import mild from '../images/mild.png';
import sunny from '../images/sunny.png';



const Icon = (props)=>{
    return(
        <img className="icon" src= {props.iconName=='sunny'?sunny:props.iconName=='mild'?mild:cold} alt={props.iconName} />

    )
}


function MyTown() {

    const [temperature,setTemperature] = useState(0)
    const [symbol, setSymbol] = useState('°C')
    const [icon, setIcon] = useState()
    const [isCelcius, setIsCelcius] = useState(false)
    // const [buttonValue, setButtonValue] = useState('Change to °F')

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.64&lon=-63.57&appid=fd40caf02a7dd4cb9fa49b9d2f02dea7', 
        {
        }).then(response=>response.json())
        .then(result=>{
            setTemperature(result.main.temp - 273.15)

            if ((result.main.temp - 273.15) >= 20)
            {
                setIcon('sunny')
            }

            
            else if ((result.main.temp - 273.15) > 10 & (result.main.temp - 273.15) < 20)
            {
                setIcon('mild')
            }


            else if ((result.main.temp - 273.15) <= 10)
            {
                setIcon('cold')
            }

        })
    },[])


    useEffect(()=>{
        if(isCelcius){
            setTemperature(prevTemperature => (prevTemperature * 9/5 + 32))
            setSymbol('°F')
        }else{
            setTemperature(prevTemperature => ((prevTemperature - 32) * 5/9))
            setSymbol('°C')
        }
    },[isCelcius])

    return (
      <div className="MyTown">
        <h1>I live in Halifax, NS</h1>
        <div className="image">
            <img className="halifax" src={halifax} alt='Halifax' />
        </div>
        <div className='temperature'>
            <Icon iconName = {icon}/>
            <p>Current Temperature: {temperature.toFixed(0)} {symbol}</p> 
            <button onClick={()=> setIsCelcius(prevState => !prevState)}>Change to °{isCelcius?'C':'F'}</button>
            <p>{isCelcius}</p>
        </div>
      </div>
    );
  }
  
  export default MyTown;