import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
      <h4 className="featured-content">Trending Destinations</h4>
      <p>Travellers searching for India also booked these</p>
        <div className="featuredItem1">

          <div className="featuredItem">
          <img src="https://images.unsplash.com/photo-1504705759706-c5ee7158f8bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGphaXB1cnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" className="featuredImg" />
          <div className="featuredTitles">
          <h4>Jaipur</h4>
          </div>
        </div>
        <div className="featuredItem">
          <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhfGVufDB8fDB8fHww&w=1000&q=80" alt="" className="featuredImg" />
          <div className="featuredTitles">
            <h4>Kerala</h4>
          </div>
        </div>
      </div>


      <div className="featuredItem2">
        <div className="featuredItem">
          <img src="https://images.unsplash.com/photo-1587922546307-776227941871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29hfGVufDB8fDB8fHww&w=1000&q=80" alt="" className="featuredImg" />
          <div className="featuredTitles">
          <h4>Goa</h4>
          </div>
        </div>
       <div className="featuredItem">
        <img src="https://media.cntraveller.in/wp-content/uploads/2018/06/Y7A1796.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
        <h4>Jammu Kashmir</h4>
        </div>
       </div>
       <div className="featuredItem">
        <img src="https://img.freepik.com/premium-photo/agra-taj-mahal-side-view-front-view-photography_862994-45176.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
        <h4>Agra</h4>
        </div>
       </div>
      </div>


    </div>
  )
}

export default Featured;