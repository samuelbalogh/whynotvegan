import Link from 'next/link';

export default function AnimalNumbersPage() {
    const data = {
        poultry: {
            title: '🐔 Poultry (Chickens, Ducks, Turkeys)',
            chickens: '~70–75 billion',
            ducks: '~3 billion',
            turkeys: '~700 million',
            total: '~75–80 billion',
        },
        fish: {
            title: '🐟 Fish and Aquatic Animals',
            wildCaught: '~0.8–2.3 trillion',
            farmed: '~120–170 billion',
            total: '~1–2.5 trillion',
            note: 'Estimates vary widely as most are counted by weight.',
        },
        pigs: { title: '🐷 Pigs', total: '~1.5 billion' },
        cattle: { title: '🐄 Cattle (Beef + Dairy)', total: '~300 million' },
        sheep: { title: '🐑 Sheep', total: '~550 million' },
        goats: { title: '🐐 Goats', total: '~450 million' },
        rabbits: { title: '🐇 Rabbits', total: '~250 million' },
        otherLand: {
            title: '🦃 Other Land Animals (Camels, Buffaloes, Horses, etc.)',
            total: '~100–200 million combined',
        },
        grandTotal: {
            land: '~85–90 billion',
            aquatic: '~1–2.5 trillion',
        },
    };

    const references = [
        { title: 'FAO Livestock Production Data', url: 'https://www.fao.org/faostat/en/#data/QCL' },
        { title: 'Fish Count', url: 'https://fishcount.org.uk/' },
        { title: 'Our World in Data – Meat Production', url: 'https://ourworldindata.org/meat-production' },
    ];

    return (
        <main className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">Global Animal Numbers Killed for Food Annually</h1>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                Approximate breakdown based on latest available data (around 2021-2023).
            </p>

            <div className="space-y-8">
                {/* Poultry */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-800">{data.poultry.title}</h2>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Chickens: <span className="font-medium">{data.poultry.chickens}</span></li>
                        <li>Ducks: <span className="font-medium">{data.poultry.ducks}</span></li>
                        <li>Turkeys: <span className="font-medium">{data.poultry.turkeys}</span></li>
                        <li className="pt-2 border-t border-gray-100 mt-2">Total Poultry: <span className="font-bold text-orange-900">{data.poultry.total}</span></li>
                    </ul>
                </div>

                {/* Fish */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-800">{data.fish.title}</h2>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Wild-Caught Fish: <span className="font-medium">{data.fish.wildCaught}</span></li>
                        <li>Farmed Fish: <span className="font-medium">{data.fish.farmed}</span></li>
                        <li className="pt-2 border-t border-gray-100 mt-2">Total Fish: <span className="font-bold text-blue-900">{data.fish.total}</span></li>
                        <li className="text-xs italic text-gray-500 mt-1">({data.fish.note})</li>
                    </ul>
                </div>

                {/* Other Land Animals (Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(data)
                        .filter(([key]) => !['poultry', 'fish', 'grandTotal'].includes(key))
                        .map(([key, animal]) => (
                            <div key={key} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">{animal.title}</h3>
                                <p className="text-2xl font-bold text-red-700">{animal.total}</p>
                            </div>
                        ))}
                </div>

                {/* Grand Total */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 shadow-sm text-center mt-10">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-red-800">🧮 Total Estimated Animals Killed Annually</h2>
                    <div className="md:flex md:justify-center md:space-x-8 space-y-3 md:space-y-0">
                        <p className="text-lg"><span className="font-bold">Land Animals:</span> <span className="text-red-900 font-semibold">{data.grandTotal.land}</span></p>
                        <p className="text-lg"><span className="font-bold">Aquatic Animals:</span> <span className="text-blue-900 font-semibold">{data.grandTotal.aquatic}</span></p>
                    </div>
                </div>

                {/* References */}
                <div className="mt-12 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-3 text-gray-700 text-center">References</h3>
                    <ul className="text-center space-y-1 text-sm">
                        {references.map((ref, index) => (
                            <li key={index}>
                                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    {ref.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-10 text-center text-sm text-gray-600">
                <p>Want a chart or CSV version of this data? <a href="#" className="text-blue-600 hover:underline">Let us know</a>.</p>
            </div>
        </main>
    );
}
