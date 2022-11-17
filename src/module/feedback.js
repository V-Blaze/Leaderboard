const scoreForm = document.getElementById('score-form');

export const showFeedBack = (msg) => {
    let msgContent = document.createElement('span')
    
    if(msg.includes('provide')) {
        msgContent.className = 'error'
        msgContent.textContent = `${msg}`
        scoreForm.append(msgContent)
    } else {
        msgContent.className = 'success'
        msgContent.textContent = `${msg}`
        scoreForm.append(msgContent)
    }

    setTimeout(() => {
        scoreForm.removeChild(msgContent)
    }, 4000);
}
