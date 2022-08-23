import React from 'react';
import './Experts.css';

import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Will Smith', img: expert1, expertize: '-Engine Expert-' },
    { id: 2, name: 'Chris Rock', img: expert2, expertize: '-polish Expert-' },
    { id: 3, name: 'Dwayne Rock', img: expert3, expertize: '-Coloring Expert-' },
    { id: 4, name: 'Messy Vai', img: expert4, expertize: '-Wheel Expert-' },
    { id: 5, name: 'Ronaldo Bro', img: expert5, expertize: '-Speed Expert-' },
    { id: 6, name: 'Stachy Jhonson', img: expert6, expertize: '-Alrounder Expert-' },
]


const Experts = () => {
    return (
        <div id='experts' className='expert-container'>
            <h2 className='text-primary m-5'>Our Expert Mechanics</h2>
            <div className='row g-5'>
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }

            </div>

        </div>
    );
};

export default Experts;