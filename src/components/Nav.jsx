export default function Nav() {
    return (
        <nav className="bg-blue-500 text-white dark:bg-slate-700 dark:text-white h-[70px] flex items-center">
            <a href="/" className="ml-3 text-3xl font-bold">Gerardo Jiménez</a>
            <div className="links text-xl ml-auto mr-5 flex items-center">
                <a href="/portfolio" className="font-semibold">Projects</a>
            </div>
        </nav>
    )
}