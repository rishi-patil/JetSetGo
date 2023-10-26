import Carousel from 'react-bootstrap/Carousel';
import "./slider.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faPerson} from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
 import 'bootstrap/dist/css/bootstrap.min.css';  

function Slider(){
  const [openDate, setOpendate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOption, setOpenOption] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  })

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return{
        ...prev, 
        [name]: operation === "i" ? options[name] + 1: options[name] - 1,
      }
    });
  }
  return (
<div className="carousel-container">
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://trivago-clone.bootsgrid.in/images/slider/new-york-city.jpg"
        alt="First slide"
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Jalmahal_jaipur_perspective_view1.jpg/1280px-Jalmahal_jaipur_perspective_view1.jpg"
        alt="Second slide"
      />
  
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://blogs.revv.co.in/blogs/wp-content/uploads/2021/12/Anjarle-Beach-1024x576.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>

  <div className="header-bar ">
    <div className="headerLine1">
      <FontAwesomeIcon icon={faBed} className="headerbar-icon" />
      <input type="text" placeholder="Where are you going?" className="header-search"/>
      <button className='search-btn'>Search</button>
    </div>
    <div className="headerLine2">
      <div className="headerbar-item">
        <FontAwesomeIcon icon={faCalendarDays} onClick={()=>setOpendate(!openDate)} className="headerbar-icon" />
        <span onClick={()=>setOpendate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>

        {openDate && <DateRange editableDateInputs={true} onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false} ranges={date} className="date"/>}

      </div>
      <div className="headerbar-item">
        <FontAwesomeIcon icon={faPerson} onClick={()=> setOpenOption(!openOption)} className="headerbar-icon" />
        <span onClick={()=> setOpenOption(!openOption)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
        {openOption && <div className="options">
          <div className="optionItem">
            <span className="optionText">Adult</span>
            <div className="Container">
              <button
              disabled={options.adult <= 1}
              className="optionBtn" onClick={()=>handleOption("adult","d")}>-</button>
              <span className="adultCount">{options.adult}</span>
              <button className="optionBtn" onClick={()=>handleOption("adult","i")}>+</button>
            </div>
          </div>
          <div className="optionItem">
            <span className="optionText">children</span>
            <div className="Container">
              <button 
              disabled={options.children <= 0}
              className="optionBtn" onClick={()=>handleOption("children","d")}>-</button>
              <span className="childCount">{options.children}</span>
              <button className="optionBtn" onClick={()=>handleOption("children","i")}>+</button>
            </div>
          </div>
          <div className="optionItem">
            <span className="optionText">Room</span>
            <div className="Container">
              <button 
              disabled={options.room <= 1}
              className="optionBtn" onClick={()=>handleOption("room","d")}>-</button>
              <span className="roomtCount">{options.room}</span>
              <button className="optionBtn" onClick={()=>handleOption("room","i")}>+</button>
            </div>
          </div>
        </div>}
      </div>
    </div>
  </div>
</div>)
}

export default  Slider;
