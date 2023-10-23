import React, { useState, useEffect } from 'react'

import styles from './SearchPage.module.css'

import TableRow from '../../components/TableRow/TableRow'
import villageData from '../../data/villages.json'

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [query, setQuery] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        setData(villageData.filter(el => el.name.toLowerCase().includes(query.toLowerCase())))
    }, [query])

    return (
        <div className={styles.wrapper}>
            <div className={styles.searchInputWrapper}>
                <input type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} />

                <button onClick={() => setQuery(searchValue)}>Искать</button>
            </div>

            <div className={styles.searchInfo}>
                <h3>Всего найдено: {data.length}</h3>

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
                        data.map((data, index) => <TableRow data={data} key={index} />)
                    }

                </table>
            </div>
        </div>
    )
}

export default SearchPage