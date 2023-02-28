function loadScoreboard() {
    const scoreList = document.querySelector('#scores_list')
    let playerscores=''
    scoreboard.forEach((s)=>{
        playerscores += `<li><span>${s.name} </span> <span>${s.score}</span></li>`
    })

    scoreList.innerHTML= playerscores;
}

window.onload=()=>{
    loadScoreboard()
}