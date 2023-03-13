import { Layout ,
    Form,
    Select,
    Button,
    Input,
} from 'antd';
import { useState } from 'react';

import './../../assets/less/App.less';
import '../../assets/less/StandardLayout.less';
import '../../assets/less/Feedback.less';
import { log } from '../../lib/utils';
import { publishMessage } from '../../lib/sns';

const { Header, Footer, Content } = Layout;


const LocationForm = (props: any) => {
    return (
        <Form.Item>
            <Form.Item
                name="url"
                label="Video Url"
                rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
            >
                <Input placeholder="https://www.youtube.com/watch?v=qjf9pGymiuo" />
            </Form.Item>
            <Form.Item
                name="xy"
                label="Location on Map"
                rules={[{ required: true }, { type: 'string', min: 6 }]}
            >
                <Input placeholder="e.g '123, 456'. You can get X,Y co-ordinates by clicking on the map location." />
            </Form.Item>
        </Form.Item>
    );
};

const FeatureForm = (props: any) => {
    return (
        <Form.Item>
            <Form.Item
                name="feature"
                label="Requested Feature"
                rules={[{ required: true }]}
            >
                <Input placeholder="Suggest a feature or an improvement to the site..." />
            </Form.Item>
        </Form.Item>
    );
};

const BugForm = (props: any) => {
    return (
        <Form.Item>
            <Form.Item
                name="bug"
                label="Bug Description"
                rules={[{ required: true }]}
            >
                <Input placeholder="Describe in as much detail as possible what the bug was and how it happened" />
            </Form.Item>
        </Form.Item>
    );
};


const GeneralForm = (props: any) => {
    return (
        <Form.Item>
            <Form.Item
                name="general"
                label="General Feedback"
                rules={[{ required: true }]}
            >
                <Input
                    placeholder="Comments..."
                />
            </Form.Item>
        </Form.Item>
    );
};


export const Feedback = (props: any) => {
    const [feedbackChoice, setFeedbackChoice] = useState('location');
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    function getFormType() {
        switch (feedbackChoice) {
            case 'location':
                return <LocationForm/>;
            case 'feature':
                return <FeatureForm/>;
            case 'bug':
                return <BugForm/>;
            case 'general':
                return <GeneralForm/>;
            default:
                return <LocationForm/>;
        }
    }

    async function handleSubmit(values: any) {
        setLoading(true);
        log(values, 'green');
        await publishMessage(values);
        setLoading(false);
    }

    return (
        <Layout className='layout'>
            <Header className='header'>Feedback</Header>
            <div id="mapBackground">
                <Content className='content'>
                    <Form
                        className='feedbackForm'
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 14 }}
                        layout="vertical"
                        size={'large'}
                        onFinish={handleSubmit}
                    >
                        <Form.Item id="feedbackSelector" className='formItem' label="Feedback Type">
                            <Select
                                defaultValue={'location'}
                                onSelect={(choice: string) => setFeedbackChoice(choice)}
                            >
                                <Select.Option value="location">Suggest a location</Select.Option>
                                <Select.Option value="feature">Suggest a feature</Select.Option>
                                <Select.Option value="bug">Report a bug</Select.Option>
                                <Select.Option value="general">General feedback</Select.Option>
                            </Select>
                            {getFormType()}
                        </Form.Item>
                        <Form.Item>
                            <Button
                                htmlType="submit"
                                type='primary'
                                className='feedbackSubmit'
                                loading={loading}
                            >
                        Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Content>
            </div>
            <Footer className='footer'>
                {/* Content */}
            </Footer>
        </Layout>
    );
};