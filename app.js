//BASIC SELECTORS
const playBtn = document.querySelector('.bottom-center-play')
const resetBtn = document.querySelector('.bottom-center-reset')
const kostka = document.querySelector('.center-kostka')


//BASIC LISTENERS
playBtn.addEventListener('click', randomKostka)
playBtn.addEventListener('click', changePlayer)
resetBtn.addEventListener('click', resetFunction)


//FUNCTIONS
//------------------------------------------------------------------//

function randomKostka() {
    const question = document.querySelector('.fa-question')
    const randomNumber = Math.ceil(Math.random()*6)
    function changeKostka() {
        kostka.addEventListener('transitionend', ()=> {
            kostka.style.backgroundImage = 'url(jpg/' +randomNumber+'.jpg)'
        })
    }
    function rotateKostka() {
        const question = document.querySelector('.fa-question')
        kostka.classList.add('rotate')
        question.classList.add('dontrotate')
        kostka.addEventListener('transitionend', ()=> {
            kostka.classList.remove('rotate')
            question.classList.remove('dontrotate')
            question.style.opacity = 0
        })
    }
    changeKostka()
    rotateKostka()
    return randomNumber
}

//

function resetFunction() {
    kostka.innerHTML = '<i class="fas fa-question"></i>'
    kostka.style.backgroundImage = 'none'
    document.querySelector('.top-left').style.color = 'white'
    document.querySelector('.top-right').style.color = 'white'
    document.querySelector('.bottom-left').innerHTML = 'Score1:'
    document.querySelector('.bottom-right').innerHTML = 'Score2:'
    const rightdesk = document.querySelector('.background-white-right')
    const leftdesk = document.querySelector('.background-white-left')
    leftdesk.style.opacity = '.3';
    rightdesk.style.opacity = '.3';
}

//------------------------------------------------------------------------------------------------------------------

function changePlayer() {
    //--------------------------------------------------------------//
    const player1 = document.querySelector('.top-left')
    const player2 = document.querySelector('.top-right')
    const rightdesk = document.querySelector('.background-white-right')
    const leftdesk = document.querySelector('.background-white-left')
    

    if(player1.style.color != 'red' && player2.style.color != 'red')  {
        player1.style.color = 'red'
        leftdesk.style.opacity= '.5';
        rightdesk.style.opacity = '.3';
    } else if (player1.style.color = 'red' && player2.style.color != 'red') {
        player2.style.color = 'red'
        player1.style.color = 'white'
        leftdesk.style.opacity= '.3';
        rightdesk.style.opacity = '.5';
        
    } else {
        player2.style.color = 'white'
        player1.style.color = 'red'
        leftdesk.style.opacity = '.5';
        rightdesk.style.opacity = '.3';
    }
    
    //--------------------------------------------------------------//
    //gamedesk change
    
    /*function changeDesk() {
        const leftdesk = document.querySelector('.background-white-left')
        const rightdesk = document.querySelector('.background-white-right')
        console.log('run')

        if(leftdesk.style.display === 'none' && rightdesk.style.display === 'none') {
            leftdesk.style.display = 'block'
            console.log('none')
        } else if (leftdesk.style.display === 'block') {
            rightdesk.style.display = 'block'
            leftdesk.style.display = 'none'
        } else if (rightdesk.style.display === 'block') {
            rightdesk.style.display = 'none'
            leftdesk.style.display = 'block'
        }
    }
    changeDesk()*/
    //--------------------------------------------------------------//
    function setScore() {
        const score1 = document.querySelector('.bottom-left')
        const score2 = document.querySelector('.bottom-right')

        if(player1.style.color != 'red' && player2.style.color != 'red')  {
                function run1() {
                    score1.innerHTML = ''
                }
                setTimeout(run1, 1499)
        } else if (player1.style.color = 'red' && player2.style.color != 'red') {
            function run2() {
                score1.innerHTML = 'Score: ' + randomKostka()
                score2.innerHTML = 'Score:'
            }
            setTimeout(run2, 1499)
        } else if (player1.style.color != 'red' && player2.style.color == 'red'){
            function run3() {
                score1.innerHTML = 'Score:' 
                score2.innerHTML = 'Score: ' + randomKostka()
            }
            setTimeout(run3, 1499)
        }
    }
    setScore()
}

