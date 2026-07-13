/*import clothesModel from '../models/clotheModel.js';
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
export {listClothes,addClothes,removeClothes}*/
import clothesModel from '../models/clotheModel.js';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Configuration automatique grâce aux variables d'environnement déjà ajoutées sur Render
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

// 1. LIST CLOTHES
const listClothes = async (req, res) => {
    try {
        const clothes = await clothesModel.find({});
        res.json({ success: true, data: clothes });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// 2. ADD CLOTHES
const addClothes = async (req, res) => {
    try {
        if (!req.file) {
            return res.json({ success: false, message: "Image manquante" });
        }

        // Envoi du fichier temporaire vers Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "clothing_shop" // Dossier Cloudinary commun ou dédié
        });

        // Suppression immédiate du fichier temporaire du serveur Render
        fs.unlink(req.file.path, (err) => {
            if (err) console.log("Erreur suppression fichier temporaire:", err);
        });

        // Création du vêtement avec l'URL Cloudinary persistante
        const clothe = new clothesModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: result.secure_url, // Enregistre l'URL complète (https://cloudinary.com...)
        });

        await clothe.save();
        res.json({ success: true, message: "Clothe Added" });
    } catch (error) {
        console.log(error);
        // Sécurité : Supprime le fichier local si l'upload échoue
        if (req.file) {
            fs.unlink(req.file.path, () => {});
        }
        res.json({ success: false, message: "Error" });
    }
}

// 3. REMOVE CLOTHES
const removeClothes = async (req, res) => {
    try {
        const clothe = await clothesModel.findById(req.body.id);
        if (!clothe) {
            return res.json({ success: false, message: "Clothe not found" });
        }

        // Extraction de l'ID de l'image pour la supprimer de Cloudinary
        const urlParts = clothe.image.split('/');
        const folderAndFile = urlParts.slice(-2).join('/'); // Récupère "clothing_shop/nom_image.jpg"
        const publicId = folderAndFile.split('.')[0]; // Récupère uniquement "clothing_shop/nom_image"

        // Supprime l'image directement des serveurs de Cloudinary
        await cloudinary.uploader.destroy(publicId);

        // Supprime le document de la base de données MongoDB
        await clothesModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Clothe Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export { listClothes, addClothes, removeClothes };
