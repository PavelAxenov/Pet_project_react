import "../css/popupContacts.css";
import copy from "../images/copy.svg";

export default function ContactsPopup({open, setOpen, children}) {
    return (
        <section className={open ? "popupСommon popup_is-opened" : "popupСommon"} onClick={() => setOpen(false)}>
            <div className="popup" onClick={e => e.stopPropagation()}>
                {children}
                <button>
                    <img src={copy} alt="Копировать" className="copy" />
                </button>
            </div>
        </section>
        
    )
}