const mongoose = require ("mongoose")
const express = require("express")
const app = express()
const cors = require("cors")
mongoose.connect("mongodb+srv://sudeshingole25:umJBbHv0k1U4oSVI@cluster0.0qpcxzi.mongodb.net/")
app.use(cors())
app.use(express.json())

const voterSchema = mongoose.Schema({
    name: String,
    voterID: String,
    vote: String
})

const Voter = mongoose.model("Voter", voterSchema)


app.post("/putVote", async(req,res)=>{
    let ans = await Voter.findOneAndUpdate({voterID: req.body.voterID} , {vote: req.body.vote})
    res.status(200).json({ans})
})

app.post("/signin", async (req,res)=>{
    let voter = await Voter.find({voterID: req.body.voterID});
    if(voter.length===0){
        let ans = await Voter.create({
            name: req.body.voterName,
            voterID: req.body.voterID,
            vote:""
        })
        res.status(200).json({ans})
    }
    else{
        res.status(404).json({msg: "user already exists"})
    }

})

app.listen(3000)