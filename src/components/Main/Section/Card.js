


const Card = (props)=>{
    return (
        <>
            <div className='card'>
                <img className='card-img' src={props.img}/>
                <h3 className='card-title'>{props.name}</h3>
                <p className="card-population">Population {props.population}</p>
                <p className="card-text">Capital: {props.capital}</p>
                <button className='card-button' data-set-id={props.id} type={"button"}>More..</button>
            </div>
        </>
    )
}

export default Card;