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
            <div className="offerImg">
              <img src="" alt="" />
            </div>
          </div>

          <div className="offerCol">
            <div className="offerContent">
                <h7>Fly away to your dream holiday</h7>
                <p>Get inspired, compare and book flights with more flexibility</p>
              </div>
              <div className="offerImg">
                <img src="" alt="" />
              </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Offer;