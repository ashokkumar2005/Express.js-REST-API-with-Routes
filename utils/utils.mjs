

 export const userIndexId =(req)=>{
    return parseInt(req.params.id)
 }

 export const findUser =(users,id)=>{

    return users.find((u)=>u.id==id);
 };
