import React from 'react'
import { useState } from 'react'

import styles from './DropDown.module.css'

const DropDown = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.dropdown}>
			<button onClick={()=>setIsOpen(!isOpen)}>
                Folder
            </button>

			{isOpen && (
				<ul className={styles.menu}>
					<li className={styles.menuItem}>
						<button>Menu1</button>
					</li>

					<li className={styles.menuItem}>
						<button>Menu2</button>
					</li>
				</ul>
			)}
		</div>
	)
}

export default DropDown