import './main-section.css'

function Main(){
    return(
        <>
            <Form/>
            <SectionCard/>
        </>
    )
}

function Form(){
    return(
        <>
            <div className='container'>
                <form className='form'>
                    <input className='serch-input' type={"search"} placeholder={"Search"}/>
                    <select className='select'>
                        <option value={"All"} selected>All</option>
                        <option value={"Asia"} >Asia</option>
                        <option value={"America"} >America</option>
                    </select>
                </form>
            </div>
        </>
    )
}

function SectionCard(){
    return (
        <>
            <div className='container'>
                <div className='card-wrapper'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    )
}

    function Card(){
        return (
            <>
                <div className='card'>
                    <img className='card-img' src={'https://cdn.britannica.com/47/7247-004-44F420D7/Flag-Uzbekistan.jpg'}/>
                    <h3 className='card-title'>Uzbekistan</h3>
                    <p className="card-text">Capital: Toashkent</p>
                    <button className='card-button' type={"button"}>More..</button>
                </div>
            </>
        )
    }



export default Main;