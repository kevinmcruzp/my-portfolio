import Image from "next/image";
import Link from "next/link";
import NavLinkFooter from "./NavLinkFooter";
import ContactMeFooter from "./ContactMeFooter";

export default function Footer ( ) {
    return (
        <div className="h-full w-full flex flex-col justify-between">
            <ContactMeFooter />
            <NavLinkFooter />
        </div>
    )
}