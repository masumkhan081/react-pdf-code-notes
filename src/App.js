import React from "react";
import {
  Page,
  Text,
  Image,
  View,
  Document,
  Svg,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import prImage from "./rsrc/masumkhan.png";
import Github from "./rsrc/icons/Github";

export default function App() {
  const styles = StyleSheet.create({
    viewer: {
      height: "700px",
      width: "500px",
    },
    doc: {
      backgroundColor: "#E4E4E4",
    },
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    leftSection: {
      paddingLeft: "8px",
      minWidth: "30%",
      backgroundColor: "#ced9e6",
    },
    rightSection: {
      minWidth: "70%",
      backgroundColor: "azure",
    },
  });

  return (
    <div className="bg-success">
      <PDFViewer className="w-100 h-100 vh-100">
        <Document size="A4" style={styles.doc}>
          <Page size="A4" style={styles.page}>
            <View style={styles.leftSection}>
              <Profile_And_Contacts
                call=" 01833347848"
                email=" masumkhan081@gmail.com"
                github=" masumkhan081"
                web=" masumk081.web.app"
                address=" Rd-6, Shaqhporan, Sylhet"
                linkedin=" /masumkhan"
              />
              <Personal_Skills
                list={[
                  "Problem solving ability",
                  "Understanding user requirements",
                  "Logical & structured thinking",
                  "Good at communication skill",
                  "",
                ]}
              />
              <Interest
                list={[
                  "Serverless architecture",
                  "Progressive web apps",
                  "API-first Development",
                  "Cryptography",
                  "Deep Learning",
                ]}
              />
            </View>
            <View style={styles.rightSection}>
              <Text>Section</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}
//

function Interest({ list }) {
  const styles = StyleSheet.create({
    parent: {
      marginTop: "20px",
    },
    perskill: {
      marginTop: "5px",
      fontSize: "11px",
      color: "blue",
      display: "flex",
      flexDirection: "column",
      rowGap: "4px",
    },
  });

  return (
    <div style={styles.parent}>
      <Text style={{ textAlign: "center" }}>Interest</Text>
      <View style={styles.perskill}>
        {list.map((item) => {
          return <Text>{item}</Text>;
        })}
      </View>
    </div>
  );
}

//

function Personal_Skills({ list }) {
  const styles = StyleSheet.create({
    parent: {
      marginTop: "20px",
    },
    perskill: {
      marginTop: "5px",
      fontSize: "11px",
      color: "blue",
      display: "flex",
      flexDirection: "column",
      rowGap: "4px",
    },
  });

  return (
    <div style={styles.parent}>
      <Text style={{ textAlign: "center" }}>Personal Skills</Text>
      <View style={styles.perskill}>
        {list.map((item) => {
          return <Text>{item}</Text>;
        })}
      </View>
    </div>
  );
}

//

function Profile_And_Contacts({ call, email, github, web, address, linkedin }) {
  const styles = StyleSheet.create({
    container_contacts: {
      marginTop: "15px",
      display: "flex",
      flexDirection: "column",
      rowGap: "2px",
    },
    contact: {
      fontSize: "10px",
      fontWeight: "normal",
    },
    badge: {
      textDecoration: "underline",
      fontSize: "11px",
      fontWeight: "bold",
      margin: "5px",
    },
  });

  return (
    <div>
      <Image src={prImage} />

      <div style={styles.container_contacts}>
        <Text style={{ textAlign: "center" }}>Contacts</Text>
        <Text style={styles.contact}>
          <Text style={styles.badge}>Call:</Text>
          {call}
        </Text>
        <Text style={styles.contact}>
          <Text style={styles.badge}>Email:</Text>
          {email}
        </Text>
        <Text style={styles.contact}>
          <Text style={styles.badge}>Web:</Text>
          {web}
        </Text>
        <Text style={styles.contact}>
          <Text style={styles.badge}>Linkedin:</Text>
          {linkedin}
        </Text>
        <Text style={styles.contact}>
          <Text style={styles.badge}>Address:</Text>
          {address}
        </Text>
      </div>
    </div>
  );
}
