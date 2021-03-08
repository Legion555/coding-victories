//redux
import {useSelector} from 'react-redux'

export default function ListVictories() {
    const userData = useSelector(state => state.userData)
    
    const colorGen = () => {
        let options = ['yellow', 'blue', 'green'];
        return options[Math.floor(Math.random() * 3)];
    }

    return (
        <div className="w-full mt-8 p-4 flex justify-evenly flex-wrap">
            {userData.victories.map(victory => 
                <div className="w-80 m-8 relative" key={victory._id}>
                    <div className={`w-full h-full absolute top-0 left-0 rounded shadow bg-${colorGen()}-400`} style={{transform: 'rotate(6deg)'}} />
                    <div className={`w-full h-full absolute top-0 left-0 rounded shadow bg-${colorGen()}-400`} style={{transform: 'rotate(3deg)'}} />
                    <div className="w-full h-full p-2 relative rounded shadow bg-gray-100 ">
                        <h1 className="text-2xl">{victory.title}</h1>
                        <p className="text-xl">{victory.description}</p>
                        <p>{Date(victory.date_created).slice(0,16)}</p>
                    </div>
                </div>
            )}
        </div>
    )
}