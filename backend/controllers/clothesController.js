import clothesModel from '../models/clotheModel.js';
import fs from 'fs';

const listClothes = async (req,res) =>  {
      try {

        const clothes = await clothesModel.find({})
        res.json({success: true, data: clothes })
      } catch (error){
        console.log(error);
        res.json({success: false, message : "Error"})

      }
    }
  const addClothes = async (req, res) => {

    try {
        let image_filename = `${req.file.filename}`

        const clothe = new clothesModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category:req.body.category,
            image: image_filename,
        })

        await clothe.save();
        res.json({ success: true, message: "Clothe Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

const removeClothes = async (req, res) => {
    try {

        const clothe = await clothesModel.findById(req.body.id);
        fs.unlink(`uploads/${clothe.image}`, () => { })

        await clothesModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Clothe Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}
export {listClothes,addClothes,removeClothes}