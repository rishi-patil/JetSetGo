import "./searchItem.css"
import { useNavigate } from 'react-router-dom';

const SearchItem = () => {

const navigate = useNavigate()
  const handleS = () => {
    navigate("/hotels/23", )
  }

  return (
    <div className="SearchItem">
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/e5c63f13704049.5627708de6299.jpg" alt="" className="siImg" />

      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free Airport Taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air Conditioning
        </span>
        <span className="siFeatures">
          Entire Studio • 1 bathroom • 21m2 full bed
        </span>
        <span className="siCancelOp">Free Cancellation</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">₹ 1500</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siButton"  onClick={handleS}>See Availability</button>
        </div>
      </div>
    </div>
  )
}


export default SearchItem