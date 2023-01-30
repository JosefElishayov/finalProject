const express= require("express");
const { authBranchManager, authAdmin } = require("../middlewares/auth");
const { validateBrunches, BrunchesModel } = require("../models/brancheModel");
const router = express.Router();

router.get("/", async(req,res) => {
    try{
      let data = await BrunchesModel.find({});
      res.json(data);
    }
    catch(err){
      console.log(err);
      res.status(502).json({err})
    }
  })
  
  // TODO: need to add auth of admin
  router.post("/" ,authAdmin, async(req,res) => {
    let validBody = validateBrunches(req.body);
    if(validBody.error){
      return res.status(400).json(validBody.error.details);
    }
    try{
      let branch = new BrunchesModel(req.body);
      await branch.save();
      res.status(201).json(branch);
    }
    catch(err){
      console.log(err);
      res.status(502).json({err})
    }
  })
  
  router.put("/:id",authBranchManager, async(req,res) => {
    let validBody = validateBrunches(req.body);
    if(validBody.error){
      return res.status(400).json(validBody.error.details);
    }
    try{
      let id = req.params.id;
      let data = await BrunchesModel.updateOne({_id:id},req.body);
      res.json(data);
    }
    catch(err){
      console.log(err);
      res.status(502).json({err})
    }
  })
  
  router.delete("/:id",authAdmin, async(req,res) => {
    try{
      let id = req.params.id;
      let data = await BrunchesModel.deleteOne({_id:id});
      res.json(data);
    }
    catch(err){
      console.log(err);
      res.status(502).json({err})
    }
  })
  
  module.exports = router;


module.exports = router;







