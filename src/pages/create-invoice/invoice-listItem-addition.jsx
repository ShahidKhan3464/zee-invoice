"use client";

import Image from "next/image";
import { Icons } from "@/common/assets";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Input, InputNumber } from "antd";
import { setAddItem, setEditableField, setUpdateItem } from "@/provider/features/create-invoice/create-invoice.slice";
const { TextArea } = Input;

const InvoiceListItemAddition = () => {
    const [form] = Form.useForm()
    const dispatch = useDispatch()
    const [formState, setFormState] = useState(false)
    const watchedValues = Form.useWatch('invoiceItems', form)
    const [fieldCalculatedValue, setFieldCalculatedValue] = useState('0.00')
    const { invoiceData, editableField, isInvoiceTax } = useSelector(state => state.createInvoice)
    const { items } = invoiceData

    const isNumberPositive = (rule, value, callback) => {
        if (value < 0) {
            callback("Value can't be negative")
        }
        else {
            callback()
        }
    }

    const submitEditableForm = () => {
        dispatch(setEditableField(null))
        const updatedItems = items.map(elem => {
            if (elem._id === editableField._id) {
                return {
                    ...elem,
                    item: editableField.item,
                    qty: editableField.qty,
                    rate: editableField.rate,
                    tax: editableField.tax,
                    description: editableField.description
                }
            }
            else {
                return elem
            }
        })
        dispatch(setUpdateItem(updatedItems))
    }

    const onFinish = (values) => {
        form.resetFields()
        setFormState(false)
        setFieldCalculatedValue('0.00')
        const finalObj = {
            ...values.invoiceItems[0],
            _id: Math.floor(Math.random() * 1000),
        }
        dispatch(setAddItem(finalObj))
    }

    const handleTaxValue = () => {
        if (watchedValues?.length && isInvoiceTax) {
            const calculatedValueWithoutTax = watchedValues[0]?.qty * watchedValues[0]?.rate
            const calculatedValueWithTax = calculatedValueWithoutTax * (watchedValues[0]?.tax / 100)
            const subTotal = calculatedValueWithTax + calculatedValueWithoutTax
            const checkNan = isNaN(subTotal)
            if (subTotal && !checkNan) {
                setFieldCalculatedValue(Math.floor(subTotal))
            }
            else if (calculatedValueWithoutTax) {
                setFieldCalculatedValue(calculatedValueWithoutTax)
            }
        }

        else if (watchedValues?.length && !isInvoiceTax) {
            const calculatedValue = (watchedValues[0]?.qty * watchedValues[0]?.rate)
            const checkNan = isNaN(calculatedValue)
            if (calculatedValue && !checkNan) {
                setFieldCalculatedValue(Math.floor(calculatedValue))
            }
        }
    }

    const handleSubmit = (addField, fields) => {
        if (!fields.length) {
            if (editableField) {
                submitEditableForm()
                return
            }
            addField()
        }
        else {
            setFormState(true)
        }
    }

    useEffect(() => {
        handleTaxValue()
    }, [isInvoiceTax, watchedValues])

    return (
        <div style={{ marginTop: '20px' }}>
            <Form
                form={form}
                autoComplete='off'
                onFinish={onFinish}
                initialValues={{ remember: true }}
                name='invoice_builder_page_table_form'
            >
                <Form.List name='invoiceItems'>
                    {(fields, { add, remove }, { errors }) => {
                        return (
                            <React.Fragment>
                                {fields.map(({ key, name, ...restField }) => {
                                    return (
                                        <>
                                            <div
                                                key={key}
                                                className='invoice_builder_page_table_form_fields'
                                            >
                                                <Form.Item
                                                    name={[name, "item"]}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "This field is required",
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder='Name of your product or service' />
                                                </Form.Item>

                                                <Form.Item
                                                    {...restField}
                                                    name={[name, "qty"]}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "This field is required",
                                                        },
                                                        {
                                                            validator: isNumberPositive,
                                                        },
                                                    ]}
                                                >
                                                    <InputNumber placeholder='1' />
                                                </Form.Item>

                                                <Form.Item
                                                    {...restField}
                                                    name={[name, "rate"]}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "This field is required",
                                                        },
                                                        {
                                                            validator: isNumberPositive,
                                                        },
                                                    ]}
                                                >
                                                    <InputNumber placeholder='$ 0.0' />
                                                </Form.Item>

                                                {isInvoiceTax && (
                                                    <Form.Item
                                                        {...restField}
                                                        name={[name, "tax"]}
                                                    // rules={[
                                                    //     {
                                                    //         required: true,
                                                    //         message: "This field is required",
                                                    //     },
                                                    //     {
                                                    //         validator: isNumberPositive,
                                                    //     },
                                                    // ]}
                                                    >
                                                        <InputNumber max='99' placeholder='% 0.0' />
                                                    </Form.Item>
                                                )}

                                                <p>${fieldCalculatedValue}</p>

                                                {/* <MinusCircleOutlined onClick={() => remove(name)} /> */}
                                            </div>
                                            <Form.Item
                                                {...restField}
                                                className="textarea"
                                                name={[name, "description"]}
                                            >
                                                <TextArea placeholder='Description' />
                                            </Form.Item>
                                        </>
                                    )
                                })}
                                <Form.Item>
                                    <Button
                                        block
                                        size='large'
                                        type='dashed'
                                        className='invoiceSubmitButton'
                                        onClick={() => handleSubmit(add, fields)}
                                        htmlType={formState ? "submit" : "button"}
                                        icon={<Image alt="plusOutlined" src={Icons.plusOutlined} />}
                                    >
                                        Add New Invoice Item
                                    </Button>
                                </Form.Item>
                            </React.Fragment>
                        )
                    }}
                </Form.List>
            </Form>
        </div>
    )
}

export default InvoiceListItemAddition