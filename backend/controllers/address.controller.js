import Address from "../models/address.model.js";


// add address : /api/address/add
export const addAddress = async (req, res) => {
  try {
    const {address, userId} = req.body;

    await Address.create({
    ...address,
    userId
    });
    return res.status(200).json({ success: true, message: 'Address added successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
}

// get address : /api/address/get
export const getAddress = async (req, res) => {
  try {
    const {userId} = req.body;
    const addresses = await Address.find({userId});
    return res.status(200).json({ success: true, addresses });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
}