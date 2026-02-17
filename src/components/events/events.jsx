import Event from '../event/event'
import Title from '../title/title'
import './events.css'

function Events() {
    return (
        <>
            <Title title="EVENEMENTS" color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)" colorFont="#FFFFFF00" fontSize="24px" arrow={true} /> 

            <div className='events-div'>
                {[
                    {image: "event1.png", name: "Event 1", date: "17/06/2024"},
                    {image: "event2.png", name: "Event 2", date: "18/06/2024"},
                    {image: "event3.png", name: "Event 3", date: "19/06/2024"},
                    {image: "event1.png", name: "Event 4", date: "20/06/2024"},
                    {image: "event2.png", name: "Event 5", date: "21/06/2024"},
                    {image: "event3.png", name: "Event 3", date: "19/06/2024"},
                    {image: "event1.png", name: "Event 4", date: "20/06/2024"},
                    {image: "event2.png", name: "Event 5", date: "21/06/2024"},
                    {image: "event3.png", name: "Event 3", date: "19/06/2024"},
                    {image: "event1.png", name: "Event 4", date: "20/06/2024"},
                    {image: "event2.png", name: "Event 5", date: "21/06/2024"},
                ].map((element, index) => (
                    <Event key={index} data={element} />
                ))}  
            </div>
        </>
    )
}

export default Events