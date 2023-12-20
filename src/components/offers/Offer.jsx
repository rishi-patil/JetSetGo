import "./offer.css"

const Offer = () => {
  return (
    <div className="">
      <div className="offerContainer">
        <div className="offer1">
          <h4>Offers</h4>
          <p>Promotions, deals and special offers for you</p>
        </div>
        <div className="row1">
          <div className="offerCol">
            <div className="offerContent">
              <h7>Take your longest vacation</h7>
              <p>Browse properties offering long-term stays, many at reduced monthly rates.</p>
            </div>
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/500x500/292129389.jpeg?k=4d396cd9edbf7b86812c8b8b955c7d922de1c95530e6a20605d68fc32320ff4f&o=" className="offerimg1" alt="" />
          </div>

          <div className="offerCol">
            <div className="offerContent">
              <h7>Fly away to your dream holiday</h7>
              <p>Get inspired, compare and book flights with more flexibility</p>
            </div>
            <img src="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/184698944.png?k=6bb1bf3c13db4a7ba3c22a2d1f1051f793c525a78104703b4dec3eb12101f545&o="
              className='offerimg2' alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Offer;