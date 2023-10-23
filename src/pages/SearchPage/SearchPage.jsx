import React, { useState, useEffect } from 'react'

import styles from './SearchPage.module.css'

import TableRow from '../../components/TableRow/TableRow'
import villageData from '../../data/villages.json'

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState('')

    useEffect(()=>{
        console.log(searchValue)
    }, [searchValue])

  return (
    <div className={styles.wrapper}>
        <div className={styles.searchInputWrapper}>
            <input type="text" value={searchValue} onChange={ e => setSearchValue(e.target.value) }/>

            <button>Искать</button>
        </div>

        <div className={styles.searchInfo}>
            <h3>Всего найдено: 77</h3>

            <table>
                <tr>
                    <th>Название</th>
                    <th>Год Разрушения</th>
                    <th>Домов до войны</th>
                    <th>Людей до войны</th>
                    <th>Разрушено Домов</th>
                    <th>Убито людей</th>
                </tr>

                {
                    villageData.map( data => <TableRow data={data}/> )
                }

            </table>
        </div>
    </div>
  )
}

export default SearchPage