import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const categories = items.reduce((prev, curr) => {
	if (!prev.includes(curr.category)) {
		prev.push(curr.category)
	}
	return prev
}, [])

function App() {
	const [menuItems, setMenuItems] = useState(items)

	const filterItems = (category) => {
		if (category === 'all') {
			setMenuItems(items)
		} else {
			setMenuItems(items.filter((item) => item.category === category))
		}
	}

	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>our menu</h2>
					<div className="underline"></div>
				</div>
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	)
}

export default App
