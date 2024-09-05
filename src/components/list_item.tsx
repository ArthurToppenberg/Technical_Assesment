import style from '../styles/list_item.module.css';
import {Laws_English_Data} from '../pages/api/getLaws';
import ListItemPopup from './list_item_popup';
import { useState } from 'react';

interface ListItemProps {
    data: Laws_English_Data;
}

/**
 * ListItem component
 * @param data - The data to display in the list item.
 */
const ListItem: React.FC<ListItemProps> = ({data}) => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopupClick = () => {
        setShowPopup(true);
    };

    return (
        <div className={style.list_item}>
            <div className={style.bar}>
                <div className={style.info_box}>{data.nummer}</div>
            </div>
            <div className={style.bar}>
                <p className={style.title}>{data.titel}</p>
            </div>
            <div className={style.bottom_bar}>
                <p className={style.popup_link} onClick={handlePopupClick}>Læs mere</p>
            </div>
            {showPopup && <ListItemPopup data={data} showPopup={showPopup} setShowPopup={setShowPopup} />}
        </div>
    );
}

export default ListItem;