import { useEffect, useState } from "react"


const Rooms = () => {
    const [rooms, setRooms] = useState([])
    useEffect(()=> {
        fetch('./rooms.json').then(res => res.json())
        .then(data => console.log(data))
    })
    return (
        <div>
            room cards
        </div>
    )
}

export default Rooms