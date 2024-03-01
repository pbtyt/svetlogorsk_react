import React, { useState, useEffect } from 'react'
import styles from './SearchPage.module.css'

import villageData from '../../data/villages.json'

import Header from '../../components/Header/Header'
import TableRow from '../../components/TableRow/TableRow'


const SearchPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [filterValue, setFilterValue] = useState({ "": "dec" })
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState([])
    const [filterType, setFilterType] = useState("inc")
    const [isChecked, setIsChecked] = useState(true);

    window.scrollTo(0, 0);

    useEffect(() => {
        if (searchValue !== ' ')
            setData(villageData.filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase())))

        //! FILTER
        const filterValueKey = Object.keys(filterValue)[0] //!!!Временно, поменять на оптимизированную
        const isInc = filterValue[filterValueKey] === "inc"

        if (filterValueKey.length > 0) {
            setData(prevData => prevData.sort((a, b) => a[filterValueKey] - b[filterValueKey]))
            if (!isInc)
                setData(prevData => prevData.reverse())
        }
    }, [searchValue, filterValue])
    return (
        <div className={styles.searchWrapper}>
            <Header activeButtonIndex={2} bgColor="#00886d" />
            <div className={styles.searchInputWrapper}>
                <input type="text" placeholder='Введите название...' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
            </div>

            <div className={styles.filter} style={{ margin: '1rem 0rem', display: 'flex', gap: '1rem' }}>

                <div className={styles.dropdown} style={{cursor: 'pointer'}}>
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        style={{ padding: '.5rem 2rem', backgroundColor: '#d6d4d4', color: 'black', fontWeight: '500', borderRadius: '10px' }} >
                            Сортировать по: 
                    </button>
                    {isOpen &&
                        (
                            <ul className={styles.menu}>
                                <li className={styles.menuItem} 
                                    onClick={() => {
                                                setIsOpen(false)
                                                setFilterValue({ "brokeDate" : filterType });
                                            }} >
                                        Году разрушения
                                </li>
                                <li className={styles.menuItem} 
                                    onClick={() => {
                                                setIsOpen(false)
                                                setFilterValue({ "peopleBeforeWar" : filterType });
                                            }} >
                                        Людей до войны
                                </li>
                                <li className={styles.menuItem} 
                                    onClick={() => {
                                                setIsOpen(false)
                                                setFilterValue({ "houseBeforeWar" : filterType });
                                            }} >
                                        Домов до войны
                                </li>
                                <li className={styles.menuItem} 
                                    onClick={() => {
                                                setIsOpen(false)
                                                setFilterValue({ "brokeHouse" : filterType });
                                            }} >
                                        Разрушено домов
                                </li>
                                <li className={styles.menuItem} 
                                    onClick={() => {
                                                setIsOpen(false)
                                                setFilterValue({ "peopleKills" : filterType });
                                            }} >
                                        Убито людей
                                </li>
                            </ul>
                        )
                    }
                </div>
                
                <div className="checkboxes">
                    <div className="checkbox" style={{display: 'flex', gap: '.45rem'}}>
                        <input type="checkbox" checked={isChecked} onClick={()=>{setFilterType("inc"); setIsChecked(!isChecked)}}/>
                        <h5>Возрастание</h5>
                    </div>
                    <div className="checkbox" style={{display: 'flex', gap: '.45rem'}}>
                        <input type="checkbox" checked={!isChecked} onClick={()=>{setFilterType("dec"); setIsChecked(!isChecked)}}/>
                        <h5>Убывание</h5>
                    </div>
                </div>
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
                                <div style={{ display: "flex", gap: ".5rem", padding: ".3rem", alignItems: "center", justifyContent: "center" }}>
                                    Год Разрушения
                                    {/* !!!FILTER */}
                                    <button style={{ background: "none", color: "white", fontWeight: "600", fontSize: "16px" }} onClick={() => { setFilterValue({ "brokeDate": "inc" }) }} >^</button>
                                    <button style={{ rotate: "Z 180deg", background: "none", color: "white", fontWeight: "600", fontSize: "16px" }} onClick={() => { setFilterValue({ "brokeDate": "dec" }) }} >^</button>
                                </div>
                            </th>
                            <th>
                                <div style={{ display: "flex", gap: ".5rem", padding: ".3rem", alignItems: "center", justifyContent: "center" }}>
                                    Домов до войны
                                    {/* !!!FILTER */}
                                    <button style={{ background: "none", color: "white", fontWeight: "600", fontSize: "16px" }} onClick={() => { setFilterValue({ "houseBeforeWar": "inc" }) }} >^</button>
                                    <button style={{ rotate: "Z 180deg", background: "none", color: "white", fontWeight: "600", fontSize: "16px" }} onClick={() => { setFilterValue({ "houseBeforeWar": "dec" }) }} >^</button>
                                </div>
                            </th>
                            <th>
                                <div style={{ display: "flex", gap: ".5rem", padding: ".3rem", alignItems: "center", justifyContent: "center" }}>
                                    Людей до войны
                                    {/* !!!FILTER */}
                                    <button style={{ background: "none", color: "white", fontWeight: "600", fontSize: "16px" }} onClick={() => { setFilterValue({ "peopleBeforeWar": "inc" }) }} >^</button>
                                    <button style={{ rotate: "Z 180deg", background: "none", color: "white", fontWeight: "600", fontSize: "16px" }} onClick={() => { setFilterValue({ "peopleBeforeWar": "dec" }) }} >^</button>
                                </div>
                            </th>
                            <th>
                                <div style={{ display: "flex", gap: ".5rem", padding: ".3rem", alignItems: "center", justifyContent: "center" }}>
                                    Разрушено Домов
                                    {/* !!!FILTER */}
                                    <button style={{ background: "none", color: "white", fontWeight: "600", fontSize: "16px" }} onClick={() => { setFilterValue({ "brokeHouse": "inc" }) }} >^</button>
                                    <button style={{ rotate: "Z 180deg", background: "none", color: "white", fontWeight: "600", fontSize: "16px" }} onClick={() => { setFilterValue({ "brokeHouse": "dec" }) }} >^</button>
                                </div>
                            </th>
                            <th>
                                <div style={{ display: "flex", gap: ".5rem", padding: ".3rem", alignItems: "center", justifyContent: "center" }}>
                                    Убито людей
                                    {/* !!!FILTER */}
                                    <button style={{ background: "none", color: "white", fontWeight: "600", fontSize: "16px" }} onClick={() => { setFilterValue({ "peopleKills": "inc" }) }} >^</button>
                                    <button style={{ rotate: "Z 180deg", background: "none", color: "white", fontWeight: "600", fontSize: "16px" }} onClick={() => { setFilterValue({ "peopleKills": "dec" }) }} >^</button>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((data_value, index) => <TableRow data={data_value} key={index} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SearchPage