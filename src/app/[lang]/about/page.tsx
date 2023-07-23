import { Locale } from "@/i18n-config";
import { getDictionary } from "@/src/get-dictionary";

export default async function About({
    params: { lang },
}: {params: {lang: Locale}}) {

    const dictionary = await getDictionary(lang)

    return (
        <div>
            {dictionary['about'].about}
        </div>
    )
}