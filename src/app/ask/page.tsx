'use client'

import { Button, Input, Skeleton, message } from 'antd';
import { EnterOutlined } from '@ant-design/icons';
import { PageContainer } from '@/widgets/page-container/PageContainer';

import classes from './page.module.css';
import { useState } from 'react';

export default function Home() {
  const [messageApi, contextHolder] = message.useMessage();

  const [answerDone, setAnswerDone] = useState<boolean>(false);
  const [hasLoading, setHasLoading] = useState<boolean>(false)

  const clickHandler = () => {
    messageApi.open({
      type: 'success',
      content: 'Ваш запрос отправлен. Подождите немного'
    })

    setAnswerDone(false);
    setHasLoading(true);

    setTimeout(() => {
      setAnswerDone(true);
      setHasLoading(false);
    }, 2500);
  };

  return (
    <PageContainer>
      {contextHolder}
      <div className={classes.main}>
        <Input size="large" placeholder='Введите запрос' />
        <Button size="large" type='primary' icon={<EnterOutlined />} onClick={clickHandler} loading={hasLoading}>Отправить</Button>
        {
          answerDone &&
          <p className={classes.answer}>
            Крутой ответ. Длина 5см, например. (На самом деле это мок, и никакого запроса не было)
          </p>
        }
        {
          hasLoading &&
          <Skeleton paragraph={{ rows: 3 }} />
        }
      </div>
    </PageContainer>
  )
}
