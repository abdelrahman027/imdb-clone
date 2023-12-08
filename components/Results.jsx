import React from 'react'
import Card from './Card'

const Results = ({ results }) => {
    return (
        <div className='grid grid-cols-1 items-center sm:grid-cols-2 max-w-6xl mx-auto lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-4 gap-4'>
            {results.map((result) => (
                <Card key={result.id} result={result} />
            ))}
        </div>
    )
}

export default Results