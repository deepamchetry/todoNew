import React from 'react'

export default function ListRender({ filteredList }) {
    return (
        <>
            {filteredList.map((list) => (
                <div key={list.number}>
                    <div>
                        {list.title} ({list.date.toLocaleDateString()})
                    </div>
                </div>
            ))}
        </>
    )
}
