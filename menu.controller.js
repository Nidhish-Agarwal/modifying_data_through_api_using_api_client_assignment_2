const menuModel = require("./schema.js");

async function updateMenuItem(req, res) {
  try {
    const id = req.params.id;
    const newData = req.body;
    const updatedItem = await menuModel.findByIdAndUpdate(id, newData);
    return res
      .status(200)
      .json({ message: "Item Sucessfully Updated", data: updatedItem });
  } catch (err) {
    if (err.name == "ValidationError") {
      console.log("Validation Error");
      return res.status(400).json({ message: err });
    }
    return res.status(500).json({ message: err });
  }
}

async function deleteMenuItem(req, res) {
  try {
    const id = req.params.id;
    await menuModel.findByIdAndDelete(id);
    return res.status(200).json({ message: "Data Deleted Sucessfully" });
  } catch (er) {
    return res.status(500).json({ message: er.message });
  }
}

module.exports = { updateMenuItem, deleteMenuItem };
