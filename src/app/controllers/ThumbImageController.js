import ThumbImage from '../models/ThumbImage';

class ThumbImageController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.thumbImage;

    const thumbImage = await ThumbImage.create({
      name,
      path,
    });

    return res.json(thumbImage);
  }
}

export default new ThumbImageController();
