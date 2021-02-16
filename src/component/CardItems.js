import React from 'react'

function CardItems({monsters,searchContent}) {
    return (
        <div className="flex flex-row flex-wrap mx-auto  justify-center  text-center">
            {
            monsters.length >0 ? monsters.map(mo=>(
                <div key={mo.id} className="w-32 p-2 m-1 bg-green-200  border border-green-300 hover:border-green-500">
                    <img src={`https://robohash.org/${mo.id}?set=set3&size=180x180`} alt="Monster"/>
                    <h6 className="text-sm">{mo.name}</h6>
                </div>
            )):
            searchContent.length>0? <h1>No Monster Found</h1>:<></>
            }
        </div>
    )
}

export default CardItems
