import React from 'react';
import { Select, Form, Input, Upload, Button } from 'antd';

import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;
const FileSelect = () => {
    return <><h2>Upload files here</h2>

        <Form layout="vertical">
            <Form.Item label="Group Name">
                <Select defaultValue="Singer Community" style={{ width: 200 }}>
                    <Option value="Rap Community">Rap Community</Option>
                    <Option value="Singer Community">Singer Community</Option>
                    <Option value="Theatre Community">Theatre Community</Option>
                    <Option value="Commedy Community">Commedy Community</Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="upload1"
                label="Upload the Posts file"
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button>
                        <UploadOutlined /> Click to upload
          </Button>
                </Upload>
            </Form.Item>
            <Form.Item
                name="upload2"
                label="Upload the Members file"
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button>
                        <UploadOutlined /> Click to upload
          </Button>
                </Upload>
            </Form.Item>
            <Form.Item
                name="upload3"
                label="Upload the Members request file"
                valuePropName="fileList"
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button>
                        <UploadOutlined /> Click to upload
          </Button>
                </Upload>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form.Item>
        </Form>
    </>
}

export default FileSelect;