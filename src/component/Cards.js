import React from 'react'
import CardItems from "./CardItems"
function Cards({monster,searchContent}) {
    return (
        <div className="w-10/12  mx-auto">
            <CardItems key={monster.id} searchContent={searchContent} monsters={monster}></CardItems>
        </div>
    )
}

export default Cards
