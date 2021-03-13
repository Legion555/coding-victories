import VictoryCard from './VictoryCard';
//redux
import {useSelector} from 'react-redux';
//icons



export default function ListVictories({setFunctionView}) {
    const userData = useSelector(state => state.userData);

    const colorGen = () => {
        let options = ['yellow', 'blue', 'green'];
        let colorArr = [options[Math.floor(Math.random() * 3)]];
        colorArr.push(options[Math.floor(Math.random() * 3)]);
        return colorArr;
    }

    return (
        <div className="w-full mt-8 p-4 flex justify-evenly flex-wrap">
            {userData.victories && userData.victories.map(victory => 
                <VictoryCard key={victory._id} victoryData={victory} setFunctionView={setFunctionView} colors={colorGen()} />
            )}
        </div>
    )
}

