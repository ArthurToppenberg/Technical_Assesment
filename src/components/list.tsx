import style from '../styles/list.module.css';
import {Laws_English_Data} from '../pages/api/getLaws';
import ListItem from './list_item';

interface ListProps {
    title: string;
    data: Laws_English_Data[];
}

/**
 * List component
 * On the top of the list is the title, and a small box which shows the total number of items in the list.
 * Below the title and counter there is a scrollable box which shows the data in the list.
 * @param title - The title of the list.
 * @param data - The data to display in the list.
 */
const List: React.FC<ListProps> = ({title, data}) => {
    return (
        <div className={style.list}>
            <div className={style.bar}>
                <h2 className={style.heading}>{title}</h2>
                <div className={style.counter}>{data.length}</div>
            </div>
            <div className={style.list_content}>
                {data.map((item, index) => (
                    <ListItem key={index} data={item} />
                ))}
            </div>
        </div>
    );
}

export default List;