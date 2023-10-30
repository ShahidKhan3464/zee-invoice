"use client";

import Colors from '@/common/constants/color.constant';
import React, { useState, createContext, useContext } from 'react';
const AppContext = createContext();

const colors = [
    "#2B2B2B",
    "#444444",
    "#1A1A21",
    "#6183E4",
    "#0286FF",
    "#366AEF",
    "#9747FF",
    "#C69ED5",
    "#70756A",
    "#446043",
    "#56607C",
    "#AB5FB1",
    "#5F319A",
    "#E461C7",
    "#FFCC02",
    "#B2E461",
]

const AppProvider = ({ children }) => {
    const [paletteColors, setPaletteColors] = useState(colors)
    const [defaultColor, setDefaultColor] = useState(Colors.secondary)
    const [invoiceData, setInvoiceData] = useState({
        date: "",
        logo: "",
        type: "",
        items: [],
        dueDate: "",
        additionaNote: "",
        senderDetail: null,
        receiverDetail: null,
    })

    return <AppContext.Provider value={{
        invoiceData,
        defaultColor,
        paletteColors,
        setInvoiceData,
        setDefaultColor,
        setPaletteColors,
    }}
    >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }