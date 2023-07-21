import { RiSunLine } from "react-icons/ri";

export default function SwitchLoading () {
    return (
        <button
            className="flex items-center justify-center h-8 w-16 rounded-full bg-gray-200 dark:bg-gray-800 focus:outline-none"
        >
            <RiSunLine className="text-yellow-500" />
        </button>
    )
}