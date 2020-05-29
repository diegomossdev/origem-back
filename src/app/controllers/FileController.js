import File from '../models/File';
import fs from 'fs';
import { resolve } from 'path';

class FileController {
  async store(req, res) {
    const { files } = req;
    const vehicleId = req.params.vehicleId;
    const arrOfFiles = files.map((file) => (
      {
        name: file.originalname,
        path: file.filename,
        vehicle_id: parseInt(vehicleId),
      }
    ));

    try {
      arrOfFiles.forEach(file => {
        File.create(file)
      });
      return res.json({ ok: true, message: 'Imagens adicionadas com sucesso!' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async remove(req, res) {
    const { id } = req.params;

    try {
      const file = await File.findByPk(id);

      await File.destroy({ where: { id } });

      const pathImage = resolve(__dirname, '..', '..', '..', 'temp', 'uploads');

      fs.unlink(`${pathImage}/${file.path}`, (error) => {
        if (error) throw error;
      });

      return res.json({ ok: true, message: 'Imagem deletada!' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new FileController();
