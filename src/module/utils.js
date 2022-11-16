const addNewScore = async (newScore) => {
    try {

        const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${process.env.GAME_ID}/scores/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newScore)
        });
        const data = await res.json()

        if(!res.ok) {
            return data
        }

        return data

    } catch (error) {
        return error
    }
}

const getAllGameScores = async () => {
    try {

        const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${process.env.GAME_ID}/scores/`);
        const data = await res.json()

        if(!res.ok) {
            return data
        }

        const scores = data.result

    } catch (error) {
        return error
    }
}


const createNewGame = async () => {
    const newGame = {
        "name": "Valentine Blaze Game"
    }

    try {
        
         const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newGame)
        })

        const data = await res.json()

        if(!res.ok) {
     
            return data
        }
        return data

    } catch (error) {
            return error
    }
   
}

module.exports = { addNewScore, createNewGame, getAllGameScores }