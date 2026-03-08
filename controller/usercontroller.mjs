 import users from "../model/model.mjs";
 import { userIndexId,findUser } from "../utils/utils.mjs";

 //get all users
 export const getUsers=  (req,res)=>{
    res.json(users);
};

//get users from id

 export const getUsersid= (req,res)=>{
    const id = userIndexId(req);

    const user = findUser(users,id);

    if(!user){
       return res.status(401).send("apti orutha ila browww");

    }

    res.json(user);

 }

 //post-- Create a user

 export const createUser=(req,res)=>{
    const {user_name,age}= req.body;

    const newUser ={
        id:users.length+1,
        user_name,
        age
    }

    users.push(newUser);
   return res.status(201).json(newUser);
}

//PUT -- update a full user

export const updateUser = (req,res) =>{

    const id = userIndexId(req);
    const user = findUser(users,id);

        if(!user){
           return res.status(404).send("antha namela yarum ila boss");

        }
        const {user_name,age} =req.body;
         user.user_name = user_name;
         user.age = age;
    
    res.json(user);
}

// PATCH--- Update the partial of user

export const patchusers =(req,res)=>{
    const id = userIndexId(req);
    const user = findUser(users,id);
    
        if(!user){
           return res.status(404).send("antha namela yarume ila bossuhhh");

        }
        if(req.body.user_name) user.user_name = req.body.user_name;
        if(req.body.age) user.age = req.body.age;
    
    res.json(user);
}

// DELETE--- delete a user realted to url index

export const userDelete=(req,res)=>{
    const id = userIndexId(req);
    const user = findUser(users,id);

    if(!user){
        return res.status(404).send("antha namela yarume ila bossuhhh");
    }

    const index = users.indexOf(user);

    users.splice(index,1);

    return res.status(200).send("user neekapattar");


}

 