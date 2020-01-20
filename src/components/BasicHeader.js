import React from 'react';

function BasicHeader() {
    const timeOfDay = new Date();
    const hours = timeOfDay.getHours();
    const year = timeOfDay.getFullYear();

    return (
        <div className="basic-header">
            <p>This is the header of the page! It's currently {hours} o'clock and the year is {year}.</p>
        </div>
    );
}

export default BasicHeader;