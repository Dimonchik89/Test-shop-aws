const { S3Client } = require('@aws-sdk/client-s3');
var aws = require('aws-sdk')
var multer = require('multer')
var multerS3 = require('multer-s3')

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
    sslEnabled: false,
    s3ForcePathStyle: true,
    signatureVersion: 'v4',
})

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "newtechshop",
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            const filename = Date.now().toString()
            let fullPath = "images/" + filename;
            // cb(null, Date.now().toString())
            cb(null, fullPath)
        }
    }),
})

module.exports = upload