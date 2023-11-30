import { Router } from "express"; 
import { getnota,getNotas,createnotas,deletenotas, updatenota} from "../controller/notascontroller.js";

const router = Router();

router.get('/notas', getnota)
router.get('/notas/:id', getNotas)
router.post('/notas',createnotas)
router.put('/notas/:id',updatenota)
router.delete('/notas/:id', deletenotas)

export default router;