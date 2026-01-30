import express from 'express';
import { addClothes, listClothes, removeClothes} from '../controllers/clothesController.js';
import multer from 'multer';
const clotheRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

clotheRouter.get("/list",listClothes);
clotheRouter.post("/add",upload.single('image'),addClothes);
clotheRouter.post("/remove",removeClothes);

export default clotheRouter;