import Link from 'next/link';
import classes from './Header.module.css';
import { HeaderMenu } from "./ui/header-menu/HeaderMenu";

export const Header = () => {
    return (
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>PD Project</Link>
            <HeaderMenu />
        </header>
    )
};
