import { getDictionary } from "@/src/get-dictionary";
import { Locale } from "@/i18n-config";
import Card from "@/src/components/portfolio/Card";


export default async function Portfolio ({
    params: { lang },
}: {params: {lang: Locale}}) {

    const dictionary = await getDictionary(lang)

    return (
        <section className="
            flex-1
            max-w-screen-xl mx-auto p-2
        ">
            <Card dictionary={dictionary} />
        </section>
    )
}