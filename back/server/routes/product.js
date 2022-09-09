const { Router } = require("express")
const { getAllProduct, getOneProduct, createProduct, deleteProduct } = require("../controllers/product");
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

router.get("/", getAllProduct)
router.get("/:id", getOneProduct)
router.post("/", checkRole, (req, res, next) => {
    console.log('req.body:  =============>', req.body);
    console.log('req:  =============>', req);
    next()
},  upload.array('img', 3), createProduct)
router.delete("/:id", checkRole, deleteProduct)

module.exports = router; 