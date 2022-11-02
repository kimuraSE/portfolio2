import React from "react";
import { useContext } from "react";
import { ClassContext } from "../provider/ClassProvider";

export const useClassAddMenuOpen = () =>{

    const { menuOpenFlag,setMenuOpenFlag }=useContext(ClassContext);

    return setMenuOpenFlag(!menuOpenFlag);

}