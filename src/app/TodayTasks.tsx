import { Button, DatePicker, DatePickerProps, List, Modal } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

import { getTodayTasks, tasksType, updateTask } from '../lib/task';

export const TodayTasks: React.FC = () => {
    const [result, setResult] = useState<Array<tasksType>>([]);
    const [modalItem, setModalItem] = useState<tasksType>();
    const [updatedDate, setUpdatedDate] = useState<String | null>();
    const [isModalVisible, setIsModalVisible] = useState(false);
    useEffect(() => {
        (async () => {
            const todayDate = moment().format('YYYY-MM-DD');
            const tasks = await getTodayTasks(todayDate);
            setResult(tasks.data)
        })();
    }, []);
    const showModal = (item: tasksType) => {
        setIsModalVisible(true);
        setModalItem(item)
    };

    const handleOk = () => {
        setIsModalVisible(false);
        updateTask(modalItem?.id, updatedDate)
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        setUpdatedDate(dateString)
    }

    return (
        <>
            <List
                size="small"
                dataSource={result}
                renderItem={(item) => (
                    <List.Item>
                        <Button type="text" onClick={() => showModal(item)}>
                            {item.title}
                        </Button>
                    </List.Item>)}

            />
            <Modal destroyOnClose={true} title={modalItem?.title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {modalItem?.description}
                <DatePicker onChange={onChange} defaultValue={moment(modalItem?.date, 'YYYY-MM-DD')} />
            </Modal>
        </>
    )
}
