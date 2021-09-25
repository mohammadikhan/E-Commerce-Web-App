import User from '../model/userSchema.js'
export const userSignup = async(request, response) =>{

    try {
        const exist = await User.findOne({ username: request.body.username })

        if (exist){
            return response.status(401).json("[UNSUCCESSFUL] Username already exists")
        }

        const user = request.body
        const newUser = new User(user)
        await newUser.save()

        response.status(200).json('[SUCCESS] User successfully registered')
    } catch (error) {
        console.log("[UNSUCCESSFUL] ERROR: ", error.message)
    }
    
}

export const userLogin = async (request, response) => {

    try {

        let user = await User.findOne({ username: request.body.username, password: request.body.password})
        
        if (user) {            
            return response.status(200).json(`${request.body.username} [SUCCESS] Login worked`)

        } else {
            return response.status(401).json(`${request.body.username} [UNSUCCESSFUL] Invalid Login`)
        }

    } catch (error){
        console.log("[UNSUCCESSFUL] ERROR: ", error.message)
    }
}