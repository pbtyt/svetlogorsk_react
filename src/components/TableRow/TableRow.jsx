import React from 'react'

const TableRow = ( { data } ) => {
  return (
    <>
        <tr>
            <td>{data.name}</td>
            <td>{data.brokeDate}</td>
            <td>{data.houseBeforeWar}</td>
            <td>{data.peopleBeforeWar}</td>
            <td>{data.brokeHouse}</td>
            <td>{data.peopleKills}</td>
        </tr>
    </>
  )
}

export default TableRow