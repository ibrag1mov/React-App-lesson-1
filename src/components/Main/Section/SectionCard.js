import Card from "./Card";
import data from "./../../../data"
import './section.scss'


const SectionCard = ()=>{

    console.log(data);
    return (
        <>
            <div className='container'>
                <div className='card-wrapper'>
                    {data.map((item)=>(
                        <Card 
                            name = {item.name}
                            img = {item.img}
                            region = {item.region}
                            population = {item.population}
                            capital = {item.capital}
                            id = {item.capital}
                        />
                     )
                    )}
                </div>
            </div>
        </>
    )
}

export default SectionCard;