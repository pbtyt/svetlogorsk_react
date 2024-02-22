import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './SearchPage.module.css'

import Header from '../../components/Header/Header'
import TableRow from '../../components/TableRow/TableRow'
import DropDown from '../../components/DropDown/DropDown'

import villageData from '../../data/villages.json'

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [filterValue, setFilterValue] = useState({"": "dec"})
    const [data, setData] = useState([])

    window.scrollTo(0, 0);

    useEffect(() => {
        if (searchValue !== ' ')
            setData(villageData.filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase())))
        
        //! FILTER
        const filterValueKey = Object.keys(filterValue)[0] //!!!Временно, поменять на оптимизированную
        const isInc = filterValue[filterValueKey] === "inc"

        if (filterValueKey.length > 0){
            setData( prevData => prevData.sort( (a, b) => a[filterValueKey] - b[filterValueKey] ) )
            if (!isInc)
                setData( prevData => prevData.reverse() )
        }
    }, [searchValue, filterValue])
    return (
        <div className={styles.searchWrapper}>
            <Header activeButtonIndex={2} bgColor="#00886d"/>
            <div className={styles.searchInputWrapper}>
                <input type="text" placeholder='Введите название...' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
            </div>
            <div className={styles.searchInfo}>
                {
                    searchValue.length !== 0 ? <h4>Всего найдено: {data.length}</h4> : <></>
                }
                

                <table>
                    <thead>
                        <tr>
                            <th>
                                Название
                            </th>
                            <th>
                                <div style={{display: "flex", gap: ".5rem", padding: ".3rem", alignItems: "center", justifyContent: "center"}}>
                                    Год Разрушения
                                    {/* !!!FILTER */}
                                    <button style={{background: "none", color: "white", fontWeight: "600", fontSize: "16px"}} onClick={ ()=>{setFilterValue( {"brokeDate": "inc"} )} } >^</button>
                                    <button style={{rotate: "Z 180deg", background: "none", color: "white", fontWeight: "600", fontSize: "16px"}} onClick={ ()=>{setFilterValue( {"brokeDate": "dec"} )} } >^</button>
                                </div>
                            </th>
                            <th>
                                <div style={{display: "flex", gap: ".5rem", padding: ".3rem", alignItems: "center", justifyContent: "center"}}>
                                    Домов до войны
                                    {/* !!!FILTER */}
                                    <button style={{background: "none", color: "white", fontWeight: "600", fontSize: "16px"}} onClick={ ()=>{setFilterValue( {"houseBeforeWar": "inc"} )} } >^</button>
                                    <button style={{rotate: "Z 180deg", background: "none", color: "white", fontWeight: "600", fontSize: "16px"}} onClick={ ()=>{setFilterValue( {"houseBeforeWar": "dec"} )} } >^</button>
                                </div>
                            </th>
                            <th>
                                <div style={{display: "flex", gap: ".5rem", padding: ".3rem", alignItems: "center", justifyContent: "center"}}>
                                    Людей до войны
                                    {/* !!!FILTER */}
                                    <button style={{background: "none", color: "white", fontWeight: "600", fontSize: "16px"}} onClick={ ()=>{setFilterValue( {"peopleBeforeWar": "inc"} )} } >^</button>
                                    <button style={{rotate: "Z 180deg", background: "none", color: "white", fontWeight: "600", fontSize: "16px"}} onClick={ ()=>{setFilterValue( {"peopleBeforeWar": "dec"} )} } >^</button>
                                </div>
                            </th>
                            <th>
                                <div style={{display: "flex", gap: ".5rem", padding: ".3rem", alignItems: "center", justifyContent: "center"}}>
                                    Разрушено Домов
                                    {/* !!!FILTER */}
                                    <button style={{background: "none", color: "white", fontWeight: "600", fontSize: "16px"}} onClick={ ()=>{setFilterValue( {"brokeHouse": "inc"} )} } >^</button>
                                    <button style={{rotate: "Z 180deg", background: "none", color: "white", fontWeight: "600", fontSize: "16px"}} onClick={ ()=>{setFilterValue( {"brokeHouse": "dec"} )} } >^</button>
                                </div>
                            </th>
                            <th>
                                <div style={{display: "flex", gap: ".5rem", padding: ".3rem", alignItems: "center", justifyContent: "center"}}>
                                    Убито людей
                                    {/* !!!FILTER */}
                                    <button style={{background: "none", color: "white", fontWeight: "600", fontSize: "16px"}} onClick={ ()=>{setFilterValue( {"peopleKills": "inc"} )} } >^</button>
                                    <button style={{rotate: "Z 180deg", background: "none", color: "white", fontWeight: "600", fontSize: "16px"}} onClick={ ()=>{setFilterValue( {"peopleKills": "dec"} )} } >^</button>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((data_v, index) => <TableRow data={data_v} key={index} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SearchPage