import style from '../styles/list_item_popup.module.css';
import { Laws_English_Data } from '../pages/api/getLaws';
import { useState } from 'react';

interface ListItemPopupProps {
    data: Laws_English_Data;
    showPopup: boolean;
    setShowPopup: (show: boolean) => void;
}

/**
 * ListItemPopup component
 * @param data - The data to display in the list item popup.
 */
const ListItemPopup: React.FC<ListItemPopupProps> = ({ showPopup, setShowPopup, data }) => {
    const handleClick = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <div className={style.click_away} onClick={handleClick}></div>
            <div className={style.list_item_popup}>
                <div className={style.bar}>
                    <h1 className={style.title}>{data.titelkort}</h1>
                    <div className={style.info_box_red}>{data.nummer}</div>
                </div>
                <div className={style.content}>
                    <p className={style.text}>{data.titel}</p>
                    <div className={style.horizontal_divider}></div>
                    <p className={style.text}>{data.resume}</p>
                </div> 
            </div>
        </div>
    );
}

export default ListItemPopup;