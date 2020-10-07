import React, { useState } from "react";
import { AHSProjectForm, AHSProjectTable } from "../../elements";
import {
    Drawer,
    Form,
    Button,
    Col,
    Row,
    Input,
    Select,
    DatePicker,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AHSProject = (props) => {
    const [showAHSProjectForm, setShowAHSProjectForm] = useState(false);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h4>This is AHS Sumber</h4>
                <Button
                    type="primary"
                    className="d-flex p-2 align-items-center"
                    onClick={() => {
                        setShowAHSProjectForm(!showAHSProjectForm);
                    }}
                >
                    <PlusOutlined /> New AHS Project Record
                </Button>
            </div>

            {/* <AHSProjectTable /> */}

            <AHSProjectForm
                showDrawer={() => {
                    setShowAHSProjectForm(true);
                }}
                onClose={() => {
                    setShowAHSProjectForm(false);
                }}
                visible={showAHSProjectForm}
            />
        </>
    );
};

export default AHSProject;
