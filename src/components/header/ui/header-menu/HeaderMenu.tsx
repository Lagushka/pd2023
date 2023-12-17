import { Button } from 'antd';
import { navItems } from './HeaderMenu.constants';
import classes from './HeaderMenu.module.css';

export const HeaderMenu = () => {
    return (
        <div className={classes.menu}>
            {
                navItems.map(item =>
                    <Button type='link' key={item.url} href={item.url}>{item.title}</Button>
                )
            }
        </div>
    )
};
