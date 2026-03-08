 import express from "express";
 import {getUsers,
        getUsersid,
        createUser,
        updateUser,
        patchusers,
        userDelete} from "../controller/usercontroller.mjs"

const router = express.Router();

router.get("/",getUsers);

router.get("/:id",getUsersid);

router.post("/",createUser);

router.put("/:id",updateUser);

router.patch("/:id",patchusers);

router.delete("/:id",userDelete);

export default router;