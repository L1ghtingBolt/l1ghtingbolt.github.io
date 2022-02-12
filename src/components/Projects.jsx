export default function Projects(props) {
    return (
        <section id="projects" className="flex flex-col items-center">
            <h1 className="text-4xl text-center m-10 underline decoration-orange-600">Projects</h1>
            <ul className="w-[50vw]">
                <a target="_blank" href="https://codeebox.vercel.app"><li>CodeeBox</li></a>
                <a target="_blank" href="https://discord.com/api/oauth2/authorize?client_id=923957802190405642&permissions=8&scope=bot"><li>NullBOT</li></a>
                <a target="_blank" href="https://l1ghtingbolt.github.io/bluonkotype"><li>Bluonkotype</li></a>
                <a target="_blank" href="https://forkerionblog.surge.sh/"><li>ForkerionBlog</li></a>
                <a target="_blank" href="https://l1ghtingbolt.github.io/bluonkotype"><li>SpiralQuery</li></a>
                <a target="_blank" href="https://l1ghtingbolt.github.io/bluonkotype"><li>SpiralCSS</li></a>
                <a target="_blank" href="https://github.com/L1ghtingBolt/PassEZ/releases/latest"><li>PassEZ</li></a>
                <a target="_blank" href="https://jsbattle.vercel.app/"><li>JSBattle</li></a>
                <a target="_blank" href="https://l1ghtinglibraries.vercel.app/"><li>L1ghtingLibraries</li></a>
                <a target="_blank" href="https://www.npmjs.com/package/fakefakerjs"><li>Fakefaker.JS</li></a>
                <a target="_blank" href="https://github.com/L1ghtingBolt"><li className="bg-blue-600 text-white">Other Projects</li></a>
            </ul>
        </section>
    )
}