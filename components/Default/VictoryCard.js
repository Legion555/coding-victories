import Link from 'next/link';

export default function VictoryCard({victoryData, color}) {
    return (
        <div className="w-10/12 md:w-5/12 lg:w-3/12 xl:w-2/12 h-64
            relative rounded-xl shadow text-gray-800">
            <div className={`w-full h-full absolute top-2 left-2 rounded-xl shadow bg-${color}-600`} />
            <div className="w-full h-full relative flex flex-col justify-between rounded-xl bg-gray-100">
                <div>
                    <h1 className={`p-2 text-2xl rounded-xl border-b border-gray-400 bg-${color}-200`}>{victoryData.title}</h1>
                    <p className="pl-4 py-2 text-xl">{victoryData.description}</p>
                </div>
                <div className="flex justify-between items-center p-2">
                    <Link href="/u/[id]" as={`/u/${victoryData.authorId}`}><a>@{victoryData.author}</a></Link>
                    <p>{Date(victoryData.date_created).slice(0,16)}</p>
                </div>
            </div>
        </div>
    )
}