import './form.scss'

const Form = () => {
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

export default Form;