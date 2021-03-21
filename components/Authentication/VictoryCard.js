//functions
import {parseDate} from '../Functions/parseDate';



export default function VictoryCard({victoryData, offset, animationDur}) {

    const parseDescr = (descr) => {
        if (descr.length > 30) {
            return `${descr.slice(0,28)}...`
        }
        return descr
    }

    if (victoryData) {
        return (
        <div className={`w-64 h-max absolute ${offset} rounded-xl shadow animate-lighthouse bg-gray-100`} style={{'animationDuration': animationDur}}>
            <div className="w-full h-full relative flex flex-col justify-between rounded-xl bg-gray-100">
                <div>
                    <h1 className={`p-2 text-xl rounded-xl border-b border-gray-400 bg-${victoryData.color}-200`}>{victoryData.title}</h1>
                    <p className="pl-4 py-2">{parseDescr(victoryData.description)}</p>
                </div>
                <div className="flex justify-between items-center p-2">
                    <p>@{victoryData.author}</p>
                    <p>{parseDate(victoryData.date_created)}</p>
                </div>
            </div>
        </div>
        )
    }
    return null;
}