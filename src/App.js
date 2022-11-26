import React from 'react';
import './index.css'
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './store/data';

function App() {
    const cards = data.map((item, i, data) => {
        return (
            <div>
                <Card
                    key = {item.id}
                    {...item}
                />
                {i + 1 === data.length ? null : <hr/>}
            </div>
        )
    })
    
    return (
        <div>
            <Navbar/>
            <div>
                {cards}
            </div>
        </div>
    )
}

export default App;