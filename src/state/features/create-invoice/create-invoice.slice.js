import { createSlice } from "@reduxjs/toolkit";
import Colors from "@/common/constants/color.constant";

const paletteColors = [
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

const initialState = {
    invoiceData: {
        no: null,
        date: "",
        type: "",
        items: [],
        logo: null,
        dueDate: "",
        currency: 'USD',
        additionalNote: "",
        senderDetail: null,
        receiverDetail: null,
    },
    paletteColors,
    isInvoiceTax: true,
    editableField: null,
    isInvoiceDueDate: true,
    defaultColor: Colors.secondary
};

export const createInvoiceSlice = createSlice({
    name: "createInvoice",
    initialState,
    reducers: {
        setInvoiceNo: (state, action) => {
            state.invoiceData.no = action.payload;
        },
        setLogo: (state, action) => {
            state.invoiceData.logo = action.payload;
        },
        setType: (state, action) => {
            state.invoiceData.type = action.payload;
        },
        setSenderDetail: (state, action) => {
            console.log(action.payload)
            state.invoiceData.senderDetail = action.payload;
        },
        setReceiverDetail: (state, action) => {
            state.invoiceData.receiverDetail = action.payload;
        },
        setDate: (state, action) => {
            state.invoiceData.date = action.payload;
        },
        setDueDate: (state, action) => {
            state.invoiceData.dueDate = action.payload;
        },
        setAddItem: (state, action) => {
            const newItem = action.payload;
            state.invoiceData.items.push(newItem);
        },
        setUpdateItem: (state, action) => {
            const updatedItems = action.payload;
            state.invoiceData.items = updatedItems
        },
        setRemoveItem: (state, action) => {
            const itemId = action.payload;
            state.invoiceData.items = state.invoiceData.items.filter(item => item._id !== itemId);
        },
        setAdditionalNote: (state, action) => {
            state.invoiceData.additionalNote = action.payload;
        },
        setCurrency: (state, action) => {
            state.invoiceData.currency = action.payload;
        },
        setPaletteColors: (state, action) => {
            const newPaletteColors = action.payload;
            state.paletteColors = newPaletteColors;
        },
        setDefaultColor: (state, action) => {
            const selectedColor = action.payload;
            state.defaultColor = selectedColor;
        },
        setInvoiceTax: (state, action) => {
            state.isInvoiceTax = action.payload;
        },
        setInvoiceDueDate: (state, action) => {
            state.isInvoiceDueDate = action.payload;
        },
        setEditableField: (state, action) => {
            state.editableField = action.payload;
        },
    },
});

export const { setInvoiceNo, setLogo, setType, setSenderDetail, setReceiverDetail, setDate, setDueDate, setAddItem, setUpdateItem, setRemoveItem, setAdditionalNote, setCurrency, setPaletteColors, setDefaultColor, setInvoiceTax, setInvoiceDueDate, setEditableField } = createInvoiceSlice.actions;

export default createInvoiceSlice.reducer;