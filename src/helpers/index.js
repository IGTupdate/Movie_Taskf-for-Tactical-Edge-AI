import jwt from "jsonwebtoken"

export const getDataFromToken = async(req)=>{
    try{    
        const token = req.cookies.get("token")?.value || "";
        console.log("token", token);

        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

        return decodedToken;

    }catch(err){
        // console.log(err);
        throw new Error(err?.message)
    }
}