import React from "react";
import "../css/contacts.css";
import vk from "../images/contacts/vk.svg";
import inst from "../images/contacts/inst.svg";
import gmail from "../images/contacts/gmail.svg";


export default function Contacts() {
    return (
        <div className="soc">
            <img src={vk} alt='fdjj' role='button'></img>
            <img src={inst} alt='fdjj' role='button'></img>
            <img src={gmail} alt='fdjj' role='button'></img>
        </div>
    )
}