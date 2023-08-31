import Image from "next/image";
import Link from "next/link";
import NavLinkFooter from "./NavLinkFooter";
import ContactMeFooter from "./ContactMeFooter";
import { Locale } from "@/i18n-config";

export default function Footer ({lang} : {lang: Locale} ) {
    console.log(lang)

    return (
        <div className="h-full w-full flex flex-col justify-between">
            <ContactMeFooter lang={lang} />
            <NavLinkFooter lang={lang} />
        </div>
    )
}