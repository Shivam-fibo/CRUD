import mongoose from "mongoose"

const Connection =  async()=>{

        const URL = `mongodb://sg641818:crudoperation@ac-lczmk29-shard-00-00.g3q1tsu.mongodb.net:27017,ac-lczmk29-shard-00-01.g3q1tsu.mongodb.net:27017,ac-lczmk29-shard-00-02.g3q1tsu.mongodb.net:27017/CRUD OPERATION?ssl=true&replicaSet=atlas-ojy9vt-shard-0&authSource=admin&retryWrites=true&w=majority`

        try {
        await    mongoose.connect(URL, {
     
                // useNewUrlParser: true
            });
            console.log('Database connected succesfully')
            
        } catch (error) {
            console.log("Error while connecting with database", error)
        }

}


export default Connection;