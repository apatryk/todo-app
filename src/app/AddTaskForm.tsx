import 'antd/dist/antd.css';

import { Button, DatePicker, Form, Input, Modal } from 'antd';
import React, { useState } from 'react';

import { addTask } from '../lib/task';

export const AddTaskForm: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onFinish = (values: any) => {
        addTask(values);
        window.location.reload();
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Button onClick={showModal} type="primary">Add New Task</Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[]}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Task title"
                        name="title"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Pick date"
                        name="dateString"
                        rules={[{ required: true }]}
                    >
                        <DatePicker format="YYYY-MM-DD" />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Add task
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default AddTaskForm;
