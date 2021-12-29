import {Router} from "express";
import * as eggsCtrl from "../controllers/eggs.controller"


const router = Router()

router.get('/:id', eggsCtrl.findOneEgg)

router.post('/create', eggsCtrl.createEgg)

export default router