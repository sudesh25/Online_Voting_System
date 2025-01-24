const express = require("express")
const axios = require("axios")
const app = express()

document.getElementById('submit-vote').addEventListener('click', function() {
var selectedParty = document.querySelector('input[name="vote"]:checked');

if (selectedParty) {
    console.log('Selected party:', selectedParty.value);
    axios.post("http://localhost:3000/putVote", {
        voterID : sessionStorage.getItem("voterID"),
        vote: selectedParty.value,
        voterName: sessionStorage.getItem("voterName")
    })
    .then((res)=>{
        console.log(res);
    })

} else {
    alert('Please select a party to vote for.');
}
});