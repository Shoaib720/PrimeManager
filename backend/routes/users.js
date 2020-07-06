const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const User = require('../models/user');
const router = express.Router();







// ==============================================================================

const MIME_TYPE_MAP = {
  'image/png' : 'png',
  'image/jpeg' : 'jpg',
  'image/jpg' : 'jpg'
};

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid MIME type");
    if(isValid){
      error = null
    }
    cb(error, 'backend/public/users/images');
  },
  filename: (req, file, cb) => {
    const name = req.body.email.split('@')[0];
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '_' + Date.now() + '.' + ext);
  }
});

const upload = multer({storage: multerStorage});

// ==============================================================================

router.get('',(req, res, next) => {
  User.find().then(
    documents => {
      res.status(200).json({
        message: 'Success',
        data: documents
      });
    }
  )
});

router.post('', upload.single('image'), (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const url = req.protocol + '://' + req.get('host');
    const user = new User({
      name: req.body.name,
      type: req.body.type,
      contact: req.body.contact,
      image: url + '/images/' + req.file.filename,
      email: req.body.email,
      password: hash,
      qualification: req.body.qualification,
      designation: req.body.designation,
      experience: req.body.experience,
      salary: req.body.salary,
      class: req.body.class,
      division: req.body.division
    });
    user.save()
    .then(result => {
      res.setHeader("Access-Control-Allow-Headers", "enctype");
      res.status(201).json({
        message: 'User Created!',
        data: result
      });
    }).catch(err => {
      res.status(500).json({
        error: err
      });
    });
  });
});

router.put('/:id', upload.single('image'), (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const url = req.protocol + '://' + req.get('host');
    User.findByIdAndUpdate(
      { _id : req.params.id },
      {
        name: req.body.name,
        type: req.body.type,
        contact: req.body.contact,
        image: url + '/images/' + req.file.filename,
        email: req.body.email,
        password: hash,
        qualification: req.body.qualification,
        designation: req.body.designation,
        experience: req.body.experience,
        salary: req.body.salary,
        class: req.body.class,
        division: req.body.division
      },
      { new: true },
      (err, updatedUserData) => {
        if(err){
          res.status(500).json({
            error: err
          });
        }else{
          console.log(req.file)
          res.status(201).json({
            message: 'User Updated!',
            data: updatedUserData
          });
        }
      }
    );
  });
});

// router.patch('/:id', upload.single('image'), (req, res, next) => {
//   const user = new User()
//   User.findByIdAndUpdate(
//     { _id: req.params.id},
//     {
//       image: req.file.path
//     },
//     { new: true},
//     (err, updatedUserData) => {
//       if(err){
//         res.status(500).json({
//           error: err
//         });
//       }else{
//         console.log(req.file)
//         res.status(201).json({
//           message: 'User Updated!',
//           data: updatedUserData
//         });
//       }
//     }
//   )
// })

router.delete('/:id', (req, res, next) => {
  User.deleteOne({ _id : req.params.id }).then(
    (result) => {
      res.status(200).json({
        message: "User Deleted!",
        data: result
      }).catch(err => {
        res.status(400).json({
          error: err
        })
      })
    }
  )
});

router.post('/login', (req, res, next) => {
  let fetchedUser;
  User.findOne({email : req.body.email}).then(
    fUser => {
      if(!fUser){
        return res.status(401).json({
          error: 'Authentication Failed! 1'
        })
      }
      fetchedUser = fUser;
      return bcrypt.compare(req.body.password, fUser.password);
    })
    .then(result => {
      if(!result){
        return res.status(401).json({
          error: 'Authentication Failed! 2'
        })
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        'Hey_this_is_my_angular_app_created_in_2020',
        { expiresIn: '1h' }
      );
      res.status(200).json({
        uid: fetchedUser._id,
        email: fetchedUser.email,
        name: fetchedUser.name.split(' ')[0],
        type: fetchedUser.type,
        token: token,
        expiresIn: 3600
      });
    })
    .catch(err => {
      return res.status(401).json({
        error: 'Authentication Failed! 3'
      })
    })
})

module.exports = router;

