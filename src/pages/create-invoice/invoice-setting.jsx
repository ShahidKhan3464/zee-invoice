"use client";

import React from 'react';
import Image from 'next/image';
import { Icons } from '@/common/assets';
import { Select, Switch, ColorPicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { StyledInvoiceSetting, StyledColorCheckbox } from './style';
import { setCurrency, setDefaultColor, setInvoiceDueDate, setInvoiceTax } from '@/state/features/create-invoice/create-invoice.slice';

const InvoiceSetting = () => {
    const dispatch = useDispatch()
    const { isInvoiceTax, defaultColor, paletteColors } = useSelector(state => state.createInvoice)

    const customTriggerContent = () => {
        return (
            <div className='builder_setting_colorPicker_panelHeader'>
                <div className='left'>
                    <Image
                        width={24}
                        height={24}
                        alt='circleColors'
                        src={Icons.circleColors}
                    />
                    <p>Custom Color</p>
                </div>
                <div className='right'>
                    <Image
                        width={15}
                        height={15}
                        alt='downArrow'
                        src={Icons.downArrow}
                    />
                </div>
            </div>
        )
    }

    return (
        <StyledInvoiceSetting>
            <div className='builder_setting'>
                <div className='builder_setting_title'>
                    <h3>Invoice Settings</h3>
                </div>
                <div className='builder_setting_defaultColors'>
                    <h4>Color</h4>
                    <div>
                        {paletteColors.map((color, i) => {
                            return (
                                <div
                                    key={i}
                                    className='invoice_builder_page_setting_defaultColors_color'
                                >
                                    <StyledColorCheckbox
                                        color={color}
                                    >
                                        <input
                                            id={i}
                                            value='0'
                                            type='radio'
                                            className='checkboxInput'
                                            checked={defaultColor === color}
                                            onChange={() => dispatch(setDefaultColor(color))}
                                        />
                                        <label htmlFor={i}></label>
                                    </StyledColorCheckbox>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='builder_setting_colorPicker'>
                    <ColorPicker
                        arrow={false}
                        value={defaultColor}
                        getPopupContainer={(trigger) => trigger.parentNode}
                        onChangeComplete={(color) => dispatch(setDefaultColor(`#${color.toHex()}`))}
                    >
                        {customTriggerContent()}
                    </ColorPicker>
                </div>
                <div className='builder_setting_currency'>
                    <p>Currency</p>
                    <Select
                        defaultValue="$ USD"
                        style={{ width: 120 }}
                        onChange={(value) => dispatch(setCurrency(value))}
                        suffixIcon={
                            <Image
                                width={15}
                                height={15}
                                alt='downArrow'
                                src={Icons.downArrow}
                            />
                        }
                        options={[
                            {
                                value: 'USD',
                                label: '$ USD',
                            },
                            {
                                value: 'Euro',
                                label: '€ Euro',
                            },
                            {
                                value: 'Pound',
                                label: '£ Pound',
                            },
                        ]}
                    />
                </div>
                <div className='builder_setting_invoiceDetail'>
                    <p>Invoice Detail</p>
                    <div className='builder_setting_invoiceDetail_switch'>
                        <p>Due Date</p>
                        <Switch
                            defaultChecked
                            onChange={(value) => dispatch(setInvoiceDueDate(value))}
                        />
                    </div>
                    <div className='builder_setting_invoiceDetail_switch'>
                        <p>Tax</p>
                        <Switch
                            defaultChecked
                            checked={isInvoiceTax}
                            onChange={(value) => dispatch(setInvoiceTax(value))}
                        />
                    </div>
                    {/* <div className='builder_setting_invoiceDetail_switch'>
                        <p>Shipping Detail</p>
                        <Switch />
                    </div> */}
                </div>
            </div>
        </StyledInvoiceSetting>
    )
}

export default InvoiceSetting