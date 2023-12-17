'use client'

import { PageContainer } from "@/widgets/page-container/PageContainer";
import { Button } from "antd";

import classes from './page.module.css';

export default function Home() {
    return (
        <PageContainer>
            <div className={classes.main}>
                <p className={classes.desc}>
                    Задайте нужные вопросы системе
                </p>
                <Button type="primary" href="/ask" size="large">Задать</Button>
            </div>
        </PageContainer>
    );
}