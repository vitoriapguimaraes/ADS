import { express } from "express";
import appointmentController from "./AppointmentController";
import doctorController from "./DoctorController";
import pacientController from "./PacientController";
import prescriptionController from "./PrescriptionController";

let router = express.Router();

router.get("/", function (req, res) {
  console.log("hi");
  res.status(200).json({ message: "hi!" });
});

router.use("/", appointmentController);
router.use("/", doctorController);
router.use("/", pacientController);
router.use("/", prescriptionController);

export default router;
