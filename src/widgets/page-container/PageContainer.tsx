import { FC, PropsWithChildren } from "react";
import classes from './PageContainer.module.css';

export const PageContainer: FC<PropsWithChildren> = props => {
    const {
        children
    } = props;

    return (
        <main className={classes.container}>
            {children}
        </main>
    );
}