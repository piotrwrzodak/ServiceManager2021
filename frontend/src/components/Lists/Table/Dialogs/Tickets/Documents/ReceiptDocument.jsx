import { Document, Image, Page, Text, View } from '@react-pdf/renderer';
import React from 'react';
import logo from './logo.png';
import { styles } from './styles';

const ReceiptDocument = ({ ticket }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.companyInfo}>
          <View style={[styles.section, { marginRight: 25 }]}>
            <Image src={logo} style={styles.logo} />
          </View>
          <View style={[styles.section, { marginLeft: 25 }]}>
            <Text style={styles.fontMd}>Napraw Mnie</Text>
            <Text style={styles.fontMd}>Grunwaldzka 165b/4a</Text>
            <Text style={styles.fontMd}>60-322 Poznań</Text>
            <Text style={styles.fontMd}>726-196-725</Text>
          </View>
        </View>
        <View style={styles.horizontalLine} />
        <View style={[styles.text, { padding: 2 }]}>
          <Text style={[styles.fontMd, styles.textBold]}>
            Podwierdzenie przyjęcia urządzenia w serwisie
          </Text>
          <Text style={[styles.fontLg, styles.textBold, { padding: 4 }]}>
            RMA - {ticket.rma}
          </Text>
          <Text style={[styles.fontMd, styles.textBold]}>
            {new Date(ticket.beginDate).toLocaleDateString('pl')}
          </Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.clientData}>
          <View style={styles.leftDataFields}>
            <Text style={[styles.fontSm, styles.textBold, { padding: 3 }]}>
              Dane klienta:
            </Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>
              Imię i nazwisko:
            </Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>Telefon:</Text>
          </View>
          <View style={styles.rightDataValues}>
            <Text style={[styles.fontSm, styles.invisible, { padding: 3 }]}>
              .
            </Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>
              {ticket.name} {ticket.surname}
            </Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>
              {ticket.phoneNumber}
            </Text>
          </View>
        </View>
        <View style={styles.clientData}>
          <View style={styles.leftDataFields}>
            <Text style={[styles.fontSm, styles.textBold, { padding: 3 }]}>
              Dane urządzenia:
            </Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>Rodzaj:</Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>Producent:</Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>Model:</Text>
          </View>
          <View style={styles.rightDataValues}>
            <Text style={[styles.fontSm, styles.invisible, { padding: 3 }]}>
              .
            </Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>{ticket.type}</Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>{ticket.brand}</Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>{ticket.model}</Text>
          </View>
        </View>
        <View style={styles.clientData}>
          <View style={styles.leftDataFields}>
            <Text
              style={[
                styles.fontSm,
                styles.textBold,
                styles.descriptionText,
                { padding: 3 },
              ]}
            >
              Opis zgłoszenia:
            </Text>
          </View>
          <View
            style={[styles.rightDataValues, styles.textBox, { height: 115 }]}
          >
            <Text style={[styles.fontMd]}>{ticket.glitch}</Text>
          </View>
        </View>

        <View
          style={[
            styles.listText,
            { marginTop: 25, textDecoration: 'underline' },
          ]}
        >
          <Text style={[styles.textBold, styles.fontBigMd]}>
            Przewidywany koszt naprawy: {ticket.repairCost} zł
          </Text>
        </View>

        <View style={styles.listText}>
          <Text style={[styles.fontSm, { marginTop: 20 }]}>
            1. Serwis powiadomi telefonicznie, SMS-owo i/lub mailowo klienta o
            możliwości odbioru sprzętu.
          </Text>
        </View>
        <View style={styles.listText}>
          <Text style={styles.fontSm}>
            2. Za sprzęt pozostawiony po napraiwe w serwisie dłużej niż 90 dni
            zostanie nalizczona opłata za magazynowanie sprzętu w {'\n'}
            wysokości 5 zł / dzień.
          </Text>
        </View>
        <View style={styles.listText}>
          <Text style={styles.fontSm}>
            3. Przyjmuję do wiadomości, że serwis Napraw Mnie nie ponosi
            odpowiedzialności za ewentualną utratę danych z naprawionego {'\n'}
            urządzenia. Serwis Napraw Mnie nie ponosi również odpowiedzialności
            za wady ukryte urządzenia.
          </Text>
        </View>

        <View style={styles.listText}>
          <Text style={styles.fontSm}>
            4. Podaję dane osobowe dobrowlonie i oświadczam, że są one zgodne z
            prawdą. Jednocześnie wyrażam zgodę na przetważanie {'\n'}
            moich danych osobowych przez Administratora danych osobowych, którym
            jest Napraw Mnie w Poznaniu, ul. Grunwaldzka 165b/4a.
          </Text>
        </View>
        <View style={styles.listText}>
          <Text style={styles.fontSm}>
            5. Zapoznałem/am się z treścią klauzuli informacyjnej, w tym z
            informacją o celu i sposobach przetwarzania danych osobowych {'\n'}
            oraz prawie dostępu do treści swoich dancyh i prawie ich
            poprawiania.
          </Text>
        </View>

        <View style={[styles.signatures, { marginTop: 85 }]}>
          <Text style={[styles.sign, styles.fontSm, { width: '30%' }]}>
            Podpis klienta
          </Text>
          <Text style={[styles.sign, styles.fontSm, { width: '20%' }]}>
            Pieczątka serwisu
          </Text>
          <Text style={[styles.sign, styles.fontSm, { width: '30%' }]}>
            Podpis serwisanta
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default ReceiptDocument;
