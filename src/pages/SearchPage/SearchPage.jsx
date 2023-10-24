import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './SearchPage.module.css'

import TableRow from '../../components/TableRow/TableRow'
import villageData from '../../data/villages.json'

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        if (searchValue !== ' ')
            setData(villageData.filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase())))
    }, [searchValue])

    return (
        <div className={styles.wrapper}>
            <div className={styles.searchInputWrapper}>
                <input type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
            </div>

            <div className={styles.searchInfo}>
                {
                    searchValue.length !== 0 ? <h4>Всего найдено: {data.length}</h4> : <></>
                }
                

                <table>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Год Разрушения</th>
                            <th>Домов до войны</th>
                            <th>Людей до войны</th>
                            <th>Разрушено Домов</th>
                            <th>Убито людей</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((data, index) => <TableRow data={data} key={index} />)
                        }
                    </tbody>
                </table>
            </div>

            <Link to={"/svetlogorsk_react/"}>
                <button>
                    На главную
                </button>
            </Link>
        </div>
    )
}

export default SearchPage