import React, {useState} from "react";
import "../css/contacts.css";
import vk from "../images/contacts/vk.svg";
import inst from "../images/contacts/inst.svg";
import gmail from "../images/contacts/gmail.svg";
import ContactsPopup from '../components/ContactsPopup';


export default function Contacts() {
    const [open, setOpen] = useState(false);
    const [openInst, setOpenInst] = useState(false);
    const [openGmail, setOpenGmail] = useState(false);

    return (
        <>
            <div className="social">
                <img onClick={() => setOpen(true)} src={vk} alt='vk' role='button'></img>
                <img onClick={() => setOpenInst(true)} src={inst} alt='inst' role='button'></img>
                <img onClick={() => setOpenGmail(true)} src={gmail} alt='gm' role='button'></img>
            </div>

            <ContactsPopup open={open} setOpen={setOpen}>
                <p className="link">https://vk.com/id121361664</p>
            </ContactsPopup>

            <ContactsPopup open={openInst} setOpen={setOpenInst}>
                <p className="link">
                    Деятельность американской компании Meta (бывшая Facebook) запрещена в России, 
                    организация признана экстремистской.
                </p>
            </ContactsPopup>

            <ContactsPopup open={openGmail} setOpen={setOpenGmail}>
                <p className="link">pavelkishlyanov@gmail.com</p>
            </ContactsPopup>
        </>
        
    )
}