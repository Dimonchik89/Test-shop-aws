const { Router } = require("express")
const { getAllDevices, getOneDevice, createDevice, deleteDevice } = require("../controllers/device");
const checkRole = require("../middleware/checkRole");
const upload = require("../aws_upload/upload");

//-------------------------------------

// const s3 = new S3Client({
//     region: process.env.AWS_REGION,
//     credentials: {
//         accessKeyId: process.env.ACCESS_KEY_ID,
//         secretAccessKey: process.env.SECRET_ACCESS_KEY,
//     },
//     sslEnabled: false,
//     s3ForcePathStyle: true,
//     signatureVersion: 'v4',
//  })

//  const upload = multer({
//     storage: multerS3({
//         s3: s3,
//         bucket:"newtechshop",
//         metadata: function (req, file, cb) {
//             cb(null, { fieldName: file.fieldname });
//         },
//         key: function (req, file, cb) {
//             cb(null, Date.now().toString())
//         }
//     })
//  })

 //---------------------------

const router = new Router();

router.get("/", getAllDevices)
router.get("/:id", getOneDevice)
router.post("/", checkRole, upload.array('img', 3), createDevice)
router.delete("/:id", checkRole, deleteDevice)

module.exports = router; 