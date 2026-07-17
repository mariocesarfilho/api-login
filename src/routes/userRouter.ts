import { Router } from "express";
import {
  createUser,
  allUsers,
  findUser,
  updateUser,
  deleteUser,
} from "../controllers/userControler";

const router = Router();

router.post("/", createUser);
router.get("/:id", findUser);
router.get("/", allUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
