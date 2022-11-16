const addNewScore = async (newScore) => {
    try {

        const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:id/scores/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newScore)
        });
        const data = await res.json()

        if(!res.ok) {
            console.log(data)
            return
        }

        console.log(data)

    } catch (error) {
        console.log(error)
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
            console.log(data)
            return
        }
        console.log(data)

    } catch (error) {
            console.log(error)
    }
   
}

module.exports = { addNewScore, createNewGame }