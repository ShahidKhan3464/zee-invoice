"use client";

import React from 'react';
import { Images } from '@/common/assets';
import { Document, Page, StyleSheet, View, Text, Image, Font } from '@react-pdf/renderer';
const waterMarkLogo = Images.waterMarkLogo.default.src

Font.register({
  family: 'Inter',
  fonts: [
    { src: `Inter/Inter-Bold.woff`, fontWeight: 'Bold' },
    { src: `Inter/Inter-Thin.woff`, fontWeight: 'Normal' },
    { src: `Inter/Inter-Medium.woff`, fontWeight: 'Medium' },
    { src: `Inter/Inter-SemiBold.woff`, fontWeight: 'SemiBold' },
    { src: `Inter/Inter-ExtraBold.woff`, fontWeight: 'ExtraBold' },
  ]
})

const PdfTemplate = ({ isToken, invoiceData, defaultColor, isInvoiceTax }) => {
  const { no, logo, type, senderDetail, receiverDetail, date, dueDate, items, additionalNote, currency } = invoiceData

  const styles = StyleSheet.create({
    page: {
      width: '600px',
      height: '400px',
      padding: '15px 40px',
      borderTop: `3px solid ${defaultColor}`
    },

    waterMark: {
      top: '50%',
      left: '50%',
      width: '200px',
      height: '75px',
      position: 'absolute',
      transform: 'translate(-50%, -50%)',

      logo: {
        width: '100%',
        objectFit: 'contain'
      }
    },

    header: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      justifyContent: 'space-between',

      logoBox: {
        width: '60px',
        height: '60px',

        image: {
          objectFit: 'cover',
        },
      },

      key: {
        fontSize: '8px',
        color: '#202020',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'Medium',
      },
      value: {
        fontSize: '10px',
        color: '#4F4F4F',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'Normal',
      }
    },

    section: {
      marginTop: '24px',
      topPart: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

        box: {
          width: '100%',
          height: '150px',
          maxWidth: '240px',
          borderRadius: '4px',
          padding: '11px 11px',
          background: '#FFFFFF',
          border: '1px solid #EEEEEE',

          dire: {
            fontSize: '12px',
            color: '#767676',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 'Normal',
            marginBottom: '14px',
          },
          name: {
            color: '#202020',
            fontSize: '10px',
            fontStyle: 'normal',
            fontFamily: 'Inter',
            fontWeight: 'Medium',
            marginBottom: '12px',
          },
          data: {
            fontSize: '9px',
            color: '#444444',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            marginBottom: '4px',
            fontWeight: 'Normal',
          },
        },
      },

      datePart: {
        width: '100%',
        display: 'flex',
        margin: '20px 0',
        maxWidth: '427px',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

        date: {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',

          key: {
            fontSize: '9px',
            color: '#202020',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 'SemiBold',
          },
          value: {
            fontSize: '10px',
            color: '#4F4F4F',
            marginLeft: '10px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 'Normal',
          }
        }
      },

      tables: {
        thead: {
          padding: '8px',
          display: 'flex',
          color: '#FFFFFF',
          fontSize: '9px',
          fontFamily: 'Inter',
          borderRadius: '2px',
          fontStyle: 'normal',
          flexDirection: 'row',
          fontWeight: 'Medium',
          justifyContent: 'space-between',
          backgroundColor: `${defaultColor}`,
        },

        tbody: {
          display: 'flex',
          padding: '0 8px',
          flexDirection: 'column',
          justifyContent: 'space-between',

          tr: {
            display: 'flex',
            padding: '4px 0 0',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',

            td: {
              fontSize: '9px',
              color: '#202020',
              textAlign: 'center',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 'Medium',
            }
          },
          item: {
            fontSize: '9px',
            color: '#202020',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 'Medium',

            desc: {
              fontSize: '8px',
              padding: '4px 0',
              color: '#4F4F4F',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 'Normal',
              borderBottom: '1px solid #E0E0E0',
            }
          }
        },

        note: {
          fontSize: '7px',
          color: '#202020',
          marginTop: '8px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 'Normal',
        }
      },
    },

    footer: {
      display: 'flex',
      marginTop: '80px',
      marginBottom: '20px',
      alignSelf: 'flex-end',

      summary: {
        width: '240px',
        height: '150px',
        borderRadius: '3px',
        background: '#FFFFFF',
        border: '1px solid #E0E0E0',

        heading: {
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderTopLeftRadius: '2px',
          borderTopRightRadius: '2px',
          backgroundColor: `${defaultColor}`,

          text: {
            fontSize: '10px',
            color: '#FFFFFF',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 'SemiBold',
          }
        },

        detail: {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',

          key: {
            fontSize: '10px',
            color: '#767676',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 'Normal',
          },
          value: {
            fontSize: '10px',
            color: '#202020',
            marginRight: '10px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 'Normal',
          }
        }
      }
    }
  })

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.waterMark}>
          <Image
            alt='water-mark'
            source={waterMarkLogo}
            style={styles.waterMark.logo}
          />
        </View>

        <View style={styles.header}>
          {logo && (
            <View style={styles.header.logoBox}>
              <Image style={styles.header.logoBox.image} source={logo} alt='logo' />
            </View>
          )}
          <View style={{ marginLeft: 'auto' }}>
            <Text style={styles.header.key}>Invoice No:
              <Text style={styles.header.value}>     {no}</Text>
            </Text>
            <Text style={styles.header.key}>Invoice Type:
              <Text style={styles.header.value}>  {type.charAt(0).toUpperCase() + type.slice(1)}</Text>
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.section.topPart}>
            <View style={styles.section.topPart.box}>
              <Text style={styles.section.topPart.box.dire}>From</Text>
              <Text style={styles.section.topPart.box.name}>{senderDetail?.name}</Text>
              <Text style={styles.section.topPart.box.data}>{senderDetail?.address}</Text>
              <Text style={styles.section.topPart.box.data}>{senderDetail?.country}</Text>
              <View style={{ marginTop: '8px' }}>
                <Text style={styles.section.topPart.box.data}>{senderDetail?.email}</Text>
                <Text style={styles.section.topPart.box.data}>{senderDetail?.phone}</Text>
              </View>
            </View>
            <View style={styles.section.topPart.box}>
              <Text style={styles.section.topPart.box.dire}>To</Text>
              <Text style={styles.section.topPart.box.name}>{receiverDetail?.name}</Text>
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
              <Text style={styles.section.datePart.date.value}>{date}</Text>
            </View>

            {dueDate && (
              <View style={styles.section.datePart.date}>
                <Text style={styles.section.datePart.date.key}>Due Date:</Text>
                <Text style={styles.section.datePart.date.value}>{dueDate}</Text>
              </View>
            )}
          </View>

          <View style={styles.section.tables}>
            <View style={styles.section.tables.thead}>
              <View style={{ width: '35%' }}>
                <Text>Items</Text>
              </View>
              <View>
                <Text>QTY/HRS</Text>
              </View>
              <View>
                <Text>Rate</Text>
              </View>
              {isInvoiceTax && (
                <View>
                  <Text>Tax</Text>
                </View>
              )}
              <View>
                <Text>Subtotal</Text>
              </View>
            </View>

            <View style={styles.section.tables.tbody}>
              {items?.map((elem, index) => {
                return (
                  <>
                    <View key={index} style={styles.section.tables.tbody.tr}>
                      <View style={{ width: '35%' }}>
                        <Text style={styles.section.tables.tbody.item}>{elem.item}</Text>
                      </View>
                      <View style={styles.section.tables.tbody.tr.td}>
                        <Text>{elem.qty}</Text>
                      </View>
                      <View style={styles.section.tables.tbody.tr.td}>
                        <Text>{elem.rate}</Text>
                      </View>
                      {isInvoiceTax && (
                        <View style={styles.section.tables.tbody.tr.td}>
                          <Text>{elem.tax}</Text>
                        </View>
                      )}
                      <View style={styles.section.tables.tbody.tr.td}>
                        <Text>$0.00</Text>
                      </View>
                    </View>
                    <Text style={styles.section.tables.tbody.item.desc}>{elem.description} </Text>
                  </>
                )
              })}
              <Text style={styles.section.tables.note}>Note: {additionalNote}</Text>
            </View>
          </View>
        </View>

        <View break={items.length > 5 ? true : false} style={styles.footer}>
          <View style={styles.footer.summary}>
            <View style={styles.footer.summary.heading}>
              <Text style={styles.footer.summary.heading.text}>Invoice Summary</Text>
            </View>
            <View style={{ padding: '20px 12px' }}>
              <View style={styles.footer.summary.detail}>
                <Text style={styles.footer.summary.detail.key}>Subtotal</Text>
                <Text style={styles.footer.summary.detail.value}>{currency}
                  <Text style={{ fontWeight: 'semibold' }}>  100.00</Text>
                </Text>
              </View>
              <View style={{ margin: '10px 0', borderBottom: '0.5px solid #E0E0E0' }}></View>
              <View style={styles.footer.summary.detail}>
                <Text style={styles.footer.summary.detail.key}>Tax</Text>
                <Text style={styles.footer.summary.detail.value}>--</Text>
              </View>
              <View style={{ margin: '10px 0', borderBottom: '0.5px solid #E0E0E0' }}></View>
              <View style={styles.footer.summary.detail}>
                <Text style={styles.footer.summary.detail.key}>Total</Text>
                <Text style={styles.footer.summary.detail.value}>{currency}
                  <Text style={{ fontWeight: 'semibold' }}>  350.00</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ borderBottom: '1px solid #E0E0E0' }}></View>
      </Page>
    </Document>
  )
}

export default PdfTemplate