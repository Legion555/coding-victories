import Masonry from 'react-masonry-css'
//redux
import {useSelector} from 'react-redux';
//components
import VictoryCard from './VictoryCard';



export default function ListVictories({setFunctionView}) {
    const userData = useSelector(state => state.userData);

    return (
        <Masonry
        breakpointCols={{default: 4, 1280: 2, 720: 1}}
        className="w-auto flex lg:px-16"
        columnClassName="">
            {userData.victories.map(victory => (
                <VictoryCard key={victory._id} victoryData={victory} setFunctionView={setFunctionView} />
            ))}
        </Masonry>
    )
}

