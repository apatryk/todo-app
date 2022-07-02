import { Button, List, Modal } from 'antd';
import React, { useEffect, useState } from 'react';

import { getTasks, tasksType } from '../lib/task';

export const TodayTasks: React.FC = () => {
    const [result, setResult] = useState<Array<tasksType>>([]);
    const [modalItem, setModalItem] = useState<tasksType>();
    const [isModalVisible, setIsModalVisible] = useState(false);
    useEffect(() => {
        (async () => {
            const tasks = await getTasks();
            setResult(tasks.data)
        })();
    }, []);
    const showModal = (item: tasksType) => {
        setIsModalVisible(true);
        setModalItem(item)
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <List
                size="small"
                dataSource={result}
                renderItem={(item) => (<List.Item><Button type="text" onClick={() => showModal(item)}>
                    {item.title}
                </Button></List.Item>)}

            />
            <Modal title={modalItem?.title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {modalItem?.description}
            </Modal>
        </>
    )
}