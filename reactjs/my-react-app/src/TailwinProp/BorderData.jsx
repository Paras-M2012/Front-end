import React from 'react'

function BorderData() {
    return (
        <div>
            <h1 className='text-4xl bg-red-700'>This is Border data</h1>
            <h1 className='text-5xl bg-blue-700'>you can apply tailwind property in this tag directly with classname</h1>
            <h1 className='text-6xl bg-amber-700'>Hello this is property</h1>
            <br /><br />
            <h1 className='text-3xl bg-sky-600 border-8 border-dotted'>You can also apply different border type</h1>
            <br /><br />
            <h1 className='text-3xl outline-2 outline-amber-200'>Hello this border</h1>
            <h1 className='text-3xl outline-4 outline-red-500'>Hello this border</h1>
            <h1 className='text-3xl outline-4 outline-gray-500'>Hello this border</h1>
            <br /><br />
            <div className="main bg-green-500 p-18 border-4 outline-4 border-amber-300 outline-lime-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis blanditiis maiores, temporibus architecto asperiores qui et dolore nostrum voluptatibus consequuntur ex voluptates iure necessitatibus! Sapiente illum fuga maiores quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, repudiandae nulla consequatur aperiam libero, nisi illum, explicabo non aliquam voluptas cum sequi at repellat quibusdam magni ipsa! Quae, id architecto.
            </div>
        </div>
    )
}

export default BorderData