
"use client";

import React from 'react'
// import moment from 'moment';
import { Document, Page, StyleSheet, View, Text, Image, Font } from '@react-pdf/renderer';

// Font.register({
//   family: 'Inter',
//   fonts: [
//     { src: `inter/Inter Web/Inter-Light.woff`, fontWeight: 'Normal' },
//     { src: `inter/Inter Web/Inter-Medium.woff`, fontWeight: 'Medium' },
//     { src: `inter/Inter Web/Inter-SemiBold.woff`, fontWeight: 'SemiBold' },
//     { src: `inter/Inter Web/Inter-Bold.woff`, fontWeight: 'Bold' },
//     { src: `inter/Inter Web/Inter-ExtraBold.woff`, fontWeight: 'ExtraBold' },
//   ]
// })

const PdfTemplate = ({ invoiceData }) => {
  const { imageUrl, invoiceType, senderDetail, receiverDetail, invoiceDate, invoiceDueDate, invoiceBuilderFormData, notes, defaultColor } = invoiceData
  // const formattedInvoiceDate = moment(invoiceDate).format("MMMM Do, YYYY")
  // const formattedInvoiceDueDate = moment(invoiceDueDate).format("MMMM Do, YYYY")

  // const styles = StyleSheet.create({
  //   page: {
  //     width: '600px',
  //     height: '400px',
  //     padding: '20px 40px',
  //     borderTop: `3px solid ${defaultColor}`
  //   },

  //   header: {
  //     display: 'flex',
  //     alignItems: 'center',
  //     flexDirection: 'row',
  //     backgroundColor: '#FFFFFF',
  //     justifyContent: 'space-between',

  //     logoBox: {
  //       height: '40px',
  //       width: '132px',

  //       image: {
  //         width: '100%',
  //         height: '100%',
  //         objectFit: 'contain',
  //       },
  //     },

  //     key: {
  //       fontSize: '10px',
  //       color: '#202020',
  //       fontFamily: 'Inter',
  //       fontStyle: 'normal',
  //       fontWeight: 'Medium',
  //     },
  //     value: {
  //       fontSize: '12px',
  //       color: '#4F4F4F',
  //       fontFamily: 'Inter',
  //       fontStyle: 'normal',
  //       fontWeight: 'Normal',
  //     }
  //   },

  //   section: {
  //     marginTop: '24px',
  //     topPart: {
  //       display: 'flex',
  //       alignItems: 'center',
  //       flexDirection: 'row',
  //       justifyContent: 'space-between',

  //       box: {
  //         width: '100%',
  //         height: '176px',
  //         maxWidth: '240px',
  //         borderRadius: '4px',
  //         padding: '11px 11px',
  //         background: '#FFFFFF',
  //         border: '1px solid #EEEEEE',

  //         dire: {
  //           fontSize: '14px',
  //           color: '#767676',
  //           fontFamily: 'Inter',
  //           fontStyle: 'normal',
  //           fontWeight: 'Medium',
  //           marginBottom: '14px',
  //         },
  //         company: {
  //           color: '#202020',
  //           fontSize: '12px',
  //           fontWeight: 'Bold',
  //           fontStyle: 'normal',
  //           fontFamily: 'Inter',
  //           marginBottom: '12px',
  //         },
  //         data: {
  //           fontSize: '12px',
  //           color: '#444444',
  //           fontFamily: 'Inter',
  //           fontStyle: 'normal',
  //           marginBottom: '4px',
  //           fontWeight: 'Normal',
  //         },
  //       },
  //     },

  //     datePart: {
  //       width: '100%',
  //       display: 'flex',
  //       margin: '20px 0',
  //       maxWidth: '427px',
  //       alignItems: 'center',
  //       flexDirection: 'row',
  //       justifyContent: 'space-between',

  //       date: {
  //         display: 'flex',
  //         alignItems: 'center',
  //         flexDirection: 'row',

  //         key: {
  //           fontSize: '10px',
  //           color: '#202020',
  //           fontFamily: 'Inter',
  //           fontStyle: 'normal',
  //           fontWeight: 'SemiBold',
  //         },
  //         value: {
  //           fontSize: '12px',
  //           color: '#4F4F4F',
  //           marginLeft: '10px',
  //           fontFamily: 'Inter',
  //           fontStyle: 'normal',
  //           fontWeight: 'Normal',
  //         }
  //       }
  //     },

  //     tables: {
  //       thead: {
  //         padding: '8px',
  //         display: 'flex',
  //         color: '#FFFFFF',
  //         fontSize: '12px',
  //         fontFamily: 'Inter',
  //         borderRadius: '2px',
  //         fontStyle: 'normal',
  //         flexDirection: 'row',
  //         fontWeight: 'SemiBold',
  //         justifyContent: 'space-between',
  //         backgroundColor: `${defaultColor}`,
  //       },

  //       tbody: {
  //         display: 'flex',
  //         padding: '0 8px',
  //         flexDirection: 'column',
  //         justifyContent: 'space-between',

  //         tr: {
  //           display: 'flex',
  //           padding: '8px 0',
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //           justifyContent: 'space-between',
  //           borderBottom: '1px solid #E0E0E0',

  //           td: {
  //             fontSize: '12px',
  //             color: '#202020',
  //             fontFamily: 'Inter',
  //             fontStyle: 'normal',
  //             fontWeight: 'Medium',
  //           }
  //         },
  //         item: {
  //           fontSize: '12px',
  //           color: '#202020',
  //           fontFamily: 'Inter',
  //           fontStyle: 'normal',
  //           marginBottom: '4px',
  //           fontWeight: 'SemiBold',

  //           desc: {
  //             fontSize: '10px',
  //             color: '#4F4F4F',
  //             fontWeight: 'Normal',
  //           }
  //         }
  //       },

  //       note: {
  //         fontSize: '10px',
  //         color: '#202020',
  //         marginTop: '10px',
  //         fontFamily: 'Inter',
  //         fontStyle: 'normal',
  //         fontWeight: 'Normal',
  //       }
  //     },
  //   },

  //   footer: {
  //     display: 'flex',
  //     marginTop: '80px',
  //     marginBottom: '20px',
  //     alignSelf: 'flex-end',

  //     summary: {
  //       width: '240px',
  //       height: '176px',
  //       borderRadius: '3px',
  //       background: '#FFFFFF',
  //       border: '1px solid #E0E0E0',

  //       heading: {
  //         height: '30px',
  //         display: 'flex',
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //         borderTopLeftRadius: '2px',
  //         borderTopRightRadius: '2px',
  //         backgroundColor: `${defaultColor}`,

  //         text: {
  //           fontSize: '12px',
  //           color: '#FFFFFF',
  //           fontWeight: 'Bold',
  //           fontFamily: 'Inter',
  //           fontStyle: 'normal',
  //         }
  //       },

  //       detail: {
  //         display: 'flex',
  //         alignItems: 'center',
  //         flexDirection: 'row',
  //         justifyContent: 'space-between',

  //         key: {
  //           fontSize: '12px',
  //           color: '#767676',
  //           fontFamily: 'Inter',
  //           fontStyle: 'normal',
  //           fontWeight: 'Normal',
  //         },
  //         value: {
  //           fontSize: '12px',
  //           color: '#202020',
  //           fontFamily: 'Inter',
  //           fontStyle: 'normal',
  //           fontWeight: 'Normal',
  //           marginRight: '10px',
  //         }
  //       }
  //     }
  //   }
  // })

  return (
    <Document>
      <Page>
        <Text>hiii</Text>
      </Page>
      {/* <Page style={styles.page} >
        <View style={styles.header}>
          <View style={styles.header.logoBox}>
            <Image style={styles.header.logoBox.image} source={imageUrl} alt='logo' />
          </View>
          <View>
            <Text style={styles.header.key}>Invoice No:
              <Text style={styles.header.value}>    001</Text>
            </Text>
            <Text style={styles.header.key}>Invoice Type:
              <Text style={styles.header.value}> {invoiceType}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.section.topPart}>
            <View style={styles.section.topPart.box}>
              <Text style={styles.section.topPart.box.dire}>From</Text>
              <Text style={styles.section.topPart.box.company}>ZAPTA Technologies</Text>
              <Text style={styles.section.topPart.box.data}>{senderDetail?.name}</Text>
              <Text style={styles.section.topPart.box.data}>{senderDetail?.address}</Text>
              <Text style={styles.section.topPart.box.data}>{senderDetail?.country}</Text>
              <View style={{ marginTop: '8px' }}>
                <Text style={styles.section.topPart.box.data}>{senderDetail?.email}</Text>
                <Text style={styles.section.topPart.box.data}>{senderDetail?.phone}</Text>
              </View>
            </View>
            <View style={styles.section.topPart.box}>
              <Text style={styles.section.topPart.box.dire}>To</Text>
              <Text style={styles.section.topPart.box.company}>ABC Company</Text>
              <Text style={styles.section.topPart.box.data}>{receiverDetail?.name}</Text>
              <Text style={styles.section.topPart.box.data}>{receiverDetail?.address}</Text>
              <Text style={styles.section.topPart.box.data}>{receiverDetail?.country}</Text>
              <View style={{ marginTop: '8px' }}>
                <Text style={styles.section.topPart.box.data}>{receiverDetail?.email}</Text>
                <Text style={styles.section.topPart.box.data}>{receiverDetail?.phone}</Text>
              </View>
            </View>
          </View>

          <View style={styles.section.datePart}>
            <View style={styles.section.datePart.date}>
              <Text style={styles.section.datePart.date.key}>Invoice Date:</Text>
              <Text style={styles.section.datePart.date.value}>{formattedInvoiceDate}</Text>
            </View>
            <View style={styles.section.datePart.date}>
              <Text style={styles.section.datePart.date.key}>Due Date:</Text>
              <Text style={styles.section.datePart.date.value}>{formattedInvoiceDueDate}</Text>
            </View>
          </View>

          <View style={styles.section.tables}>
            <View style={styles.section.tables.thead}>
              <View style={{ width: '45%' }}>
                <Text>Items</Text>
              </View>
              <View style={{ width: '18%' }} >
                <Text>QTY/HRS</Text>
              </View>
              <View style={{ width: '12%' }}>
                <Text>Rate</Text>
              </View>
              <View style={{ width: '12%' }}>
                <Text>Subtotal</Text>
              </View>
            </View>

            <View style={styles.section.tables.tbody}>
              {invoiceBuilderFormData?.map((elem, index) => {
                return (
                  <View key={index} style={styles.section.tables.tbody.tr}>
                    <View style={{ width: '35%' }}>
                      <Text style={styles.section.tables.tbody.item}>{elem.item}</Text>
                      <Text style={styles.section.tables.tbody.item.desc}>{elem.description} </Text>
                    </View>
                    <View style={styles.section.tables.tbody.tr.td}>
                      <Text>{elem.qty}</Text>
                    </View>
                    <View style={styles.section.tables.tbody.tr.td}>
                      <Text>${elem.rate}</Text>
                    </View>
                    <View style={styles.section.tables.tbody.tr.td}>
                      <Text>$0.00</Text>
                    </View>
                  </View>
                )
              })}
              <Text style={styles.section.tables.note}>Note: {notes}</Text>
            </View>
          </View>
        </View>

        <View break={invoiceBuilderFormData.length === 5 ? true : false} style={styles.footer}>
          <View style={styles.footer.summary}>
            <View style={styles.footer.summary.heading}>
              <Text style={styles.footer.summary.heading.text}>Invoice Summary</Text>
            </View>
            <View style={{ padding: '20px 12px' }}>
              <View style={styles.footer.summary.detail}>
                <Text style={styles.footer.summary.detail.key}>Subtotal</Text>
                <Text style={styles.footer.summary.detail.value}>USD
                  <Text style={{ fontWeight: 'semibold' }}>  100.00</Text>
                </Text>
              </View>
              <View style={{ marginTop: '10px', marginBottom: '24px', borderBottom: '0.5px solid #E0E0E0' }}></View>
              <View style={styles.footer.summary.detail}>
                <Text style={styles.footer.summary.detail.key}>Tax</Text>
                <Text style={styles.footer.summary.detail.value}>--</Text>
              </View>
              <View style={{ marginTop: '10px', marginBottom: '24px', borderBottom: '0.5px solid #E0E0E0' }}></View>
              <View style={styles.footer.summary.detail}>
                <Text style={styles.footer.summary.detail.key}>Total</Text>
                <Text style={styles.footer.summary.detail.value}>USD
                  <Text style={{ fontWeight: 'bold' }}>  350.00</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ borderBottom: '1px solid #E0E0E0' }}></View>
      </Page> */}
    </Document>
  )
}

export default React.memo(PdfTemplate)