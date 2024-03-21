import React, { useState, useEffect, useRef } from 'react'
import styles from './SearchPage.module.css'

import villageData from '../../data/villages.json'

import Header from '../../components/Header/Header'
import TableRow from '../../components/TableRow/TableRow'


const SearchPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [filterValue, setFilterValue] = useState({ "brokeDate": "inc" })
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState([])
    const [filterType, setFilterType] = useState("inc")
    const [isCheckedFirst, setIsCheckedFirst] = useState(true);
    const [isCheckedSecond, setIsCheckedSecond] = useState(false);
    
    const [filterTitle, setFilterTitle] = useState("");

    const setCheckboxState = (filterType = "inc", firstState = true, secondState = false) => {
        // setFilterType(filterType);
        setIsCheckedFirst(firstState);
        setIsCheckedSecond(secondState);
    }; 

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

        switch(Object.keys(filterValue)[0])
        {
            case "brokeDate":
                setFilterTitle("году разрушения");
                break;

            case "houseBeforeWar":
                setFilterTitle("кол-ву домов до войны");
                break;
            
            case "peopleBeforeWar":
                setFilterTitle("кол-ву людей до войны");
                break;

            case "brokeHouse":
                setFilterTitle("кол-ву разрушененных домов");
                break;

            case "peopleKills":
                setFilterTitle("кол-ву убитых людей");
                break;
            
            default: break;
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
                            Сортировать по: {filterTitle}
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
                        <input type="checkbox" checked={isCheckedFirst} onClick={()=>{
                            setCheckboxState("inc", !isCheckedFirst, false);
                            setFilterType("inc");
                            
                            setFilterValue(prev => {
                                return {[Object.keys(prev)[0]]: "inc"};
                            })

                            console.log(filterValue);}
                        }/>
                        <h5>Возрастание</h5>
                    </div>
                    <div className="checkbox" style={{display: 'flex', gap: '.45rem'}}>
                        <input type="checkbox" checked={isCheckedSecond} onClick={()=>{
                            setCheckboxState("dec", false, !isCheckedSecond);
                            setFilterType("dec");
                            
                            setFilterValue(prev => {
                                return {[Object.keys(prev)[0]]: "dec"};
                            })

                            
                            console.log(filterValue);}
                        }/>
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
                                Год Разрушения
                            </th>
                            <th>
                                Домов до войны
                            </th>
                            <th>
                                Людей до войны
                            </th>
                            <th>
                                Разрушено Домов
                            </th>
                            <th>
                                Убито людей
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