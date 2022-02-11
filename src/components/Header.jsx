import Nav from './Nav.jsx'

export default function Header(props) {
    return (
        <>
            <header className="w-[100vw] text-xl">
                <Nav />
                <div className='headerImg h-[50vh]'>
                    <div className="wrapper">
                        <h1 className="mainTitle">
                            Gerardo Jiménez
                        </h1>
                    </div>
                </div>
            </header>
        </>
    )
}