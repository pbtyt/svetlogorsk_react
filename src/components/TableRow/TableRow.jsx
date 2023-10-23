import React from 'react'

const TableRow = ( { data } ) => {
  return (
    <>
        <tr>
            <td data-title="Название">{data.name}</td>
            <td data-title="Год Разрушения">{data.brokeDate}</td>
            <td data-title="Домов до войны">{data.houseBeforeWar}</td>
            <td data-title="Людей до войны">{data.peopleBeforeWar}</td>
            <td data-title="Разрушено Домов">{data.brokeHouse}</td>
            <td data-title="Убито людей">{data.peopleKills}</td>
        </tr>
    </>
  )
}

export default TableRow