import { Router } from "express";
import {
  createOrganizationCtrl,
  deleteOrganizationCtrl,
  editOrganizationCtrl,
  getAllOrganizationCtrl,
} from "../controllers/organization.controller";

const router = Router();

router.get("/", getAllOrganizationCtrl);
router.post("/", createOrganizationCtrl);
router.put("/:id", editOrganizationCtrl);
router.delete("/:id", deleteOrganizationCtrl);

export { router };