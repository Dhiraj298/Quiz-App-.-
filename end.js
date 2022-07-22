// const username = document.getElementById('username');
// const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

// const highScores = JSON.parse(localStorage.getItem("highScores"));
// console.log(highScores);



finalScore.innerText = `Your Score : ${mostRecentScore}`;
// document.onload(() => {
// }) 

// username.addEventListener('keyup' , () =>{
    // console.log(usernameInput.value);
//     saveScoreBtn.disabled = !username.value;
// })

// saveHighScore = e => {
//     console.log("clicked the save button !");
//     e.preventDefault();
// }

