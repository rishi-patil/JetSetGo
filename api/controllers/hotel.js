import Hotel from "../models/Hotel.js ";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body)

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel)
  }

  catch (err) {
    next(err);
  }
}


export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updatedHotel)
  }

  catch (err) {
    next(err);
  }
}

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted")
  }

  catch (err) {
    next(err);
  }
}

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel)
  }

  catch (err) {
    next(err);
  }
}

export const getHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({ ...others, cheapestPrice: { $gt: min | 1, $lt: max || 999 }, }).limit(req.query.limit);
    res.status(200).json(hotels)
  }

  catch (err) {
    next(err);
  }
}
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "Hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "Apartment" });
    const villaCount = await Hotel.countDocuments({ type: "Villa" });
    const resortCount = await Hotel.countDocuments({ type: "Resort" });
    const cabinCount = await Hotel.countDocuments({ type: "Cabin" });
    res.status(200).json([
      { type: "Hotel", count: hotelCount },
      { type: "Apartments", count: apartmentCount },
      { type: "Resorts", count: resortCount },
      { type: "Villas", count: villaCount },
      { type: "Cabins", count: cabinCount },
    ])
  }

  catch (err) {
    next(err);
  }
}

export const countBycity = async (req, res, next) => {
  const cities = req.query.cities.split(",") //converts cities passed in query into an array ',' is used as a separator
  try {
    const list = await Promise.all(cities.map(city => {
      return Hotel.countDocuments({ city: city }) //countDocuments- mongodb function       // .find({ city: city }).length - counts no. of hotels in a given city 
    }));
    res.status(200).json(list)
  }

  catch (err) {
    next(err);
  }
}